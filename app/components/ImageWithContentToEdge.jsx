import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import useColumnsDimensions from "../hooks/useColumnsDimensions";
import CTAModule from './CTAModule';

function ImageWithContentToEdge({
  children,
  columnImage,
  columnImageAlt,
  columnImageLink,
  customImageClass,
  title,
  subtitle,
  ctaCopy,
  ctaLink,
  spotlightColumn,
  spotlightBackgroundTitle,
  spotlightBackgroundContent,
  spotlightChallengeTitle,
  spotlightChallengeContent,
  spotlightSolutionTitle,
  spotlightSolutionContent,
}) {

  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;

  const mobileBreakpoint = windowWidth > 1023

  const columnWidthRef = useRef(null);
  const columnWidth = useColumnsDimensions(columnWidthRef);

  return (
    <div ref={columnWidthRef} className="columns">
      <div  className="column image-column">

          <Link to={columnImageLink}>
            <figure className={`image is-offset-image ${customImageClass ? customImageClass : 'is-2by1-mobile'}`} >    
                {columnImage ? <div className="background-image" style={{backgroundImage: `url(${columnImage})`, position: 'absolute', left: mobileBreakpoint && -(windowWidth - columnWidth)} }></div> : null}
            </figure>
          </Link>

      </div>                                                  
      <div className="column">                                                                   

          {!spotlightColumn ? <div className="box">         
              <div className="content are-double-block pl-6-desktop">              
                <div className="block">
                    <h2 className="title is-2">{title}</h2>
                    <p className="subtitle is-4">{subtitle}</p>
                </div>
                <div className="block">
                  {children}                    
                </div>
                <div className="block">
                  <CTAModule ctaLink={ctaLink} ctaCopy={ctaCopy} />
                    <Link to={ctaLink} className="button is-medium">{ctaCopy ? ctaCopy : "Read More" }</Link>         
                </div>
              </div>
          </div> : 
          <div className="columns py-6-desktop pl-6-desktop py-5-tablet pl-5-tablet double-gap is-flex-direction-column-reverse-mobile">          
            <div className="column is-two-third are-double-block">
              <div className="content">
                <div className="block">
                  <h2 className="title is-2">{title}</h2>
                  <p className="subtitle is-4">{subtitle}</p>
                </div>
                <div className="block">
                  {children}                    
                </div>
                <div className="block">
                  <Link to={ctaLink} className="button is-medium">{ctaCopy ? ctaCopy : "Read More" }</Link>         
                </div>
              </div> 
            </div>
            <div className="column is-one-third is-border-left-desktop is-border-left-tablet has-borders-bottom">
              {(spotlightBackgroundContent) && <div className="block">
                <p className="heading">{!spotlightBackgroundTitle ? 'BACKGROUND' : spotlightBackgroundTitle}</p>
                <p className="is-size-7">{spotlightBackgroundContent}</p>
              </div>}
                            
              {(spotlightChallengeContent) && <div className="block">
                <p className="heading">{!spotlightChallengeTitle ? 'CHALLENGE' : spotlightChallengeTitle}</p>
                <p className="is-size-7">{spotlightChallengeContent}</p>
              </div>}
                        
              {(spotlightSolutionContent) && <div className="block">
                <p className="heading">{!spotlightSolutionTitle ? 'SOLUTION' : spotlightSolutionTitle}</p>
                <p className="is-size-7">{spotlightSolutionContent}</p>
              </div>}
            </div>
          </div>
          }
      </div>     
    </div> 
  );
}

export default ImageWithContentToEdge;
