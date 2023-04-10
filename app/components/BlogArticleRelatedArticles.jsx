import React from 'react';

function BlogArticleRelatedArticles({
  children,
  blogCategory,
}) {
  return (    
  
    <div className="column list-order-2-touch is-full-touch has-text-left">              
      <div className="columns  is-mobile is-flex-wrap-wrap is-size-7">
        <div className="column is-full">
          <div className="block">
            <h5 className="title is-5">More {blogCategory} Stories</h5>             
          </div>
        </div> 
          {children}
        </div>                    
    </div>

  
  );
}

export default BlogArticleRelatedArticles;
