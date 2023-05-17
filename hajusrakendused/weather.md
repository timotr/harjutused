# Exercise 1 - Tallinn weather predictions using Yr.no API

We want to make a minimal application that asks for the weather forecast with one HTTP request and prints the data (time and air temperature) from it to the screen.
Can be done in any programming language of your choice. The date and time does not need to be processed, print as it comes from the JSON.

For example, like this:

    2022-09-17T09:00:00 19C
    2022-09-17T10:00:00 20C
    2022-09-17T11:00:00 19C
    ...

The goal is to remind how to make an HTTP request and read the response in JSON format.
If you make it as a C# project, it is not necessary to upload the entire project, the file where the data is read is sufficient, e.g. Program.cs in the case of the console app.
Ideally, you could present the work during the class/lesson.

You can get Yo.no API endpoint address by searching "yr.no api" from web/Google and click "Get started" > "Start here" on the site.
You want to make request to /compact endpoint with Tallinn coordinates on query parameters.

In order to solve the task, you have to ask the teacher additional questions, the description deliberately does not contain all the information.

## Assessment
 - Grade 3 Application shows current temperature
 - Grade 4 Application shows upcoming temperature forecast (min 3h)
 - Grade 5 Application shows upcoming temperature forecast using loop

### What I expect you to already know about programming:
* variables
* for loop
* how to access array/list data type elements
* how to access object/Dictionary/HashMap/Map data type elements
* how to parse JSON data (serializing)
* how to print data on the screen

### What you might need to learn:
* what are **HTTP client libraries**
* how to include **HTTP headers**
* what are **search query parameters**
* how to install third-party libraries using **package manager**
* what are **latitude longitude coordinates**

## How to submit
You can present the work during class/lesson or submit it through Teams Assigments
