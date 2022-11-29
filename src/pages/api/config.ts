// export const s3Config = {
//   bucketName: `${process.env.NEXT_PUBLIC_DO_SPACES_BUCKET}`,
//   region: `fra1`,
//   accessKeyId: `${process.env.NEXT_PUBLIC_DO_SPACES_ID}`,
//   secretAccessKey: `${process.env.NEXT_PUBLIC_DO_SPACES_SECRET}`,
//   s3Url: `${process.env.NEXT_PUBLIC_DO_SPACES_URL}` /* Optional */
// };


// Step 1: Import the S3Client object and all necessary SDK commands.
import { S3Client } from '@aws-sdk/client-s3';


// Step 2: The s3Client function validates your request and directs it to your Space's specified endpoint using the AWS SDK.
export const s3Client = new S3Client({
    endpoint: `${process.env.NEXT_PUBLIC_DO_SPACES_ENDPOINT}`, // Find your endpoint in the control panel, under Settings. Prepend "https://".
    forcePathStyle: false,
    region: "fra1", // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
    credentials: {
      accessKeyId: `${process.env.NEXT_PUBLIC_DO_SPACES_ID}`,
      secretAccessKey: `${process.env.NEXT_PUBLIC_SPACES_SECRET}`,
      // Secret access key defined through an environment variable.
    }
});

export const s3Config = {

  bucketName:  `switcha-production`,
  // dirName: 'directory-name',      /* Optional */
  region: "fra1",
  accessKeyId:`${process.env.NEXT_PUBLIC_DO_SPACES_ID}`,
  secretAccessKey: `${process.env.NEXT_PUBLIC_SPACES_SECRET}`,
  // s3Url: 'https:/your-aws-s3-bucket-url/'     /* Optional */
}


