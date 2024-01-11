/* ******************************* Plug ****************************** */

CREATE TABLE `plug` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `prise_type_ef` boolean,
  `prise_type_2` boolean,
  `prise_type_combo_ccs` boolean,
  `prise_type_chademo` boolean,
  `prise_type_autre` boolean
);

/* ******************************* Station ****************************** */

CREATE TABLE `station` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom_station` varchar(150),
  `localisation` varchar(150),
  `condition_acces` varchar(50),
  `horaires` varchar(255),
  `id_station_itinerance`varchar(150)
 
);

/* ******************************* Terminal ****************************** */

CREATE TABLE `terminal` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom_operateur` VARCHAR(255),
  `puissance_nominale` int,
  `plug_id` int,
  `station_id` int,
  `status` boolean DEFAULT true,
  `longitude` varchar(255),
  `latitude` varchar(50),
  FOREIGN KEY (`plug_id`) 
  REFERENCES `plug` (`id`),
  FOREIGN KEY (`station_id`) 
  REFERENCES `station` (`id`)
);

/* ******************************* Reservation ****************************** */

CREATE TABLE `reservation` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL,
  `station_id` int NOT NULL,
  FOREIGN KEY (`station_id`)
   REFERENCES `station` (`id`)
);

/* ******************************* Station_Reservation ****************************** */

CREATE TABLE `station_reservation` (
  `station_id` int,
  `reservation_id` int,
  FOREIGN KEY (`station_id`)
   REFERENCES `station` (`id`),
   FOREIGN KEY (`reservation_id`)
   REFERENCES `reservation` (`id`)
);

/* ******************************* User ****************************** */

CREATE TABLE `user` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(25),
  `lastname` varchar(25),
  `nickname` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `city` varchar(255),
  `register_date` timestamp NOT NULL,
  `is_admin` boolean NOT NULL DEFAULT false,
  `reservation_id` int,
  FOREIGN KEY (`reservation_id`)
   REFERENCES `reservation` (`id`)
);

/* ******************************* Message ****************************** */

CREATE TABLE `message` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int ,
  `content` text NOT NULL,
  `received` datetime NOT NULL,
  FOREIGN KEY (`user_id`)
   REFERENCES `user` (`id`)
);
