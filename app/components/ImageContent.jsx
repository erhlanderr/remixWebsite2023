import { Heading } from '@chakra-ui/react';
import React from 'react';
import {
  Link
} from "react-router-dom";
import { Header5 } from './helpers/Header';

function ImageContent({
  title,
  children,
  image,
  imageLink,
  ratioDesktop,
  ratioMobile,
  scaleDown,
  imageAltText
}) {
  return (
    <div className="column">
      <div className="is-flex is-flex-direction-column">
        {imageLink ? <Link to={imageLink}>
          <div className="block">
            <figure className={`image is-margin-auto has-ratio ${ratioDesktop ? 'is-' + ratioDesktop + '-desktop' : 'is-3by2-desktop'} ${ratioMobile ? 'is-' + ratioMobile : 'is-3by2'}`}>
              <img alt={imageAltText ? imageAltText : 'MethodWorx'} src={image} style={(scaleDown === true) ? { objectFit: 'scale-down' } : { objectFit: 'contain' }} />
            </figure>
          </div>
        </Link> : <div className="block">
          <figure className={`image is-margin-auto has-ratio ${ratioDesktop ? 'is-' + ratioDesktop + '-desktop' : 'is-3by2-desktop'} ${ratioMobile ? 'is-' + ratioMobile : 'is-3by2'}`}>
            <img alt={imageAltText ? imageAltText : 'MethodWorx'} src={image} style={(scaleDown === true) ? { objectFit: 'scale-down' } : { objectFit: 'contain' }} />
          </figure>
        </div>}

        {(title || children) ? <div className="block">
          {title && <div>
            <Header5>
              {title}
            </Header5>
          </div>}
          {children && <div>
            {children}
          </div>}
        </div> : null}
      </div>
    </div>
  );
}

export default ImageContent;
