import * as fs from 'fs';
import * as sqlite3 from 'sqlite3';
import * as path from 'path';

const db = new sqlite3.Database(path.resolve(__dirname, 'database.sqlite'), (err) => {
    if (err) {
        console.error('Erro ao conectar ao SQLite:', err.message);
        process.exit(1);
    }
});

const seedDatabase = () => {
    const sqlPath = path.resolve(__dirname, 'banco.sql');
    const sql = fs.readFileSync(sqlPath, 'utf-8');

    db.exec(sql, (err) => {
        if (err) {
            console.error('Erro ao executar script SQL:', err.message);
        } else {
            console.log('Banco de dados inicializado com sucesso!');
        }
        db.close((closeErr) => {
            if (closeErr) {
                console.error('Erro ao fechar a conexão com o banco:', closeErr.message);
            } else {
                console.log('Conexão com o banco de dados encerrada.');
            }
        });
    });
};

seedDatabase();
