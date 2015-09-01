-- 28/08/58
ALTER TABLE `MAS_SYMBOL` ADD `IS_DW` BOOLEAN NOT NULL AFTER `IS_USE`;

ALTER TABLE `super_stock_db`.`MAS_SYMBOL` 
CHANGE COLUMN `IS_USE` `IS_USE` TINYINT(1) NOT NULL DEFAULT 1 COMMENT '' ;

ALTER TABLE `MAS_SYMBOL` ADD `market` VARCHAR(20) NULL DEFAULT NULL AFTER `SYMBOL`, ADD `IS_SET` BOOLEAN NOT NULL AFTER `market`;

ALTER TABLE `super_stock_db`.`mas_symbol` 
CHANGE COLUMN `ID` `ID` INT(11) NOT NULL AUTO_INCREMENT COMMENT '' ,
CHANGE COLUMN `MARKET` `MARKET` VARCHAR(20) NOT NULL COMMENT '' ,
ADD PRIMARY KEY (`ID`)  COMMENT '';

ALTER TABLE `mas_symbol` ADD `IS_W` BOOLEAN NOT NULL AFTER `IS_USE`;

-- 29/08/58
ALTER TABLE `super_stock_db`.`users` 
ADD UNIQUE INDEX `username_UNIQUE` (`username` ASC)  COMMENT '';