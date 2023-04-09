import React from 'react';
import CTAModule from './CTAModule';
import { Link } from "react-router-dom";

function SectionCTA({
  ctaTitle,
  ctaLink,
  ctaStyle,
}) {
  return (
    <div className="columns">
      <div className="column has-text-centered is-8 is-offset-2 pt-5">
        <div className="block">
          <CTAModule ctaLink={ctaLink} ctaCopy={ctaTitle} />
          {/* <Link to={ctaLink}
                className={`button 
                is-${!ctaStyle ? 'medium' : ctaStyle} 
                `}
                >{ctaTitle}</Link>           */}
        </div>
      </div>
    </div>
  );
}

export default SectionCTA;
