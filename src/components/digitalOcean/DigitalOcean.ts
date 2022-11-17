import AWS from 'aws-sdk';


const spacesEndpoint = new AWS.Endpoint('fra1.digitaloceanspaces.com');
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    region: "fra1",
    accessKeyId: `${process.env.NEXT_PUBLIC_DO_ID}`,
    secretAccessKey: `${process.env.NEXT_PUBLIC_DO_SPACES_SECRET}`,

});
export default s3;