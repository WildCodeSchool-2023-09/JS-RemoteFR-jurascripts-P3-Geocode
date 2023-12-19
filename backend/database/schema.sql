CREATE TABLE `terminal` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `station_id` int NOT NULL,
  `operator` boolean NOT NULL,
  `puissance_nominale` int,
  `plug_id` int,
  `status` boolean DEFAULT true
);

CREATE TABLE `message` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `content` text NOT NULL,
  `received` datetime NOT NULL
);

CREATE TABLE `station` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom_station` varchar(150),
  `localisation` varchar(150),
  `condition_acces` varchar(50),
  `horaires` varchar(30),
  `longitude` varchar(50),
  `latitude` varchar(50)
);

CREATE TABLE `user` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(25),
  `lastname` varchar(25),
  `nickname` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255),
  `register_date` timestamp NOT NULL,
  `is_admin` boolean NOT NULL DEFAULT false
);

CREATE TABLE `reservation` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL,
  `user_id` int NOT NULL,
  `station_id` int NOT NULL
);

CREATE TABLE `plug` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `serial` varchar(100) NOT NULL,
  `prise_type_ef` boolean,
  `prise_type_2` boolean,
  `prise_type_combo_ccs` boolean,
  `prise_type_chademo` boolean,
  `prise_type_autre` boolean
);

ALTER TABLE `terminal` ADD CONSTRAINT `terminal_FK` FOREIGN KEY (`station_id`) REFERENCES `station` (`id`);

CREATE TABLE `user_reservation` (
  `user_id` int,
  `reservation_user_id` int,
  PRIMARY KEY (`user_id`, `reservation_user_id`)
);

ALTER TABLE `user_reservation` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `user_reservation` ADD FOREIGN KEY (`reservation_user_id`) REFERENCES `reservation` (`user_id`);


CREATE TABLE `station_reservation` (
  `station_id` int,
  `reservation_station_id` int,
  PRIMARY KEY (`station_id`, `reservation_station_id`)
);

ALTER TABLE `station_reservation` ADD FOREIGN KEY (`station_id`) REFERENCES `station` (`id`);

ALTER TABLE `station_reservation` ADD FOREIGN KEY (`reservation_station_id`) REFERENCES `reservation` (`station_id`);


ALTER TABLE `message` ADD CONSTRAINT `message_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `terminal` ADD CONSTRAINT `plug_FK` FOREIGN KEY (`plug_id`) REFERENCES `plug` (`id`);

