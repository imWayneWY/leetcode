const index = new Map();
const reverseIndex = new Map();
const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const BASE_URL = "http://tinyurl.com/";
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  if (index.has(longUrl)) {
    return index.get(longUrl);
  }
  let s = BASE_URL;
  while(true) {
    for (let i=0; i<=6; i++) {
      s+=charSet.charAt(Math.floor(Math.random() * (charSet.length - 0)))
    }
    if (!reverseIndex.has(s)) {
      reverseIndex.set(s, longUrl);
      index.set(longUrl, s);
      break;
    } else {
      s = BASE_URL;
    }
  }
  return s;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	return reverseIndex.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */