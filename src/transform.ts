import type { Options, Payload, Transform } from "./types";

export const transformAsJSON = <
  PAYLOAD extends Payload = Payload,
>(): Transform<PAYLOAD> => ({
  serialize: (payload: PAYLOAD) => JSON.stringify(payload),
  deserialize: (serializedPayload: string): PAYLOAD =>
    JSON.parse(serializedPayload),
});

export const getTransformer = (options?: Options): Transform =>
  options?.transform || transformAsJSON();
