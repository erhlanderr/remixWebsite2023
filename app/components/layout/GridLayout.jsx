import React from 'react';
import {
    SimpleGrid
} from "@chakra-ui/react";
function GridLayout({
    children,
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
            case "2":
                return 2;
            case "half":
                return 2;
            case "4":
                return 4;
            case "is-3":
                return 4;
            case "3":
                return 3;
            case "is-4":
                return 3;
            case "is-6":
                return 2;
            case "1":
                return 1;
            case "is-12":
                return 1;
            default:
                return 1;
        }
    }
    return (
        <>{
            // console.log("columnMobile ==> ", columnMobile, "columnTablet ==> ", columnTablet, "columnDesktop ==> ", columnDesktop)
        }
            <SimpleGrid gap={6} columns={{ base: 1, sm: columnWidth(columnMobile), md: columnWidth(columnTablet), lg: columnWidth(columnDesktop) }}>
                {children}
            </SimpleGrid>
        </>
    );
}

export default GridLayout;
