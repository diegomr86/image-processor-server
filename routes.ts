import { UPLOAD_PATH, app, upload } from './server';
import * as fs from "fs";
import * as sharp from 'sharp';
import { PDFImage } from 'pdf-image';

// Upload a new image with description
app.post('/images', upload.single('image'), (req, res, next) => {
    console.log(req.file  );
    var url = req.file.filename
    var thumb = UPLOAD_PATH+'/thumbs/'+url
    var medium = UPLOAD_PATH+'/medium/'+url
    console.log('Uploading file: '+UPLOAD_PATH+'/'+url)
    
    if (req.file.mimetype == 'application/pdf') {
      
      medium = medium.replace('.pdf', '.png')
      thumb = thumb.replace('.pdf', '.png')

      var pdfMedium = new PDFImage(req.file.path);
      pdfMedium.convertPage(0).then(function (imagePath) {
        fs.copyFile(imagePath, medium, (err) => {
            if (err) throw err;
            var pdfThumb = new PDFImage(req.file.path, {convertOptions: {"-resize": "100x100"}});
            pdfThumb.convertPage(0).then(function (imagePath) {
              fs.copyFile(imagePath, thumb, (err) => {
                  if (err) throw err;
                  res.status(201).send({ url, medium, thumb});
              });
            });
        });
      });


    } else {

     	console.log('Generating thumb: '+thumb)
      sharp(UPLOAD_PATH+'/'+url)
  	  .resize(100)
  	  .toFile(thumb, function(err) {
  	    if (err) { console.log("File upload error: ",err) };
        sharp(UPLOAD_PATH+'/'+url)
        .resize(600)
        .toFile(medium, function(err) {
          if (err) { console.log("File upload error: ",err) };
          res.status(201).send({ url, medium, thumb});  
        });

  	  });
      
     	console.log('Generating medium: '+medium)
    }

});

app.get('/teste', function (req, res, next) {
  	res.set('Content-Type', 'text/html');
  	res.send(new Buffer('<h2>Test OK!</h2>'));
});
