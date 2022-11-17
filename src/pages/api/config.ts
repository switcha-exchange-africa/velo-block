// export const s3Config = {
//   bucketName: `${process.env.NEXT_PUBLIC_DO_SPACES_BUCKET}`,
//   region: `fra1`,
//   accessKeyId: `${process.env.NEXT_PUBLIC_DO_SPACES_ID}`,
//   secretAccessKey: `${process.env.NEXT_PUBLIC_DO_SPACES_SECRET}`,
//   s3Url: `${process.env.NEXT_PUBLIC_DO_SPACES_URL}` /* Optional */
// };


// Step 1: Import the S3Client object and all necessary SDK commands.
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';


// Step 2: The s3Client function validates your request and directs it to your Space's specified endpoint using the AWS SDK.
const s3Client = new S3Client({
    endpoint: `${process.env.NEXT_PUBLIC_DO_SPACES_ENDPOINT}`, // Find your endpoint in the control panel, under Settings. Prepend "https://".
    forcePathStyle: false,
    region: "fra1", // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
    credentials: {
      accessKeyId: `${process.env.NEXT_PUBLIC_DO_SPACES_ID}`,
      secretAccessKey: `${process.env.NEXT_PUBLIC_SPACES_SECRET}`,
      // Secret access key defined through an environment variable.
    }
});


// Step 3: Define the parameters for the object you want to upload.
const params = {
  Bucket: "switcha-production", // The path to the directory you want to upload the object to, starting with your Space name.
  Key: "folder-path/hello-world.txt", // Object key, referenced whenever you want to access this file later.
  Body: "Hello, Worldzzz!", // The object's contents. This variable is an object, not a string.
  ACL: "private", // Defines ACL permissions, such as private or public.
  Metadata: { // Defines metadata tags.
    "x-amz-meta-my-key": "your-value"
  }
};


// Step 4: Define a function that uploads your object using SDK's PutObjectCommand object and catches any errors.
export const uploadObject = async () => {
  try {
    console.log("S3 consfig")
    console.log({
      endpoint: `${process.env.NEXT_PUBLIC_DO_SPACES_ENDPOINT}`, // Find your endpoint in the control panel, under Settings. Prepend "https://".
      forcePathStyle: false,
      region: "fra1", // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
      credentials: {
        accessKeyId: `${process.env.NEXT_PUBLIC_DO_SPACES_ID}`,
        secretAccessKey: `${process.env.NEXT_PUBLIC_SPACES_SECRET}`,
      }
  })
  console.log(s3Client)
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log("DATA", data)
    console.log(
      "Successfully uploaded object: " +
        params.Bucket +
        "/" +
        params.Key
    );
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};



