module.exports = {
  // https://github.com/vercel/next.js/issues/21079
  // Remove the workaround the issue is fixed
  images: {
    loader: "imgix",
    path: "",
  },
  trailingSlash: true
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/about": { page: "/" },
  //     "/p/hello-nextjs": { page: "/posts", query: { id: "ai-meu-peru" } },
  //     "/p/learn-nextjs": { page: "/posts", query: { id: "pre-rendering" } },
  //     "/p/deploy-nextjs": { page: "/posts", query: { id: "ssg-ssr" } },
  //   };
  // },
};
