-- Create a database
CREATE DATABASE IF NOT EXISTS ECommerceDB;
USE ECommerceDB;

-- Create Users table
CREATE TABLE IF NOT EXISTS Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    PasswordHash CHAR(64) NOT NULL,  -- Assuming SHA-256 hash
    Email VARCHAR(100) NOT NULL UNIQUE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LastLogin TIMESTAMP NULL
);

-- Create Categories table
CREATE TABLE IF NOT EXISTS Categories (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL UNIQUE
);

-- Create Products table
CREATE TABLE IF NOT EXISTS Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    StockQuantity INT DEFAULT 0,
    CategoryID INT,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

-- Create Orders table
CREATE TABLE IF NOT EXISTS Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    OrderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create OrderDetails table
CREATE TABLE IF NOT EXISTS OrderDetails (
    OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT NOT NULL,
    PriceAtOrder DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Create Reviews table
CREATE TABLE IF NOT EXISTS Reviews (
    ReviewID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    ProductID INT,
    Rating TINYINT CHECK (Rating BETWEEN 1 AND 5),
    Comment TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Insert some initial data into Categories
INSERT INTO Categories (CategoryName) VALUES ('Electronics'), ('Books'), ('Clothing');

-- Insert some initial data into Products
INSERT INTO Products (ProductName, Description, Price, StockQuantity, CategoryID) VALUES 
('Smartphone', 'Latest model with advanced features', 699.99, 50, 1),
('Laptop', 'High-performance laptop for professionals', 1199.99, 30, 1),
('Science Fiction Novel', 'Bestselling science fiction novel', 19.99, 100, 2),
('Graphic T-Shirt', 'Stylish graphic tee', 15.99, 200, 3);

-- Insert a sample user
INSERT INTO Users (Username, PasswordHash, Email) VALUES 
('john_doe', SHA2('password123', 256), 'john.doe@example.com');

-- Insert a sample order
INSERT INTO Orders (UserID, Status) VALUES 
((SELECT UserID FROM Users WHERE Username = 'john_doe'), 'Pending');

-- Insert details for the sample order
INSERT INTO OrderDetails (OrderID, ProductID, Quantity, PriceAtOrder) VALUES 
((SELECT OrderID FROM Orders WHERE UserID = (SELECT UserID FROM Users WHERE Username = 'john_doe')), 
 (SELECT ProductID FROM Products WHERE ProductName = 'Smartphone'), 1, 699.99);

-- Insert a sample review
INSERT INTO Reviews (UserID, ProductID, Rating, Comment) VALUES 
((SELECT UserID FROM Users WHERE Username = 'john_doe'), 
 (SELECT ProductID FROM Products WHERE ProductName = 'Smartphone'), 5, 'Amazing phone with great features!');

-- Query to fetch all products with their categories
SELECT p.ProductName, p.Description, p.Price, c.CategoryName
FROM Products p
JOIN Categories c ON p.CategoryID = c.CategoryID;

-- Query to fetch all orders for a specific user
SELECT o.OrderID, o.OrderDate, o.Status, od.ProductID, p.ProductName, od.Quantity, od.PriceAtOrder
FROM Orders o
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
WHERE o.UserID = (SELECT UserID FROM Users WHERE Username = 'john_doe');
