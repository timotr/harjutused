In this project, we try an ORM framework and learn what parts an ORM includes.

The teacher will help you go through all the steps and fill in the missing knowledge in the classes (you may need to ask for help).
If you don't know some of those words, you should learn about them by searching the web or asking the teacher or ChatGPT.

Completing this task should take you 6-12 hours.

You have to know:
- What is migration? Ask ChatGPT: "What is migration in a database context?"
- What is database schema? It is tables, columns, and data types you want to store in the database.
- How to install database service software
- How to create a new database/schema using the database client software.
- How to execute JavaScript script files from the command line.

Main goal:
We want to test if the Drizzle ORM is suitable library for most apps.
Drizzle ORM should help us create schemas and migrations and execute queries (create, read, update, and delete).

To use ORM query builder, we create a script to insert a player into the database. It also would be a good idea to make a small prototype web server in Express.js and show a user a web form to create a player.

When you create a new database, it is empty. When using the migrations technique, you must generate database SQL files using automated script. Drizzle has built-in tools for generating SQL files based on schema files.
After you have generated the SQL file (a migration), you have to apply this migration to the database using your migrate.js script. Drizzle has a function for that - find it from the manual.

High-level steps:
1. Install database server software (if you don't have it already). For example, PostgreSQL or MySQL. Create empty database/schema using GUI tool (pgAdmin, MySQL Workbench).
2. Create a new Node project with modules style import. 
3. Install Drizzle ORM (you can translate TypeScript to regular JavaScript - it may be easier for you)
4. Create a schema file based on the football club. Read the Drizzle manual on how to put together a schema file.
5. Create the first migration using the Drizzle command line tool. Store it in package.json scripts for quick access.
6. Run the first migration to create tables in the database.
7. Create a new script to insert one player into the database using the Drizzle query builder.
8. Create an Express.js web server. Create an HTML form to create a new player and print out all the players into the HTML response of the web server.
