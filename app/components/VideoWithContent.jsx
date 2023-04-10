import React from 'react';
import { Link } from "react-router-dom";


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
                <h2 className="title is-2">{title}</h2>
                <p className="subtitle is-4">{subtitle}</p>
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
