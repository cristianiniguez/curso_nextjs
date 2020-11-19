import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* webfonts */}
          {/* stylesheets */}
          {/* scripts */}
        </Head>
        <body className='my-body-class'>
          <Main />
          <NextScript />
          {/* elementos adicionales */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
