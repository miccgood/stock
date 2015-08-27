CREATE TABLE `super_stock_db`.`mas_side` (
  `ID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `SIDE_CODE` INT NULL COMMENT '',
  `SIDE_NAME` VARCHAR(45) NULL COMMENT '',
  PRIMARY KEY (`ID`)  COMMENT '',
  UNIQUE INDEX `SIDE_CODE_UNIQUE` (`SIDE_CODE` ASC)  COMMENT '');
  
  
CREATE TABLE `super_stock_db`.`mas_broker` (
  `ID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `BROKER_CODE` VARCHAR(45) NULL COMMENT '',
  `BROKER_NAME` VARCHAR(45) NULL COMMENT '',
  PRIMARY KEY (`ID`)  COMMENT '',
  UNIQUE INDEX `BROKER_CODE_UNIQUE` (`BROKER_CODE` ASC)  COMMENT '');
  
  
CREATE TABLE `super_stock_db`.`data_log` (
  `ID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `SIDE_ID` INT NOT NULL COMMENT '',
  `SYMBOL_ID` VARCHAR(45) NOT NULL COMMENT '',
  `VOLUME` INT NOT NULL COMMENT '',
  `PRICE` DECIMAL(10,4) NOT NULL COMMENT '',
  `AMOUNT` DECIMAL(10,4) NOT NULL COMMENT '',
  `VAT` DECIMAL(10,4) NULL COMMENT '',
  `NET_AMOUNT` DECIMAL(10,4) NOT NULL COMMENT '',
  `DATE` DATE NOT NULL COMMENT '',
  `BROKER_ID` VARCHAR(45) NOT NULL COMMENT '',
  `IS_DW` TINYINT(1) NOT NULL COMMENT '',
  `CREATED_AT` DATE NULL COMMENT '',
  `CREATED_BY` VARCHAR(45) NULL COMMENT '',
  `UPDATED_AT` DATE NULL COMMENT '',
  `UPDATED_BY` VARCHAR(45) NULL COMMENT '',
  `USER_ID` INT NOT NULL COMMENT '',
  PRIMARY KEY (`ID`)  COMMENT '');

  
  CREATE TABLE `super_stock_db`.`log_map` (
  `ID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `MAP_SRC` INT NULL COMMENT '',
  `MAP_DESC` INT NULL COMMENT '',
  `MAP_VOL` INT NULL COMMENT '',
  PRIMARY KEY (`ID`)  COMMENT '',
  UNIQUE INDEX `MAP_SRC_UNIQUE` (`MAP_SRC` ASC)  COMMENT '',
  UNIQUE INDEX `MAP_DESC_UNIQUE` (`MAP_DESC` ASC)  COMMENT '',
  UNIQUE INDEX `MAP_VOL_UNIQUE` (`MAP_VOL` ASC)  COMMENT '',
  CONSTRAINT `MAP_SRC`
    FOREIGN KEY (`MAP_SRC`)
    REFERENCES `super_stock_db`.`data_log` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `MAP_DESC`
    FOREIGN KEY (`MAP_DESC`)
    REFERENCES `super_stock_db`.`data_log` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
