import React from "react";
import {
    Button
} from "@chakra-ui/react";
import {
    useNavigate
} from "@remix-run/react";
const CTAModule = ({ ctaLink, ctaCopy, variant, size }) => {
    const navigate = useNavigate();
    return (
        <Button size={size} variant={variant} onClick={() => navigate(ctaLink)}>
            {ctaCopy}
        </Button>
    )
}

export default CTAModule