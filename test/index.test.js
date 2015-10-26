import {expect} from "chai";
import htmlEscape from "../src/index.js";

const chars = {
	"&": "&amp;",
	">": "&gt;",
	"<": "&lt;",
	'"': "&quot;",
	"'": "&#39;",
	"`": "&#96;"
};

describe("html-es6cape", () => {
	it("should coerce the argument to a String", () => {
		expect(htmlEscape(true)).to.equal("true");
		expect(htmlEscape(27)).to.equal("27");
		expect(htmlEscape("string")).to.equal("string");
		expect(htmlEscape(null)).to.equal("null");
		expect(htmlEscape(undefined)).to.equal("undefined");
	});

	Object.keys(chars).forEach((key) => {	
		it("should return \"" + key + "\" when passed \"" + chars[key] + "\"", () => {
			expect(htmlEscape(key)).to.equal(chars[key]);
		});
	});

	it("should replace all the special characters in a string", () => {
		expect(htmlEscape(`Newark -> O'Hare & O'Hare <- Hartfield-Jackson ... "Whoop" \`whoop\`!`)).to.equal("Newark -&gt; O&#39;Hare &amp; O&#39;Hare &lt;- Hartfield-Jackson ... &quot;Whoop&quot; &#96;whoop&#96;!");
	});
});
