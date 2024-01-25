interface FileStats {
    createdDate: Date;
    lastModifiedDate: Date;
    fileSize: string;
    fileExtension: string;
    fileParentDirectory: string;
    fileRelativePath: string;
    fileAbsolutePath: string;
}
type PathLike = string | URL | Buffer;
type DataTypeExportItem = string;
type PathOrFileDescriptor = PathLike;
type FilesDescriptor = Array<PathOrFileDescriptor>;
type TypeOfError = any;
type SizeTypes = "bytes" | "kilobytes" | "megabytes" | "gigabytes";
type F<T extends PathOrFileDescriptor | number | FilesDescriptor, R, D extends any = undefined | DataTypeExportItem> = (P: T, D?: D) => R;

/**
 * Create a new file with the given file path.
 * @param {PathOrFileDescriptor} fileName - The name of the file to be created.
 * @throws {Error} - If an error occurs during file creation.
 */
declare function createFile(fileName: PathOrFileDescriptor): boolean;
/**
 * Rename a file with the given name.
 * @param {string} oldName - The name of the file to be renamed.
 * @param {PathOrFileDescriptor} newName - The name of the file to rename to.
 * @throws {Error} - If an error occurs during file renaming.
 */
declare function renameFile(oldName: PathOrFileDescriptor, newName: PathOrFileDescriptor): void;
/**
 * Delete a file with the given file name.
 * @param {PathOrFileDescriptor} fileName - The name of the file to be deleted.
 * @throws {Error} - If the file doesn't exist, if the path is invalid, if the path points to a directory,
 *                  if the file deletion fails, or if the value is not a string.
 */
declare function deleteFile(fileName: PathOrFileDescriptor): boolean;
/**
 * Writes data to a file with the provided name.
 * @param {PathOrFileDescriptor} fileName - The name of the file to which data is inserted.
 * @param {DataTypeExportItem} data - The data to be inserted.
 * @throws {Error} - If an error occurs during file writing or if validation fails.
 */
declare function writeData(fileName: PathOrFileDescriptor, data: DataTypeExportItem): boolean;
/**
 * Create a new directory with the given directory name.
 * @param {PathOrFileDescriptor} directoryName - The name of the directory to be created.
 * @throws {Error} - If an error occurs during directory creation.
 */
declare function createDir(directoryName: PathOrFileDescriptor): void;
/**
 * Checks if a directory with the given directory name exists or not.
 * @param {PathOrFileDescriptor} directoryPath - The name of the directory to be checked.
 * @throws {Error} - If an error occurs during directory existence check.
 * @returns {boolean} Returns true if the directory exists, false otherwise.
 */
declare function is_existsDir(directoryPath: PathOrFileDescriptor): boolean;
/**
 * Deletes a directory with the given directory path.
 * @param {PathOrFileDescriptor} directoryPath - The path of the directory to be deleted.
 * @throws {Error} - Throws specific errors for different scenarios.
 */
declare function deleteDir(directoryPath: PathOrFileDescriptor): boolean;
/**
 * Appends data at the end of the given file.
 * @param {PathOrFileDescriptor} filePath - The path of the file to which data is appended.
 * @param {DataTypeExportItem} dataToAppend - The data to append at the end of the file.
 * @throws {Error} - If the path is not valid, points to a file, contains null value, or the type of value is not a string.
 */
declare function insertDataAtEnd(filePath: PathOrFileDescriptor, dataToAppend: DataTypeExportItem): boolean;
/**
 * Appends data at the start of the given file.
 * @param {DataTypeExportItem} filePath - The path of the file to which data is appended.
 * @param {DataTypeExportItem} dataToAppend - The data to append at the start of the file.
 * @throws {Error} - If the path is not valid, points to a file, contains null value, or the type of value is not a string.
 */
declare function insertDataAtStart(filePath: PathOrFileDescriptor, dataToAppend: DataTypeExportItem): boolean;
/**
 * Checks whether the given target data exists in the given file or not.
 * @param {PathOrFileDescriptor} filePath - The path of the file to which data is appended.
 * @param {DataTypeExportItem} targetData - The data to target in the file.
 * @return {boolean} returns true if the data exists, false otherwise.
 * @throws {Error} - If an error occurs during file reading or if the path is invalid, points to a file,
 *                  contains a null value, or the value is not a string.
 */
