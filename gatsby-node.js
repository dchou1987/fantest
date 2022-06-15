const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const newsItems = await graphql(`
    {
        graphCmsData {
            news {
                title
                bulletedSummaryContent {
                    html
                  }
                  mainBody {
                    html
                  }
                featuredPhoto {
                    url
                  }
                  featuredPhotoSmall {
                    url
                  }
                  featuredPhotoMedium {
                    url
                  }
                  featuredPhotoLarge {
                    url
                  }
                publishedAt
                slug
                tags
                date
              }
            }
}
`)
    newsItems.data.graphCmsData.news.forEach(item => {
        createPage({
            path: `/news/${item.slug}`,
            component: path.resolve("./src/templates/blogpost.jsx"),
            context: {
                category: "news",
                data: item,
                // posts:techno.data.graphCmsData.technologyPosts,
            },
        })
    })
}