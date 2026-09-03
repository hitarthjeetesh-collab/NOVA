// lib/filebase/filebase.ts

import { S3Client } from "@aws-sdk/client-s3";

export const filebase = new S3Client({
  endpoint: "https://s3.filebase.io",
  region: "auto",
  credentials: {
    accessKeyId: process.env.FILEBASE_ACCESS_KEY!,
    secretAccessKey: process.env.FILEBASE_SECRET_KEY!,
  },
});