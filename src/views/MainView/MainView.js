import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ColorSelectSearch from '../../components/ColorsList/ColorsList';
import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';

import * as colorsSelectors from './../../selectors/colors';
import * as colorsActions from './../../actions/colors';
import * as colorListActions from './../../actions/colorList';

import {Body, ChangeButton} from './styles/MainView';

@connect(state => {
        return {
            allColors: colorsSelectors.getAllColorsState(state),
            backgroundColor: colorsSelectors.getBackgroundColorState(state),
            selectedColor: colorsSelectors.getSelectedColorState(state),
            visibleList: colorsSelectors.getVisibleListState(state),
        };
    },
    dispatch => {
        return {
            getAllColors: () => dispatch(colorsActions.getAllColorsAction()),
            setBackgroundColor: (color) => dispatch(colorsActions.setBackgroundColorAction(color)),
            setSelectedColor: (color) => dispatch(colorsActions.setSelectedColorAction(color)),
            showList: () => dispatch(colorListActions.showDatalistAction()),
            hideList: () => dispatch(colorListActions.hideDatalistAction()),
        };
    })
export default class MainView extends PureComponent {

    static propTypes = {
        allColors: PropTypes.array.isRequired,
        visibleList: PropTypes.bool.isRequired,
        getAllColors: PropTypes.func.isRequired,
        setSelectedColor: PropTypes.func.isRequired,
        setBackgroundColor: PropTypes.func.isRequired,
        showList: PropTypes.func.isRequired,
        hideList: PropTypes.func.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        selectedColor: PropTypes.string.isRequired,
    };

    constructor() {
        super();

        this.onClickChangeColor = this.onClickChangeColor.bind(this);
    }

    componentWillMount() {
        const {getAllColors} = this.props;

        getAllColors();
    }

    onClickChangeColor() {
        const {selectedColor, setBackgroundColor} = this.props;

        setBackgroundColor(selectedColor);
    }

    render() {
        const {backgroundColor, allColors, setSelectedColor, visibleList, hideList, showList} = this.props;

        return (
            <Body color={backgroundColor}>
                <Header headerText="Background color changer"/>
                <ColorSelectSearch optionsArr={allColors}
                                   setSelectedColor={setSelectedColor}
                                   visibleList={visibleList}
                                   hideList={hideList}
                                   showList={showList}
                />
                <ChangeButton onClick={this.onClickChangeColor}>Accept</ChangeButton>
                <Footer footerText={`Artur Rashkevich`}/>
            </Body>
        );
    }
}
