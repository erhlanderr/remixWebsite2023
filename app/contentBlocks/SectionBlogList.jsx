import React, { useState } from "react";
import BlogListArticle from "../components/BlogListArticle";
import BlogArticleInfo from "../components/BlogArticleInfo";
import BlogListHeader from "../components/BlogListHeader.jsx";
import ContainerLayout from "../components/layout/ContainerLayout";
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
  Image,
  Card,
  GridItem,
  CardHeader,
  CardBody,
  WrapItem,
  Center
} from "@chakra-ui/react";
import GridLayout from "../components/layout/GridLayout";
import { Header } from "../components/helpers/Header";

function BlogList({ sectionSize, sectionIsEqual, sectionHasBackground, children }) {
  const { route, data } = useLoaderData();

  // console.log("blog data ==>", route);
  // console.log("blog res ==>", data);

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

    const categories = [
      "Teams",
      "Apps",
      "Data",
      "Marketing",
      "Hospitality",
      "Technology",
    ];

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
      {/* <ContainerLayout> */}
        <GridLayout columnDesktop={"3"} columnTablet={"2"} columnMobile={"1"}>
          {data.children.map((blog, index) => {
            return (
              <GridItem key={blog.url}>
                <Link to={blog.url}>
                  <Card>
                    <CardHeader>
                      Header image placeholder
                    </CardHeader>
                    <CardBody>
                      <Box pb={5}>
                        <Header headerType={'h5'}>{blog.name}</Header>
                      </Box>
                      <BlogArticleInfo
                        blogArticleAuthor={"MethodWorx"}
                        blogArticleCategory={"Teams"}
                        blogArticleDate={blog.createDate}
                      />
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </Text>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
            )
          })}
        </GridLayout>
      {/* </ContainerLayout> */}
    </>
  );
}

export default BlogList;
