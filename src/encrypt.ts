import { CompactEncrypt } from "jose";
import type { JWK, Transform, Payload, Compression, JWEHeader } from "./types";

export async function encrypt<PAYLOAD extends Payload = Payload>(
  {
    headerOptions,
    key,
    transform,
    compression,
  }: {
    headerOptions: JWEHeader;
    key: Promise<JWK>;
    transform: Transform;
    compression: Compression;
  },
  /**
   * Token payload
   */
  payload: PAYLOAD,
) {
  return new CompactEncrypt(
    new TextEncoder().encode(
      await compression.compress(transform.serialize(payload)),
    ),
  )
    .setProtectedHeader(headerOptions)
    .encrypt(await key);
}
