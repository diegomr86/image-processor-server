"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const fs = require("fs");
const sharp = require("sharp");
const http = require("http");
const pdf_image_1 = require("pdf-image");
// Upload a new image with description
server_1.app.post('/images', server_1.upload.single('image'), (req, res, next) => {
    console.log(req.file);
    var url = req.file.filename;
    var thumb = server_1.UPLOAD_PATH + '/thumbs/' + url;
    var medium = server_1.UPLOAD_PATH + '/medium/' + url;
    console.log('Uploading file: ' + server_1.UPLOAD_PATH + '/' + url);
    if (req.file.mimetype == 'application/pdf') {
        medium = medium.replace('.pdf', '.png');
        thumb = thumb.replace('.pdf', '.png');
        var pdfMedium = new pdf_image_1.PDFImage(req.file.path);
        pdfMedium.convertPage(0).then(function (imagePath) {
            fs.copyFile(imagePath, medium, (err) => {
                if (err)
                    throw err;
                var pdfThumb = new pdf_image_1.PDFImage(req.file.path, { convertOptions: { "-resize": "100x100" } });
                pdfThumb.convertPage(0).then(function (imagePath) {
                    fs.copyFile(imagePath, thumb, (err) => {
                        if (err)
                            throw err;
                        res.status(201).send({ url, medium, thumb });
                    });
                });
            });
        });
    }
    else {
        console.log('Generating thumb: ' + thumb);
        sharp(server_1.UPLOAD_PATH + '/' + url)
            .resize(100)
            .toFile(thumb, function (err) {
            if (err) {
                console.log("File upload error: ", err);
            }
            ;
            sharp(server_1.UPLOAD_PATH + '/' + url)
                .resize(600)
                .toFile(medium, function (err) {
                if (err) {
                    console.log("File upload error: ", err);
                }
                ;
                res.status(201).send({ url, medium, thumb });
            });
        });
        console.log('Generating medium: ' + medium);
    }
});
server_1.app.get('/teste', function (req, res, next) {
    res.set('Content-Type', 'text/html');
    res.send(new Buffer('<h2>Test OK!</h2>'));
});
server_1.app.get('/oembed', function (req, res, next) {
    res.set('Content-Type', 'application/json');
    let rawData = '';
    http.get('http://open.iframe.ly/api/oembed?url=' + req.query.url + "&origin=diegomr86", (r) => {
        r.on('data', (chunk) => { rawData += chunk; });
        r.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                console.log('parsedData', parsedData);
                res.send(parsedData);
            }
            catch (e) {
                console.error('errrr', e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
});
//# sourceMappingURL=routes.js.map