const qrcode = require('qrcode');

const data = "https://rownok.com";
// replace rownok.com with your url

qrcode.toFile("qrcode.png", data, {
    color: {
        dark: "#000000",
        light: "#ffffff"
    }
}, function (err) {
    console.log(err || "QR code created.");
});
