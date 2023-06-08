import { Link as ReachLink } from "react-router-dom";
import { Link as LinkHelper } from "@chakra-ui/react";

const Link = ({ children, to, variant, ...props }) => {
    return (
        <LinkHelper variant={variant} as={ReachLink} props={{...props}}  to={to}>
            {children}
        </LinkHelper>
    )
}

export default Link;