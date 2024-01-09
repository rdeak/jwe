import { describe, it, expect } from "vitest";
import { encrypt } from "./encrypt";
import { decrypt } from "./decrypt";

describe("integration test", () => {
  it("should encrypt and decrypt successfully", async () => {
    const secret = "563ff95bc9efa71e";

    const jwe = await encrypt(
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
      secret,
    );

    const content = await decrypt(jwe, secret);

    expect(content).toMatchInlineSnapshot(`
      {
        "campaign_data": {
          "admin_data": {
            "country": "USA",
            "email": "ebrown@time.com",
            "id": 19850703,
            "name": "Emmett Brown",
          },
          "category": "Events & Trips",
          "country": "USA",
          "id": 19551105,
          "name": "The Time Travelers",
        },
        "group_data": {
          "name": "Marty McFly",
        },
        "organization_data": {
          "admin_data": {
            "country": "USA",
            "email": "ebrown@time.com",
            "id": 19850703,
            "name": "Emmett Brown",
          },
          "id": 980,
          "name": "Back to the Future",
        },
        "user_data": {
          "country": "USA",
          "email": "ebrown@time.com",
          "id": 19850703,
          "name": "Emmett Brown",
        },
        "utm_data": {
          "utm_campaign": "Movie",
          "utm_channel": "Time",
          "utm_content": "Image",
          "utm_medium": "Universal Pictures",
          "utm_term": "Time, Travel",
        },
      }
    `);
  });
});
