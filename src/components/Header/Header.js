import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {HeaderText} from './styles/Header';

export default class Header extends PureComponent {

    static propTypes = {
        headerText: PropTypes.string.isRequired,
    };

    render() {
        const {headerText} = this.props;

        return <HeaderText>{headerText}</HeaderText>
    }
}