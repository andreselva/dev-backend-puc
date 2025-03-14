CREATE TABLE IF NOT EXISTS plans (
    id INTEGER PRIMARY KEY,
    code BIGINT NOT NULL,
    monthlyCost DECIMAL(10,2) NOT NULL,
    date DATE,
    description VARCHAR(50),
    dateLastPayment DATETIME
);

CREATE TABLE IF NOT EXISTS subscriptions (
    id INTEGER PRIMARY KEY,
    code BIGINT NOT NULL,
    codePlan BIGINT NOT NULL,
    codeCustomer BIGINT NOT NULL,
    startDate DATE,
    endDate DATE,
    status TEXT CHECK (status IN ('ACTIVE', 'INACTIVE', 'EXPIRED', 'SUSPENDED', 'CANCELED', 'TRIAL')) NOT NULL,
    paymentMethod TEXT CHECK (paymentMethod IN ('credit_card', 'pix', 'debit_card', 'boleto')) NOT NULL
);

CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY,
    code BIGINT NOT NULL,
    name VARCHAR(50),
    email VARCHAR(50)
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

INSERT INTO plans (code, monthlyCost, date, description, dateLastPayment) VALUES
(2001, 49.90, '2024-01-01', 'Plano Básico', NULL),
(2002, 79.90, '2024-01-01', 'Plano Padrão', NULL),
(2003, 99.90, '2024-01-01', 'Plano Premium', NULL),
(2004, 149.90, '2024-01-01', 'Plano Empresarial', NULL),
(2005, 199.90, '2024-01-01', 'Plano Ultra', NULL);

INSERT INTO subscriptions (code, codePlan, codeCustomer, startDate, endDate, status, paymentMethod) VALUES
(3001, 2001, 1001, '2024-02-01', '2025-02-01', 'ACTIVE', 'credit_card'),
(3002, 2002, 1003, '2024-02-05', '2025-02-05', 'ACTIVE', 'pix'),
(3003, 2003, 1005, '2024-03-01', '2025-03-01', 'INACTIVE', 'boleto'),
(3004, 2004, 1007, '2024-03-10', '2025-03-10', 'SUSPENDED', 'debit_card'),
(3005, 2005, 1009, '2024-04-01', '2025-04-01', 'CANCELED', 'credit_card');


