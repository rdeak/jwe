import { encrypt } from "./encrypt";
import { decrypt } from "./decrypt";
import { createJWK } from "./createJWK";
import { getTransformer } from "./transform";
import type { Options } from "./types";
import { getCompression } from "./compression";

const JWE = (secret: string, options?: Options) => {
  const key = createJWK(secret);
  const transform = getTransformer(options);
  const compression = getCompression(options);

  return {
    encrypt: encrypt.bind(null, {
      headerOptions: {
        alg: options?.alg ?? "dir",
        enc: options?.enc ?? "A128GCM",
      },
      key,
      transform,
      compression,
    }),
    decrypt: decrypt.bind(null, {
      key,
      transform,
      compression,
    }),
  };
};

export default JWE;
