import React from "react";
import Markdown from "markdown-to-jsx";

function MarkdownContent({ markdown }) {
  const Title = ({ children, ...props }) => (
    <div className="section-title has-title-dividers block mb-6 pt-4 has-text-centered">
      <span className={`title ${props.className}`}>{children}</span>
    </div>
  );

  const SmallTitle = ({ children, ...props }) => (
    <div className="block mb-5">
      <span className={`subtitle has-text-weight-bold ${props.className}`}>
        {children}
      </span>
    </div>
  );

  const Copy = ({ children }) => (
    <div className="block">
      <p>{children}</p>
    </div>
  );

  const BlockQuote = ({ children }) => (
    <div className="block testimonial is-medium has-border-dark-opacity-1-top has-border-dark-opacity-1-bottom has-text-left">
      <blockquote>
        <span className="icon has-text is-opacity-3">
          <i className="fas fa-quote-left fa"></i>
        </span>
        <div className="quotation pl-4">{children && <p>{children}</p>}</div>
      </blockquote>
    </div>
  );

  return (
    <Markdown
      options={{
        disableParsingRawHTML: false,
        overrides: {
          h1: {
            component: Title,
            props: {
              className: "is-2",
            },
          },
          h2: {
            component: Title,
            props: {
              className: "is-2",
            },
          },
          h3: {
            component: Title,
            props: {
              className: "is-3",
            },
          },
          h4: {
            component: SmallTitle,
            props: {
              className: "is-4",
            },
          },
          h5: {
            component: SmallTitle,
            props: {
              className: "is-5",
            },
          },
          h6: {
            component: SmallTitle,
            props: {
              className: "is-6",
            },
          },
          p: {
            component: Copy,
          },
          img: {
            props: {
              className: "is-block mx-a",
            },
          },
          blockquote: {
            component: BlockQuote,
          },
          ul: {
            props: {
              className: "custom-list is-medium has-text-left mb-4",
            },
          },
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}

export default MarkdownContent;
