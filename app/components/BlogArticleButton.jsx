import React from 'react';
import { Link } from "react-router-dom";

function BlogArticleButton({
  articleLink,
  buttonTitle,
  articleTitle,
}) {
  return (    
    <div className="column is-6">
      <div className="content">
        {articleLink && articleTitle &&
        <Link to={articleLink} className="block">
          <h6 className="title is-6 mb-2">{buttonTitle}</h6>                              
          <p className="link is-size-7">{articleTitle}</p>                              
        </Link>}
      </div>
    </div>
  );
}

export default BlogArticleButton;
