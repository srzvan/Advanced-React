import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
