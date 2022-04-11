import { describe, it, expect } from "vitest";

import chars from "../src/chars";
import escape from "../src/index";

describe("html-es6cape", () => {
  it("should coerce the argument to a String (if not null or undefined)", () => {
    //@ts-expect-error
    expect(escape(true)).toEqual("true");
    //@ts-expect-error
    expect(escape(27)).toEqual("27");
    expect(escape("string")).toEqual("string");

    expect(escape(undefined)).not.toEqual("undefined");
    expect(escape()).not.toEqual("undefined");
  });

  it("should return an empty string if null or undefined", () => {
    expect(escape()).toEqual("");
    expect(escape(undefined)).toEqual("");
  });

  Object.keys(chars).forEach((key) => {
    it('should return "' + key + '" when passed "' + chars[key] + '"', () => {
      expect(escape(key)).toEqual(chars[key]);
    });
  });

  it("should replace all the special characters in a string", () => {
    expect(
      escape(
        `Newark -> O'Hare & O'Hare <- Hartfield-Jackson ... "Whoop" \`whoop\`!`
      )
    ).toEqual(
      "Newark -&gt; O&#39;Hare &amp; O&#39;Hare &lt;- Hartfield-Jackson ... &quot;Whoop&quot; &#96;whoop&#96;!"
    );
  });

  it("should work as a template tag on template literals", () => {
    expect(
      escape`Newark -> O'Hare & O'Hare <- Hartfield-Jackson ... "Whoop" \`whoop\`!`
    ).toEqual(
      "Newark -&gt; O&#39;Hare &amp; O&#39;Hare &lt;- Hartfield-Jackson ... &quot;Whoop&quot; &#96;whoop&#96;!"
    );
  });
});
