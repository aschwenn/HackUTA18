#create schema HowdySprinkler;
use HowdySprinkler;

create table TheSprinkler(
Sprinkler_id int not null auto_increment,
Sprinkler_Name varchar(35) not null, 
amount int not null,
period_min int not null,
scheduled_sprink boolean,
moisture_read int,
water_immediate boolean not null,
immediate_amount int,
tank_low boolean,
constraint TheSprinkler_PK primary key(Sprinkler_id))
