import zlib from "node:zlib";
import { promisify } from "node:util";

const deflate = promisify(zlib.deflateRaw);
const inflate = promisify(zlib.inflateRaw);

export const compress = async (
  payload: Record<string, unknown>,
): Promise<string> =>
  (await deflate(JSON.stringify(payload))).toString("base64");

export const decompress = async (
  payload: string,
): Promise<Record<string, unknown>> =>
  JSON.parse((await inflate(Buffer.from(payload, "base64"))).toString("utf-8"));
