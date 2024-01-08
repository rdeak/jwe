# JWE

This repo contains basic JWE encryption and decryption functions

## Methods

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

▸ **encrypt**(`payload`, `secret`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Decrypts a Compact JWE into object.

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `jwe`    | `string` |
| `secret` | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`Record<string, unknown>`>
