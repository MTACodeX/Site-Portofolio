export function getCategoryIcon(category: string): string {
  const c = (category || "").toLowerCase().trim().replace(/[_-]+/g, " ").replace(/\s+/g, " ");

  if (has(c, ["forensics", "forensic", "dfir", "disk", "memory", "pcap", "network forensics"])) return "mdi:magnify-scan";

  if (has(c, ["web", "web exploitation", "webexp", "web chall", "web security", "xss", "sqli", "csrf"])) return "mdi:web";

  if (has(c, ["pwn", "pwning", "pwnable", "binary exploitation", "binexp", "bof", "rop", "heap"])) return "mdi:memory";

  if (has(c, ["reverse", "re", "rev", "reverse engineering", "reverse-engineering", "crackme"])) return "mdi:bug";

  if (has(c, ["crypto", "cryptography", "cipher", "rsa", "ecc", "aes", "hash", "lattice"])) return "mdi:key-variant";

  if (has(c, ["osint", "open source intelligence", "intel", "investigation", "recon"])) return "mdi:radar";

  if (has(c, ["stego", "steganography", "steg", "image stego", "audio stego"])) return "mdi:image-search";

  if (has(c, ["mobile", "android", "ios", "apk", "ipa"])) return "mdi:cellphone";

  if (has(c, ["misc", "miscellaneous", "random", "fun"])) return "mdi:package-variant";

  if (has(c, ["hardware", "iot", "firmware", "uart", "jtag", "embedded"])) return "mdi:chip";

  if (has(c, ["blockchain", "web3", "smart contract", "smart-contract", "solidity", "ethereum"])) return "mdi:link-variant";

  if (has(c, ["cloud", "aws", "azure", "gcp", "kubernetes", "k8s", "docker"])) return "mdi:cloud-outline";

  if (has(c, ["zk", "zero knowledge", "zeroknowledge"])) return "mdi:shield-lock-outline";

  if (has(c, ["ppc", "programming", "coding", "algorithm", "algo", "math", "competitive programming"])) return "mdi:code-braces";

  if (has(c, ["ml", "ai", "machine learning", "deep learning", "llm", "prompt"])) return "mdi:brain";

  if (has(c, ["network", "networking", "infra", "infrastructure", "protocol"])) return "mdi:lan";

  if (has(c, ["reconnaissance", "enumeration", "pentest", "pentesting", "scanning"])) return "mdi:radar";

  if (has(c, ["malware", "virus", "ransomware", "trojan"])) return "mdi:biohazard";

  if (has(c, ["threat", "apt", "campaign"])) return "mdi:shield-search-outline";

  return "mdi:tag-outline";
}

function has(text: string, keys: string[]): boolean {
  return keys.some((k) => text.includes(k));
}
