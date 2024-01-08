import { decrypt } from "./decrypt";
import { describe, it, expect } from "vitest";

describe("decrypt", () => {
  it("should decrypt successfully", async () => {
    expect(
      await decrypt(
        "eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4R0NNIn0..WkdWdGIxUnZhMlZ1.yoOyYDeaO5XIaV8fGIMVrSnkQJy2oHRhqeMn9bthhjqAj1JaOhCSY4vuPJmbBkrPBKNhO9aOBjaxK2jALnjAMr7EvzEQ7eFXObVWjX7RBeuBE4LM2wtRigGFiCMxL9fJQnSPzniIqq_IoM6eIoWtS8EdRd8ZVLg1kDFB20BYJexYIfSHjmDLz3MDkipSCwnc2DYgG5Kkk92tuYZjEjkujRo4O2X_dJuCRwOE-olw98xsrpuLM5Wy-0JieiQEZbwZQIWSlnYfeqFN2pLYsQd-WB36gNNPnbfZP-NqTmY-Gx9sHwJAXLKvyNkqNKGuICfUKimqUk8v6Gw5msFz3I5m_9YEReOPy1VAdaYdpY6Sx231O34kleqDkGwRxtL9uM0No28fgmThOnMXi0O5XTeKWg6mukNZiP_gxSXlsIaHMULiiUyaLD0dJ8B8in5zExR4Gms2MS3lw9OvfhwEssiYb-M7ARc.CNdbuzBEDeTEKf3vuYEg9A",
        "1234567890123456",
      ),
    ).toMatchInlineSnapshot(`
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
