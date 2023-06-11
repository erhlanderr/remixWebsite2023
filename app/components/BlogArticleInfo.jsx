import React from "react";
import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
function BlogArticleInfo({
  blogArticleAuthor,
  blogArticleCategory,
  blogArticleDate,
}) {

  return (
    <Wrap gap={6} fontSize={'xs'} pb={6}>
      {blogArticleDate && (
        <WrapItem>
          <Flex flexDirection={'row'} gap={2}>
            <Text fontWeight={'bold'}>Date:</Text>
            <Text>
              {new Date(blogArticleDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Text>
          </Flex>
        </WrapItem>
      )}
      {blogArticleCategory && (
        <WrapItem>
          <Flex flexDirection={'row'} gap={2}>
            <Text fontWeight={'bold'}>Category:</Text>
            <Text>{blogArticleCategory}</Text>
          </Flex>
        </WrapItem>
      )}
      {blogArticleAuthor && (
        <WrapItem>
          <Flex flexDirection={'row'} gap={2}>
            <Text fontWeight={'bold'}>Author:</Text>
            <Text>{blogArticleAuthor}</Text>
          </Flex>
        </WrapItem>
      )}
    </Wrap>
  );
}

export default BlogArticleInfo;
