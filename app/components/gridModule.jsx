import React from 'react';
import {
    SimpleGrid
} from "@chakra-ui/react";
function Grid({
    children,
    multiline,
    isOffset,
    verticallyCentered,
    justification,
    wrapped,
    gridCustomClasses,
    contentWrapper,
    columnDesktop,
    columnTablet,
    columnMobile
}) {


    const columnWidth = (columnSize) => {
        switch (columnSize) {
            case "one-third":
                return 3;
            case "two-third":
                return 2;
            case "one-quarter":
                return 4;
            case "half":
                return 2;
            default:
                return 1;
        }
    }
    return (
        <>
            <SimpleGrid columns={{ base: 1, sm: columnWidth(columnMobile), md: columnWidth(columnTablet), lg: columnWidth(columnDesktop) }}>
                {children}
            </SimpleGrid>
            {/* <div className={`columns ${!wrapped ? '' : 'is-flex-wrap-wrap'} ${multiline ? 'is-multiline' : ''} ${verticallyCentered ? 'is-vcentered' : ''} ${justification && `is-justify-content-${justification}`} ${contentWrapper ? `is-block` : ''} ${gridCustomClasses && `${gridCustomClasses}`}`}>
                {isOffset ? <div className="column is-8-desktop is-offset-2-desktop">
                    <div className="columns is-block">{children}</div>
                </div> : <>{children}</>}
            </div> */}
        </>
    );
}

export default Grid;
