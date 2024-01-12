import zlib from "node:zlib";
import { promisify } from "node:util";
import type { Compression, Options } from "./types";

export const noCompression = (): Compression => ({
  compress: async (content) => content,
  decompress: async (content) => content,
});

export const inflateCompression = (): Compression => {
  const deflate = promisify(zlib.deflateRaw);
  const inflate = promisify(zlib.inflateRaw);

  return {
    compress: async (content: string): Promise<string> =>
      (await deflate(content)).toString("base64"),
    decompress: async (content: string): Promise<string> =>
      (await inflate(Buffer.from(content, "base64"))).toString("utf-8"),
  };
};

export const getCompression = (options?: Options): Compression =>
  options?.compression || noCompression();
