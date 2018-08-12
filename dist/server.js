"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
// Generell properties
exports.UPLOAD_PATH = 'static';
exports.PORT = 3000;
!fs.existsSync(exports.UPLOAD_PATH) && fs.mkdirSync(exports.UPLOAD_PATH);
!fs.existsSync(exports.UPLOAD_PATH + '/thumbs') && fs.mkdirSync(exports.UPLOAD_PATH + '/thumbs');
!fs.existsSync(exports.UPLOAD_PATH + '/medium') && fs.mkdirSync(exports.UPLOAD_PATH + '/medium');
// Multer Settings for file upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, exports.UPLOAD_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
    }
});
exports.upload = multer({ storage: storage });
// Initialise App
exports.app = express();
exports.app.use(cors());
// Load our routes
var routes = require('./routes');
exports.app.use('/static', express.static('static'));
// App startup
exports.app.listen(exports.PORT, function () {
    console.log('listening on port: ' + exports.PORT);
});
//# sourceMappingURL=server.js.map