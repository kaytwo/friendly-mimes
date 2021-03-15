interface DataInterface {
    mime: string;
    name: string;
    fileType: string;
}
/**
 * Resolves Mime type (eg: text/csv, application/mp4 etc) of the mime to the specific mime.
 * @param mime MimeType of the file
 * @returns The resolved item.
 */
export declare const resolveMime: (mime: string) => DataInterface;
/**
 * Resolves File type (.mp4, .mp3 etc) of the mime to the specific mime.
 * @param fileType FileType of the file
 * @returns The resolved item.
 */
export declare const resolveFileType: (fileType: string) => DataInterface;
/**
 * Resolves name of the mime to array of related mimes.
 * @param name Name of the file
 * @returns Array of related items.
 */
export declare const resolveName: (name: string) => DataInterface[];
declare const _default: {
    resolveName: (name: string) => DataInterface[];
    resolveMime: (mime: string) => DataInterface;
    resolveFileType: (fileType: string) => DataInterface;
};
export default _default;
