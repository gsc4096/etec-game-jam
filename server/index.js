import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"
import mysql from 'mysql2/promise';
import { readFile } from 'fs/promises';
import path from 'path';

// database init
const SQL_FILE_PATH = path.join(process.cwd(), 'db.sql');
async function setupDatabase() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
    });
    try {
        const sql = await readFile(SQL_FILE_PATH, 'utf8');
        const queries = sql.split(';').map(q => q.trim()).filter(q => q.length > 0);
        for (const query of queries) {
            await connection.query(query);
        }
        const [rows] = await connection.query(`SELECT * FROM jogo`);
        console.log('Query result:', rows);
    } catch (error) {
        console.error('Database setup error:', error);
    } finally {
        await connection.end();
    }
}
async function main() {
    await setupDatabase();
}
main().catch(console.error);

// server init
const app = express()
app.use(express.json())
app.use(cors())
app.use("/", userRoutes)
app.listen(8800)