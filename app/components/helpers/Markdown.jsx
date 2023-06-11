import React from "react";
import Markdown from "markdown-to-jsx";
import { Box, Text } from "@chakra-ui/react";
import { Header, DecoratedHeader } from "./Header";
import ImageLoader from "../imageLoader";

function MarkdownContent({ children }) {
    const Title = ({ children, ...props }) => (
        <Box mb={5}>
            <DecoratedHeader headerType="h2">{children}</DecoratedHeader>
        </Box>
    );

    const SmallTitle = ({ children, ...props }) => (
        <Box mb={5}>
            <Header headerType={props.headerType}>
                {children}
            </Header>
        </Box>
    );

    const Copy = ({ children }) => (
        <Box pb={4}>
            <Text>{children}</Text>
        </Box>
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

    const Image = ({ title, alt, src },) => (
        // <img src={children} />
        // console.log("chldren image", children.src)
        <ImageLoader imageUrl={src} />
    )

    return (
        <Markdown
            options={{
                disableParsingRawHTML: false,
                overrides: {
                    h1: {
                        component: Title,
                        props: {
                            headerType: "h2",
                        },
                    },
                    h2: {
                        component: Title,
                        props: {
                            headerType: "h2",
                        },
                    },
                    h3: {
                        component: Title,
                        props: {
                            headerType: "h3",
                        },
                    },
                    h4: {
                        component: SmallTitle,
                        props: {
                            headerType: "h4",
                        },
                    },
                    h5: {
                        component: SmallTitle,
                        props: {
                            headerType: "h5",
                        },
                    },
                    h6: {
                        component: SmallTitle,
                        props: {
                            headerType: "h6",
                        },
                    },
                    p: {
                        component: Copy,
                    },
                    img: {
                        // props: {
                        //     src
                        // },
                        component: Image,
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
            {children}
        </Markdown>
    );
}

export default MarkdownContent;
