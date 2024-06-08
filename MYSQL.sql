CREATE DATABASE IF NOT EXISTS imagineHack;

USE imagineHack;

CREATE TABLE IF NOT EXISTS customer (
    id INT PRIMARY KEY,
    customerName VARCHAR(255),
    customerAddress TEXT
);

CREATE TABLE IF NOT EXISTS supplier (
    id INT PRIMARY KEY,
    supplierName VARCHAR(255),
    supplierAddress VARCHAR(255),
    supplierPhoneNumber VARCHAR(15),  -- Changed to VARCHAR for phone numbers
    supplierEmail VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS invoice (
    invoiceNumber VARCHAR(255) PRIMARY KEY,
    purchaseDate VARCHAR(255),
    totalAmount FLOAT,
    totalTax FLOAT,
    customerID INT,  -- Added this field for the foreign key reference
    supplierID INT,  -- Added this field for the foreign key reference
    FOREIGN KEY (customerID) REFERENCES customer(id),
    FOREIGN KEY (supplierID) REFERENCES supplier(id)
);

CREATE TABLE IF NOT EXISTS item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),  -- Changed to VARCHAR for descriptions
    quantity FLOAT,
    totalItemPrice FLOAT,
    unitPrice FLOAT,
    invoiceNumber VARCHAR(255),  -- Added this field for the foreign key reference
    FOREIGN KEY (invoiceNumber) REFERENCES invoice(invoiceNumber)
);
