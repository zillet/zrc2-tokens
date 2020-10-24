Directory of token details and image for ZRC2 contracts

# Add new token to Zillet.io:
## Requirements
- name of the file in lowercase: `symbol.png`. Ex: `meta.png`
- format: `PNG`
- size: `256px by 256px`

## Steps
1) Press on `Fork` in the top right corner.
2) Add token details inside `tokens` folder by creating a json file and upload an image in `icons/` folder on your own fork and commit changes.
3) Press on `New Pull Request` on your own fork page and submit it!


## ZRC2 format 

`exmp.json` (Token symbol .json) file format should be like this

```js
{
    "name": "SXGD",  // Name  of the token
    "symbol": "SXGD", // Symbol of the token
    "decimals": 6, // Supported decimals
    "address": "", // Mainnet contract address 
    "testnetAddress": "zil1nx3hf8x8yax6cw5vk0f2ru0nzrpq544038zuap" // Testnet contract address
}
```

## How to Use the Images? (For Developers)
Base URL:
```js
https://raw.githubusercontent.com/zillet/zrc2-tokens/master/images/<symbol>.png
```
Example:
```js
https://raw.githubusercontent.com/zillet/zrc2-tokens/master/images/meta.png
```

## Used in Applications
- [Zillet.io Wallet](https://zillet.io) - Web
