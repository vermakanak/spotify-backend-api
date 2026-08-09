const { ImageKit } = require('@imagekit/nodejs')

const ImageKitClient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadFile(file){
    try{
    const result = await ImageKitClient.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder:"backend/music"
    })
    return result;
 } 
 catch (err) {
    console.log("ImageKit error:", err);
    throw err;
  }

}

module.exports = {uploadFile};