import { PropsWithChildren } from 'react';
import { Property } from 'csstype';
export interface ICutoutProps extends PropsWithChildren {
    src: string;
    backgroundColor: 'black' | 'white' | string;
    mode?: Property.MixBlendMode;
}
export default function Cutout({ src, backgroundColor, mode, children }: ICutoutProps): JSX.Element;
