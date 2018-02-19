import React, {PureComponent} from 'react';

import {FooterText} from './styles/Footer';

export default class Footer extends PureComponent {
    render() {
        return <FooterText>{this.props.children}</FooterText>;
    }
}