import * as actionTypes from "../constants/actionTypes";

export function showDatalistAction() {
    return {
        type: actionTypes.SHOW_COLOR_LIST,
        visible: true,
    }
}

export function hideDatalistAction() {
    return {
        type: actionTypes.HIDE_COLOR_LIST,
        visible: false,
    }
}