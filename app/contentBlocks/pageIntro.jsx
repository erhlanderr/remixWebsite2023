import React from "react";
// import Markdown from "markdown-to-jsx";
import Markdown from "markdown-to-jsx";
import MarkdownContent from "../components/markdownContent";
import { Box, Heading } from "@chakra-ui/react";
import { Header, Subtitle } from "../components/helpers/Header";
function PageIntro({
  type,
  introductionTitle,
  introductionSubTitle,
  introIcons,
  markdown,
}) {
  return (
    <React.Fragment>
      <div className="column is-6 is-offset-3">
        {introductionTitle || introductionSubTitle ? (
          <div className="double-block">
            {introductionTitle && (
              <div className="block">
                <div className="section-title has-title-dividers">
                  <div className="title-decoration">
                    <Header headerType="h2">{introductionTitle}</Header>
                  </div>
                </div>
              </div>
            )}
            {introductionSubTitle && (
              <div className="block">
                <div>
                  <Subtitle headerType="h4">{introductionSubTitle}</Subtitle>
                </div>
              </div>
            )}
          </div>
        ) : null}
        {introIcons && (
          <div className="block">
            <div className="columns is-tablet level-list-large is-justify-content-center is-align-items-flex-start">
              {introIcons.map((introIcon, index) => {
                return (
                  <Box key={index}>
                    <Box>
                      <div className="icon is-large-x2-desktop is-medium-x2-touch  has-text-white is-opacity-9 has-background-primary is-rounded">
                        {introIcon.icon && (
                          <i
                            className={`fas fa-${introIcon.icon} fa-2x`}
                          ></i>
                        )}
                      </div>
                      {introIcon.copy && (
                        <p className="title is-7 mt-2">
                          {introIcon.copy}
                        </p>
                      )}
                    </Box>
                  </Box>
                );
              })}
            </div>
          </div>
        )}

        {markdown && (
          <Markdown
            className="content"
            options={{
              overrides: {
                p: {
                  props: {
                    className: "block",
                  },
                },
                a: {
                  props: {
                    target: "_blank",
                  },
                },
              },
            }}
          >
            {markdown}
          </Markdown>
        )}
      </div>
    </React.Fragment>
  );
}

export default PageIntro;
