"use client";

import { IconDownload } from "@tabler/icons-react";

const GOOGLE_DRIVE_FILE_ID = "1VLflrU0gJYBwYd8XkgX-sBC4Vk1R0G1n";

const embedUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;
const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

export function ResumeViewer() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2 dark:border-neutral-800">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Shabaz_Resume.pdf
        </span>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
        >
          <IconDownload className="size-3.5" />
          Download
        </a>
      </div>
      <iframe
        src={embedUrl}
        className="h-full w-full flex-1 border-0"
        allow="autoplay"
        title="Resume PDF"
      />
    </div>
  );
}
