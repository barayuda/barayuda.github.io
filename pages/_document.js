import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
          <script
            src="https://kit.fontawesome.com/5946abd67d.js"
            crossOrigin="anonymous"
            async></script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
