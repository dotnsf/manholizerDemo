var express = require( 'express' ),
    cfenv = require( 'cfenv' ),
    http = require( 'http' ),
    multer = require( 'multer' ),
    easyimg = require( 'easyimage' ),
    fs = require( 'fs' ),
    watson = require( 'watson-developer-cloud' ),
    app = express();
var settings = require( './settings' );
var vr3 = watson.visual_recognition({
  api_key: settings.vr_apikey,
  version: 'v3',
  version_date: '2016-05-19'
});
var appEnv = cfenv.getAppEnv();
var port = appEnv.port ? appEnv.port : settings.port;

app.use( multer( { dest: './uploads' } ).single( 'img' ) );
app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.post( '/upload', function( req, res ){
  //console.log( req.file );

  //. resize
  var srcpath = req.file.path;
  var dstpath = req.file.path + req.file.originalname;
  var settingObj = {
    format: 'png',
    src: srcpath,
    dst: dstpath,
    width: 600
  };
  easyimg.resize( settingObj ).then( function( image ){
    var params = {
      images_file: fs.createReadStream( dstpath )
    };

    var req1 = vr3.detectFaces( params,
      function( err1, res1 ){
        fs.unlink( srcpath, function( err ){} );
        fs.unlink( dstpath, function( err ){} );

        if( err1 ){
          console.log( err1 );
        }else{
          var p = JSON.stringify( res1, null, 2 );
          res.writeHead( 200, { 'Content-Type': 'text/plain' } );
          res.write( p );
          res.end();
        }
      }
    );
  });
});

app.listen( port );
console.log( "server starting on " + port );


