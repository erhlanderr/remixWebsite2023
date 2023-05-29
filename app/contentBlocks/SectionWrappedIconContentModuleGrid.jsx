import React from "react";

import IconContentModule from "../components/IconContentModule";
import GridLayout from "../components/layout/GridLayout";

import Markdown from "markdown-to-jsx";

const SectionWrappedIconContentModuleGrid = ({
    tiles,
    columnDesktop,
    columnTablet,
    columnMobile,
    iconLarger,
}) => {
    return (
        <React.Fragment>
            <GridLayout
                columnDesktop={columnDesktop}
                columnTablet={columnTablet}
                columnMobile={columnMobile}
            >
                {tiles &&
                    tiles.map((module, index) => (
                        <IconContentModule
                            key={module.title + '-' + index}
                            iconLarger={iconLarger}
                            title={module.title}
                            icon={module.icon}
                            iconImage={module.iconImage}
                            iconAlt={module.iconAlt}
                            iconLink={module.iconLink}
                            iconColor={module.iconColor}
                            imageAltText={module.imageAltText}
                            image={module.image}
                            imageLink={module.imageLink}
                            columnDesktop={columnDesktop}
                            columnTablet={columnTablet}
                            columnMobile={columnMobile}
                        >
                            {module.paragraphs && (
                                <Markdown
                                    options={{
                                        disableParsingRawHTML: false,
                                        overrides: {
                                            ul: {
                                                props: {
                                                    className: "custom-list is-medium",
                                                },
                                            },
                                        },
                                    }}
                                >
                                    {module.paragraphs}
                                </Markdown>
                            )}
                            {module.ctaLinkName ? (
                                <div className="block">
                                    <button className="button">{module.ctaLinkName}</button>
                                </div>
                            ) : null}
                        </IconContentModule>
                    ))}
            </GridLayout>
            {/* </SimpleGrid> */}
        </React.Fragment>
    );
};

export default SectionWrappedIconContentModuleGrid;
