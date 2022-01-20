module.exports = {
    trailingSlash: true,
    async rewrites() {
        return [
            {
                source: "/blog/:slug*/",
                destination: "https://test2-ten-beta.vercel.app/blog/:slug*\\(/\\)",
            },
        ];
    },
};
