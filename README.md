# zypher_manager

A library that provides predefined functions for file system operations making file managing easy in javascript.

## Installation

To install the library, use npm:

```bash
npm install zypher-manager@latest
```

<h2 align="center">Now it's easy to manage files using JavaScript with Zypher!</h2>
<h1>Usage</h1>

```js
const manager = require("zypher-manager");
// Create a file
manager.CreateFile("test.js");

// Create a directory
manager.CreateDir("Test");
```

<h1>API</h1>
<h3>createFile(filepath)</h3>
<span>Create a new file with the given file path.</span>

<h3>renameFile(oldName,newName)</h3>
<span>Rename a file name with the given name.</span>

<h3>deleteFile(filepath)</h3>
<span>Delete a file with the given file path.</span>

<h3>readFileData(filepath)</h3>
<span> Reads the data from a given file and return data.</span>

<h3>writeData(filepath,data)</h3>
<span>Write's Data to a file with the provided name.</span>

<h3>createDir(filepath)</h3>
<span>Create's a new directory with the given directory name.</span>

<h3>deleteDir(filepath)</h3>
<span>Deletes a directory with the given directory path.</span>

<h3>is_existsFile(filepath)</h3>
<span>Checks whether the given file exists or not.</span>

<h3>is_existsData(filepath,data)</h3>
<span>Checks whether the given target data exists in the given file or not.</span>

<h3>is_existsDir(directorypath)</h3>
<span>Checks if a directory with the given directory name exists or not.</span>

<h3>insertDataAtEnd(filepath,data)</h3>
<span>Appends data at the end of the the given file.</span>

<h3>insertDataAtStart(filepath,data)</h3>
<span>Appends data at the start of the the given file.</span>

<h3>renameDir(oldPath,newPath)</h3>
<span>Renames the given directory path with the given new path.</span>

<h3>moveFile(sourcePath,destinationPath)</h3>
<span>Moves a file to a new given location.</span>

<h3>copyFile(sourcePath,destinationPath)</h3>
<span>Copy the file to the given destination file.</span>

<h3>copyDirectory(source,destination)</h3>
<span>Copy the directory to the given destination.</span>

<h3>copyFileToDirectory(sourcePath,destinationPath)</h3>
<span>Copy the file to the given destination.</span>

<h3>searchFileInDirectory(directoryPath,fileName)</h3>
<span>Searches for a file in the specified directory.</span>

<h3>createFiles(fileNames)</h3>
<span>Creates all the files from a given array of files of path type.</span>

<h3>getFileStats(filePath,sizeUnit)</h3>
<span>Creates all the files from a given array of files of path type.</span>

<h3>convertFileSize(sizeInBytes,unit)</h3>
<span>Converts the given number of bytes to a specified format.</span>

<h3>isValidSizeUnit(unit)</h3>
<span>Checks whether the given string is a valid file format string and returns true if it is valid otherwise false.</span>

<hr/>
<h1>License</h1>
<h3>This project is licensed under the MIT License.</h3>
