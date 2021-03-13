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
function escape(str: string = ""): string {
  return String(str).replace(re, (match) => chars[match]);
}

export { chars, escape };
export default escape;
