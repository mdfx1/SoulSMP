import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>SoulSMP</span>,
  project: {
    link: "https://github.com/mdfx1/SoulSMP",
  },
  chat: {
    link: "https://discord.gg/adZ7hbZRbw",
  },
  docsRepositoryBase: "https://github.com/mdfx1/SoulSMP",
  footer: {
    text: "© 2025 SoulSMP",
  },
  useNextSeoProps() {
    return {
      title: "SoulSMP",
      openGraph: {
        title: "SoulSMP",
        description: "Hier findest du alle wichtigen Infos zu SoulSMP.",
        url: "#",
        images: [
          {
            url: "#",
            width: 1200,
            height: 630,
            alt: "SoulSMP",
          },
        ],
      },
    };
  },
};

export default config;