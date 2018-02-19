import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class DataList extends PureComponent {

    static propTypes = {
        optionsArr: PropTypes.array.isRequired,
    };

    constructor() {
        super();

        this.renderOptions = this.renderOptions.bind(this);
    }

    renderOptions() {
        const {optionsArr} = this.props;

        return optionsArr.map((val, key) => <option key={key} value={val.name}/>)
    }

    render() {
        return <datalist id="colors-list">{this.renderOptions()}</datalist>;
    }
}
