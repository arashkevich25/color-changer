const URL = 'http://www.mocky.io/v2/5a37a7403200000f10eb6a2d';

export function getAllColors() {
    return fetch(URL);
}
