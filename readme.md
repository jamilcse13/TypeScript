## What is TypeScript?
- Superset of Javascript created by Microsoft
- Allows static strict typing
- Extra features - interfaces, enums, tuples, generics
- Supports modern features(arrow functions, let, const)
- Based on .net harmony specification

## What's wrong with JavaScript?
- Not suitable for larger applications
- Lack strong typing
- Weird inheritance, unfamiliar syntax
- Only errors during runtime
- Suffers type coercion

## Benefits of TypeScript:
- TypeScript = JavaScript
- Compiles to JavaScript - runs everywhere
- Familiar OOP
- New features work everywhere

## Install TypeScript:
- install nide.js
- install TypeScript compiler
    - npm i -g typescript

## Project Setup:
- create ts project, run
    - tsc --init
    - it will create a tsconfig.json file
- make 2 directory
    - src: where ts files are stored
    - output: where generated js files are stored
- register those directory to the tsconfig.json file at-
    - rootDir: src
    - outDir: output
- automate the compilation while any changes occured in any file, run
    - tsc -w

### Aliases:
- We can create out custom type and use it anywhere in the code
- It will reduce the code redundency

### Access modifier
- private: we can not access or change it outside the class
- readonly: we can access it outside the class but can not change it