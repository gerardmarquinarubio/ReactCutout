# React Cutout

![](https://img.shields.io/badge/-typescript-blue)
![](https://img.shields.io/badge/react-v18.2-%2361DBFB)
![https://github.com/gerardmarquinarubio/ReactCutout](https://img.shields.io/badge/version-v0.1.0-green)
![https://www.npmjs.com/package/react-ts-cutout](https://img.shields.io/badge/package-npm-red)

![](/usage.png)

React Cutout is a simple component that allows you to create a nice title cutout effect by simply invoking the component. [Try on codesandbox.io](https://codesandbox.io/s/competent-herschel-v5snmd?file=/src/App.js).

## Installation

```sh
npm i react-ts-cutout
```

## Example usage

```tsx
import Cutout from "react-ts-cutout";

export default function myComponent() {
  return (
    <Cutout src="/image.jpg" backgroundColor="white">
      <h1>Nice titles</h1>
      <h2>Made simple</h2>
    </Cutout>
  );
}
```

## Props

> src: string

Source of the background image. **Required**

> backgroundColor : 'white' | 'black' | string;

Color of the background. **Required**. Accepts any CSS color notation.

> mode?: Property.MixBlendMode;

Blend mode CSS property. Defaults to 'darken' or 'lighten' depending on backgroundColor.
