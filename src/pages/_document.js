import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {


  return (
    <Html lang="en">
      <Head>
        <title>Studrill</title>
        <meta property="og:title" content="Subscribe to Studrill" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={"https://studrill.com/logoo.png"} />
        <meta property="og:url" content="https://studrill.com" />
        <meta
          property="og:description"
          content="Studrill is an online platform for learning Japanese. Our courses cater to learners of all levels and cover everything from basic vocabulary to advanced conversations. Subscribe to our email list for updates and exclusive offers."
        />

        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=process.env.GTAG"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'process.env.GTAG');
              `,
        }}
      ></script>
    </Html>
  );
}
