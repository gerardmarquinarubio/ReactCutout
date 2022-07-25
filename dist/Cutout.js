import React from 'react';
import Color from 'color';
export default function Cutout({ src, backgroundColor, mode, children }) {
    return (React.createElement("div", { style: {
            background: backgroundColor,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
        } },
        React.createElement("img", { src: src, style: {
                mixBlendMode: (mode !== undefined) ? mode : (Color(backgroundColor).isDark()) ? 'darken' : 'lighten',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            } }),
        React.createElement("span", { style: {
                color: (Color(backgroundColor).isDark()) ? 'white' : 'black',
                textOverflow: 'hidden'
            } }, children)));
}
