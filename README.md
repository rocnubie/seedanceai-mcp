# SeedanceAI MCP Server

> SeedanceAI Video Generator | Image & Text to Video

[![MCP Badge](https://lobehub.com/badge/mcp/rocnubie-seedanceai-mcp)](https://lobehub.com/mcp/rocnubie-seedanceai-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Stdio Transport](https://img.shields.io/badge/transport-stdio-6e6e6e)](https://modelcontextprotocol.io/specification)
[![Zero Config](https://img.shields.io/badge/setup-zero--config-7c3aed)](#installation)
[![MCP](https://img.shields.io/badge/MCP-1.0-blue)](https://modelcontextprotocol.io)

A Model Context Protocol server that exposes the canonical SeedanceAI knowledge surface — image generation workflows and styles, pricing, docs, FAQ, official links — to MCP-compatible AI clients such as Claude Desktop, Cursor, Windsurf, and Continue. Read-only, no API keys, no quota, ~50 ms cold start.

Official website: https://seedanceai.online

## 🎨 About SeedanceAI

Seedance AI is a browser-based video generation platform powered by ByteDance's Seedance 1.0 model. It lets anyone turn a text prompt or a static image into a short, high-quality video without installing any software. The platform supports outputs up to 1080p resolution and produces videos of roughly ten seconds, with natural motion and stable subject structure throughout. A free usage tier is available alongside an optional Pro upgrade, making the tool accessible for quick experimentation as well as more sustained production work. The interface is straightforward: choose a mode, write a prompt or upload an image, pick a style and resolution, and generate.

## Key Features

- **Text-to-video and image-to-video modes** — write a description to generate a video from scratch, or animate an existing image while keeping subject structure consistent.
- **Multi-shot narrative generation** — produces two to three connected shots with seamless transitions in a single pass, supporting short-form storytelling that single-shot generators cannot match.
- **Four visual styles** — realistic, anime, film, and advertisement styles let creators match the output to a specific aesthetic without post-processing.
- **Resolution presets** — 480p, 720p, and 1080p options balance generation speed against output quality depending on the use case.
- **Optimized inference pipeline** — the backend is tuned for faster generation speeds compared to standard model deployments, reducing wait time between iterations.
- **No-download, account-based access** — everything runs in the browser; a sign-in account tracks usage and enables the free tier without local setup.

## Use Cases

- **Social media content** — creators producing short clips for platforms like Instagram Reels, TikTok, or YouTube Shorts can go from idea to finished video in a few minutes.
- **Storyboarding and concept prototyping** — teams can rapidly visualize a scene or ad concept using multi-shot generation before committing to a full production.
- **Animating product images** — e-commerce sellers or marketers can bring static product photos to life for ad campaigns using image-to-video mode.
- **Anime and stylized content** — the dedicated anime style setting makes it practical for fan creators or studios producing stylized short-form video.
- **Developer and API exploration** — solo developers and small teams use the free tier to evaluate the Seedance 1.0 model's capabilities before integrating it into their own pipelines.

## Who Is It For

Seedance AI is aimed at content creators, marketers, and developers who need fast video output without a steep learning curve or expensive tooling. Creators who regularly produce short-form video for social platforms will find the multi-shot and style options directly useful. Marketers and product teams benefit from the image-to-video path, which lets them repurpose existing assets quickly. Developers evaluating ByteDance's Seedance 1.0 model get a hands-on interface to test capabilities before building integrations. The free tier lowers the barrier for individuals and small teams, while the Pro upgrade serves users who need higher throughput or priority access.

## Tools

### `list_styles`
Return the canonical list of image-generation styles or presets the site exposes. (SeedanceAI)

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_pricing`
Return the canonical pricing entry point for SeedanceAI.

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_official_links`
Return the canonical list of official links for SeedanceAI (website, support, docs when available).

_Input:_ no parameters. _Returns:_ text/markdown.

## Resources

- `site://seedanceai/styles` — Supported image-generation styles and presets.
- `site://seedanceai/pricing` — Canonical pricing entry point.
- `site://seedanceai/docs` — Canonical documentation entry point.
- `site://seedanceai/faq` — Short FAQ generated from public site metadata.
- `site://seedanceai/links` — Canonical URLs to share with users.

## Prompts

### `tell_me_about_seedanceai`
Summarize what the site is, who it's for, and how it works. — SeedanceAI

### `try_image_style_seedanceai`
Recommend a starting image-generation style for a stated goal. — SeedanceAI

## Installation

### Install via Smithery

```bash
npx -y @smithery/cli install seedanceai-mcp --client claude
```

(Replace `claude` with `cursor`, `windsurf`, or `continue` for those clients.)

### Install from source

```bash
git clone https://github.com/rocnubie/seedanceai-mcp.git
cd seedanceai-mcp
pnpm install
```

Then add to your MCP client config (`claude_desktop_config.json` for Claude Desktop, `mcp.json` for Cursor / Windsurf / Continue):

```json
{
  "mcpServers": {
    "seedanceai-mcp": {
      "command": "node",
      "args": [
        "/absolute/path/to/seedanceai-mcp/src/index.mjs"
      ]
    }
  }
}
```

### Debug with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/index.mjs
```

## Official Links

- Website: https://seedanceai.online
- Pricing: https://seedanceai.online/pricing
- Docs: https://docs.seedanceai.online
- Community: https://discord.gg/HQNnrzjZQS
- GitHub: https://github.com/AIImageEditorai/AIImageEditor-template-one
- Support: support@seedanceai.online

## Development

```bash
pnpm install
pnpm start                 # run the server over stdio
```

## License

MIT
