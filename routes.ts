import { UPLOAD_PATH, app, upload } from './server';
import * as sharp from 'sharp';

// Upload a new image with description
app.post('/images', upload.single('image'), (req, res, next) => {
    let url = req.file.filename

    console.log('Uploading file: '+UPLOAD_PATH+'/'+url)
    
   	console.log('Generating thumb: '+UPLOAD_PATH+'/thumbs/'+url)
    sharp(UPLOAD_PATH+'/'+url)
	  .resize(100)
	  .toFile(UPLOAD_PATH+'/thumbs/'+url, function(err) {
	    if (err) { console.log("File upload error: ",err) };
	  });
    
   	console.log('Generating medium: '+UPLOAD_PATH+'/medium/'+url)
    sharp(UPLOAD_PATH+'/'+url)
	  .resize(600)
	  .toFile(UPLOAD_PATH+'/medium/'+url, function(err) {
	    if (err) { console.log("File upload error: ",err) };
	  });

    res.status(201).send({ url });
});
