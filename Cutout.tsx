import React, { PropsWithChildren } from 'react';

import { Property } from 'csstype';

import * as color from 'color';

import styles from './Cutout.module.css';

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
            style={{ mixBlendMode: (mode !== undefined) ? mode : (color.default(backgroundColor).isDark()) ? 'darken' : 'lighten'}} />
            <span 
            className={styles.text} 
            style={{color: (color.default(backgroundColor).isDark()) ? 'white' : 'black'}}>
                { children }
            </span>
        </div>
    );
}