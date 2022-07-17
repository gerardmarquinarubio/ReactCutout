import React from 'react';
import * as color from 'color';
import styles from './Cutout.module.css';
export default function Cutout({ src, backgroundColor, mode, children }) {
    return (React.createElement("div", { className: styles.cutout, style: { background: backgroundColor } },
        React.createElement("img", { src: src, className: styles.image, style: { mixBlendMode: (mode !== undefined) ? mode : (color.default(backgroundColor).isDark()) ? 'darken' : 'lighten' } }),
        React.createElement("span", { className: styles.text, style: { color: (color.default(backgroundColor).isDark()) ? 'white' : 'black' } }, children)));
}
