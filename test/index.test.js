import htmlEscape from "../src/index.ts";

const chars = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#39;",
  "`": "&#96;",
};

describe("html-es6cape", () => {
  it("should coerce the argument to a String (if not null or undefined)", () => {
    expect(htmlEscape(true)).toEqual("true");
    expect(htmlEscape(27)).toEqual("27");
    expect(htmlEscape("string")).toEqual("string");

    expect(htmlEscape(undefined)).not.toEqual("undefined");
    expect(htmlEscape()).not.toEqual("undefined");
  });

  it("should return an empty string if null or undefined", () => {
    expect(htmlEscape()).toEqual("");
    expect(htmlEscape(undefined)).toEqual("");
  });

  Object.keys(chars).forEach((key) => {
    it('should return "' + key + '" when passed "' + chars[key] + '"', () => {
      expect(htmlEscape(key)).toEqual(chars[key]);
    });
  });

  it("should replace all the special characters in a string", () => {
    expect(
      htmlEscape(
        `Newark -> O'Hare & O'Hare <- Hartfield-Jackson ... "Whoop" \`whoop\`!`
      )
    ).toEqual(
      "Newark -&gt; O&#39;Hare &amp; O&#39;Hare &lt;- Hartfield-Jackson ... &quot;Whoop&quot; &#96;whoop&#96;!"
    );
  });
});
