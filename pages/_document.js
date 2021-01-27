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
          <script src="https://kit.fontawesome.com/5946abd67d.js" crossOrigin="anonymous" async></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-31109193-1"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'UA-31109193-1');
            `}
          </script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
