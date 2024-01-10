[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# JWE with compression

This repo expose functions for encrypting and decrypting JWE tokens in Node.js.

Content is compressed and processed with functions for handling compact JWE exposed in [Jose](https://github.com/panva/jose) library.

## Installation

```bash
npm install @rdeak/jwe
```

or

```bash
npm install https://github.com/rdeak/jwe-demo
```

## Usage

```javascript
import { encrypt, decrypt } from "@rdeak/jwe";

const jwe = await encrypt({ name: "John Doe" }, "0123456789123456");
console.log("JWE:", jwe);

const payload = await decrypt(jwe, "0123456789123456");
console.table(payload);
```

## API Documentation

### encrypt

▸ **encrypt**(`payload`, `secret`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Encrypts and resolves the value of the Compact JWE string.

#### Parameters

| Name      | Type                      |
| :-------- | :------------------------ |
| `payload` | `Record<string, unknown>` |
| `secret`  | `string`                  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`>

### decrypt

```javascript
decrypt("jwe token....", "0123456789123456");
```

▸ **encrypt**(`payload`, `secret`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Decrypts a Compact JWE into object.

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `jwe`    | `string` |
| `secret` | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`Record<string, unknown>`>

## License

This project is licensed under the terms of the MIT license.
