# Find in files

## This exercise can be divided into 3 parts

1. Read one file and search for the input string.
2. Read all files from a folder and search for the input string.  
Make the code in the first part into a function that takes the file path in as an argument - this way you can reuse your previous code.  
Then get a list of all file names in a folder. Combine a loop and the function from step 1.  
3. Read all files from all folders and search for the input string.  
Reuse step 2 code by making another function that takes the folder path in as an argument.  
Improve the function to run itself recursively to include files in sub-folders.  
Then run this function with the first folder path as input.  

## How the result looks like

Run the application using the command line. The output should be the list of file paths and the number of how many times the string was in the file. And at the end show total matches.  
For example:
```
C:\\Users\\timo\\Desktop\\example-folders\file1.txt 2
C:\\Users\\timo\\Desktop\\example-folders\file2.txt 0
C:\\Users\\timo\\Desktop\\example-folders\file3.txt 7
C:\\Users\\timo\\Desktop\\example-folders\folder1\file1.txt 1
C:\\Users\\timo\\Desktop\\example-folders\folder1\file2.txt 1
C:\\Users\\timo\\Desktop\\example-folders\folder1\sub1\file1.txt 3
Total: 14
```

## What to search for?

To test your program, you can search for "test". There should be a total of 21 matches in all files and 2 matches in the first file (file1.txt) in the root directory/folder.

## Assessment

 - Grade 3 Application can find the string in a single file and return a match count.
 - Grade 4 Application can find the string from multiple files in a single folder and return file names with match count.
 - Grade 5 Application can find the string from multiple files in nested folders and return file paths with match count.
 
## What I expect you already know

- How to find out if there is a substring in a string
- How to create and run functions with arguments
- How to run Node application from the command line
- What is a file path
- How to read a single file into a string
- What web pages to use for searching for information and examples

## What you might need to learn

- What is recursion and how to apply it
- How to get a list of all files and folders in the folder
