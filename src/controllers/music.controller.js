const {uploadFile} = require("../services/storage.service")
const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")

async function createMusic(req,res){

    const { title } = req.body;
  const file = req.file;


    console.log("before upload");

const result = await uploadFile(file.buffer.toString("base64"));

console.log("after upload");

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
    })
    res.status(201).json({
        message: "Music created successfully",
        music:{
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }
    })

}

async function createAlbum(req,res){

   

        const { title, musicId } = req.body;
        console.log(req.body);

if (!musicId) {
  return res.status(400).json({
    message: "musicId is required"
  });
}
        const album = await albumModel.create({
            title,
            artist: req.user.id,
            music: [musicId],
        })

        res.status(201).json({
            message: "Album created successfully",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                music: album.music,
            }
        })

   
}

async function getAllMusics(req,res){
    const musics = await musicModel
    .skip(0)
    .find(10)
    .limit(1)
    .populate("artist", "username email")

    res.status(200).json({
        message:"Music fetched successfully",
        musics
    })
}

async function getAllAlbum(req,res){
    const album = await albumModel.find().select("title artist").populate("artist", "username email")

    res.status(200).json({
        message:"Music fetched successfully",
        album
    })
}

async function getAlbumById(req,res){
    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate("artist", "username email")

    res.status(200).json({
        message:"album fetched successfully",
        album
    })
}

 module.exports = { createMusic, createAlbum, getAllMusics, getAllAlbum, getAlbumById }