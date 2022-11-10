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
DROP DATABASE IF EXISTS `kost_hunt`;
CREATE DATABASE IF NOT EXISTS `kost_hunt` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `kost_hunt`;

-- Dumping structure for table kost_hunt.kost
DROP TABLE IF EXISTS `kost`;
CREATE TABLE IF NOT EXISTS `kost` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `nama` tinytext,
  `alamat` tinytext,
  `panjang` int(11) DEFAULT NULL,
  `lebar` int(11) DEFAULT NULL,
  `fasilitas` text,
  `harga` float DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user_id`),
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table kost_hunt.kost: ~2 rows (approximately)
DELETE FROM `kost`;
/*!40000 ALTER TABLE `kost` DISABLE KEYS */;
INSERT INTO `kost` (`id`, `user_id`, `nama`, `alamat`, `panjang`, `lebar`, `fasilitas`, `harga`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 'WH Kost', 'Way Huwi', 3, 4, 'Kipas Angin, Kasur, Lemari, Meja Belajar', 5000000, '2022-11-10', '2022-11-10'),
	(2, NULL, 'KW Kost', 'Jati Agung', 3, 4, 'Kipas Angin, Kasur, Lemari, Meja Belajar', 5000000, '2022-11-10', '2022-11-10');
/*!40000 ALTER TABLE `kost` ENABLE KEYS */;

-- Dumping structure for table kost_hunt.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(16) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Dumping data for table kost_hunt.user: ~2 rows (approximately)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `password`, `email`, `createdAt`, `updatedAt`) VALUES
	(1, 'admin', 'admin', 'admin@admin.com', '2022-11-10', '2022-11-10'),
	(10, 'syafar', '123456', 'syafar1@gmail.com', '2022-11-10', '2022-11-10');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
