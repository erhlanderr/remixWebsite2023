import React, { useState } from "react";
import MarkdownContent from "./helpers/Markdown";
import { Box, Text } from "@chakra-ui/react";
function ExpandingTextBox({ textBoxCopy }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {textBoxCopy.length > 150 ? (
        <Box>
          {isReadMore ? (
            <MarkdownContent>
              {textBoxCopy.slice(0, 150) + "..."}
              
            </MarkdownContent>
          ) : (
            <MarkdownContent>
              {textBoxCopy}
            </MarkdownContent>
          )}
          {textBoxCopy.length > 150 && (
            <Text pt={4} textDecoration={'underline'} color="brand.mwPrimary" onClick={toggleReadMore}>
              {isReadMore ? " read more" : " show less"}
            </Text>
          )}
        </Box>
      ) : (
        <MarkdownContent>
          {textBoxCopy}
        </MarkdownContent>
      )}
    </>
  );
}

export default ExpandingTextBox;
