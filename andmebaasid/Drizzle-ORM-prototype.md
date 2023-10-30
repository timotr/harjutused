This is a summary of the project to try out ORM.
Teacher will help you to go through all the steps and fill in the missing knowledge in the classes (you may need to ask for help).
If you don't know some of those words you should learn about them by searching from web or asking from teacher or ChatGPT.

Completing this task should take you 4-8 hours.

You have to know:
- What is migration. Ask ChatGPT "What is migration in database context?"
- What is database schema. It is tables, columns and data types you want to store in the database.
- How to install database software and how to create new empty database/schema using the software.
- How to execute JavaScript script files from command line.

Main goal:
We want to try out is Drizzle ORM a good open-source library for JavaScript.
Drizzle ORM should help us with creating schemas and migrations and executing queries (create, read, update and delete).

To test ORM commands we create a script to insert a player to the database. And it also would be good idea to make small prototype web server in Express.js and show an user a web form to create player.

When you create new database it is empty. When using migrations technique you have to generate database SQL files using some automated script.
Drizzle has built-in tools for generating SQL files based on schema files.
After you generated SQL file (a migration) then you have to apply this migration to the database using your migrate.js script. Drizzle has function for that too.

High-level steps:
1. Install database server software (if you don't have it already). For example PostgreSQL or MySQL. Create empty database/schema using GUI tool (pgAdmin, MySQL Workbench).
2. Create new Node project with modules style import. 
3. Install Drizzle ORM (you can translate TypeScript to regular JavaScript - it may be easier for you)
4. Create schema file based on football club. Read Drizzle manual how to put together schema file.
5. Create first migration using Drizzle command line tool. Store it in package.json scripts for quick access.
6. Run the first migration to create tables in the database.
7. Create new script to insert one player into the database using Drizzle query builder.
8. Create Express.js web server. Create an HTML form to create new player and print out all the players into HTML response of the web server.
