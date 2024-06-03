const AWS = require("aws-sdk");
require("dotenv").config();
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION_BUCKET,
});

const bucketName = "upload-data-test-tutorial";
const newFileKey = "file.png";
const filePath = "./1.png";

const uploadFileToS3 = (filePath, bucketName, newFileKey) => {
  const fileStream = fs.createReadStream(filePath);
  fileStream.on("error", (error) => {
    console.log("File Error", error);
  });

  const params = {
    Bucket: bucketName,
    Key: newFileKey,
    Body: fileStream,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("data location " + data.Location);
    }
  });
};

uploadFileToS3(filePath, bucketName, newFileKey);
