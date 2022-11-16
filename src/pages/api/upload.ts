// import fs from 'fs'
// import AWS from "aws-sdk"
// import formidable from "formidable"

// const s3Client = new AWS.S3({
    // endpoint: process.env.NEXT_PUBLIC_DO_SPACES_URL,
    // region: "fra1",
//     // credentials: {
//     accessKeyId: process.env.NEXT_PUBLIC_DO_SPACES_ID,
//     secretAccessKey: process.env.NEXT_PUBLIC_DO_SPACES_SECRET
//     // }
// })



// export const config = {
//     api: {
//         bodyParser: false
//     }
// }


// export default async function handler(req:any, res:any) {
//     const form = formidable()
//     form.parsee(req, async (err:any, fields:any, files:any) => {
//         if(!files.demo){
//             res.status(400).send("No file uploaded")
//             return;
//         }

//         try {
//             return s3Client.putObject({
//                 Bucket: process.env.NEXT_PUBLIC_DO_SPACES_BUCKET,
//                 ket: files.demo.originalFilename,
//                 Body: fs.createReadStream(files.demo.filepath),
//                 ACL: "public-read"
//             }, async() => res.status(201).send("File uploaded"))
//         } catch (err) {
//             console.log(err)
//             res.status(500).send("Error Uploading file")

//         }
//     })
// }


import aws from "aws-sdk";
const s3 = new aws.S3({
  endpoint: process.env.NEXT_PUBLIC_DO_SPACES_URL,
  accessKeyId: process.env.NEXT_PUBLIC_DO_SPACES_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_DO_SPACES_SECRET,
});