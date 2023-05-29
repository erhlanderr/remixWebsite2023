import React from "react";
import VideoWithContent from "../components/VideoWithContent";
import Markdown from "markdown-to-jsx";
import MarkdownContent from "../components/markdownContent";
import {
  Container,
  Box,
  Button,
  Heading,
  Text,
  theme
} from "@chakra-ui/react";

function SectionWrappedVideoBackground({
  title,
  subtitle,
  ctaCopy,
  ctaLink,
  verticallyCentered,
  content,
  markdown,
  backgroundVideo,
  backgroundVideoStatic,
  sectionTextColourLight,
}) {
  return (
    <React.Fragment>
      <VideoWithContent
        title={title}
        subtitle={subtitle}
        ctaCopy={ctaCopy}
        ctaLink={ctaLink}
        verticallyCentered={verticallyCentered}
      >
        <>
          {content && (
            <Markdown
              options={{
                disableParsingRawHTML: false,
                overrides: {
                  ul: {
                    props: {
                      className: "custom-list is-medium",
                    },
                  },
                },
              }}
            >
              {content}
            </Markdown>
          )}
          {markdown && (
            <Markdown
              options={{
                overrides: {
                  ul: {
                    props: {
                      className: "custom-list is-medium",
                    },
                  },
                },
              }}
            >
              {markdown}
            </Markdown>
          )}
        </>
      </VideoWithContent>

      {/* <div className="overlay has-background-black is-opacity-6 zi-1"></div>
      <video
        className="background-image w100 h100"
        preload="auto"
        loop
        autoPlay
        muted
        style={{
          objectFit: "cover",
          backgroundImage: "url(" + backgroundVideoStatic + ")",
        }}
      >
        {backgroundVideo && <source src={backgroundVideo} type="video/mp4" />}
        {backgroundVideo && <source src={backgroundVideo} type="video/ogg" />}
      </video> */}
    </React.Fragment>
  );
}

export default SectionWrappedVideoBackground;
