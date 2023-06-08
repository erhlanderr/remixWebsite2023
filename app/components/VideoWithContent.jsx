import React from 'react';
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { DecoratedHeader, Subtitle } from './helpers/Header';

function VideoWithContent({
  children,
  title,
  subtitle,
  ctaCopy,
  ctaLink
}) {



  return (
    <>
      <div className="container zi-2">


        <div className={`columns`}>
          <div className="column are-double-block">
            <div>
              {(title || subtitle) && <div className="block">
                <DecoratedHeader headerType="h2">
                  {title}
                </DecoratedHeader>
                <Subtitle headerType="h4">{subtitle}</Subtitle>
              </div>}
              {children && <div className="block">
                {children}
              </div>}
              {ctaLink && <div className="block">
                <Link to={ctaLink} className="button is-medium">{ctaCopy}</Link>
              </div>}
            </div>
          </div>
        </div>

      </div>


    </>
  );
}

export default VideoWithContent;
