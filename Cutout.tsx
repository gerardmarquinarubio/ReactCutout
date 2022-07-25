import React, { PropsWithChildren } from 'react';

import { Property } from 'csstype';

import Color from 'color';

import styles from './Cutout.css';

export interface ICutoutProps extends PropsWithChildren {
    src : string;
    backgroundColor : 'black' | 'white' | string;
    mode?: Property.MixBlendMode;
}

export default function Cutout({src, backgroundColor, mode, children} : ICutoutProps) {
    return (
        <div 
            className={styles.cutout} 
            style={{ background: backgroundColor}}>
            <img 
            src={src} 
            className={styles.image} 
            style={{ mixBlendMode: (mode !== undefined) ? mode : (Color(backgroundColor).isDark()) ? 'darken' : 'lighten'}} />
            <span 
            className={styles.text} 
            style={{color: (Color(backgroundColor).isDark()) ? 'white' : 'black'}}>
                { children }
            </span>
        </div>
    );
}