import React from 'react';
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { Header2, Subtitle4 } from './helpers/Header';

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
            <div className="content">
              {(title || subtitle) && <div className="block">
                <Header2>
                  {title}
                </Header2>
                <Subtitle4>{subtitle}</Subtitle4>
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
