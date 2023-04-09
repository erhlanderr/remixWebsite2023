import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
function ExpandingTextBox({ textBoxCopy }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {textBoxCopy.length > 150 ? (
        <>
          {isReadMore ? (
            <Markdown
              options={{
                overrides: {
                  ul: {
                    props: {
                      className: "custom-list is-medium",
                    },
                  },
                  blockquote: {
                    props: {
                      className: "blog-testimonial is-medium",
                    },
                  },
                },
              }}
            >
              {textBoxCopy.slice(0, 150) + "..."}
            </Markdown>
          ) : (
            <Markdown
              options={{
                overrides: {
                  ul: {
                    props: {
                      className: "custom-list is-medium",
                    },
                  },
                  blockquote: {
                    props: {
                      className: "blog-testimonial is-medium",
                    },
                  },
                },
              }}
            >
              {textBoxCopy}
            </Markdown>
          )}
          {textBoxCopy.length > 150 && (
            <span className="is-link mt-3 is-block" onClick={toggleReadMore}>
              {isReadMore ? " read more" : " show less"}
            </span>
          )}
        </>
      ) : (
        <Markdown
          options={{
            overrides: {
              ul: {
                props: {
                  className: "custom-list is-medium",
                },
              },
              blockquote: {
                props: {
                  className: "blog-testimonial is-medium",
                },
              },
            },
          }}
        >
          {textBoxCopy}
        </Markdown>
      )}
    </>
  );
}

export default ExpandingTextBox;
