import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import ArticleGridHeaderImageCard from "../components/ArticleGridHeaderImageCard";
import ImageWithContentToEdge from "../components/ImageWithContentToEdge";
import SectionWrappedSectionTitle from "./SectionWrappedSectionTitle";
import GridLayout from "../components/layout/GridLayout";
import { Header } from "../components/helpers/Header";
// import { useContentContext } from "../content/ContentContext";
import Markdown from "markdown-to-jsx";

const SectionWrappedArticleGrid = ({
  columnsDesktop,
  columnsTablet,
  columnsMobile,
  imageRatio,
  footerGrow,
  footerShrink,
  headerGrow,
  headerShrink,
  boxBackgroundColour,
  customColumnsClasses,
  $type,
}) => {

  const { data } = useLoaderData();

  return (
    <React.Fragment>
      <Center>
        <SectionWrappedSectionTitle title="Spotlight" />
      </Center>
      <GridLayout columnDesktop={"2"} columnTablet={"2"} columnMobile={"1"}>
        {data.children.slice(0,1).map((blog, index) => {
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
                  </CardBody>
                </Card>
              </Link>
            </GridItem>
          )
        })}
      </GridLayout>
      <Center>
        <SectionWrappedSectionTitle title="Case Studies" />
      </Center>
      <GridLayout columnDesktop={"2"} columnTablet={"2"} columnMobile={"1"}>
        {data.children.slice(1).map((blog, index) => {
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
                  </CardBody>
                </Card>
              </Link>
            </GridItem>
          )
        })}
      </GridLayout>
    </React.Fragment>
  );
};

export default SectionWrappedArticleGrid;
