const fs = require('fs');
var wstream = fs.createWriteStream('newHash.md');

function createHash(filename) {
    const crypto = require('crypto');

    const sh1Hash = crypto.createHash('sha1');
    const md5Hash = crypto.createHash('md5');
    const input = fs.createReadStream(filename);
    input.on('readable', () => {

        const data = input.read();
        if (data) {
            sh1Hash.update(data);
            md5Hash.update(data);
        }
        else {

            wstream.write(`${filename}  ${sh1Hash.digest('hex')}  ${md5Hash.digest('hex')} \n`);
        }
    });
}

module.exports = {
    createHash: createHash,
};