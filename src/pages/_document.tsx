import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark" data-theme="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force dark mode immediately
                document.documentElement.setAttribute('data-theme', 'dark');
                document.documentElement.classList.add('dark');
                document.body.classList.add('dark');
                document.documentElement.style.colorScheme = 'dark';
                document.body.style.colorScheme = 'dark';
              })();
            `,
          }}
        />
      </Head>
      <body className="antialiased font-[Poppins,system-ui,sans-serif] bg-background text-foreground dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
