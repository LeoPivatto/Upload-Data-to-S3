const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const fs = require("fs");

const bucketName = "upload-data-test-tutorial";
const newFileKey = "file.png";
const filePath = "1.png";

const uploadFileToS3 = (filePath, bucketName, newFileKey) => {
  const fileStream = fs.createReadStream(filePath);
  fileStream.on("error", (error) => {
    console.log("File Error", error);
  });

  const params = {
    Bucket: bucketName,
    Key: newFilekey,
    Body: filestream,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
    }
    if (data) {
      console.log(data.location);
    }
  });
};

uploadFileToS3(filePath, bucketName, newFileKey);
