export function convertHexToGb(hex, opacity) {
    const hexVal = hex.replace('#','');
    const r = parseInt(hexVal.substring(0,2), 16);
    const g = parseInt(hexVal.substring(2,4), 16);
    const b = parseInt(hexVal.substring(4,6), 16);

    return `rgba(${r},${g},${b},${opacity});`;
}