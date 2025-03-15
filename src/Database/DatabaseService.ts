import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { join } from 'path';
import { cwd } from 'process';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
    private db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

    async onModuleInit() {
        try {
            const dbPath = join(cwd(), process.env.NODE_ENV === 'production' ? 'dist' : 'src', 'Database', 'database.sqlite');

            this.db = await open<sqlite3.Database, sqlite3.Statement>({
                filename: dbPath,
                driver: sqlite3.Database,
            });

        } catch (error) {
            console.error('Erro ao conectar ao banco de dados:', (error as Error).message);
        }
    }

    async select<T>(query: string, params: any[] = []): Promise<T[]> {
        if (!this.db) throw new Error('Banco de dados não inicializado');
        const result = await this.db.all<T>(query, params);
        return Array.isArray(result) ? result : [];
    }

    async execute(query: string, params: any[] = []): Promise<void> {
        if (!this.db) throw new Error('Banco de dados não inicializado');
        try {
            await this.db.run(query, params);
        } catch (error) {
            console.error('Erro ao executar query:', (error as Error).message);
            throw error;
        }
    }

    async insert(query: string, params: any[] = []): Promise<number> {
        if (!this.db) throw new Error('Banco de dados não inicializado');
        try {
            const result = await this.db.run(query, params);
            return result?.lastID ?? 0;
        } catch (error) {
            console.error('Erro ao inserir dados:', (error as Error).message);
            throw error;
        }
    }

    async delete(query: string, params: any[] = []): Promise<number> {
        if (!this.db) throw new Error('Banco de dados não inicializado');
        try {
            const result = await this.db.run(query, params);
            return result?.changes ?? 0;
        } catch (error) {
            console.error('Erro ao deletar dados:', (error as Error).message);
            throw error;
        }
    }

    async onModuleDestroy() {
        if (!this.db) return;
        try {
            await this.db.close();
            console.log('Banco de dados desconectado!');
        } catch (error) {
            console.error('Erro ao desconectar do banco de dados:', (error as Error).message);
        }
    }
}
