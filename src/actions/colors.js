import * as actionTypes from './../constants/actionTypes';
import {getAllColors} from './../api/Colors';

export function getAllColorsAction() {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_ALL_COLORS,
        });

        try {
            const js = await getAllColors();
            const data = await js.json();
            return dispatch(getAllColorsSuccess(data));
        }
        catch (error) {
            return dispatch(getAllColorsFailed(error));
        }
    };
}

function getAllColorsSuccess(colors) {
    return {
        type: actionTypes.GET_ALL_COLORS_SUCCESS,
        colors,
    };
}

function getAllColorsFailed(value) {
    return {
        type: actionTypes.GET_ALL_COLORS_FAILURE,
        value,
    };
}

export function setBackgroundColorAction(backColor) {
    return {
        type: actionTypes.BACKGROUND_COLOR,
        backColor
    }
}

export function setSelectedColorAction(color) {
    return {
        type: actionTypes.SELECTED_COLOR,
        color
    }
}