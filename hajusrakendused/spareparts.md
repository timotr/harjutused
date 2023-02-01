# Exercise 2 - HTTP API for car parts

## This exercise can be divided into 4 parts:
* Read data from CSV file to the memory
* Send data back in JSON format as is
* Filter/search spare parts using serial number or part name
* Extra points for pagination and sorting

## Description
Company is using some older inventory software which can only export products in CSV format.
Our goal is to make API for our business partners so they can check if we have some specific spare parts in our warehouse and for what price.
CSV is exported every morning with fresh data and needs to be loaded into API.
Data file can be over 600Mb. Best is to read it once into the memory and keep the web server running.
This way we don't spend extra CPU time to read data from disk and parse during user requests.

Choose your own programming language, framework and endpoint name.

In order to solve the task, you have to ask the teacher additional questions, the description deliberately does not contain all the information.

## Assessment
 - Grade 3 Application is able to parse file and send it back in JSON
 - Grade 4 Application is able to filter/search spare parts by name or serial number
 - Grade 5 Application is able to paginate results, 30 results per page
 - Extra: Try to sort results by column, for example sort by price - cheapest first

## Example endpoints for filtering, sorting and pagination
Base endpoint can be for example:
  localhost:3300/spare-parts

Pagination could work using query parameters:
  localhost:3300/spare-parts?page=2

Search can be separated by name and serial number:
  localhost:3300/spare-parts?name=polt
  localhost:3300/spare-parts?sn=9745224452
  
Or combined like:
  localhost:3300/spare-parts/search/(search keywork here, both 9745224452 and "polt" are valid inputs)
  
Search result should be also paginated:
  localhost:3300/spare-parts?name=polt&page=2

Sorting by column name (remember to use entire dataset when sorting, not just paged results):
  localhost:3300/spare-parts?sort=price
  
Sort in reverse order by adding `-` symbol in front of column name:
  localhost:3300/spare-parts?sort=-price
