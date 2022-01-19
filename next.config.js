module.exports = {
    async rewrites() {
        return [
            {
                source: "/blog/:path*",
                destination: "https://test2-ten-beta.vercel.app/blog/:path*",
            },
        ];
    },
};
