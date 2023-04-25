export function contrastingColor(color) {
    return (luma(color.replace('#', '')) >= 165) ? '#000000' : '#FFFFFF'
}

export function luma(color) {
    let rgb = (typeof color === 'string') ? hexToRGBArray(color) : color
    return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2])
}

export function hexToRGBArray(color) {
    if (color.length === 3)
        color = color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2)
    else if (color.length !== 6)
        throw('Invalid hex color: ' + color)

    let rgb = []

    for (let i = 0; i <= 2; i++)
        rgb[i] = parseInt(color.substr(i * 2, 2), 16)

    return rgb
}