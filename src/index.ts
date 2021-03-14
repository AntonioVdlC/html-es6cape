import chars from "./chars";

// Dynamically create a RegExp from the `chars` object
const re = new RegExp(Object.keys(chars).join("|"), "g");

// Return the escaped string
function escape(str: string = ""): string {
  return String(str).replace(re, (match) => chars[match]);
}

export default escape;
