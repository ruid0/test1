module.exports = {
    async rewrites() {
        return [
            {
                source: "/blog/:path*",
                destination: "https://blog-staging.reebee.com/blog/:path*",
            },
        ];
    },
};
