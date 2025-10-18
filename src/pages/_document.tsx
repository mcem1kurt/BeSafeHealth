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
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1162634105881469'); 
              fbq('track', 'PageView');
            `
          }}
        />
      </Head>
      <body className="antialiased font-[Poppins,system-ui,sans-serif] bg-background text-foreground dark">
        {/* Facebook Pixel NoScript */}
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1162634105881469&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
