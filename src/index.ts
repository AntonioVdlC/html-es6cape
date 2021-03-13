// List of the characters we want to escape and their HTML escaped version
const chars: Record<string, string> = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#39;",
  "`": "&#96;",
};

// Dynamically create a RegExp from the `chars` object
const re = new RegExp(Object.keys(chars).join("|"), "g");

// Return the escaped string
export default (str = "") => String(str).replace(re, (match) => chars[match]);
