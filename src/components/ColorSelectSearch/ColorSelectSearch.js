import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import DataList from './components/DataList';

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
            selectedColor ? setSelectedColor(`#${selectedColor.hex}`) : null;
            showList();
        } else {
            hideList();
        }
    }

    render() {
        const {optionsArr, visibleList} = this.props;

        return (
            <div>
                <input onChange={this.onChangeHandle} list="color-select-search" name="color-select-search" />
                {
                    visibleList ? <DataList optionsArr={optionsArr}/> : null
                }
            </div>
        );
    }
}
