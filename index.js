const speakeasy = require("speakeasy");
const QRCode = require('qrcode');
const fs = require('fs');

const secret = speakeasy.generateSecret(
    { name: 'Test (youraccountname)' } // This the label for Google Authenticator
);

const user = {};
user.secret = secret.base32; // Save this secret to database
// In this example we just write it jsonfile
fs.writeFile('userSecret.json', JSON.stringify(user), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

QRCode.toString(secret.otpauth_url, { type: 'terminal' }, function (err, data_url) {
    console.log(data_url); // With the option type terminal this will print the qr code directly to terminal
});

