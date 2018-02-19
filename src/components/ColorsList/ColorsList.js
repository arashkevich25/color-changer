import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import DataList from './components/DataList';

import {convertHexToGb} from './../../tools/converter';

export default class ColorSelectSearch extends PureComponent {

    static propTypes = {
        optionsArr: PropTypes.array.isRequired,
        setSelectedColor: PropTypes.func.isRequired,
        showList: PropTypes.func.isRequired,
        hideList: PropTypes.func.isRequired,
        visibleList: PropTypes.bool.isRequired,
    };

    constructor() {
        super();

        this.onChangeHandle = this.onChangeHandle.bind(this);
    }

    onChangeHandle(e) {
        const {optionsArr, setSelectedColor, showList, hideList} = this.props;

        if (e.target.value.length > 1) {
            const selectedColor = optionsArr.find(val => val.name === e.target.value);

            if(selectedColor) {
                setSelectedColor(convertHexToGb(selectedColor.hex, 0.5));
            }

            showList();
        } else {
            hideList();
        }
    }

    render() {
        const {optionsArr, visibleList} = this.props;

        return (
            <div>
                <input onChange={this.onChangeHandle} list="colors-list" name="colors-list" />
                {
                    visibleList ? <DataList optionsArr={optionsArr}/> : null
                }
            </div>
        );
    }
}
