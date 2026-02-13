// src/utils/iconMap.ts
export function getCategoryIcon(category: string): string {
  const c = (category || "").toLowerCase().trim().replace(/[_-]+/g, " ").replace(/\s+/g, " ");

  // ===== CORE CTF CATEGORIES =====
  // Forensics / DFIR
  if (has(c, ["forensics", "forensic", "dfir", "disk", "memory", "pcap", "network forensics"])) return "mdi:magnify-scan";

  // Web
  if (has(c, ["web", "web exploitation", "webexp", "web chall", "web security", "xss", "sqli", "csrf"])) return "mdi:web";

  // Pwn / Binary Exploitation
  if (has(c, ["pwn", "pwning", "pwnable", "binary exploitation", "binexp", "bof", "rop", "heap"])) return "mdi:memory";

  // Reverse Engineering
  if (has(c, ["reverse", "re", "rev", "reverse engineering", "reverse-engineering", "crackme"])) return "mdi:bug";

  // Crypto
  if (has(c, ["crypto", "cryptography", "cipher", "rsa", "ecc", "aes", "hash", "lattice"])) return "mdi:key-variant";

  // OSINT
  if (has(c, ["osint", "open source intelligence", "intel", "investigation", "recon"])) return "mdi:radar";

  // Stego
  if (has(c, ["stego", "steganography", "steg", "image stego", "audio stego"])) return "mdi:image-search";

  // Mobile
  if (has(c, ["mobile", "android", "ios", "apk", "ipa"])) return "mdi:cellphone";

  // Misc
  if (has(c, ["misc", "miscellaneous", "random", "fun"])) return "mdi:package-variant";

  // ===== EXTENDED / COMMON VARIANTS =====
  // Hardware / IoT
  if (has(c, ["hardware", "iot", "firmware", "uart", "jtag", "embedded"])) return "mdi:chip";

  // Blockchain / Web3
  if (has(c, ["blockchain", "web3", "smart contract", "smart-contract", "solidity", "ethereum"])) return "mdi:link-variant";

  // Cloud
  if (has(c, ["cloud", "aws", "azure", "gcp", "kubernetes", "k8s", "docker"])) return "mdi:cloud-outline";

  // Crypto + Blockchain overlap
  if (has(c, ["zk", "zero knowledge", "zeroknowledge"])) return "mdi:shield-lock-outline";

  // PPC / Programming / Algo
  if (has(c, ["ppc", "programming", "coding", "algorithm", "algo", "math", "competitive programming"])) return "mdi:code-braces";

  // ML / AI
  if (has(c, ["ml", "ai", "machine learning", "deep learning", "llm", "prompt"])) return "mdi:brain";

  // Networking / Infra
  if (has(c, ["network", "networking", "infra", "infrastructure", "protocol"])) return "mdi:lan";

  // Pentest / Recon / Enumeration
  if (has(c, ["reconnaissance", "enumeration", "pentest", "pentesting", "scanning"])) return "mdi:radar";

  // Malware
  if (has(c, ["malware", "virus", "ransomware", "trojan"])) return "mdi:biohazard";

  // Threat intel-ish
  if (has(c, ["threat", "apt", "campaign"])) return "mdi:shield-search-outline";

  // ===== FALLBACKS =====
  return "mdi:tag-outline";
}

function has(text: string, keys: string[]): boolean {
  return keys.some((k) => text.includes(k));
}
