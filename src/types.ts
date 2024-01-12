import type { KeyLike } from "jose";

export type Payload = Record<string, unknown>;

export type JWK = KeyLike | Uint8Array;

export type JWEHeader = {
  alg: string;
  enc: string;
};

export type Transform<PAYLOAD extends Payload = Payload> = {
  serialize: (payload: PAYLOAD) => string;
  deserialize: (content: string) => PAYLOAD;
};

export type Compression = {
  compress: (content: string) => Promise<string>;
  decompress: (content: string) => Promise<string>;
};

export type Options<PAYLOAD extends Payload = Payload> = {
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
