import React from "react";
// import ClientSideLazyLoadComponent from "../ClientSideLazyLoadComponent";
import { Link } from "react-router-dom";
import CTAModule from "./CTAModule";
import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Button } from "@chakra-ui/react";
import { Header, Subtitle } from "./helpers/Header";
import { BackgroundImageLoader } from "./helpers/ImageLoader"

function OverLayTile({
  tileTitle,
  tileSubtitle,
  tilePreview,
  tileColor,
  tileColorActive,
  tileBackgroundImage,
  columnMobile,
  columnTablet,
  columnDesktop,
  linkCta,
  linkCopy,
}) {
  return (
    <Card
      variant="backgroundOverlay"
      style={{ backgroundImage: `url(${"https://wa-methodworx-website-cms.azurewebsites.net" + tileBackgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >

      <CardHeader>
        {tileTitle || tileSubtitle ? (
          <React.Fragment>
            {!tileTitle ? null : (
              <Header headerType="h3" color={'#ffffff'}>
                {tileTitle}
              </Header>
            )}
            {!tileSubtitle ? null : (
              <Subtitle headerType="h5">
                {tileSubtitle}
              </Subtitle>
            )}
          </React.Fragment>
        ) : null}
      </CardHeader>
      {!tilePreview ? null : (
        <CardBody>
          {!tilePreview ? null : <p>{tilePreview}</p>}
        </CardBody>
      )}
      {!linkCta || !linkCopy ? null : (
        <CardFooter>
          <Flex justifyContent={"center"} w="100%">
            <CTAModule variant='white' ctaLink={linkCta} ctaCopy={tileTitle || linkCopy} />
          </Flex>
        </CardFooter>
      )}

    </Card>
  );
}

export default OverLayTile;
