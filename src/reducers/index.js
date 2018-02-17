import * as actionTypes from '../constants/actionTypes';

const initialState = {
    colors: [],
    isFetching: false,
    fetched: false,
    backgroundColor: '#00ffff',
    visibleList: false,
    selectedColor: '',
};

export default function colors(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_COLORS:
            return {
                ...state,
                isFetching: true,
            };

        case actionTypes.GET_ALL_COLORS_SUCCESS:
            return {
                ...state,
                colors: action.colors,
                isFetching: false,
                fetched: true,
            };

        case actionTypes.GET_ALL_COLORS_FAILURE:
            return {
                ...state,
                isFetching: false,
                fetched: false,
            };

        case actionTypes.BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.backColor
            };

        case actionTypes.SELECTED_COLOR:
            return {
                ...state,
                selectedColor: action.color
            };

        case actionTypes.SHOW_COLOR_LIST:
            return {
                ...state,
                visibleList: action.visible
            };

        case actionTypes.HIDE_COLOR_LIST:
            return {
                ...state,
                visibleList: action.visible
            };

        default: return state;
    }
}