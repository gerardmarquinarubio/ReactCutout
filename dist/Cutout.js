import React from 'react';
import Color from 'color';
import styles from './Cutout.css';
export default function Cutout({ src, backgroundColor, mode, children }) {
    return (React.createElement("div", { className: styles.cutout, style: { background: backgroundColor } },
        React.createElement("img", { src: src, className: styles.image, style: { mixBlendMode: (mode !== undefined) ? mode : (Color(backgroundColor).isDark()) ? 'darken' : 'lighten' } }),
        React.createElement("span", { className: styles.text, style: { color: (Color(backgroundColor).isDark()) ? 'white' : 'black' } }, children)));
}
