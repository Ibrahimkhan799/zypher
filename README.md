# zypher

A library that provides predefined functions for file system operations.

## Installation

To install the library, use npm:

```bash
npm install zypher@latest
```

<h1 align="center">Now it's easy to manage files using JavaScript with Zypher!</h1>
<h1>Usage</h1>

```js
const FM = require("zypher");
// Create a file
FM.CreateFile("test.js");

// Create a directory
FM.CreateDir("Test");
```

<h1>API</h1>
<h3>CreateFile(filepath)</h3>
<span>Create a new file with the given file path.</span>

<h3>RenameFile(oldName,newName)</h3>
<span>Rename a file name with the given name.</span>

<h3>DeleteFile(filepath)</h3>
<span>Delete a file with the given file path.</span>

<h3>ReadFile(filepath)</h3>
<span> Reads the data from a given file and return data.</span>

<h3>WriteData(filepath,data)</h3>
<span>Write's Data to a file with the provided name.</span>

<h3>CreateDir(filepath)</h3>
<span>Create's a new directory with the given directory name.</span>

<h3>DeleteDir(filepath)</h3>
<span>Deletes a directory with the given directory path.</span>

<h3>Is_existsFile(filepath)</h3>
<span>Checks whether the given file exists or not.</span>

<h3>Is_existsData(filepath,data)</h3>
<span>Checks whether the given target data exists in the given file or not.</span>

<h3>Is_existsDir(directorypath)</h3>
<span>Checks if a directory with the given directory name exists or not.</span>

<h3>InsertDataAtEnd(filepath,data)</h3>
<span>Appends data at the end of the the given file.</span>

<h3>InsertDataAtStart(filepath,data)</h3>
<span>Appends data at the start of the the given file.</span>

<h3>RenameDir(oldPath,newPath)</h3>
<span>Renames the given directory path with the given new path.</span>

<h3>MoveFile(sourcePath,destinationPath)</h3>
<span>Moves a file to a new given location.</span>

<h3>CopyFile(sourcePath,destinationPath)</h3>
<span>Copy the file to the given destination file.</span>

<h3>CopyDirectory(source,destination)</h3>
<span>Copy the directory to the given destination.</span>

<h3>CopyFileToDirectory(sourcePath,destinationPath)</h3>
<span>Copy the file to the given destination.</span>

<h3>SearchFileInDirectory(directoryPath,fileName)</h3>
<span>Searches for a file in the specified directory.</span>

<h3>CreateFiles(fileNames)</h3>
<span>Creates all the files from a given array of files of path type.</span>

<h3>GetFileStats(filePath,sizeUnit)</h3>
<span>Creates all the files from a given array of files of path type.</span>

<h3>ConvertFileSize(sizeInBytes,unit)</h3>
<span>Converts the given number of bytes to a specified format.</span>

<h3>IsValidSizeUnit(unit)</h3>
<span>Checks whether the given string is a valid file format string and returns true if it is valid otherwise false.</span>

<hr/>
<h1>License</h1>
<br/>
<br/>
<h3>This project is licensed under the MIT License.</h3>
