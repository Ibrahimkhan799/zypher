// src/functions.ts
import * as fs from "fs";
import * as path from "path";
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
    return true;
  } catch (error) {
    return false;
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
    return true;
  } catch (error) {
    return false;
  }
}
function writeData(fileName, data) {
  try {
    if (!fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, "");
    }
    const stats = fs.statSync(fileName);
    if (!stats.isFile()) {
      throw new Error(`The path "${fileName}" is not a valid file.`);
    }
    if (typeof data !== "string") {
      throw new Error("Invalid data type. Please provide a string.");
    }
    fs.writeFileSync(fileName, data);
    return true;
  } catch (error) {
    console.error(`Error writing data to "${fileName}": ${error.message}`);
    return false;
  }
}
function createDir(directoryName) {
  if (typeof directoryName !== "string" || !directoryName.trim()) {
    throw new Error("Invalid directory name. Please provide a valid string.");
  }
  fs.mkdir(directoryName, { recursive: true }, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        return false;
      } else if (err.code === "EEXIST") {
        return false;
      } else if (err.code === "ENOTDIR") {
        return false;
      } else {
        return false;
      }
    }
    return true;
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
    return true;
  } else {
    return false;
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
        return false;
      }
    });
    return true;
  } catch (error) {
    return false;
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
    return true;
  } catch (error) {
    return false;
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
    return false;
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
      return false;
    } else if (error.code === "EISDIR") {
      throw new Error("Error: Path must point to a file, not a directory.");
    } else {
      throw new Error(`Error checking file existence: ${error.message}`);
    }
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
  } catch (error) {
    return false;
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
    return true;
  } catch (error) {
    return false;
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
      return false;
    }
    fs.writeFile(destinationPath, data, "utf8", (err2) => {
      if (err2) {
        return false;
      }
      return true;
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
      return true;
    } catch (error) {
      return false;
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
    return true;
  } catch (error) {
    return false;
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
    return false;
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
      return false;
    }
    fileNames.forEach((fileName) => {
      createFile(fileName);
    });
    return true;
  } catch (error) {
    return false;
  }
}
function getFileStats(filePath, sizeUnit = "kilobytes") {
  try {
    if (typeof filePath !== "string" || filePath.trim() === "") {
      return false;
    }
    if (!fs.existsSync(filePath)) {
      return false;
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
    return false;
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
      return "";
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
export {
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
};
