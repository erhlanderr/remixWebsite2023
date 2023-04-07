import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ServerStyleContext, ClientStyleContext } from './context';
import { useContext, useEffect } from "react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { withEmotionCache } from "@emotion/react";

const theme = extendTheme({

  colors: {
    brand: { 
      polarDarkBlue: "#004c7a",
      polarMediumBlue: "#004990",
      polarBrightBlue: "#007bff",
      polarTeal: "#05b2c4",
      polarLightGrey: "#ECF1F8",
      polarGrey: "#898989",
      polarText: "#363d40",
      polarShadow: "0 0 44px 0 rgb(0 0 0 / 8%)",
      polarBody: "#f7faff",
      polarBodyText: "#4b4f58",
      polarGreen: "#76c124",
      polarOrange: "#ffa500",
      polarRed: "#ff0000",
    }
  },
  fonts: {
    heading: `'Poppins Bold', sans-serif`,
    body: `Poppins, sans-serif`,
    strong: `Poppins, sans-serif`,
  },
  variants: {
    'with-shadow': {
      boxShadow: '0 0 44px 0 rgb(0 0 0 / 8%)',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.polarBody',
        color: 'brand.polarText',
      },
      p: {
        color: 'brand.polarText',
      }
    },
  },
})


const Document = withEmotionCache(
  ({ children }, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);


export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
