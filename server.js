const express = require("express");
const cors = require("cors")
const multer = require("multer");
const app = express()

app.use(cors());
app.use(express.json())


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1000000,
  },
});

// app.post("/upload", upload.single("file"), (req, res) => {
//   console.log(req.file);
// });
app.post("/upload", upload.array("file", 10), (req, res) => {
  
  res.json({
    data:req.body,
    // files: req.files,
  });
  // console.log(req.files);
});

app.listen(9001, () => {
  console.log("server is running");
});
