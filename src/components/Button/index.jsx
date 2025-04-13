import PropTypes from "prop-types"

import { DefaultButton } from "./styles"

export function Button({ children, ...props }) {

    return (
        <DefaultButton {...props}>{children}</DefaultButton>
    )
}

Button.propTypes = {
    children: PropTypes.string
};


