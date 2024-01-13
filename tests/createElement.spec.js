import React from "../core/React.js";
import { describe, it, expect } from "vitest";

describe("createElement", () => {
  it("should return element vdom", () => {
    const el = React.createElement("div", null, "hi");

    expect(el).toEqual({
      type: "div",
      props: {
        children: [
          {
            type: "TEXT_ELEMENT",
            props: {
              nodeValue: "hi",
              children: [],
            },
          },
        ],
      },
    });
  });
});
