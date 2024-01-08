import * as jose from "jose";
import { createJWK } from "./createJWK";
import { decompress } from "./compression";

// ID: D44D4EEC
// Key: sk_563ff95bc9efa71e

export async function decrypt(payload: string, secret: string) {
  try {
    const { plaintext, protectedHeader } = await jose.compactDecrypt(
      payload,
      await createJWK(secret),
    );

    const compressedContent = new TextDecoder().decode(plaintext);
    return decompress(compressedContent);
  } catch (e) {
    console.error("Unable to decrypt", e);
  }
}
