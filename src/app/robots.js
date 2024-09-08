export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: `https://https://jsonwebtools.netlify.app/sitemap.xml`,
    };
  }