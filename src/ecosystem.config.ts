module.exports = {
    app: [{
        name: "mern-server",
        script: "./index.ts",
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        },
    }]
}