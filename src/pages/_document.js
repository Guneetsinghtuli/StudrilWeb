import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("Welcome to Studrill!")
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Subscribe to Studrill" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={"https://www.studrill.com/logoo.png"} />
        <meta property="og:url" content="https://www.studrill.com" />
        <meta
          property="og:description"
          content="If Japanese use EngRish, we use Japanglish. But a better one. 

Take the challenge improving your Japanese speaking with StuDrill and get FRESH MONEY up to ¥100,000!
CLICK THE LINK now https://www.studrill.com/

App is launching this March! Get exclusive treatment if you sign-up early!"
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


      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', ${process.env.NEXT_PUBLIC_GTAG});
              `,
        }}
      ></script>
    </Html>
  );
}
