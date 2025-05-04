CREATE DATABASE IF NOT EXISTS biblioteca CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE biblioteca;

-- Tabla: autor
DROP TABLE IF EXISTS autor;
CREATE TABLE autor (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO autor (id, nombre) VALUES
  (1, 'Sin autor registrado'),
  (2, 'Gabriel José García Márquez'),
  (3, 'Isabel Allende'),
  (4, 'Mario Vargas Llosa');

-- Tabla: Libro
DROP TABLE IF EXISTS Libro;
CREATE TABLE Libro (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  codigo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  autor_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (autor_id) REFERENCES autor(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO Libro (id, nombre, codigo, autor, autor_id) VALUES
  (11, 'Cien Años de Soledad', 'LBR-001', 'Gabriel García Márquez', 2),
  (12, 'La casa de los espíritus', 'LBR-002', 'Isabel Allende', 3),
  (13, 'Eva Luna', 'LBR-003', 'Isabel Allende', 3),
  (14, 'Paula', 'LBR-004', 'Isabel Allende', 3),
  (15, 'La ciudad y los perros', 'LBR-005', 'Mario Vargas Llosa', 4),
  (16, 'Conversación en La Catedral', 'LBR-006', 'Mario Vargas Llosa', 4);

-- Tabla: prestamo
DROP TABLE IF EXISTS prestamo;
CREATE TABLE prestamo (
  id INT NOT NULL AUTO_INCREMENT,
  fecha DATE NOT NULL,
  lector VARCHAR(255) NOT NULL,
  libro_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (libro_id) REFERENCES Libro(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO prestamo (id, fecha, lector, libro_id) VALUES
  (8, '2026-02-10', 'María López', 13),
  (9, '2025-08-18', 'Juan Pérez', 15);
