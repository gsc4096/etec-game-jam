import mysql from 'mysql2/promise';
import { readFile } from 'fs/promises';
import path from 'path';

const SQL_FILE_PATH = path.join(process.cwd(), 'db.sql');

async function createConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
    });
}

async function setupDatabase() {
    const connection = await createConnection();

    try {
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