"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  convertFileSize: () => convertFileSize,
  copyDirectory: () => copyDirectory,
  copyFile: () => copyFile,
  copyFileToDirectory: () => copyFileToDirectory,
  createDir: () => createDir,
  createFile: () => createFile,
  createFiles: () => createFiles,
  deleteDir: () => deleteDir,
  deleteFile: () => deleteFile,
  getFileStats: () => getFileStats,
  getFilesInDirectory: () => getFilesInDirectory,
  insertDataAtEnd: () => insertDataAtEnd,
  insertDataAtStart: () => insertDataAtStart,
  isValidSizeUnit: () => isValidSizeUnit,
  is_existsData: () => is_existsData,
  is_existsDir: () => is_existsDir,
  is_existsFile: () => is_existsFile,
  moveFile: () => moveFile,
  readFileData: () => readFileData,
  renameDir: () => renameDir,
  renameFile: () => renameFile,
  searchFileInDirectory: () => searchFileInDirectory,
  writeData: () => writeData
});
module.exports = __toCommonJS(src_exports);

// src/functions.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
function createFile(fileName) {
  if (typeof fileName !== "string") {
    throw new Error("File name must be a string.");
  }
  if (!fileName.trim()) {
    throw new Error("File name cannot be empty.");
  }
  if (fs.existsSync(fileName)) {
    throw new Error(`File ${fileName} already exists.`);
  }
  try {
    fs.writeFileSync(fileName, "content");
  } catch (error) {
    throw new Error(`Error creating file: ${error.message}`);
  }
}
function renameFile(oldName, newName) {
  try {
    if (!fs.existsSync(oldName)) {
      throw new Error(`File ${oldName} does not exist.`);
    }
    const isDirectory = fs.statSync(oldName).isDirectory();
    if (isDirectory) {
      throw new Error(`${oldName} is a directory. Cannot rename a directory.`);
    }
    if (newName === null || newName === void 0) {
      throw new Error(`New file name cannot be null or undefined.`);
    }
    if (typeof newName !== "string") {
      throw new Error(`Invalid file name type. Expected a string.`);
    }
    fs.renameSync(oldName, newName);
  } catch (error) {
    throw new Error(`Error renaming file "${oldName}": ${error.message}`);
  }
}
function deleteFile(fileName) {
  if (typeof fileName !== "string") {
    throw new Error(
      `Invalid file name. Expected a string, but received ${typeof fileName}.`
    );
  }
  if (!fs.existsSync(fileName)) {
    throw new Error(`File ${fileName} does not exist.`);
  }
  try {
    const stat = fs.statSync(fileName);
    if (!stat.isFile()) {
      throw new Error(`Path ${fileName} points to a directory, not a file.`);
    }
    fs.unlinkSync(fileName);
  } catch (error) {
    throw new Error(`Error deleting file "${fileName}": ${error.message}`);
  }
}
function writeData(fileName, data) {
  try {
    if (!path.isAbsolute(JSON.stringify(fileName))) {
      throw new Error("Invalid file path. Please provide an absolute path.");
    }
    const stats = fs.statSync(fileName);
    if (!stats.isFile()) {
      throw new Error(`The path "${fileName}" is not a valid file.`);
    }
    if (typeof data !== "string") {
      throw new Error("Invalid data type. Please provide a string.");
    }
    fs.writeFileSync(fileName, data);
    console.log(`Data successfully written to "${fileName}".`);
  } catch (error) {
    throw new Error(`Error writing data to "${fileName}": ${error.message}`);
  }
}
function createDir(directoryName) {
  if (typeof directoryName !== "string" || !directoryName.trim()) {
    throw new Error("Invalid directory name. Please provide a valid string.");
  }
  fs.mkdir(directoryName, { recursive: true }, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        throw new Error(`Invalid path: ${directoryName}. Path does not exist.`);
      } else if (err.code === "EEXIST") {
        throw new Error(`Directory already exists at path: ${directoryName}.`);
      } else if (err.code === "ENOTDIR") {
        throw new Error(`Invalid path: ${directoryName}. Not a directory.`);
      } else {
        throw new Error(
          `Error creating directory at ${directoryName}: ${err.message}`
        );
      }
    }
  });
}
function is_existsDir(directoryPath) {
  try {
    fs.statSync(directoryPath);
    if (!fs.lstatSync(directoryPath).isDirectory()) {
      throw new Error(`Path "${directoryPath}" is not a directory.`);
    }
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    if (error instanceof TypeError && error.message.includes("null")) {
      throw new Error("The provided path is null.");
    } else if (error instanceof TypeError && error.message.includes("string")) {
      throw new Error("The provided path is not a string.");
    } else {
      throw error;
    }
  }
}
function deleteDir(directoryPath) {
  if (typeof directoryPath !== "string" || directoryPath === null) {
    throw new Error(
      "Invalid directory path. Please provide a valid string path."
    );
  }
  if (fs.existsSync(directoryPath)) {
    if (!fs.lstatSync(directoryPath).isDirectory()) {
      throw new Error(`Path '${directoryPath}' is not a directory.`);
    }
    fs.readdirSync(directoryPath).forEach((file, index) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
  } else {
    throw new Error(`Directory '${directoryPath}' does not exist.`);
  }
}
function insertDataAtEnd(filePath, dataToAppend) {
  try {
    if (typeof filePath !== "string") {
      throw new Error("Invalid file path. Path must be a string.");
    }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      throw new Error(
        "Invalid file path. Path should point to a directory, not a file."
      );
    }
    if (dataToAppend == null) {
      throw new Error("Data to append is null or undefined.");
    }
    if (typeof dataToAppend !== "string") {
      throw new Error("Invalid data type. Data must be a string.");
    }
    fs.appendFile(filePath, dataToAppend, (err) => {
      if (err) {
        throw new Error(`Error appending data to the file: ${err.message}`);
      }
    });
  } catch (error) {
    throw error;
  }
}
function insertDataAtStart(filePath, dataToAppend) {
  try {
    if (typeof filePath !== "string" || filePath.trim() === "") {
      throw new Error("Invalid file path");
    }
    if (fs.statSync(filePath).isFile()) {
      throw new Error("Path points to a file, not a directory");
    }
    if (dataToAppend === null || typeof dataToAppend !== "string") {
      throw new Error("Invalid data to append. It must be a non-null string.");
    }
    fs.readFile(filePath, "utf8", (readErr, existingData) => {
      if (readErr) {
        throw new Error("Error reading file: " + readErr.message);
      }
      const newData = Comment + JSON.stringify(dataToAppend) + existingData;
      fs.writeFile(filePath, newData, "utf8", (writeErr) => {
        if (writeErr) {
          throw new Error("Error writing to file: " + writeErr.message);
        }
      });
    });
  } catch (error) {
    throw new Error("Error in insertDataAtStart: " + error.message);
  }
}
function is_existsData(filePath, targetData) {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error("Invalid path: " + filePath);
    }
    const stats = fs.statSync(filePath);
    if (!stats.isDirectory()) {
      throw new Error(
        "Invalid path: " + filePath + " is a file, not a directory."
      );
    }
    if (targetData === null || typeof targetData !== "string") {
      throw new Error("Invalid target data: " + targetData);
    }
    const fileContent = fs.readFileSync(filePath, "utf8");
    const dataExists = fileContent.includes(JSON.stringify(targetData));
    return dataExists;
  } catch (error) {
    throw new Error("Error reading file: " + error.message);
  }
}
function is_existsFile(filePath) {
  try {
    if (typeof filePath !== "string") {
      throw new Error("Invalid path: Path must be a string.");
    }
    if (!filePath.trim()) {
      throw new Error("Invalid path: Path cannot be empty.");
    }
    fs.accessSync(filePath, fs.constants.F_OK);
    const stats = fs.statSync(filePath);
    if (!stats.isDirectory()) {
      throw new Error(
        "Invalid path: Path must point to a directory, not a file."
      );
    }
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("Error: File does not exist.");
    } else if (error.code === "EISDIR") {
      throw new Error("Error: Path must point to a file, not a directory.");
    } else {
      throw new Error(`Error checking file existence: ${error.message}`);
    }
    return false;
  }
}
function readFileData(filePath) {
  try {
    if (typeof filePath !== "string" || filePath.trim() === "") {
      throw new Error("Invalid file path");
    }
    if (!fs.existsSync(filePath)) {
      throw new Error("File does not exist");
    }
    const stats = fs.statSync(filePath);
    if (!stats.isFile()) {
      throw new Error("The provided path is not a file");
    }
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (error) {
    if (error instanceof Error) {
      throw `Error reading file: ${error.message}`;
    } else {
      throw "An unexpected error occurred while reading the file";
    }
  }
}
function renameDir(oldPath, newPath) {
  try {
    if (!oldPath || !newPath || typeof oldPath !== "string" || typeof newPath !== "string") {
      throw new Error("Invalid paths. Please provide valid string paths.");
    }
    if (!fs.existsSync(oldPath)) {
      throw new Error(`The directory at ${oldPath} does not exist.`);
    }
    if (!fs.statSync(oldPath).isDirectory()) {
      throw new Error(`The path ${oldPath} is not a directory.`);
    }
    if (fs.existsSync(newPath)) {
      throw new Error(
        `The directory at ${newPath} already exists. Choose a different destination.`
      );
    }
    fs.renameSync(oldPath, newPath);
    console.log(`Directory renamed successfully from ${oldPath} to ${newPath}`);
  } catch (error) {
    console.error(`Error renaming directory: ${error.message}`);
  }
}
function moveFile(sourcePath, destinationPath) {
  if (typeof sourcePath !== "string" || typeof destinationPath !== "string") {
    throw new Error("Source and destination paths must be strings.");
  }
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Source file '${sourcePath}' does not exist.`);
  }
  if (!fs.statSync(sourcePath).isFile()) {
    throw new Error(`Source '${sourcePath}' is not a valid file.`);
  }
  const destinationDirectory = destinationPath.split("/").slice(0, -1).join("/");
  if (!fs.existsSync(destinationDirectory)) {
    throw new Error(
      `Destination directory '${destinationDirectory}' does not exist.`
    );
  }
  try {
    fs.renameSync(sourcePath, destinationPath);
    console.log(
      `File moved successfully from ${sourcePath} to ${destinationPath}`
    );
  } catch (error) {
    throw new Error(`Error moving file: ${error.message}`);
  }
}
function copyFile(sourcePath, destinationPath) {
  if (typeof sourcePath !== "string" || typeof destinationPath !== "string") {
    throw new Error("Source and destination paths must be strings.");
  }
  if (!sourcePath || !destinationPath) {
    throw new Error(
      "Source and destination paths cannot be null or undefined."
    );
  }
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Source file '${sourcePath}' does not exist.`);
  }
  fs.readFile(sourcePath, "utf8", (err, data) => {
    if (err) {
      throw new Error(`Error reading the file: ${err}`);
    }
    fs.writeFile(destinationPath, data, "utf8", (err2) => {
      if (err2) {
        throw new Error(`Error writing to the file: ${err2}`);
      }
      console.log(
        `File copied successfully from ${sourcePath} to ${destinationPath}`
      );
    });
  });
}
function copyDirectory(source, destination) {
  if (typeof source !== "string" || typeof destination !== "string") {
    throw new Error("Source and destination must be strings.");
  }
  if (!fs.existsSync(source)) {
    throw new Error("Source directory does not exist.");
  }
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }
  const files = fs.readdirSync(source);
  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    try {
      if (fs.lstatSync(sourcePath).isDirectory()) {
        copyDirectory(sourcePath, destPath);
      } else {
        fs.copyFileSync(sourcePath, destPath);
      }
    } catch (error) {
      throw new Error(`Error copying ${file}: ${error.message}`);
    }
  });
}
function copyFileToDirectory(sourcePath, destinationPath) {
  try {
    if (typeof sourcePath !== "string" || sourcePath.trim() === "") {
      throw new Error("Invalid source path.");
    }
    if (!fs.existsSync(sourcePath)) {
      throw new Error("Source file does not exist.");
    }
    const sourceStats = fs.statSync(sourcePath);
    if (!sourceStats.isFile()) {
      throw new Error("Source is not a file.");
    }
    if (!fs.existsSync(path.dirname(JSON.stringify(destinationPath)))) {
      fs.mkdirSync(path.dirname(JSON.stringify(destinationPath)), {
        recursive: true
      });
    }
    const destinationStats = fs.statSync(
      path.dirname(JSON.stringify(destinationPath))
    );
    if (!destinationStats.isDirectory()) {
      throw new Error("Destination is not a directory.");
    }
    fs.copyFileSync(sourcePath, JSON.stringify(destinationPath));
    console.log("File copied successfully.");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
function getFilesInDirectory(directoryPath) {
  try {
    if (typeof directoryPath !== "string") {
      throw new Error(
        "Input must be a string representing the directory path."
      );
    }
    if (!fs.existsSync(directoryPath)) {
      throw new Error("Invalid directory path. Please provide a valid path.");
    }
    const files = fs.readdirSync(directoryPath);
    const fileNames = files.filter(
      (fileName) => fs.statSync(`${directoryPath}/${fileName}`).isFile()
    );
    return fileNames;
  } catch (error) {
    throw new Error(`Error in getFilesInDirectory: ${error.message}`);
  }
}
function searchFileInDirectory(directoryPath, fileName) {
  try {
    if (typeof directoryPath !== "string" || typeof fileName !== "string") {
      throw new Error("Both directoryPath and fileName must be strings.");
    }
    if (!fs.existsSync(directoryPath) || !fs.statSync(directoryPath).isDirectory()) {
      throw new Error("Invalid directory path.");
    }
    const files = fs.readdirSync(directoryPath);
    for (const file of files) {
      if (file === fileName) {
        return path.join(directoryPath, file);
      }
    }
    return null;
  } catch (error) {
    throw new Error(`Error searching for the file: ${error.message}`);
  }
}
function createFiles(fileNames) {
  try {
    if (!Array.isArray(fileNames)) {
      throw new Error("Input should be an array of file names.");
    }
    fileNames.forEach((fileName) => {
      createFile(fileName);
    });
  } catch (error) {
    throw new Error(`Error creating files: ${error.message}`);
  }
}
function getFileStats(filePath, sizeUnit = "kilobytes") {
  try {
    if (typeof filePath !== "string" || filePath.trim() === "") {
      throw new Error("Invalid file path. Please provide a valid string.");
    }
    if (!fs.existsSync(filePath)) {
      throw new Error("File does not exist. Please provide a valid file path.");
    }
    const stats = fs.statSync(filePath);
    const createdDate = stats.birthtime;
    const lastModifiedDate = stats.mtime;
    const fileSize = convertFileSize(stats.size, sizeUnit);
    const fileExtension = path.extname(filePath);
    const fileParentDirectory = path.dirname(filePath);
    const fileRelativePath = path.relative(process.cwd(), filePath);
    const fileAbsolutePath = path.resolve(filePath);
    return {
      createdDate,
      lastModifiedDate,
      fileSize,
      fileExtension,
      fileParentDirectory,
      fileRelativePath,
      fileAbsolutePath
    };
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}
function convertFileSize(sizeInBytes, unit = "kilobytes") {
  if (unit && typeof unit === "string") {
    if (isValidSizeUnit(unit)) {
      const units = {
        bytes: 1,
        kilobytes: 1024,
        megabytes: 1024 * 1024,
        gigabytes: 1024 * 1024 * 1024
      };
      const size = sizeInBytes / units[unit.toLowerCase()];
      return size.toFixed(2) + " " + unit.toUpperCase();
    } else {
      throw new Error(
        "Invalid size unit. Please use bytes, kilobytes, megabytes, or gigabytes."
      );
    }
  } else
    throw new Error(
      unit ? `Invalid unit type expected string reieved ${typeof unit}` : "unit is not specified"
    );
}
function isValidSizeUnit(unit) {
  const validUnits = ["bytes", "kilobytes", "megabytes", "gigabytes"];
  return validUnits.includes(unit.toLowerCase());
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convertFileSize,
  copyDirectory,
  copyFile,
  copyFileToDirectory,
  createDir,
  createFile,
  createFiles,
  deleteDir,
  deleteFile,
  getFileStats,
  getFilesInDirectory,
  insertDataAtEnd,
  insertDataAtStart,
  isValidSizeUnit,
  is_existsData,
  is_existsDir,
  is_existsFile,
  moveFile,
  readFileData,
  renameDir,
  renameFile,
  searchFileInDirectory,
  writeData
});
