import Document, { Html, NextScript, Main } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
