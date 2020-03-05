const speakeasy = require("speakeasy");
const { secret } = require('./userSecret.json');
const myArgs = process.argv.slice(2);

validateArgs(myArgs);
const [userKey] = myArgs;
verified = verify(userKey);

console.log(verified);

function validateArgs(args) {
    if (!args.length) {
        throw Error('No arguments given');
    }
}

function verify(userKey) {
    return speakeasy.totp.verify({
        secret,
        encoding: 'base32',
        token: userKey,
    });
}
