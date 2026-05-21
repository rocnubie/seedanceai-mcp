import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export function createServer() {
  const server = new McpServer(
    { name: "seedanceai-mcp", version: "0.1.0" },
    { instructions: "Read-only canonical knowledge for SeedanceAI (https://seedanceai.online). Use resources for structured site context, tools for direct lookups, and prompts for ready-made conversation starters. Defer to the official website for live actions." }
  );

  // ----- Resources --------------------------------------------------------

  server.registerResource(
    "styles",
    "site://seedanceai/styles",
    {
      title: "Styles",
      description: "Supported image-generation styles and presets.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# SeedanceAI — Styles\n\nCreate AI videos with SeedanceAI by text to video, text to image, image editing, and image to video. Best free Seedance AI video generator online by ByteDance.\n\n## Site basics\n- Site ID: seedanceai\n- Website: https://seedanceai.online\n- Default locale: en\n- Locales: en, de, fr, ja, ko, es, ar\n\n## Public feature scope\n- image gen\n- video gen\n- image inspiration\n- video inspiration\n- pricing\n\n## Official website\nhttps://seedanceai.online",
        },
      ],
    })
  );

  server.registerResource(
    "pricing",
    "site://seedanceai/pricing",
    {
      title: "Pricing",
      description: "Canonical pricing entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# SeedanceAI Pricing\n\nCanonical pricing page: https://seedanceai.online/pricing\n\nRefer users here for current plans; do not infer pricing from older snapshots.",
        },
      ],
    })
  );

  server.registerResource(
    "docs",
    "site://seedanceai/docs",
    {
      title: "Docs",
      description: "Canonical documentation entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# SeedanceAI Docs\n\nCanonical documentation: https://docs.seedanceai.online",
        },
      ],
    })
  );

  server.registerResource(
    "faq",
    "site://seedanceai/faq",
    {
      title: "FAQ",
      description: "Short FAQ generated from public site metadata.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# FAQ\n\n## What is this site?\nCreate AI videos with SeedanceAI by text to video, text to image, image editing, and image to video. Best free Seedance AI video generator online by ByteDance.\n\n## Where can I get help?\nsupport@seedanceai.online\n\n## Where is the official documentation?\nhttps://docs.seedanceai.online\n\n## Which site is this?\nseedanceai (SeedanceAI)",
        },
      ],
    })
  );

  server.registerResource(
    "links",
    "site://seedanceai/links",
    {
      title: "Official Links",
      description: "Canonical URLs to share with users.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Official Links\n\n- Website: https://seedanceai.online\n- Pricing: https://seedanceai.online/pricing\n- Docs: https://docs.seedanceai.online\n- Community: https://discord.gg/HQNnrzjZQS\n- GitHub: https://github.com/AIImageEditorai/AIImageEditor-template-one\n- Support: support@seedanceai.online",
        },
      ],
    })
  );

  // ----- Tools ------------------------------------------------------------

  server.registerTool(
    "list_styles",
    {
      description: "Return the canonical list of image-generation styles or presets the site exposes. (SeedanceAI)",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# SeedanceAI — Styles\n\nCreate AI videos with SeedanceAI by text to video, text to image, image editing, and image to video. Best free Seedance AI video generator online by ByteDance.\n\nCanonical website: https://seedanceai.online" },
      ],
    })
  );

  server.registerTool(
    "get_pricing",
    {
      description: "Return the canonical pricing entry point for SeedanceAI.",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# SeedanceAI Pricing\n\nOfficial pricing: https://seedanceai.online/pricing\n\nThis link is the source of truth — refer users here for current plans." },
      ],
    })
  );

  server.registerTool(
    "get_official_links",
    {
      description: "Return the canonical list of official links for SeedanceAI (website, support, docs when available).",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Official Links\n\n- Website: https://seedanceai.online\n- Pricing: https://seedanceai.online/pricing\n- Docs: https://docs.seedanceai.online\n- Community: https://discord.gg/HQNnrzjZQS\n- GitHub: https://github.com/AIImageEditorai/AIImageEditor-template-one\n- Support: support@seedanceai.online" },
      ],
    })
  );

  // ----- Prompts ----------------------------------------------------------

  server.registerPrompt(
    "tell_me_about_seedanceai",
    {
      description: "Summarize what the site is, who it's for, and how it works. — SeedanceAI",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "Please summarize what SeedanceAI (https://seedanceai.online) is, who it's for, and how it works. Reference the canonical resources at site://seedanceai/styles and site://seedanceai/links for accuracy. Be concrete, not generic." },
        },
      ],
    })
  );

  server.registerPrompt(
    "try_image_style_seedanceai",
    {
      description: "Recommend a starting image-generation style for a stated goal. — SeedanceAI",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "I want to generate an image with SeedanceAI (https://seedanceai.online). Ask me what the subject is, recommend one style preset from site://seedanceai/styles that fits, and write a prompt I can paste into the site." },
        },
      ],
    })
  );

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
