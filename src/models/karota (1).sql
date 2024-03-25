-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 12, 2024 at 05:47 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `karota`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `agent` (IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(255), IN `_phone_no` VARCHAR(20), IN `_email` VARCHAR(255), IN `_address` VARCHAR(255), IN `_super_agent` VARCHAR(255), IN `_state` VARCHAR(100), IN `_lga` VARCHAR(100))  BEGIN
    IF _query_type = 'create' THEN
        INSERT INTO `agent` (
            name,
            phone_no,
            email,
            address,
            super_agent,
            state,
            lga
        ) VALUES (
            _name,
            _phone_no,
            _email,
            _address,
            _super_agent,
            _state,
            _lga
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `agent`
        WHERE id=_id;
    ELSEIF _query_type ='update' THEN
        UPDATE `agent` SET  
            name = _name,
            phone_no = _phone_no,
            email = _email,
            address = _address,
            super_agent = _super_agent,
            state = _state,
            lga = _lga
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agent`
        WHERE id = _id;

    END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `vendors` (IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_vendor_name` VARCHAR(255), IN `_vendor_ofiice_address` VARCHAR(255), IN `_vendor_state` VARCHAR(255), IN `_vendor_lga` VARCHAR(255), IN `_vendor_org_phone` VARCHAR(255), IN `_vendor_org_email` VARCHAR(255), IN `_vendor_tin` VARCHAR(255), IN `_vendor_profile` VARCHAR(255), IN `_vendor_bn_rc` VARCHAR(255), IN `_contact_name` VARCHAR(255), IN `_contact_address` VARCHAR(255), IN `_contact_dob` DATE, IN `_contact_state` VARCHAR(255), IN `_contact_password` VARCHAR(255), IN `_contact_phone` VARCHAR(255), IN `_contact_email` VARCHAR(255), IN `_contact_lga` VARCHAR(255), IN `_contact_vendor` INT)  BEGIN
    IF _query_type = 'insert' THEN
        INSERT INTO `vendors` (
            vendor_name,
            vendor_ofiice_address,
            vendor_state,
            vendor_lga,
            vendor_org_phone,
            vendor_org_email,
            vendor_tin,
            vendor_profile,
            vendor_bn_rc
        ) VALUES (
            _vendor_name,
            _vendor_ofiice_address,
            _vendor_state,
            _vendor_lga,
            _vendor_org_phone,
            _vendor_org_email,
            _vendor_tin,
            _vendor_profile,
            _vendor_bn_rc
        );
        
        INSERT INTO `vendor_contact` (
            contact_name,
            contact_address,
            contact_dob,
            contact_state,
            contact_password,
            contact_phone,
            contact_email,
            contact_lga,
            vendor_id
        ) VALUES (
            _contact_name,
            _contact_address,
            _contact_dob,
            _contact_state,
            _contact_password,
            _contact_phone,
            _contact_email,
            _contact_lga,
            LAST_INSERT_ID()
        );
        
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `vendors`
        WHERE id = _id;
    END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone_no` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `super_agent` int(11) NOT NULL,
  `state` varchar(255) NOT NULL,
  `lga` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agent`
--

INSERT INTO `agent` (`id`, `name`, `phone_no`, `email`, `address`, `super_agent`, `state`, `lga`, `location`) VALUES
(1, 'mide', '12345', 'mide', 'jaba', 1, 'kano', 'kano', 'jaba'),
(2, 'sadiq', '07032151593', 'Harunakadiri702@gmail.com', 'kanoniabwa', 1, 'Kano', 'kumbotso', '');

-- --------------------------------------------------------

--
-- Table structure for table `super_agent`
--

CREATE TABLE `super_agent` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `vendor` int(11) NOT NULL,
  `state` varchar(255) NOT NULL,
  `LGA` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `super_agent`
--

INSERT INTO `super_agent` (`id`, `name`, `phone`, `email`, `address`, `vendor`, `state`, `LGA`) VALUES
(1, 'naxif', '12345678', 'naxif', '', 1, 'kano', 'nass');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `account_type` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `username`, `account_type`, `email`, `phone_no`, `password`, `status`, `role`, `createdAt`, `updatedAt`) VALUES
(2, 'sadiq', 'sadiq', 'newbie', 'sadiq@gmail.com', '098765', '$2a$10$lPiFjjnwoqOORJfW6UW4D.BJ7z9tjeS1kNUCkjRBJBUzgUrDsB2Wa', 'admin', 'admin', '2024-03-12 14:16:01', '2024-03-12 14:16:01');

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` int(11) NOT NULL,
  `vendor_name` varchar(255) NOT NULL,
  `vendor_ofiice_address` varchar(255) NOT NULL,
  `vendor_state` varchar(255) NOT NULL,
  `vendor_lga` varchar(255) NOT NULL,
  `vendor_org_phone` varchar(255) NOT NULL,
  `vendor_org_email` varchar(255) NOT NULL,
  `vendor_tin` varchar(255) NOT NULL,
  `vendor_profile` varchar(255) NOT NULL,
  `vendor_bn_rc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `vendor_name`, `vendor_ofiice_address`, `vendor_state`, `vendor_lga`, `vendor_org_phone`, `vendor_org_email`, `vendor_tin`, `vendor_profile`, `vendor_bn_rc`) VALUES
(1, 'ahmad', 'kano', 'kano', 'nassarawa', '07047145948', 'aii@gmail.com', '12345678', 'none', '12345'),
(3, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin'),
(4, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin'),
(5, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin'),
(6, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin'),
(7, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin'),
(8, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_contact`
--

CREATE TABLE `vendor_contact` (
  `id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_address` varchar(255) NOT NULL,
  `contact_dob` date NOT NULL,
  `contact_state` varchar(255) NOT NULL,
  `contact_password` varchar(255) NOT NULL,
  `contact_phone` varchar(20) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_lga` varchar(255) NOT NULL,
  `vendor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vendor_contact`
--

INSERT INTO `vendor_contact` (`id`, `contact_name`, `contact_address`, `contact_dob`, `contact_state`, `contact_password`, `contact_phone`, `contact_email`, `contact_lga`, `vendor_id`) VALUES
(1, 'aiialpha', 'kano', '0000-00-00', 'kano', '12345678', '0703871356', 'aii', 'nassarawa', 1),
(7, 'Charly Frank', 'naibawa', '0000-00-00', 'Kano', '1234567890', '07032151593', 'Harunakadiri702@gmail.com', 'Fagge', 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `super_agent` (`super_agent`);

--
-- Indexes for table `super_agent`
--
ALTER TABLE `super_agent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_vendor` (`vendor`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendor_contact`
--
ALTER TABLE `vendor_contact`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendor` (`vendor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agent`
--
ALTER TABLE `agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `super_agent`
--
ALTER TABLE `super_agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `vendor_contact`
--
ALTER TABLE `vendor_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `agent`
--
ALTER TABLE `agent`
  ADD CONSTRAINT `super_agent` FOREIGN KEY (`super_agent`) REFERENCES `super_agent` (`id`);

--
-- Constraints for table `super_agent`
--
ALTER TABLE `super_agent`
  ADD CONSTRAINT `fk_vendor` FOREIGN KEY (`vendor`) REFERENCES `vendors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
