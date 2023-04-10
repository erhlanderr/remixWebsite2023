import React from 'react';
import BlogCategories from '../components/BlogCategories';
    
function BlogListHeader ({
    filteredPages,
    filteredBlogCategories,
    addFilter,
    activeCategories,
    allPosts,
    allFilteredBlogs
}) {

  return (
    <section className="section is-small is-equal-section has-background-light-ter are-background-white has-text-left are-overlay-transition">
        <div className="container">
            <div className="columns is-multiline">
                <div className="column is-full">
                    <div className="columns ordered-list">
                        <BlogCategories
                            filterWidth="is-12"
                            filteredPages={filteredPages}
                            filteredBlogCategories={filteredBlogCategories}
                            addFilter={addFilter}
                            activeCategories={activeCategories}
                            allPosts={allPosts}
                            allFilteredBlogs={allFilteredBlogs}
                            /> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
    }
export default BlogListHeader;
