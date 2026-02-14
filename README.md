# 🛡️ Personal Portfolio & CTF Writeups Platform

A modern portfolio and CTF writeups platform built with **Astro**, designed for scalability, structured content management, and professional branding as a **Backend Developer & Cybersecurity Enthusiast**.

This project supports a dynamic folder-based writeups system, making it easy to add new CTF events and challenges without modifying core logic.

---

## 🚀 Features

- ⚡ Built with Astro
- 📂 Structured CTF writeups system (Event → Category → Challenge)
- 🧠 Markdown-based challenge documentation
- 🔥 Dynamic routing
- 🎨 Modular and reusable components
- 📑 Pagination system
- 💼 JSON-based project management
- 📱 Fully responsive design
- 🖥️ Terminal-style hero section
- 📩 Contact form integration (Formspree)

---

## 🏗️ Project Structure

```

public/
└── imgmd/             # Images challenges *.md

src/
├── assets/            # Static assets & images
├── components/        # Reusable UI components
├── data/
│   ├── projects.json  # Portfolio projects data
│   └── writeups/      # CTF events & challenges
├── layouts/           # Layout templates
├── pages/             # Application routes
├── styles/            # Global styling
└── utils/             # Helper functions
```

---

# 🧠 CTF Writeups System

Writeups are organized hierarchically for scalability and maintainability.

## 📂 Event Structure

```
src/data/writeups/events/{year}/{event}/
├── event.json
└── challenges/
    ├── binary/
    ├── forensics/
    ├── misc/
    ├── mobile/
    ├── reverse/
    └── web/
```

---

## ➕ Adding a New CTF Event

### 1️⃣ Create Event Folder

Example:

```
src/data/writeups/events/2026/My-CTF/
```

---

### 2️⃣ Add `event.json`

Example:

```json
{
  "year": 2026,
  "slug": "myctf",
  "name": "My CTF 2026",
  "start": "year-month-date",
  "end": "year-month-date",
  "location": "Location Event",
  "format": "Jeopardy",
  "url": "null",
  "team": true / false

  "name": "My CTF 2026",
  "year": 2026,
  "description": "Short description about this CTF event.",
  "banner": "/assets/bingkai.jpg"
}
```

---

### 3️⃣ Add a Challenge

Example file:

```
challenges/web/webexploit.md
```

Example Markdown:

```md
---
title: "Binary()"
category: "binary"
points: 295
solves: 41
slug: "binary"
description: "Description Challenge."
flag: "FLAG{binary}"
---

## Overview

fill in the challenge content
```

---

# 🌐 Dynamic Routing

Routes are automatically generated based on the folder structure:

```
/writeups/{year}/{event}/{category}/{challenge}
```

Example:

```
/writeups/2026/My-CTF/web/webexploit
```

Routing file location:

```
src/pages/writeups/[year]/[event]/[category]/[challenge].astro
```

---

# 💼 Adding Portfolio Projects

Edit:

```
src/data/projects.json
```

Example:

```json
[
  {
    "title": "Portfolio Website",
    "description": "Personal website built with Astro",
    "image": "/assets/projects/portofolio.png",
    "github": "https://github.com/username/repo",
    "demo": "https://yourwebsite.com"
  }
]
```

---

# 📩 Contact Form Setup (Formspree)

This project uses **Formspree** to handle contact form submissions.

## 🔑 1️⃣ Create a Form on Formspree

1. Sign up at https://formspree.io
2. Create a new form
3. Copy the generated form key

Example endpoint:

```
https://formspree.io/f/abcxyz123
```

Your key:

```
abcxyz123
```

---

## ⚙️ 2️⃣ Add Environment Variable For Formspree.io

Create a `.env` file in the root directory:

```
PUBLIC_FORMSPREE_KEY=abcxyz123
```

⚠️ The `PUBLIC_` prefix is required because the key is accessed client-side in Astro.

---

## 🔄 Restart Development Server

After modifying `.env`, restart:

```bash
npm run dev
```

---

# 🛠️ Installation

```bash
git clone https://github.com/yourusername/repository.git
cd repository
npm install
npm run dev
```

---

# 🎯 Purpose

This project was built to:

- Document CTF writeups in a structured system
- Showcase backend and cybersecurity skills
- Serve as a professional portfolio
- Demonstrate scalable content architecture

---

# 📄 License

MIT License  
Free to use, modify, and adapt for your own portfolio.

---

## ⭐ If you find this project useful

Consider giving it a star on GitHub.
