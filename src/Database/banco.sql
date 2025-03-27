CREATE TABLE IF NOT EXISTS plans (
    id INTEGER PRIMARY KEY,
    code BIGINT NOT NULL UNIQUE,
    monthlyCost DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL,
    description VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY,
    code BIGINT NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS subscriptions (
    id INTEGER PRIMARY KEY,
    code BIGINT NOT NULL UNIQUE,
    codePlan BIGINT NOT NULL,
    codeCustomer BIGINT NOT NULL,
    description TEXT NOT NULL,
    finalCost DECIMAL(10, 2) NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    status TEXT CHECK (status IN ('ACTIVE', 'INACTIVE', 'EXPIRED', 'SUSPENDED', 'CANCELED', 'TRIAL')) NOT NULL,
    dateLastPayment TEXT DEFAULT NULL,
    valorPago DECIMAL(10,2) NULL,
    FOREIGN KEY (codePlan) REFERENCES plans(code),
    FOREIGN KEY (codeCustomer) REFERENCES customers(code)
);

INSERT INTO customers (code, name, email) VALUES
(1001, 'João Silva', 'joao.silva@email.com'),
(1002, 'Maria Oliveira', 'maria.oliveira@email.com'),
(1003, 'Carlos Santos', 'carlos.santos@email.com'),
(1004, 'Ana Souza', 'ana.souza@email.com'),
(1005, 'Pedro Lima', 'pedro.lima@email.com'),
(1006, 'Fernanda Costa', 'fernanda.costa@email.com'),
(1007, 'Ricardo Pereira', 'ricardo.pereira@email.com'),
(1008, 'Juliana Mendes', 'juliana.mendes@email.com'),
(1009, 'André Rocha', 'andre.rocha@email.com'),
(1010, 'Camila Barbosa', 'camila.barbosa@email.com');

INSERT INTO plans (code, monthlyCost, date, description) VALUES
(2001, 49.90, '2024-01-01', 'Plano Básico'),
(2002, 79.90, '2024-01-01', 'Plano Padrão'),
(2003, 99.90, '2024-01-01', 'Plano Premium'),
(2004, 149.90, '2024-01-01', 'Plano Empresarial'),
(2005, 199.90, '2024-01-01', 'Plano Ultra');

INSERT INTO subscriptions (code, codePlan, codeCustomer, description, finalCost, startDate, endDate, status) VALUES
(3001, 2001, 1001, 'Descrição padrão.', 20.99, '2024-02-01', '2025-02-01', 'ACTIVE'),
(3002, 2002, 1003, 'Descrição padrão.', 20.99, '2024-02-01', '2025-02-01', 'ACTIVE'),
(3003, 2003, 1005, 'Descrição padrão.', 20.99, '2024-02-01', '2025-02-01', 'INACTIVE'),
(3004, 2004, 1007, 'Descrição padrão.', 20.99, '2024-02-01', '2025-02-01', 'SUSPENDED'),
(3005, 2005, 1009, 'Descrição padrão.', 20.99, '2024-02-01', '2025-02-01', 'CANCELED');
