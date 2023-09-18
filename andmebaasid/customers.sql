-- Create the "Customers" table
CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone_number VARCHAR(15),
    address VARCHAR(255)
);

-- Insert sample data into the "Customers" table
INSERT INTO Customers (first_name, last_name, email, phone_number, address)
VALUES
    ('John', 'Doe', 'john.doe@example.com', '+1 (123) 456-7890', '123 Main St, Anytown, USA'),
    ('Jane', 'Smith', 'jane.smith@example.com', '+1 (987) 654-3210', '456 Elm St, Othertown, USA'),
    ('David', 'Johnson', 'david.johnson@example.com', '+1 (555) 123-4567', '789 Oak St, Differenttown, USA');

-- Create the "Orders" table
CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE,
    customer_id INT,
    total_amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- Insert sample data into the "Orders" table
INSERT INTO Orders (order_date, customer_id, total_amount)
VALUES
    ('2023-09-01', 1, 150.00),
    ('2023-09-02', 2, 75.50),
    ('2023-09-03', 1, 200.25),
    ('2023-09-04', 3, 300.75);