declare function is_existsData(filePath: PathOrFileDescriptor, targetData: DataTypeExportItem): boolean;
/**
 * Checks whether the given file exists or not and performs advanced error handling.
 * @param {PathOrFileDescriptor} filePath - The path of the file to which data is appended.
 * @return {boolean} returns true if the directory exists, false otherwise.
 */
declare function is_existsFile(filePath: PathOrFileDescriptor): boolean;
/**
 * Reads the data from a given file and return data.
 * @param {PathOrFileDescriptor} filePath - The path of the file to which data is appended.
 */
declare function readFileData(filePath: PathOrFileDescriptor): string;
/**
 * Renames the given directory path with the given new path.
 * @param {PathOrFileDescriptor} oldPath - The path of the directory to rename.
 * @param {PathOrFileDescriptor} newPath - The new path of the directory to rename.
 */
declare function renameDir(oldPath: PathOrFileDescriptor, newPath: PathOrFileDescriptor): false | undefined;
/**
 * Moves a file to a new given location.
 * @param {PathOrFileDescriptor} sourcePath - The path of the file to move.
 * @param {PathOrFileDescriptor} destinationPath - The path where to move.
 */
declare function moveFile(sourcePath: PathOrFileDescriptor, destinationPath: PathOrFileDescriptor): boolean;
/**
 * Copy the file to the given destination file.
 * @param {PathOrFileDescriptor} sourcePath - The path of the file to copy.
 * @param {PathOrFileDescriptor} destinationPath - The path to copy the file to.
 */
declare function copyFile(sourcePath: PathOrFileDescriptor, destinationPath: PathOrFileDescriptor): void;
/**
 * Copy the directory to the given destination.
 * @param {PathOrFileDescriptor} source - The path of the direcotry to copy.
 * @param {PathOrFileDescriptor} destination - The path to copy the directory to.
 */
declare function copyDirectory(source: PathOrFileDescriptor, destination: PathOrFileDescriptor): void;
/**
 * Copy the file to the given destination.
 * @param {PathOrFileDescriptor} sourcePath - The path of the file to copy.
 * @param {PathOrFileDescriptor} destinationPath - The path to copy the file to.
 */
declare function copyFileToDirectory(sourcePath: PathOrFileDescriptor, destinationPath: PathOrFileDescriptor): boolean;
/**
 * Get the path of all the files inside a directory.
 * @param {PathOrFileDescriptor} directoryPath - The path to the directory to look for files.
 */
declare function getFilesInDirectory(directoryPath: PathOrFileDescriptor): false | string[];
/**
 * Searches for a file in the specified directory.
 * @param {PathOrFileDescriptor} directoryPath - The path to the directory to look for file.
 * @param {PathOrFileDescriptor} fileName - The name of the file to look for.
 */
declare function searchFileInDirectory(directoryPath: PathOrFileDescriptor, fileName: PathOrFileDescriptor): string | null;
/**
 * Creates all the files from a given array of files of path type.
 * @param {FilesDescriptor} fileNames - The array of file names to be created.
 */
declare function createFiles(fileNames: FilesDescriptor): boolean;
/**
 * Get the stats of the file
 * @param {PathOrFileDescriptor} filePath - The path of the file to get stats for.
 * @param {SizeTypes} sizeUnit - The unit of the size of the file.
 */
declare function getFileStats(filePath: PathOrFileDescriptor, sizeUnit?: SizeTypes): FileStats | string | boolean;
/**
 * Converts the given number of bytes to a string of a file size in specified format.
 * @param {PathOrFileDescriptor} sizeInBytes - The size of the file to convert.
 * @param {SizeTypes} unit - The unit of the size of the file.
 */
declare function convertFileSize(sizeInBytes: number, unit?: SizeTypes): string;
/**
 * Checks whether the given string is a valid file format string and returns true if it is valid otherwise false.
 * @param {SizeTypes} unit - The unit of the size of the file to check.
 */
declare function isValidSizeUnit(unit: SizeTypes): unit is SizeTypes;

export { type DataTypeExportItem, type F, type FileStats, type FilesDescriptor, type PathLike, type PathOrFileDescriptor, type SizeTypes, type TypeOfError, convertFileSize, copyDirectory, copyFile, copyFileToDirectory, createDir, createFile, createFiles, deleteDir, deleteFile, getFileStats, getFilesInDirectory, insertDataAtEnd, insertDataAtStart, isValidSizeUnit, is_existsData, is_existsDir, is_existsFile, moveFile, readFileData, renameDir, renameFile, searchFileInDirectory, writeData };
