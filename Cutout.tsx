import React, { PropsWithChildren } from 'react';

import { Property } from 'csstype';

import Color from 'color';

export interface ICutoutProps extends PropsWithChildren {
    src : string;
    backgroundColor : 'black' | 'white' | string;
    mode?: Property.MixBlendMode;
}

export default function Cutout({src, backgroundColor, mode, children} : ICutoutProps) {
    return (
        <div
            style={{ 
                background: backgroundColor, 
                textAlign: 'center', 
                position: 'relative',
                overflow: 'hidden',
            }}>
            <img 
            src={src}
            style={{ 
                mixBlendMode: (mode !== undefined) ? mode : (Color(backgroundColor).isDark()) ? 'darken' : 'lighten',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                }} />
            <span
            style={{
                color: (Color(backgroundColor).isDark()) ? 'white' : 'black',
                textOverflow: 'hidden'
                }}>
                { children }
            </span>
        </div>
    );
}