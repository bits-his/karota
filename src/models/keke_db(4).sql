-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 16, 2024 at 10:52 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `keke_db`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `agents` (IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(255), IN `_phone` VARCHAR(20), IN `_email` VARCHAR(255), IN `_address` VARCHAR(255), IN `_super_agent` VARCHAR(255), IN `_state` VARCHAR(100), IN `_lga` VARCHAR(100), IN `_password` VARCHAR(100), IN `_balance` DOUBLE(10,2), IN `_service_location` VARCHAR(100))   BEGIN
    IF _query_type = 'create' THEN
    INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        _name, 
        _name, 
        'agent',
        _email,
        _phone, 
        'active', 
        'agent',
        _password );

        INSERT INTO `agents` (
            name,
            phone,
            email,
            address,
            super_agent,
            state,
            lga,
            service_location,
            user_id
        ) VALUES (
            _name,
            _phone,
            _email,
            _address,
            _super_agent,
            _state,
            _lga,      
            _service_location,       
            LAST_INSERT_ID()     
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `agents`
        WHERE id=_id;
    ELSEIF _query_type ='update' THEN
        UPDATE `agents` SET  
            name = _name,
            phone = _phone,
            email = _email,
            address = _address,
            super_agent = _super_agent,
            state = _state,
            lga = _lga
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agents`
        WHERE id = _id;

    END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `drivers` (IN `_query_type` VARCHAR(10), IN `_driver_id` INT, IN `_name` VARCHAR(50), IN `_nin` INT, IN `_phone` VARCHAR(20), IN `_email` VARCHAR(50), IN `_address` VARCHAR(50), IN `_dob` DATE, IN `_state` VARCHAR(50), IN `_lga` VARCHAR(50), IN `_next_of_kin` VARCHAR(50), IN `_vehicle_id` INT)   BEGIN
    IF _query_type = 'insert' THEN
        INSERT INTO `drivers` (
            name,
            nin,
            phone,
            email,
            address,
            dob,
            state,
            lga,
           	next_of_kin,
            vehicle_id
        ) VALUES (
            _name,
            _nin,
            _phone,
            _email,
            _address,
            _dob,
            _state,
            _lga,
            _next_of_kin,
            _vehicle_id
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `drivers`
        WHERE id=_driver_id;
    ELSEIF _query_type ='update' THEN
        UPDATE `drivers` SET  
            name = IFNULL(_name,name),
            nin= IFNULL(_nin,nin),
            phone = IFNULL(_phone,phone),
            email = IFNULL(_email,email),
            address = IFNULL(_address,address),
            dob =IFNULL(_dob,dob),
            state = IFNULL(_state,state),
            lga = IFNULL(_lga,lga),
            next_of_kin = IFNULL(_next_of_kin,next_of_kin),
            vendor_id = IFNULL(_vendor_id,vendor_id)
        WHERE  
            id = _driver_id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `driver`
        WHERE id = _driver_id;

    END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `super_agents` (IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(50), IN `_phone` VARCHAR(50), IN `_email` VARCHAR(50), IN `_address` VARCHAR(50), IN `_vendor` INT, IN `_state` VARCHAR(50), IN `_lga` VARCHAR(100), IN `_nin` VARCHAR(15), IN `_password` VARCHAR(100))   BEGIN
    IF _query_type = 'insert' THEN
    
      INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        _name, 
        _name, 
        'agent',
        _email,
        _phone, 
        'active', 
        'user',
        _password );

        INSERT INTO `super_agents` (
            name,
            phone,
            email,
            address,
            vendor,
            state,
            lga,
            nin,
            user_id
        ) VALUES (
            _name,
            _phone,
            _email,
            _address,
            _vendor,
            _state,
            _lga,
            _nin,
            LAST_INSERT_ID()
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `super_agents`
        WHERE id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `super_agents`;

    ELSEIF _query_type ='update' THEN
        UPDATE `super_agents` SET  
            name = IFNULL(_name,name),
            phone = IFNULL(_phone,phone),
            email = IFNULL(_email,email),
            address = IFNULL(_address,address),
            vendor = IFNULL(_vendor,vendor),
            state = IFNULL(_state,lga),
            lga = IFNULL(_lga,lga)
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agent`
        WHERE id = _id;

    END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `vehicles` (IN `_query_type` VARCHAR(10), IN `_id` DATE, IN `_owner_id` DATE, IN `_lg_reg_no` VARCHAR(50), IN `_engine_no` VARCHAR(50), IN `_plate_no` VARCHAR(50), IN `_manifacturer` VARCHAR(50), IN `_manifacturing_date` DATE, IN `_purchased_date` DATE, IN `_state_registrered` VARCHAR(50), IN `_registered_lg` VARCHAR(50))   BEGIN
	
    IF _query_type = 'insert' THEN
  INSERT INTO `vehicle_registration`(`owner_id`, `lg_reg_no`, `manifacturer`, `manifacturing_date`, `engine_no`, `plate_no`, `state_registrered`, `purchased_date`, `registered_lg`) 
    VALUES (
        _owner_id,
        _lg_reg_no,
        _manifacturer,
        _manifacturing_date,
        _engine_no,
        _plate_no,
        _state_registrered,
        _purchased_date,
        _state_registrered,
        _purchased_date,
        _registered_lg
    );   
     ELSEIF _query_type ='select' THEN
        SELECT * FROM `vehicle_registration`
        WHERE id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `vehicle_registration`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `vehicle_registration`
        WHERE lg_reg_no LIKE CONCAT('%',_lg_reg_no,'%') OR engine_no  LIKE CONCAT('%',_engine_no,'%')  OR plate_no  LIKE CONCAT('%',_plate_no,'%') ;
    
        END IF;
        END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `vehicle_owners` (IN `query_type` VARCHAR(255), IN `p_id` INT, IN `p_user_id` INT, IN `p_name` VARCHAR(255), IN `p_address` VARCHAR(255), IN `p_phone` VARCHAR(20), IN `p_email` VARCHAR(255), IN `p_state` VARCHAR(100), IN `p_lga` VARCHAR(100), IN `p_dob` DATE, IN `p_password` VARCHAR(255))   BEGIN
IF query_type ='insert' THEN
      INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone_no`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        p_name, 
        p_name, 
        'vehicle',
        p_email,
        p_phone, 
        'active', 
        'vehicle',
        p_password );
    INSERT INTO `vehicle_owners`(
        `user_id`,
        `name`,
        `address`,
        `phone`,
        `email`,
        `state`,
        `lga`,
        `dob`,
        `user_id`
    ) VALUES (
        LAST_INSERT_ID(),
        p_name,
        p_address,
        p_phone,
        p_email,
        p_state,
        p_lga,
        p_dob,
        p_user_id
    );
     ELSEIF query_type ='select' THEN
        SELECT * FROM `vehicle_owners`
        WHERE id=p_id;
    ELSEIF query_type ='select-all' THEN
        SELECT * FROM `vehicle_owners`;
    ELSEIF query_type ='search' THEN
        SELECT * FROM `vehicle_owners`
        WHERE phone LIKE CONCAT('%',p_phone,'%') OR email  LIKE CONCAT('%',p_email,'%')  OR name  LIKE CONCAT('%',p_name,'%') ;
    END IF;
    
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `vendors` (IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_vendor_name` VARCHAR(255), IN `_vendor_ofiice_address` VARCHAR(255), IN `_vendor_state` VARCHAR(255), IN `_vendor_lga` VARCHAR(255), IN `_vendor_org_phone` VARCHAR(255), IN `_vendor_org_email` VARCHAR(255), IN `_vendor_tin` VARCHAR(255), IN `_vendor_profile` VARCHAR(255), IN `_vendor_bn_rc` VARCHAR(255), IN `_contact_name` VARCHAR(255), IN `_contact_address` VARCHAR(255), IN `_contact_state` VARCHAR(255), IN `_contact_password` VARCHAR(255), IN `_contact_phone` VARCHAR(255), IN `_contact_email` VARCHAR(255), IN `_contact_lga` VARCHAR(255), IN `_contact_vendor` INT)   BEGIN
DECLARE last_user_id INT;
    IF _query_type = 'insert' THEN
     INSERT INTO `Users`( `name`, `username`, `account_type`, `email`, `phone`, `password`, `status`, `role`)
    VALUES ( `_contact_name`, `_contact_name`, 'vendor', `_contact_email`, `_contact_phone`, `_contact_password`, 'active','vendor');
    SET last_user_id = LAST_INSERT_ID();
        INSERT INTO `vendors` (
            vendor_name,
            vendor_ofiice_address,
            vendor_state,
            vendor_lga,
            vendor_org_phone,
            vendor_org_email,
            vendor_tin,
            vendor_profile,
            vendor_bn_rc,
            user_id
        ) VALUES (
            _vendor_name,
            _vendor_ofiice_address,
            _vendor_state,
            _vendor_lga,
            _vendor_org_phone,
            _vendor_org_email,
            _vendor_tin,
            _vendor_profile,
            _vendor_bn_rc,
            last_user_id
        );
        
        INSERT INTO `vendor_contact` (
            contact_name,
            contact_address,
            contact_state,
            contact_phone,
            contact_email,
            contact_lga,
            vendor_id,
            user_id
        ) VALUES (
            _contact_name,
            _contact_address,
            _contact_state,
            _contact_phone,
            _contact_email,
            _contact_lga,
            LAST_INSERT_ID(),
            last_user_id
        );
          ELSEIF _query_type ='delete' THEN
        DELETE FROM `vendors`
        WHERE id = _id;
         ELSEIF _query_type ='select' THEN
        SELECT * FROM `vendors`
        WHERE id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `vendors`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `vendors`
        WHERE vendor_name LIKE CONCAT('%',_vendor_name,'%') OR vendor_org_phone  LIKE CONCAT('%',_vendor_org_phone,'%') OR vendor_org_email  LIKE CONCAT('%',_vendor_org_email,'%');
    END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` int(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `agents`
--

CREATE TABLE `agents` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `super_agent` int(11) NOT NULL,
  `state` varchar(255) NOT NULL,
  `lga` varchar(255) NOT NULL,
  `service_location` varchar(255) NOT NULL,
  `balance` double(10,2) NOT NULL DEFAULT 0.00,
  `password` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `driver_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `nin` int(11) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `state` varchar(50) NOT NULL,
  `lga` varchar(50) NOT NULL,
  `next_of_kin` varchar(50) DEFAULT NULL,
  `vehicle_id` int(11) NOT NULL,
  `balance` double(10,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`driver_id`, `name`, `nin`, `phone`, `email`, `address`, `dob`, `state`, `lga`, `next_of_kin`, `vehicle_id`, `balance`) VALUES
