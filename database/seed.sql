-- Example bcrypt-hashed passwords for development
-- Hashes represent "password123" (DO NOT use in production)
INSERT INTO users (name, email, password, role) VALUES 
('Admin User', 'admin@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'admin'),
('John Doe', 'john@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'customer'),
('Sarah Driver', 'sarah.driver@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'driver'),
('Tony Customer', 'tony.customer@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'customer');

-- ✅ Test Customers
INSERT INTO users (name, email, password, role) VALUES
('Alice Johnson', 'alice.johnson@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'customer'),
('Bob Smith', 'bob.smith@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'customer'),
('Clara Lee', 'clara.lee@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'customer'),
('David Kim', 'david.kim@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'customer'),
('Emma Patel', 'emma.patel@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'customer');

-- ✅ Test Drivers
INSERT INTO users (name, email, password, role) VALUES
('Frank Driver', 'frank.driver@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'driver'),
('Grace Wheels', 'grace.wheels@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'driver'),
('Henry Cargo', 'henry.cargo@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'driver'),
('Isabella Mover', 'isabella.mover@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'driver'),
('Jake Runner', 'jake.runner@example.com', '$2b$10$5rTb1kYFQr97DFv2wSIm4OXaKnq5TP7AoRqpKZkDOb6AL7SOkHZG6', 'driver');
