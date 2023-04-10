import React from 'react';

function BlogCategories({
    filterWidth,
    filteredBlogCategories,
    addFilter,
    activeCategories,
    allPosts,
    allFilteredBlogs
}) {

    return (
        <>

            <div className={`column list-order-1-touch ${filterWidth ? filterWidth : 'is-6-desktop'}`}>
                <div className="content">
                    <div className="level is-align-items-flex-start">
                        <div className="level-item is-narrow mr-4">
                            <h6 className="title is-5">Categories</h6>
                        </div>
                        <div className="level-item is-shrinkable">
                            <field className="field-body">
                                <div className="tags are-small are-primary-active">

                                    <div className="tag has-addons" onClick={allPosts}>
                                        <div name="allPosts" className={`tag is-clickable is-link ${allFilteredBlogs ? 'is-active' : ''}`}>All posts</div>
                                    </div>
                                    {filteredBlogCategories.map((category, index) => (
                                        <div name={category} className="tag has-addons" key={index}>
                                            <div value="add" onClick={addFilter} className={`tag is-clickable is-link ${activeCategories?.some(x => x === category) ? "is-active" : ""}`}>{category}</div>
                                            <div value="remove" onClick={addFilter} className="tag is-clickable is-delete"></div>
                                        </div>
                                    ))}
                                </div>
                            </field>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default BlogCategories;
