import { PropsWithChildren } from 'react';
export interface ICutoutProps extends PropsWithChildren {
    src: string;
    backgroundColor: 'black' | 'white';
}
export default function Cutout({ src, backgroundColor, children }: ICutoutProps): JSX.Element;
