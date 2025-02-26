const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://aal3-33.github.io/SurfersLondon",
    changeOrigin: true,
  }),
);

const PORT = process.env.PORT || 443;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
