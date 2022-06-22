import React, {useState, useEffect, PropsWithChildren, ReactNode} from 'react';

import styles from './Cutout.module.css';

export interface ICutoutProps extends PropsWithChildren {
    src : string;
    backgroundColor : 'black' | 'white';
}

export default function Cutout({src, backgroundColor, children} : ICutoutProps) {
    return (
        <div 
            className={styles.cutout} 
            style={{ background: backgroundColor}}>
            <img 
            src={src} 
            className={styles.image} 
            style={{ mixBlendMode: (backgroundColor == 'black') ? 'darken' : 'lighten'}} />
            <span 
            className={styles.text} 
            style={{color: (backgroundColor === 'black') ? 'white' : 'black'}}>
                { children }
            </span>
        </div>
    );
}