-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for kost_hunt
CREATE DATABASE IF NOT EXISTS `kost_hunt` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `kost_hunt`;

-- Dumping structure for table kost_hunt.kost
CREATE TABLE IF NOT EXISTS `kost` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `nama` tinytext,
  `lokasi` tinytext,
  `alamat` tinytext,
  `panjang` int(11) DEFAULT NULL,
  `lebar` int(11) DEFAULT NULL,
  `fasilitas` text,
  `harga` float DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `foto_depan` tinytext,
  `foto_dalam` tinytext,
  `url1` tinytext,
  `url2` tinytext,
  `no_wa` tinytext,
  PRIMARY KEY (`id`),
  KEY `user` (`user_id`),
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

-- Dumping data for table kost_hunt.kost: ~3 rows (approximately)
DELETE FROM `kost`;
/*!40000 ALTER TABLE `kost` DISABLE KEYS */;
INSERT INTO `kost` (`id`, `user_id`, `nama`, `lokasi`, `alamat`, `panjang`, `lebar`, `fasilitas`, `harga`, `createdAt`, `updatedAt`, `foto_depan`, `foto_dalam`, `url1`, `url2`, `no_wa`) VALUES
	(60, 15, 'Jaya Kost', 'Way Huwi', 'Jl. Airan Raya, Gg. Manggis VII, Way Huwi', 5, 5, 'Kamar Mandi dalam, Kasur, Bantal, AC, Meja Belajar, Lemari', 6500000, '2022-12-21', '2022-12-22', '722415b39f4377dddb25ce1a5b7e762d.jpg', 'd72341c3887cd6c65671b37c0cbd3329.jpg', 'http://localhost:5000/images/722415b39f4377dddb25ce1a5b7e762d.jpg', 'http://localhost:5000/images/d72341c3887cd6c65671b37c0cbd3329.jpg', '62895604395176'),
	(61, 15, 'Jaya Kost', 'Sukarame', 'Jl. Ryacudu, Belakang Masjid Baiturrohim, Sukarame', 5, 4, 'Kamar Mandi dalam, Kasur, Bantal, AC, Meja Belajar, Lemari', 6000000, '2022-12-21', '2022-12-22', '722415b39f4377dddb25ce1a5b7e762d.jpg', 'd72341c3887cd6c65671b37c0cbd3329.jpg', 'http://localhost:5000/images/722415b39f4377dddb25ce1a5b7e762d.jpg', 'http://localhost:5000/images/d72341c3887cd6c65671b37c0cbd3329.jpg', '62895604395176'),
	(62, 14, 'WH Kost', 'Way Huwi', 'Jl. Airan Raya, Gg. Manggis V, Way Huwi', 5, 4, 'Kamar Mandi dalam, Kasur, Bantal, Kipas Angin, Meja Belajar', 5000000, '2022-12-21', '2022-12-22', 'c9ae815021d5ed0c61405032ba1937a0.jpeg', '1619022efa665679a97d2b2310670306.jpg', 'http://localhost:5000/images/c9ae815021d5ed0c61405032ba1937a0.jpeg', 'http://localhost:5000/images/1619022efa665679a97d2b2310670306.jpg', '62895604395176');
/*!40000 ALTER TABLE `kost` ENABLE KEYS */;

-- Dumping structure for table kost_hunt.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` tinytext,
  `email` varchar(50) DEFAULT NULL,
  `role` int(2) DEFAULT NULL,
  `password` text,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `refresh_token` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- Dumping data for table kost_hunt.user: ~2 rows (approximately)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `email`, `role`, `password`, `createdAt`, `updatedAt`, `refresh_token`) VALUES
	(14, 'Admin', 'admin@admin.com', 1, '$2b$10$wIMwDL3bz5Nc3bx8ktb6FuFWCY0X3i7DnSNC4Mk7n3fnZ0gX/7RR6', '2022-12-20', '2022-12-22', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJ1c2VybmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NzE2Njc2MTQsImV4cCI6MTY3MTc1NDAxNH0._P5AJ1SHO1HtJ2ruZQMYk18DoTNORY7I2nccAJuKeT0'),
	(15, 'Syafar', 'syafar@gmail.com', NULL, '$2b$10$hKQPZASeLuzxgsrgu7bkMegZtMJocHx9Tyyk8CS0Xi97LjLp9dCve', '2022-12-20', '2022-12-22', NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
