# Find in files

## This exercise can be divided into 3 parts

1. Read one file and search for input string.
2. Read all files from a folder and search for input string.  
Make the code in the first part into a function that takes file path in as an argument - this way you can reuse your previous code.  
Then get a list of all file names in a folder. Combine a loop and the function from step 1.  
3. Read all files from all folders and search for input string.  
Reuse step 2 code by making another function that takes folder path in as an argument.
Improve the function to run itself recursively also for sub-folders.
Then run this function with first folder path as a input.

## How the result looks like

Run the application using command line. Output should be the list of file paths and a number of how many times string was in the file. And at the end show total matches.
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

To test your program you can search for "test". There should be total of 21 matches in all files and 2 matches in the first file in the root directory (folder).

## Assessment
 - Grade 3 Application is able to find string in a single file and return match count.
 - Grade 4 Application is able to find string from multiple files in a single folder and return file names with match count.
 - Grade 5 Application is able to find string from multiple files in nested folders and return file paths with match count.
 


