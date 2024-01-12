[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# JWE

This repo exposes functions for encrypting JSON payloads, and decrypting JWE tokens into JSON from Node.js.

By default, `dir` algorithm is used for encryption of CEK, and `A128GCM` for encryption of a payload.

Underhood it uses [jose](https://github.com/panva/jose) library.

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

const jwe = JWE("0123456789123456");

const jweToken = await jwe.encrypt({ name: "John Doe" });
console.log("JWE:", jweToken);

const payload = await jwe.decrypt(jweToken);
console.table(payload);
```

## API Documentation

### JWE

Create handler for encrypting and decrypting JWE tokens.

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `secret`  | `string`  |
| `options` | `Options` |

```typescript
type Options = {
  /***
   * cryptographic algorithm used to encrypt CEK
   */
  alg?: string;
  /***
   * cryptographic algorithm used to encrypt payload
   */
  enc?: string;
  /***
   * default content is converted to JSON
   */
  transform?: Transform<PAYLOAD>;
  /***
   * @deprecated https://www.rfc-editor.org/rfc/rfc8725#name-avoid-compression-of-encryp
   */
  compression?: Compression;
};
```

### encrypt

▸ **encrypt**(`payload`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Encrypts and resolves the value of the Compact JWE string.

#### Parameters

| Name      | Type                      |
| :-------- | :------------------------ |
| `payload` | `Record<string, unknown>` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`>

### decrypt

```javascript
decrypt("jwe token....", "0123456789123456");
```

▸ **decrypt**(`jweToken`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Decrypts a Compact JWE into object.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `jweToken` | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`Record<string, unknown>`>

## License

This project is licensed under the terms of the MIT license.
