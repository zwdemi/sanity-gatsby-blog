export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "637adf6e1f7d1229c8d0408f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-9gvy3pvm",
                  apiId: "07eb135a-85ae-490e-9598-625a89f5cd69",
                },
                {
                  buildHookId: "637adf6e1f7d1229c8d04090",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-jdze65am",
                  apiId: "a890cc6d-e8cb-4d9c-bc1a-1dbc4d8c1180",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/zwdemi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-jdze65am.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
