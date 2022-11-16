import S3 from "aws-sdk";
import { s3Config } from "./config";
const client = new S3(s3Config);

export default async function uploadFile(
  file: File | any,
  fileName: string | null = null
) {
  return await client.uploadFile(file, fileName ?? file.name);
}
