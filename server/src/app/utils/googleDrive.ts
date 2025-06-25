// src/utils/googleDrive.ts

export function extractDriveFileId(url: string): string | null {
  const match = url.match(/\/d\/(.*?)\//);
  return match ? match[1] : null;
}

export function getPreviewLink(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export function getImageViewLink(fileId: string): string {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}
