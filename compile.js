const fs = require('fs');

const tokens = [];
const tokenDir = __dirname +'/tokens'; // or whatever directory you want to read
fs.readdirSync(tokenDir).forEach((file) => {
    const obj = JSON.parse(
        fs.readFileSync(`${tokenDir}/${file}`, 'utf8')
    );
    tokens.push(obj);
    const writeArray = tokens.sort(function(a, b) {
        let aSym = a.name.toLowerCase();
        let bSym = b.name.toLowerCase();
        return aSym < bSym ? -1 : aSym > bSym ? 1 : 0;
    });
    fs.writeFileSync(
        `./zrc2.json`,
        JSON.stringify(writeArray)
    );
})
