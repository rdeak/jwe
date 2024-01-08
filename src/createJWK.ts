import * as jose from "jose";

export const createJWK = (secret: string) =>
  jose.importJWK({
    kty: "oct",
    k: Buffer.from(secret).toString("base64"),
  });
