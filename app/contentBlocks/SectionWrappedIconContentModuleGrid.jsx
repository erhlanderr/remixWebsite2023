import React from "react";
import SectionWrappers from "../components/sectionWrappers";
import IconContentModule from "../components/IconContentModule";
import Grid from "../components/gridModule";

import Markdown from "markdown-to-jsx";

const SectionWrappedIconContentModuleGrid = ({
    tiles,
    sectionCustomClasses,
    textAlignment,
    sectionSize,
    sectionIsEqual,
    columnDesktop,
    columnTablet,
    columnMobile,
    iconLarger,
    $type,
}) => {
    return (
        <SectionWrappers
            type={$type}
            sectionSize={sectionSize}
            sectionIsEqual={sectionIsEqual}
            sectionCustomClasses={sectionCustomClasses ? sectionCustomClasses : ""}
            textAlignment={textAlignment ? textAlignment : "centered"}
        >
            <Grid gridCustomClasses={`is-multiline`} 
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
            </Grid>
            {/* </SimpleGrid> */}
        </SectionWrappers>
    );
};

export default SectionWrappedIconContentModuleGrid;
