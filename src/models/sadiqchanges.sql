DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `drivers`(IN `_query_type` VARCHAR(10), IN `_driver_id` INT, IN `_name` VARCHAR(50), IN `_nin` INT, IN `_phone` VARCHAR(20), IN `_email` VARCHAR(50), IN `_address` VARCHAR(50), IN `_dob` DATE, IN `_state` VARCHAR(50), IN `_lga` VARCHAR(50), IN `_next_of_kin` VARCHAR(50), IN `_vehicle_id` INT)
BEGIN
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
        ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `drivers`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `drivers`
        WHERE name LIKE CONCAT('%',_name,'%') OR nin  LIKE CONCAT('%',_nin,'%')  OR email  LIKE CONCAT('%',_email,'%') ;
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
DELIMITER ;



DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `vehicles_registration`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_owners_name` VARCHAR(50), IN `_owners_address` VARCHAR(50), IN `_owners_phone` VARCHAR(20), IN `_owners_email` VARCHAR(50), IN `_owners_state` VARCHAR(50), IN `_owners_lga` VARCHAR(50), IN `_owners_dob` DATE, IN `_vehicle_id` INT, IN `_owner_id` INT, IN `_engine_no` VARCHAR(50), IN `_plate_no` VARCHAR(500), IN `_purchased_date` DATE, IN `_registered_lg` VARCHAR(50))
BEGIN
    IF _query_type = 'insert' THEN
        INSERT INTO `vehicle_owner` (
            owners_name,
            owners_address,
            owners_phone,
            owners_email,
            owners_state,
            owners_lga,
            owners_dob
        ) VALUES (
            _owners_name,
            _owners_address,
            _owners_phone,
            _owners_email,
            _owners_state,
            _owners_lga,
            _owners_dob
        );
         INSERT INTO `vehicle_registration` (
           owner_id,
           engine_no,
            plate_no,
            purchased_date,
            registered_lg 
        ) VALUES (
           LAST_INSERT_ID(),
            _engine_no,
            _plate_no,
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
        WHERE owners_name LIKE CONCAT('%',_owners_name,'%') OR owners_address  LIKE CONCAT('%',_owners_address,'%')  OR owners_phone  LIKE CONCAT('%',_owners_phone,'%') ;
    
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `vehicle_owner`
        WHERE id = _id;
    END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `vendors`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_vendor_name` VARCHAR(255), IN `_vendor_ofiice_address` VARCHAR(255), IN `_vendor_state` VARCHAR(255), IN `_vendor_lga` VARCHAR(255), IN `_vendor_org_phone` VARCHAR(255), IN `_vendor_org_email` VARCHAR(255), IN `_vendor_tin` VARCHAR(255), IN `_vendor_profile` VARCHAR(255), IN `_vendor_bn_rc` VARCHAR(255), IN `_contact_name` VARCHAR(255), IN `_contact_address` VARCHAR(255), IN `_contact_dob` DATE, IN `_contact_state` VARCHAR(255), IN `_contact_password` VARCHAR(255), IN `_contact_phone` VARCHAR(255), IN `_contact_email` VARCHAR(255), IN `_contact_lga` VARCHAR(255), IN `_contact_vendor` INT)
BEGIN
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
      ELSEIF _query_type ='select' THEN
        SELECT * FROM `vendors`
        WHERE id=_id;
        ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `vendors`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `vendors`
        WHERE vendor_name LIKE CONCAT('%',_vendor_name,'%') OR vendor_org_phone  LIKE CONCAT('%',_vendor_org_phone,'%')  OR vendor_bn_rc  LIKE CONCAT('%',_vendor_bn_rc,'%') ;
    ELSEIF _query_type ='update' THEN
        UPDATE `vendors` SET  
            vendor_contact_name = IFNULL(_vendor_name,vendor_name),
            vendor_office_address = IFNULL(_vendor_office_address,vendor_office_address),
            vendor_state = IFNULL(_vendor_state,vendor_state),
            vendor_lg = IFNULL(_vendor_lg,vendor_lg),
            vendor_org_phone = IFNULL(_vendor_org_phone,vendor_org_phone),
            vendor_org_email = IFNULL(_vendor_org_email,vendor_org_email),
            vendor_tin = IFNULL(_vendor_tin,vendor_tin),
            vendor_profile = IFNULL(_vendor_profile,vendor_profile),
            vendor_bn_rc = IFNULL(_vendor_bn_rc,vendor_bn_rc)
        WHERE  
            id = _id;   
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `vendors`
        WHERE id = _id;
    END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `agent`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(255), IN `_phone_no` VARCHAR(20), IN `_email` VARCHAR(255), IN `_address` VARCHAR(255), IN `_super_agent` VARCHAR(255), IN `_state` VARCHAR(100), IN `_lga` VARCHAR(100))
BEGIN
    IF _query_type = 'insert' THEN
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
        ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `agent`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `agent`
        WHERE phone_no LIKE CONCAT('%',_phone_no,'%') OR email  LIKE CONCAT('%',_email,'%')  OR name  LIKE CONCAT('%',_name,'%') ;
    ELSEIF _query_type ='update' THEN
        UPDATE `agent` SET  
            name = IFNULL(_name,name),
            phone_no =IFNULL(_phone_no,phone_no),
            email = IFNULL(_email,email),
            address = IFNULL(_address,address),
            super_agent = IFNULL(_super_agent,super_agent),
            state = IFNULL(_state,state),
            lga = IFNULL(_lga,lga)
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agent`
        WHERE id = _id;

    END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `super_agent`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(50), IN `_phone` VARCHAR(50), IN `_email` VARCHAR(50), IN `_address` VARCHAR(50), IN `_vendor` INT, IN `_state` VARCHAR(50), IN `_lga` VARCHAR(100), IN `_nin` VARCHAR(15), IN `_dob` DATE)
BEGIN
    IF _query_type = 'insert' THEN
        INSERT INTO `super_agent` (
            name,
            phone,
            email,
            address,
            vendor,
            state,
            lga,
            nin,
            dob
        ) VALUES (
            _name,
            _phone,
            _email,
            _address,
            _vendor,
            _state,
            _lga,
            _nin,
            _dob
        );
        
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `super_agent`
        WHERE id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `super_agent`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `super_agent`
        WHERE _phone LIKE CONCAT('%',_phone,'%') OR email  LIKE CONCAT('%',_email,'%')  OR name  LIKE CONCAT('%',_name,'%') ;
    ELSEIF _query_type ='update' THEN
        UPDATE super_agent SET  
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
        DELETE FROM agent
        WHERE id = _id;

    END IF;
END$$
DELIMITER ;