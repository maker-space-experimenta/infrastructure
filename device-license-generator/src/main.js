#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const d3 = require("d3");
const { createCanvas, loadImage } = require("canvas");

var width = 2420,
    height = 1530;

var canvas = createCanvas(width, height),
    context = canvas.getContext("2d");

context.strokeStyle = "rgba(100,0,0,0.5)";
context.beginPath();
context.moveTo(50, height / 2);
context.lineTo(width - 50, height / 2);
context.stroke();

loadImage('front.svg').then( image => {
    context.drawImage(image, 0,0,100,100);
});

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, "canvas.png")));

