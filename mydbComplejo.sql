drop DATABASE if exists mydbComplejo;
create database if not exists mydbComplejo;
use mydbComplejo;
	
CREATE TABLE productos (
    id TINYINT,
    nombre VARCHAR(50),
    categoria TINYINT,
    precio DECIMAL(10,2),
    stock INT,
    fabricante TINYINT
);

CREATE TABLE fabricantes (
    id TINYINT,
    nombre VARCHAR(50)
);

CREATE TABLE categorias (
    id TINYINT,
    nombre VARCHAR(50)
);

INSERT INTO fabricantes (nombre) VALUES
('Nike'),
('Adidas'),
('Apple'),
('Samsung'),
('Sony'),
('Coca-Cola'),
('Ford'),
('Toyota'),
('Nestlé'),
('Amazon');

-- Insertar registros en la tabla categorias
INSERT INTO categorias (nombre) VALUES
('Electrónica'),
('Ropa'),
('Alimentación'),
('Automóviles'),
('Deportes'),
('Bebidas'),
('Hogar'),
('Juguetes'),
('Muebles'),
('Salud y Belleza');

-- Insertar registros en la tabla productos
INSERT INTO productos (nombre, categoria, precio, stock, fabricante) VALUES
('iPhone 12', 1, 999, 50, 3),
('Galaxy S21', 1, 899, 40, 4),
('PlayStation 5', 1, 499, 20, 5),
('Coca-Cola Zero', 6, 2, 100, 6),
('Mustang', 4, 35000, 10, 7),
('Air Max 270', 2, 150, 30, 1),
('MacBook Pro', 1, 1999, 15, 3),
('Toyota Camry', 4, 30000, 8, 8),
('KitKat', 3, 1, 200, 9),
('Kindle Paperwhite', 1, 129, 25, 10),
('Adidas Ultra Boost', 2, 180, 35, 2),
('Bicicleta de montaña', 5, 699, 12, 1),
('Sony Bravia', 1, 1499, 18, 5),
('Fanta', 6, 2, 150, 6),
('Ford Focus', 4, 25000, 15, 7),
('Nike Air Force 1', 2, 100, 40, 1),
('iPad Pro', 1, 1099, 20, 3),
('Toyota Prius', 4, 35000, 5, 8),
('Nescafé', 3, 5, 100, 9),
('Amazon Echo', 1, 99, 30, 10),
('Adidas Stan Smith', 2, 80, 25, 2),
('Balón de fútbol', 5, 20, 50, 1),
('Sony PlayStation 4', 1, 299, 10, 5),
('Sprite', 6, 2, 100, 6),
('Ford Mustang Mach-E', 4, 45000, 5, 7),
('Nike Air Jordan', 2, 200, 20, 1),
('iMac', 1, 1299, 10, 3),
('Lexus RX', 4, 45000, 5, 8),
('Perrier', 3, 3, 100, 9),
('Amazon Kindle', 1, 79, 40, 10);
INSERT INTO productos (nombre, categoria, precio, stock, fabricante) VALUES
('Samsung Galaxy Note 20', 1, 899, 30, 4),
('Nike Air Max 90', 2, 120, 25, 1),
('Coca-Cola Classic', 6, 2, 200, 6),
('Ford Explorer', 4, 40000, 8, 7),
('Sony WH-1000XM4', 1, 349, 15, 5),
('iPad Air', 1, 599, 20, 3),
('Toyota RAV4', 4, 35000, 10, 8),
('Nestlé Crunch', 3, 2, 150, 9),
('Amazon Fire TV Stick', 1, 39, 50, 10),
('Adidas Gazelle', 2, 90, 30, 2),
('Pelota de tenis', 5, 10, 100, 1),
('Sony Xperia 1 III', 1, 1199, 12, 5),
('Pepsi', 6, 2, 150, 6),
('Chevrolet Camaro', 4, 40000, 8, 7),
('Nike Roshe Run', 2, 80, 35, 1),
('Mac Mini', 1, 699, 15, 3),
('Lexus NX', 4, 40000, 8, 8),
('Nesquik', 3, 4, 100, 9),
('Amazon Kindle Oasis', 1, 249, 20, 10),
('Adidas Superstar', 2, 100, 30, 2),
('Balón de baloncesto', 5, 25, 50, 1),
('Sony A7 III', 1, 1999, 10, 5),
('7UP', 6, 2, 100, 6),
('Volkswagen Golf', 4, 30000, 10, 7),
('Nike Free Run', 2, 100, 40, 1),
('Mac Pro', 1, 5999, 5, 3),
('Mercedes-Benz GLC', 4, 45000, 5, 8),
('Nestea', 3, 3, 100, 9),
('Amazon Echo Dot', 1, 49, 40, 10),
('Converse Chuck Taylor', 2, 70, 25, 2);

ALTER TABLE productos MODIFY COLUMN id TINYINT AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE fabricantes MODIFY COLUMN id TINYINT AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE categorias MODIFY COLUMN id TINYINT AUTO_INCREMENT PRIMARY KEY;

ALTER TABLE productos ADD CONSTRAINT fk_categoria FOREIGN KEY (categoria) REFERENCES categorias(id);
ALTER TABLE productos ADD CONSTRAINT fk_fabricante FOREIGN KEY (fabricante) REFERENCES fabricantes(id);




#SELECT productos.* FROM productos JOIN categorias ON productos.categoria = categorias.id WHERE categorias.id = 1;
