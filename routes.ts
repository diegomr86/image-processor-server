import { UPLOAD_PATH, app, upload } from './server';
import * as path from 'path'
import * as fs from 'fs'
import * as del from 'del';

// Upload a new image with description
app.post('/images', upload.single('image'), (req, res, next) => {
    let url = req.file.filename
    res.status(201).send({ url });
});
