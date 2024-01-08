import { createJWK } from "./createJWK";
import * as jose from "jose";
import { compress } from "./compression";

export async function encrypt(
  payload: Record<string, unknown>,
  secret: string,
  initializationVector?: string,
) {
  const compressedContent = await compress(payload);

  let builder = new jose.CompactEncrypt(
    new TextEncoder().encode(compressedContent),
  ).setProtectedHeader({ alg: "dir", enc: "A128GCM" });

  if (initializationVector) {
    builder = builder.setInitializationVector(
      Buffer.from(Buffer.from(initializationVector).toString("base64")),
    );
  }

  return builder.encrypt(await createJWK(secret));
}
