import React from "react";
import VideoWithContent from "../components/VideoWithContent";
import MarkdownContent from "../components/helpers/Markdown";
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
            <MarkdownContent>
              {content}
            </MarkdownContent>
          )}
          {markdown && (
            <MarkdownContent>
              {markdown}
            </MarkdownContent>
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
