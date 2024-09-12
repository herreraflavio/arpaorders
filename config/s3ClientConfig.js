const { S3Client } = require("@aws-sdk/client-s3");
require("dotenv").config({ path: "../.env" });

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// const bucketName = "arpa-orders";
const bucketName = "arpa-orders-test";

module.exports = {
  s3Client,
  bucketName,
};