(7, 'aham', 1234, '0703871356', 'aii', 'kano', '2024-03-01', 'kano', 'kano', 'me', 8, 0.00),
(8, 'sadiq', 12345678, '09875319', 'aii07038713563@gmail.com', 'naibawa', '1920-12-12', 'Kano', 'nassarawa', '123456', 9, 0.00),
(7, 'aham', 1234, '0703871356', 'aii', 'kano', '2024-03-01', 'kano', 'kano', 'me', 8, 0.00),
(8, 'sadiq', 12345678, '09875319', 'aii07038713563@gmail.com', 'naibawa', '1920-12-12', 'Kano', 'nassarawa', '123456', 9, 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `super_agents`
--

CREATE TABLE `super_agents` (
  `id` int(11) NOT NULL,
  `user_id` int(9) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `vendor` int(11) NOT NULL,
  `state` varchar(255) NOT NULL,
  `lga` varchar(255) NOT NULL,
  `nin` varchar(12) DEFAULT NULL,
  `balance` double(10,2) DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `super_agents`
--

INSERT INTO `super_agents` (`id`, `user_id`, `name`, `phone`, `email`, `address`, `vendor`, `state`, `lga`, `nin`, `balance`, `created_at`, `updated_at`) VALUES
(1, 9, 'Ishaq Ibrahim', '07035384170', 'ibagwai9@gmail.com', 'Naibawa Kano', 1, 'Kano', 'Bagwai', '324232', 0.00, '2024-03-16 09:03:24', '2024-03-16 09:03:24'),
(2, 2, 'Super Agent', '09080808080', 'superagent@gmail.com', 'Sani Abacha way', 1, 'Anambra', 'Anambra East', '427898809', 0.00, '2024-03-16 09:42:44', '2024-03-16 09:42:44');

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
  `phone` varchar(15) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `vendor_id` int(4) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `username`, `account_type`, `email`, `phone`, `password`, `status`, `role`, `vendor_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Ishaq Ibrahim', 'Ishaq Ibrahim', 'agent', 'main@gmail.com', '22335384184', NULL, 'active', 'agent', NULL, '2024-03-16 09:41:12', '2024-03-16 09:41:12'),
(2, 'Super Agent', 'Super Agent', 'super_agent', 'superagent@gmail.com', '09080808080', '$2a$10$YXSu/2oWGqOpeOtDot8Ttuof1fW56cGwjKG11mTe68nfsPVgSTxdC', 'active', 'super_agent', NULL, '2024-03-16 09:42:44', '2024-03-16 09:48:13');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_owners`
--

CREATE TABLE `vehicle_owners` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `lga` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `balance` double(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_registration`
--

CREATE TABLE `vehicle_registration` (
  `vehicle_id` int(11) NOT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `lg_reg_no` varchar(50) DEFAULT NULL,
  `manifacturer` varchar(50) DEFAULT NULL,
  `manifacturing_date` date DEFAULT NULL,
  `engine_no` varchar(50) DEFAULT NULL,
  `plate_no` varchar(50) DEFAULT NULL,
  `state_registrered` varchar(50) DEFAULT NULL,
  `purchased_date` date DEFAULT NULL,
  `registered_lg` varchar(50) DEFAULT NULL,
  `balance` double(10,0) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `vendor_name` varchar(255) NOT NULL,
  `vendor_ofiice_address` varchar(255) NOT NULL,
  `vendor_state` varchar(255) NOT NULL,
  `vendor_lga` varchar(255) NOT NULL,
  `vendor_org_phone` varchar(255) DEFAULT NULL,
  `vendor_org_email` varchar(255) NOT NULL,
  `vendor_tin` varchar(255) NOT NULL,
  `vendor_profile` varchar(255) NOT NULL,
  `vendor_bn_rc` varchar(255) NOT NULL,
  `balance` double(10,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `user_id`, `vendor_name`, `vendor_ofiice_address`, `vendor_state`, `vendor_lga`, `vendor_org_phone`, `vendor_org_email`, `vendor_tin`, `vendor_profile`, `vendor_bn_rc`, `balance`) VALUES
(1, NULL, 'ahmad', 'kano', 'kano', 'nassarawa', '07047145948', 'aii@gmail.com', '12345678', 'none', '12345', 0.00),
(3, 2, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin', 0.00),
(4, NULL, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin', 0.00),
(5, NULL, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin', 0.00),
(6, NULL, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin', 0.00),
(7, NULL, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin', 0.00),
(8, NULL, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin', 0.00),
(9, NULL, 'ahmed', 'kano', 'kano', 'fagge', '0987654321', 'ahmed@gmail.com', '1222', 'nin', '123', 0.00),
(10, NULL, 'sadiq', 'naibawa', 'Kano', 'kumbotso', '07032151593', 'Harunakadiri702@gmail.com', '1234', 'nin', 'nin', 0.00),
(11, NULL, 'ahmed', 'kano', 'kano', 'fagge', '0987654321', 'ahmed@gmail.com', '1222', 'nin', '123', 0.00),
(12, NULL, 'KANO NENDOR ', 'KANO', 'Kaduna', 'Birnin Gwari', '0684834989', 'hello@bits.ng', '57633478', '', '6879', 0.00),
(13, NULL, 'KATSINA VENDOR', 'KATSINA', 'Katsina', 'Kafur', '6472298389', 'KT@BITS.NG', '8653988', '', '356798', 0.00),
(14, NULL, 'KATSINA VENDOR', 'KATSINA', 'Katsina', 'Kafur', '6472298389', 'KT@BITS.NG', '8653988', '', '356798', 0.00),
(15, NULL, 'KATSINA VENDOR', 'KATSINA', 'Katsina', 'Kafur', '6472298389', 'KT@BITS.NG', '8653988', '', '356798', 0.00),
(16, NULL, 'KATSINA VENDOR', 'KATSINA', 'Katsina', 'Kafur', '6472298389', 'KT@BITS.NG', '8653988', '', '356798', 0.00),
(17, NULL, 'KADUNA VENDO', 'Kaduna', 'Kaduna', 'Zaria', '07035384184', 'kd@bits.ng', '44444332', '', '8604045940', 0.00),
(18, NULL, 'VENDOR A', 'Kano', 'Akwa Ibom', 'Abak', '6787980909990', 'jmm@hh.cc', '6789', '', '75689', 0.00),
(19, NULL, 'Vendor B', 'Kano', 'Lagos', 'Kosofe', '09304349304', 'fake@gmail.com', '6879', '', '456789', 0.00),
(20, NULL, 'Vendor B', 'Kano', 'Lagos', 'Kosofe', '09304349304', 'fake@gmail.com', '6879', '', '456789', 0.00),
(21, NULL, 'Vendor B', 'Kano', 'Lagos', 'Kosofe', '09304349304', 'fake@gmail.com', '6879', '', '456789', 0.00),
(22, 6, 'Abdullahi Lawan', 'KANO', 'Kaduna', 'Kachia', '724800', 'ten@gmail.com', '68790', '', '56789', 0.00),
(23, 8, 'Abdullahi Lawan', 'KANO', 'Kaduna', 'Kachia', '724800', 'ten@gmail.com', '68790', '', '56789', 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `vendor_contact`
--

CREATE TABLE `vendor_contact` (
  `id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_address` varchar(255) NOT NULL,
  `contact_state` varchar(255) NOT NULL,
  `contact_phone` varchar(20) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_lga` varchar(255) NOT NULL,
  `vendor_id` int(11) NOT NULL,
  `user_id` int(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendor_contact`
--

INSERT INTO `vendor_contact` (`id`, `contact_name`, `contact_address`, `contact_state`, `contact_phone`, `contact_email`, `contact_lga`, `vendor_id`, `user_id`) VALUES
(1, 'aiialpha', 'kano', 'kano', '0703871356', 'aii', 'nassarawa', 1, NULL),
(7, 'Charly Frank', 'naibawa', 'Kano', '07032151593', 'Harunakadiri702@gmail.com', 'Fagge', 8, NULL),
(8, 'Charly Frank', 'naibawa', 'Kano', '07032151593', 'Harunakadiri702@gmail.com', 'Fagge', 10, NULL),
(9, 'bigi', 'kano', 'kano', '0987654321', 'bigi@gmail.com', 'kwala', 11, NULL),
(10, 'Ishaq Ibrahim', 'Naibawa Kano', 'Kano', '+2347035384184', 'ibagwai9@gmail.com', 'Albasu', 12, NULL),
(11, 'Ishaq Ibrahim', 'Naibawa Kano', 'Kano', '+2347035384184', 'ibagwai9@gmail.com', 'Albasu', 14, NULL),
(12, 'Ishaq Ibrahim', 'Naibawa Kano', 'Kano', '+2347035384184', 'ibagwai9@gmail.com', 'Albasu', 15, NULL),
(13, 'Ishaq Ibrahim', 'Naibawa Kano', 'Kano', '+2347035384184', 'ibagwai9@gmail.com', 'Albasu', 16, NULL),
(14, 'Ishaq Ibrahim', 'Naibawa Kano', 'Kano', '09124611644', 'ibagwai@bits.com', 'Bagwai', 17, NULL),
(15, 'Ishaq Ibrahim', 'Naibawa Kano', 'Kano', '09035384184', 'ibagwai9@gmail.com', 'Albasu', 21, NULL),
(16, 'Cantac', 'Kano', 'Kaduna', '08079398981', 'fake@gmail.com', 'Kachia', 23, 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `super_agent` (`super_agent`);

--
-- Indexes for table `super_agents`
--
ALTER TABLE `super_agents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_vendor` (`vendor`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_no` (`phone`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `vehicle_owners`
--
ALTER TABLE `vehicle_owners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_registration`
--
ALTER TABLE `vehicle_registration`
  ADD PRIMARY KEY (`vehicle_id`);

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
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `agents`
--
ALTER TABLE `agents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `super_agents`
--
ALTER TABLE `super_agents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vehicle_owners`
--
ALTER TABLE `vehicle_owners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle_registration`
--
ALTER TABLE `vehicle_registration`
  MODIFY `vehicle_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `vendor_contact`
--
ALTER TABLE `vendor_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `agents`
--
ALTER TABLE `agents`
  ADD CONSTRAINT `super_agent` FOREIGN KEY (`super_agent`) REFERENCES `super_agent` (`id`);

--
-- Constraints for table `super_agents`
--
ALTER TABLE `super_agents`
  ADD CONSTRAINT `fk_vendor` FOREIGN KEY (`vendor`) REFERENCES `vendors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
