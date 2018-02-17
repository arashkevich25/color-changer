import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import {FooterText} from './styles/Footer';

export default class Footer extends PureComponent {

    static propTypes = {
        footerText: PropTypes.string.isRequired,
    };


    render() {
        const {footerText} = this.props;

        return <FooterText>{footerText}</FooterText>
    }
}