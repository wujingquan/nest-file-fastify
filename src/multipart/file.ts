import { MultipartFile as _MultipartFile } from "@fastify/multipart";
import { Storage, StorageFile } from "../storage";

// export type MultipartFile = Omit<_MultipartFile, "file"> & {
//   value?: any;
//   file: Readable & { truncated?: boolean };
// };
export interface MultipartFile extends _MultipartFile {
  value?: any;
}

export const removeStorageFiles = async (
  storage: Storage,
  files?: (StorageFile | undefined)[],
  force?: boolean,
) => {
  if (files == null) return;
  await Promise.all(
    files.map((file) => file && storage.removeFile(file, force)),
  );
};
