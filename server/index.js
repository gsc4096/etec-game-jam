// index.js
import axios from 'axios';
import mysql from 'mysql2/promise';
import { readFile } from 'fs/promises';
import path from 'path';

const DATABASE_NAME = 'example_db';
const SQL_FILE_PATH = path.join(process.cwd(), 'db.sql');

// Function to create a MySQL connection
async function createConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
    });
}

// Function to create a database and table, then insert data
async function setupDatabase() {
    const connection = await createConnection();

    try {
        // Drop the database if it exists
        await connection.query(`DROP DATABASE IF EXISTS \`${DATABASE_NAME}\``);
        
        // Create the database
        await connection.query(`CREATE DATABASE \`${DATABASE_NAME}\``);
        await connection.query(`USE \`${DATABASE_NAME}\``);
        
        // Read and execute SQL commands from the file
        const sql = await readFile(SQL_FILE_PATH, 'utf8');
        const queries = sql.split(';').map(q => q.trim()).filter(q => q.length > 0);

        for (const query of queries) {
            await connection.query(query);
        }

        // Insert some data
        /*const [result] = await connection.query(`
            INSERT INTO example_table (name, value) 
            VALUES ('Sample Name', 123)
        `);

        console.log('Data inserted:', result);*/

        // Query the data
        const [rows] = await connection.query(`SELECT * FROM Orders`);
        console.log('Query result:', rows);
        
    } catch (error) {
        console.error('Database setup error:', error);
    } finally {
        await connection.end();
    }
}

// Function to make an HTTP request with axios
async function makeHttpRequest() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('HTTP Request Response:', response.data);
    } catch (error) {
        console.error('Error making HTTP request:', error);
    }
}

// Main function to run the script
async function main() {
    await setupDatabase();
    await makeHttpRequest();
}

// Run the main function
main().catch(console.error);
