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
declare namespace FS {
}

export { type DataTypeExportItem, FS, type FileStats, type FilesDescriptor, type PathLike, type PathOrFileDescriptor, type SizeTypes, type TypeOfError, FS as default };
