# JWE with compression

This repo expose functions for encrypting and decrypting JWE tokens.

Content is compressed and processed with functions for handling compact JWE exposed in [Jose](https://github.com/panva/jose) library.

## Methods

### encrypt

```javascript
encrypt({ name: "John Doe" }, "0123456789123456");
```

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
