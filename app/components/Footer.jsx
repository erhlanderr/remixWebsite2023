import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinkBlock from "./LinkBlock";
import Markdown from "markdown-to-jsx";
import ContainerLayout from "./layout/ContainerLayout";
import {
    Container,
    Box,
    Button,
    Heading,
    Text,
    theme,
    Grid,
    GridItem,
    SimpleGrid
} from "@chakra-ui/react";
import { Header4, Header5 } from "./helpers/Header";

// import { useContentContext } from "../content/ContentContext";

const FooterPosts = ({ pathName, title, numberOfPosts, childRoutes }) => {
    const [isPosts, setPosts] = useState(null);
    useEffect(() => {
        var children = childRoutes.reduce(function (filtered, child) {
            if (child.url === pathName) {
                return child.children
            }
            return filtered;
        }, []);

        setPosts(children);

    }, []);



    return (
        <Box>

            {title && (
                <Box paddingBottom={6}>
                    <Header5>
                        {title}
                    </Header5>
                </Box>
            )}
            {isPosts?.map((item, index) => (
                <Box paddingTop={index > 0 ? 4 : 0} fontSize={'xs'} key={item.name + "-" + index}>
                    <Link className="link" to={item.url}>
                        {item.name}
                    </Link>
                </Box>

            ))}

        </Box>
    );
};

const FooterSiteMap = ({ title }) => {
    const [isPosts, setPosts] = useState(null);
    //   const { contentRepository, useContent } = useContentContext();
    const rootDir = "/";
    //   const contentPages = useContent(
    //     () => contentRepository.getChildPageContent(rootDir),
    //     [rootDir],
    //     []
    //   );
    //   useEffect(() => {
    //     var filteredPages = contentPages.filter(
    //       (x) => x.route && x.route !== ("/404" || "/globalSettings")
    //     );
    //     setPosts(filteredPages);
    //   }, [contentPages]);

    return (
        <div className="column is-one-quarter-desktop is-full-tablet is-full-mobile">
            <div className=" has-text-left">
                {title && (
                    <div className="block">
                        <Header5>
                            {title}
                        </Header5>
                    </div>
                )}
                {/* {!!isPosts &&
                    isPosts.map((item, index) => {
                        return (
                            <LinkBlock
                                linkTitle={item.data.content?.navigation.title}
                                linkUrl={item.route}
                                linkKey={index}
                            />
                        );
                    })} */}
            </div>
        </div>
    );
};

const formatedDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
}

const FooterBlogPosts = ({ pathName, numberOfPosts, title }) => {
    const [isPosts, setPosts] = useState(null);
    //   const { contentRepository, useContent } = useContentContext();
    //   const contentPages = useContent(
    //     () => contentRepository.getChildPageContent(pathName),
    //     [pathName],
    //     []
    //   );
    //   useEffect(() => {
    //     var filteredPages = contentPages.filter(
    //       (x) => x.data && typeof x.data.blogListPostDate == "string"
    //     );
    //     setPosts(filteredPages);
    //   }, [contentPages]);

    //   if (!!isPosts) {
    //     isPosts.sort(function (a, b) {
    //       if (
    //         !a.data ||
    //         !a.data.blogListPostDate ||
    //         !b.data ||
    //         !b.data.blogListPostDate
    //       )
    //         return 0;

    //       var blogListPostDateSortableA = new Date(
    //         a.data.blogListPostDate
    //       ).getTime();
    //       var blogListPostDateSortableB = new Date(
    //         b.data.blogListPostDate
    //       ).getTime();

    //       if (blogListPostDateSortableA < blogListPostDateSortableB) {
    //         return 1;
    //       }
    //       if (blogListPostDateSortableA > blogListPostDateSortableB) {
    //         return -1;
    //       }

    //       return 0;
    //     });
    //   }

    return (
        <div className="column is-one-quarter-desktop is-full-tablet is-full-mobile">
            <div className=" has-text-left">
                {title && (
                    <div className="block">
                        <Header5>
                            {title}
                        </Header5>
                    </div>
                )}
                {!!isPosts &&
                    isPosts
                        .slice(0, numberOfPosts)
                        .map((item, index) => (
                            <React.Fragment key={index}>
                                <LinkBlock
                                    linkTitle={item.data.blogListPostTitle}
                                    linkUrl={item.route}
                                    linkSubtitle={formatedDate(item.data.blogListPostDate)}
                                    linkKey={item.data.blogListPostDate}
                                />
                            </React.Fragment>
                        ))}
            </div>
        </div>
    );
};

function Footer({ logo, childRoutes }) {
    const footer = useRef();
    return (
        <>
            <footer
                ref={footer}
                className="footer has-background-primary-dark has-text-white are-half-block has-link-tertiary has-link-bold are-large-icons is-size-7"
            >
                <ContainerLayout>
                    <Grid
                        templateColumns='repeat(2, 1fr)'
                    >

                        <GridItem>
                            <div>
                                <div className="block">
                                    <div className="navbar-brand">
                                        <Link to="/">
                                            <figure className="image brand">
                                                <img src={logo} alt="MethodWorx" data-src={logo} />
                                            </figure>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </GridItem>

                        <GridItem>
                            <div className="icon-content">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.youtube.com/channel/UC8aT1prM8u1MxwXcRDY1Iig/featured"
                                >
                                    <span className="icon is-medium">
                                        <i className="fab fa-youtube-square"></i>
                                    </span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.instagram.com/methodworx/"
                                >
                                    <span className="icon is-medium">
                                        <i className="fab fa-instagram"></i>
                                    </span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.facebook.com/methodworx/"
                                >
                                    <span className="icon is-medium">
                                        <i className="fab fa-facebook-square"></i>
                                    </span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://twitter.com/methodworx"
                                >
                                    <span className="icon is-medium">
                                        <i className="fab fa-twitter-square"></i>
                                    </span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/company/methodworx-ltd"
                                >
                                    <span className="icon is-medium">
                                        <i className="fab fa-linkedin"></i>
                                    </span>
                                </a>
                            </div>
                        </GridItem>
                    </Grid>

                    <SimpleGrid 
                    // templateColumns='repeat(4, 1fr)'
                    gap={6}
                    columns={{base: 1, md: 2, lg: 4}}
                    
                    >
                        <Box>
                            <Box paddingBottom={6}>
                                <Header5>
                                    Our Address
                                </Header5>
                            </Box>
                            <Box>
                                <Text fontSize={'xs'}>
                                    MethodWorx Ltd
                                    <br />
                                    Creative Studios
                                    <br />
                                    Runfold House
                                    <br />
                                    Runfold St George
                                    <br />
                                    Farnham
                                    <br />
                                    GU10 1PL
                                    <br />
                                    <br />
                                    phone: <a href="tel:0845 1630796">0845 1630796</a>
                                    <br />
                                    email:{" "}
                                    <a href="mailto:sales@methodworx.com">
                                        sales@methodworx.com
                                    </a>
                                </Text>
                            </Box>
                        </Box>

                        <FooterBlogPosts
                            title="Recent Blogs"
                            pathName="/blog/"
                            childRoutes={childRoutes}
                            numberOfPosts={4}
                        />
                        <FooterPosts
                            title="Case Studies"
                            pathName="/work/"
                            childRoutes={childRoutes}
                            numberOfPosts={4}
                        />
                        <FooterSiteMap title="Site Map" />
                    </SimpleGrid>
                </ContainerLayout>
            </footer>
        </>
    );
}

export default Footer;
