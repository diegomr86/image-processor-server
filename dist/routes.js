"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const sharp = require("sharp");
// Upload a new image with description
server_1.app.post('/images', server_1.upload.single('image'), (req, res, next) => {
    let url = req.file.filename;
    console.log('Uploading file: ' + server_1.UPLOAD_PATH + '/' + url);
    console.log('Generating thumb: ' + server_1.UPLOAD_PATH + '/thumbs/' + url);
    sharp(server_1.UPLOAD_PATH + '/' + url)
        .resize(100)
        .toFile(server_1.UPLOAD_PATH + '/thumbs/' + url, function (err) {
        if (err) {
            console.log("File upload error: ", err);
        }
        ;
    });
    console.log('Generating medium: ' + server_1.UPLOAD_PATH + '/medium/' + url);
    sharp(server_1.UPLOAD_PATH + '/' + url)
        .resize(600)
        .toFile(server_1.UPLOAD_PATH + '/medium/' + url, function (err) {
        if (err) {
            console.log("File upload error: ", err);
        }
        ;
    });
    res.status(201).send({ url });
});
//# sourceMappingURL=routes.js.map