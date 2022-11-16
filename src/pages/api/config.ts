export const s3Config = {
  bucketName: `${process.env.NEXT_PUBLIC_DO_SPACES_BUCKET}`,
  region: `fra1`,
  accessKeyId: `${process.env.NEXT_PUBLIC_DO_ID}`,
  secretAccessKey: `${process.env.NEXT_PUBLIC_DO_SPACES_SECRET}`,
  s3Url: `${process.env.NEXT_PUBLIC_DO_SPACES_URL}` /* Optional */
};