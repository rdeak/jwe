import { describe, it, expect } from "vitest";
import { encrypt } from "./encrypt";
import { createJWK } from "./createJWK";
import { inflateCompression } from "./compression";
import { transformAsJSON } from "./transform";

describe("encrypt", () => {
  it("should encrypt successfully", async () => {
    const jwe = await encrypt(
      {
        key: createJWK("1234567890123456"),
        compression: inflateCompression(),
        transform: transformAsJSON(),
        headerOptions: {
          alg: "dir",
          enc: "A128GCM",
        },
      },
      {
        user_data: {
          id: 19850703,
          name: "Emmett Brown",
          email: "ebrown@time.com",
          country: "USA",
        },
        campaign_data: {
          id: 19551105,
          name: "The Time Travelers",
          category: "Events & Trips",
          country: "USA",
          admin_data: {
            id: 19850703,
            name: "Emmett Brown",
            email: "ebrown@time.com",
            country: "USA",
          },
        },
        group_data: {
          name: "Marty McFly",
        },
        organization_data: {
          id: 980,
          name: "Back to the Future",
          admin_data: {
            id: 19850703,
            name: "Emmett Brown",
            email: "ebrown@time.com",
            country: "USA",
          },
        },
        utm_data: {
          utm_medium: "Universal Pictures",
          utm_campaign: "Movie",
          utm_term: "Time, Travel",
          utm_content: "Image",
          utm_channel: "Time",
        },
      },
    );

    expect(jwe).toMatch(/^eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4R0NNIn0\.\./);
  });
});
