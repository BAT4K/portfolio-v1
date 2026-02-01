# Hans James | Systems Engineer Portfolio

> A high-performance, component-driven portfolio designed with a **Systems Engineering** aesthetic.  
> Built to showcase low-latency architectures, distributed systems, and high-performance web engineering.

![Project Preview](public/preview.png)

## Overview

This portfolio is not just a static site; it's a reflection of my engineering identity.  
It moves away from standard web design tropes to embrace a **terminal-first, industrial, and schematic visual language**.

It features a fully interactive command-line interface, keyboard-driven navigation, and technical visualizations of backend projects.

**Live Demo:** https://hansjames.vercel.app/

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Key Features

- **Interactive Terminal**  
  ZSH-inspired terminal overlay accessible via the navbar.  
  Supports commands like `ls`, `cd`, `cat`, `whoami`, and `neofetch`.

- **Command Palette**  
  System-wide command menu triggered by `Cmd + K` / `Ctrl + K`.

- **Schematic Visuals**  
  Projects are represented using technical wireframe-style CSS/SVG animations.

- **Typewriter Hero**  
  Dynamic landing section highlighting low-latency and distributed systems focus.

- **VS Code–Inspired Bio**  
  IDE-like about section written in Java syntax.

- **Dark Mode Native**  
  High-contrast dark theme (`#0a0a0a`) with Emerald (`#10b981`) accents.

## Project Structure

```bash
sys-eng-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page (VS Code visual)
│   ├── work/               # Projects showcase
│   ├── layout.tsx          # Root layout & providers
│   └── page.tsx            # Hero landing page
├── components/             # Reusable React components
│   ├── Terminal.tsx        # Interactive terminal logic
│   ├── Projects.tsx        # Project cards & visuals
│   ├── CommandPalette.tsx  # Cmd+K implementation
│   └── ...
├── context/                # Global state (terminal visibility)
├── public/                 # Static assets (resume, SVGs)
└── styles/                 # Global CSS & Tailwind config
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/BAT4K/sys-eng-portfolio.git
cd sys-eng-portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open locally

Navigate to http://localhost:3000 in your browser.

## Terminal Commands

Try these commands inside the site terminal:

- `help` — List available commands
- `ls` — List projects and files
- `cat <file>` — Read files like `contact.txt` or `skills.md`
- `neofetch` — Display system specs and ASCII art
- `whoami` — Display user role

## Featured Projects

- **Magma**  
  Low-latency trading engine using the LMAX Disruptor pattern  
  (~130ns latency).

- **NioKvStore**  
  Distributed key-value database implementing the Reactor pattern  
  with AOF persistence.

- **Whack-A-Mole**  
  Concurrent JavaFX desktop game demonstrating multithreading principles.

## License

This project is open source and available under the **MIT License**.
