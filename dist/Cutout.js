import React from 'react';
import styles from './Cutout.module.css';
export default function Cutout({ src, backgroundColor, children }) {
    return (React.createElement("div", { className: styles.cutout, style: { background: backgroundColor } },
        React.createElement("img", { src: src, className: styles.image, style: { mixBlendMode: (backgroundColor == 'black') ? 'darken' : 'lighten' } }),
        React.createElement("span", { className: styles.text, style: { color: (backgroundColor === 'black') ? 'white' : 'black' } }, children)));
}
