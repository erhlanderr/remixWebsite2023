import React from "react";
// import ClientSideLazyLoadComponent from "../ClientSideLazyLoadComponent";
import { Link } from "react-router-dom";
import CTAModule from "./CTAModule";
import { Box, Card, CardBody, CardFooter, CardHeader, Heading } from "@chakra-ui/react";
import { Header2, Subtitle4 } from "./helpers/Header";

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
        textColor={'#ffffff'}
        backgroundColor={'#2b2b2b'}
        position={'relative'}
        display={'flex'}
        direction={'column'}
        minH={'24rem'}
        className={`background-image`}
        style={{ backgroundImage: `url(${"https://wa-methodworx-website-cms.azurewebsites.net" + tileBackgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      >
        <div
          className={`overlay has-background-${!tileColor ? "primary" : tileColor
            } is-opacity-6 has-background-${!tileColorActive ? "primary" : tileColorActive
            }-active zi-1`}
        ></div>
        {/* <Box
          className={`tile content is-flex-direction-column py-7-desktop py-6-tablet py-6-mobile px-4 is-flex h100 zi-2 is-justify-content-space-between`}
        > */}
          <CardHeader>
            {tileTitle || tileSubtitle ? (
              <div className="block">
                {!tileTitle ? null : (
                  <Header2 color={'#ffffff'}>
                    {tileTitle}
                  </Header2>
                )}
                {!tileSubtitle ? null : (
                  <Subtitle4>
                    {tileSubtitle}
                  </Subtitle4>
                )}
              </div>
            ) : null}
          </CardHeader>
          {!tilePreview ? null : (
            <CardBody className="tile-body is-block block">
              {!tilePreview ? null : <p>{tilePreview}</p>}
            </CardBody>
          )}
          {!linkCta || !linkCopy ? null : (
            <CardFooter className={`tile-footer is-block block `}>
              <CTAModule ctaLink={linkCta} ctaCopy={tileTitle || linkCopy} />
              {/* <Link
                  className="button"
                  to={linkCta}
                  title={`${tileTitle || linkCopy}`}
                >
                  {linkCopy}
                </Link> */}
            </CardFooter>
          )}
        {/* </Box> */}
      </Card>
    // </article>
    // </ClientSideLazyLoadComponent>
  );
}

export default OverLayTile;
