import React from 'react';
import { Container } from "@chakra-ui/react";

function ContainerLayout({
    children,
    ...props
}) {
    return (
        <Container {...props} maxWidth={"1344"}>{children}</Container>
    );
}

export default ContainerLayout;
