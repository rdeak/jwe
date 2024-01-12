import { compactDecrypt } from "jose";
import type { Compression, JWK, Payload, Transform } from "./types";

export async function decrypt<PAYLOAD extends Payload = Payload>(
  {
    key,
    transform,
    compression,
  }: {
    key: Promise<JWK>;
    transform: Transform<PAYLOAD>;
    compression: Compression;
  },
  jwe: string,
): Promise<PAYLOAD> {
  const { plaintext } = await compactDecrypt(jwe, await key);

  const decodedContent = new TextDecoder().decode(plaintext);

  return transform.deserialize(await compression.decompress(decodedContent));
}
