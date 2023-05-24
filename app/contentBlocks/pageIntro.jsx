import React from "react";
// import Markdown from "markdown-to-jsx";

function PageIntro({
  type,
  introductionTitle,
  introductionSubTitle,
  introIcons,
  markdown, 
}) {
  return (
    <group type={type} id="overview" className="group has-text-centered-mobile">
      <section
        className={`section is-equal-section has-text-centered has-background-secondary-lighter`}
      >
        <div className="container">
          <div className="columns is-flex-direction-column-reverse">
            <div className="column is-6 is-offset-3">
              {introductionTitle || introductionSubTitle ? (
                <div className="double-block">
                  {introductionTitle && (
                    <div className="block">
                      <div className="section-title has-title-dividers">
                        <div className="title-decoration">
                          <h2 className="title is-2">{introductionTitle}</h2>
                        </div>
                      </div>
                    </div>
                  )}
                  {introductionSubTitle && (
                    <div className="block">
                      <div className="content">
                        <h4 className="subtitle is-4 is-line-height-medium has-text-weight-normal">
                          {introductionSubTitle}
                        </h4>
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
                        <div key={index} className="column is-4">
                          <div className="is-inline-block">
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
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* {markdown && (
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
              )} */}
            </div>
          </div>
        </div>
      </section>
    </group>
  );
}

export default PageIntro;
