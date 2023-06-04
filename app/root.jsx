import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import { ServerStyleContext, ClientStyleContext } from './context';
import { useContext, useEffect, useState } from "react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import { ThemeProvider } from "@chakra-ui/core"
import { withEmotionCache } from "@emotion/react";
import SectionStyles from "./assets/styles/sectionStyles";
import slickCarousel from "./assets/styles/css/slick.css";
import bulmaStyles from "./assets/styles/css/bulma.min.css";
import Navigation from "./components/Navigation";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import Button from "./assets/styles/Button";
import Heading from "./assets/styles/Heading";

// import ClientSideContentRepository from "./content/ClientSideContentRepository";
import { ContentContext } from "./content/ContentContext";
// import { Fonts } from "./assets/styles/Fonts"
export const loader = async ({ request, params }) => {
  let route;
  if (params.page) {
    route = params.page
  } else {
    route = "/"
  }

  const globalSettings = await fetch(process.env.CMS_SERVER_ADDRESS + "/global-settings");
  const globalSettingsData = await globalSettings.json();

  const routeChildren = await fetch(process.env.CMS_SERVER_ADDRESS);
  const routeChildrenData = await routeChildren.json();
  // console.log("routeChildren ==>", routeChildrenData);

  const res = await fetch(process.env.CMS_SERVER_ADDRESS + "/" + route);
  const data = await res.json();

  return json({
    // page: data,,
    globalSettings: globalSettingsData,
    routeChildren: routeChildrenData,
    route,
    data: data
  });
}

export let links = () => {
  return [
    { rel: "stylesheet", href: slickCarousel },
    { rel: "stylesheet", href: bulmaStyles },
  ]
}

const sizes = {
  fontSizes: {
    'xs': '0.75rem',
    'sm': '0.875rem',
    'md': '1rem',
    'lg': '1.25rem',
    'xl': '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
    '4xl': '3rem',
  },
}


const theme = extendTheme({
  components: {
    Button,
    Heading,
  },
  layerStyles: {
    mediumSection: {
      paddingTop: 0,
      paddingY: 4,
      paddingBottom: 4,
    },
  },
  colors: {
    brand: {
      mwBlue: "#2fb8ca",
      mwRed: "#ff8d85",
      mwGrey: "#4a4a4a",
      mwWhite: "#ffffff",
    }
  },
  fonts: {
    heading: "Quicksand",
    body: "Open Sans",
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "21px",
    "3xl": "24px",
    "4xl": "40px",
    "5xl": "48px",
    "6xl": "64px",
  },
  variants: {
    'with-shadow': {
      boxShadow: '0 0 44px 0 rgb(0 0 0 / 8%)',
    },
  },

  styles: {
    global: {
      body: {
        color: 'brand.mwGrey',
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
  const { globalSettings, routeChildren, route, data } = useLoaderData();
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Navigation globalSettings={globalSettings}/>
          <Outlet />
        <Footer childRoutes={routeChildren.children} />
      </ChakraProvider>
    </Document>
  );
}
