import React, { useState } from "react";
import BlogListArticle from "../components/BlogListArticle";

import BlogListHeader from "../components/BlogListHeader.jsx";
import { useContentContext } from "../content/ContentContext";
import { useLocation } from "react-router-dom";
import { json } from "@remix-run/node";
import {
    useLoaderData,
    useNavigate,
    Link
} from "@remix-run/react";
import {
    Container,
    Box,
    Button,
    Heading,
    Text,
    Flex,
    Wrap,
    Image
  } from "@chakra-ui/react";

export const loader = async ({ request, params, context }) => {
    let route;
    let article;
    if (params.page) {
        route = params.page
    } else {
        route = "/"
    }
    article = params.article
    console.log("params res ==>", article);

    const res = await fetch(process.env.CMS_SERVER_ADDRESS + "/" + route + "/" + article);
    // console.log("params res ==>", res);
    const data = await res.json();
    // console.log("params data ==>", data);

    return json({
        // page: data,
        route,
        data: data
    });
}

function BlogList({ sectionSize, sectionIsEqual, sectionHasBackground, children }) {
    const { route, data } = useLoaderData();

    console.log("data ==>", data, sectionSize,
    sectionIsEqual,
    sectionHasBackground);
    //   const BlogListClassesLayout =
    //     "is-one-third-desktop is-half-tablet is-full-mobile";
    //   const BlogPreviewMax = "128";

    //   const { contentRepository, useContent } = useContentContext();
    //   const location = useLocation();
    //   const pathName = location.pathname;

    //   const contentPages = useContent(
    //     () => contentRepository.getChildPageContent(pathName),
    //     [pathName],
    //     []
    //   );

    //   const categories = [
    //     "Teams",
    //     "Apps",
    //     "Data",
    //     "Marketing",
    //     "Hospitality",
    //     "Technology",
    //   ];

    //   const [allFilteredBlogs, setAllFilteredBlogs] = useState(true);
    //   const [activeCategories, setCategories] = useState([...categories]);

    //   const allCategories = () => {
    //     const allCategories = filteredPages;
    //     const allBlogCats = allCategories.map((posts) => {
    //       return posts.data.blogListPostCategory;
    //     });
    //     return (allBlogCats.filter(
    //       (v, i, a) => v !== "" && a.indexOf(v) === i
    //     ));
    //   };

    //   const addFilter = (e) => {
    //     var v = e.target.attributes[0].value;
    //     e = e.target.parentNode.attributes[0].nodeValue;
    //     var array = [...activeCategories];
    //     if (v === "remove") {
    //       if (array.some((x) => x === e)) {
    //         var index = array.indexOf(e);
    //         if (index > -1) {
    //           array.splice(index, 1);
    //         }
    //       }
    //     } else {
    //       index = array.includes(e);
    //       if (!index) {
    //         array.push(e);
    //       }
    //     }
    //     if (array.length !== categories.length) {
    //       setAllFilteredBlogs(false);
    //     }
    //     setCategories(array);
    //   };

    //   const allPosts = () => {
    //     setCategories([...categories]);
    //     setAllFilteredBlogs(true);
    //   };

    //   var filteredPages = contentPages.filter(
    //     (x) => x.data && typeof x.data.blogListPostDate == "string"
    //   );

    //   filteredPages.sort(function (a, b) {
    //     if (
    //       !a.data ||
    //       !a.data.blogListPostDate ||
    //       !b.data ||
    //       !b.data.blogListPostDate
    //     )
    //       return 0;

    //     var blogListPostDateSortableA = new Date(a.data.blogListPostDate).getTime();
    //     var blogListPostDateSortableB = new Date(b.data.blogListPostDate).getTime();

    //     if (blogListPostDateSortableA < blogListPostDateSortableB) {
    //       return 1;
    //     }
    //     if (blogListPostDateSortableA > blogListPostDateSortableB) {
    //       return -1;
    //     }

    //     return 0;
    //   });

    return (
        <>
            {/* <BlogListHeader
        filteredPages={filteredPages}
        filteredBlogCategories={allCategories()}
        addFilter={addFilter}
        activeCategories={activeCategories}
        allPosts={allPosts}
        allFilteredBlogs={allFilteredBlogs}
      />
      <SectionWrappers
        sectionCustomClasses="no-footer-margin are-overlay-transition"
        sectionSize={sectionSize}
        sectionIsEqual={sectionIsEqual}
        sectionBackgroundColour={sectionHasBackground}
      >
        <div className="columns is-flex-wrap-wrap">
          {filteredPages &&
            filteredPages
              .filter((item) =>
                activeCategories.includes(item.data.blogListPostCategory)
              )
              .map((item) => (
                <>
                <BlogListArticle
                  BlogListClassesLayout={BlogListClassesLayout}
                  BlogPreviewMax={BlogPreviewMax}
                  blogListPostLink={item.route}
                  {...item.data}
                />
                </>
              ))}
        </div>
      </SectionWrappers> */}
      <Container maxW={"5xl"}>
            <Flex direction={"column"}>
                {data.children.map((blog, index) => {
                    return (<Box><Link key={index} to={blog.url}>{blog.url}</Link></Box>)
                })}
            </Flex>
      </Container>
        </>
    );
}

export default BlogList;
