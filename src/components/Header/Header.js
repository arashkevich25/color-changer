import React, {PureComponent} from 'react';

import {HeaderText} from './styles/Header';

export default class Header extends PureComponent {
    render() {
        return <HeaderText>{this.props.children}</HeaderText>;
    }
}