export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: `https://jsonwebtools.netlify.app/sitemap.xml`,
    };
  }