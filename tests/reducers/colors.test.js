import reducer from './../../src/reducers';
import * as actionTypes from './../../src/constants/actionTypes';

describe('testing all reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual({
                colors: [],
                isFetching: false,
                fetched: false,
                backgroundColor: '#00ffff',
                visibleList: false,
                selectedColor: '',
            })
    });

    it('should handle fetching colors', () => {
        expect(reducer({}, {
            type: actionTypes.GET_ALL_COLORS,
        })).toEqual({
            isFetching: true,
        })
    });

    it('should handle fetching colors successfully', () => {
        const colors = [{color: '#00ffff'}, {color: "#00tfaf"}];
        const expectedState = {
                colors: [{color: "#00ffff"}, {color: "#00tfaf"}],
                fetched: true,
                isFetching: false,
            };

        expect(reducer({}, {
            type: actionTypes.GET_ALL_COLORS_SUCCESS,
            colors,
        })).toEqual(expectedState)
    });

    it('should handle fetching colors failure', () => {
        expect(reducer({}, {
            type: actionTypes.GET_ALL_COLORS_FAILURE,
        })).toEqual({
            isFetching: false,
            fetched: false,
        })
    });

    it('should handle set background color', () => {
        const backColor = '#4286f4';

        expect(reducer({}, {
            type: actionTypes.BACKGROUND_COLOR,
            backColor,
        })).toEqual({
            backgroundColor: backColor,
        })
    });

    it('should handle set color from input', () => {
        const color = '#4b586d';

        expect(reducer({}, {
            type: actionTypes.SELECTED_COLOR,
            color,
        })).toEqual({
            selectedColor: color,
        })
    });

    it('should handle visible colors list', () => {
        const visible = true;

        expect(reducer({}, {
            type: actionTypes.SHOW_COLOR_LIST,
            visible,
        })).toEqual({
            visibleList: visible,
        })
    });

    it('should handle hide colors list', () => {
        const visible = false;

        expect(reducer({}, {
            type: actionTypes.HIDE_COLOR_LIST,
            visible,
        })).toEqual({
            visibleList: visible,
        })
    });
});