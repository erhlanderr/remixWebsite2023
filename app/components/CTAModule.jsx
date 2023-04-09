import React from "react";
import {
    Button
} from "@chakra-ui/react";
import {
    useNavigate
} from "@remix-run/react";
const CTAModule = ({ ctaLink, ctaCopy }) => {
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate(ctaLink)}>
            {ctaCopy}
        </Button>
    )
}

export default CTAModule