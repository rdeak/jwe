import * as jose from "jose";
import { createJWK } from "./createJWK";
import { decompress } from "./compression";

export async function decrypt<
  PAYLOAD extends Record<string, unknown> = Record<string, unknown>,
>(payload: string, secret: string): Promise<PAYLOAD> {
  const { plaintext } = await jose.compactDecrypt(
    payload,
    await createJWK(secret),
  );

  const compressedContent = new TextDecoder().decode(plaintext);
  return decompress(compressedContent) as Promise<PAYLOAD>;
}
