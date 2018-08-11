import { UPLOAD_PATH, app, upload } from './server';
import * as sharp from 'sharp';

// Upload a new image with description
app.post('/images', upload.single('image'), (req, res, next) => {
    let url = req.file.filename
    console.log(UPLOAD_PATH+'/'+url)
    sharp(UPLOAD_PATH+'/'+url)
	  .resize(100)
	  .toFile(UPLOAD_PATH+'/thumbs/'+url, function(err) {
	    console.log(err);
	  });
    sharp(UPLOAD_PATH+'/'+url)
	  .resize(600)
	  .toFile(UPLOAD_PATH+'/medium/'+url, function(err) {
	    console.log(err);
	  });
    res.status(201).send({ url });
});
