import { noCompression, inflateCompression } from "./compression";
import { describe, it, expect } from "vitest";

describe("no compression", () => {
  it("should compress and decompress successfully", async () => {
    const { compress, decompress } = noCompression();

    expect(await decompress(await compress("dummy text"))).toEqual(
      "dummy text",
    );
  });
});
describe("inflate compression", () => {
  it("should compress and decompress successfully", async () => {
    const { compress, decompress } = inflateCompression();

    expect(await decompress(await compress("dummy text"))).toEqual(
      "dummy text",
    );
  });
});
