import AWS from 'aws-sdk';

/**
 * Digital Ocean Spaces Connection
 */

const spacesEndpoint = new AWS.Endpoint('fra1.digitaloceanspaces.com');
const s3 = new AWS.S3({
    endpoint: `${process.env.NEXT_PUBLIC_DO_SPACES_URL}`,
    accessKeyId: `${process.env.NEXT_PUBLIC_DO_ID}`,
    secretAccessKey: `${process.env.NEXT_PUBLIC_DO_SPACES_SECRET}`,

});
export default s3;