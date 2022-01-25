export type StorageProviderType = 'S3' | 'GCS';

export declare interface listFilesOptions {
  includeFolderInList?: boolean,
  absolutePath?: boolean,
  exactMatch?: boolean,
}

export interface IStorageClient {
  name: string,

  exists(url: string): Promise<boolean>,
  listFiles(url: string, optionsRequired?: listFilesOptions): Promise<string[]>,
  deleteFile(url: string): Promise<void>,
  copyFile(copySource: string, copyDestination: string): Promise<void>,
}
