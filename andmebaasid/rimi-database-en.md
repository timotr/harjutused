### Setup database and import data

1. We are using MySQL database for this one, open MySQL Workbench to query data. User: root   pw: Passw0rd
(You can use another graphical interface for this database or even MariaDB if you are doing it at home or on a laptop)
2. Create schema for the database, charset utf8mb4.
Double-click on the schema name to make it active.
3. Download the [rimi-database20231127.zip](https://github.com/timotr/harjutused/blob/main/andmebaasid/rimi-database20231127.zip), unzip it into a new folder
4. Import database (Toolbar > Server > Import data)
5. Check out what tables there are and what they contain. There is a "select" button at the end of the table name when you hover the name.

### Tasks you need to do

This is R̸̜̝͒ͪÎ̷̯̩͍͙͔̫͙̦ͦͥM̾̓͏͇͇I͈͙̟̳̣̭ͤ́ database from the alternate universe. Based on my intel, it seems there is only one shop in Tallinn. Your job is to analyze what's going on there.
Keep all the SQL-s you write, you need them in the future when we have more tasks on this database.

1. To get started first find out how many orders are linked with the only shop in Tallinn. ID for this shop is 74. (SELECT, COUNT, WHERE)
2. Then how many of those orders were made in the last year 2022-2023? (SELECT, COUNT, WHERE)
3. Try to find out how many shops are in Viljandi. (SELECT, COUNT, JOIN address, WHERE)
4. This one is hard. Let's figure out in what city there are most of the shops. (SELECT, JOIN address, GROUP BY, ORDER BY)

Send me the SQL queries you wrote via email.

Here are the answers encoded in base64 if you want to check your results:

  MS4gODA3CjIuIDMxMQozLiAzCjQuIFRvcCA0IGFyZSBUYXJ0dSwgSsO1Z2V2YSwgVMO1cnZhLCBBbnRzbGE=
