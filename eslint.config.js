// eslint.config.js
import { defineConfig } from "eslint/config";

// Example of global ignores
export default defineConfig([
    {
        ignores: [
            "**/dist/", "build/", "media/*",
            "webpack.config.js"
        ]
    }
]);