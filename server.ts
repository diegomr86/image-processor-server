import * as express from 'express';
import * as multer from 'multer'
import * as cors from 'cors'
import * as fs from 'fs';
// Generell properties
export let UPLOAD_PATH = 'static'
export let PORT = 5000;

!fs.existsSync(UPLOAD_PATH) && fs.mkdirSync(UPLOAD_PATH);
!fs.existsSync(UPLOAD_PATH+'/images') && fs.mkdirSync(UPLOAD_PATH+'/images');
!fs.existsSync(UPLOAD_PATH+'/pdfs') && fs.mkdirSync(UPLOAD_PATH+'/pdfs');
!fs.existsSync(UPLOAD_PATH+'/thumbs') && fs.mkdirSync(UPLOAD_PATH+'/thumbs');
!fs.existsSync(UPLOAD_PATH+'/medium') && fs.mkdirSync(UPLOAD_PATH+'/medium');

// Multer Settings for file upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'.'+ file.originalname.split('.').pop())
    }
})

export let upload = multer({ storage: storage })

// Initialise App
export const app = express();
app.use(cors());

// Load our routes
var routes = require('./routes');

app.use('/static', express.static('static'));

// App startup
app.listen(PORT, function () {
    console.log('listening on port: ' + PORT);
});

