# CastleCSS (Full package)
A modular, updatable, easy to use HTML and SCSS framework.

![CastleCSS logo @CastleCss.com](https://www.doordarius.nl/castlecss-logo-250.png)

## What's included?
Included in this package:
- Example project setup
- Gruntfile.js and tasks
- [castlecss-core](https://github.com/CastleCSS/castlecss-core)
- [castlecss-buttons](https://github.com/CastleCSS/castlecss-buttons)
- [castlecss-notifications](https://github.com/CastleCSS/castlecss-notifications)
- [castlecss-docs (documentation)](https://github.com/CastleCSS/castlecss-docs)

## How to install
CastleCSS is built with easy updating in mind.
You can download the full package and make adjustments as long as you don't update the dependencies (core, buttons, notifications and docs). When you decide to adjust the dependencies, you will lose them with the next update.

There are a few ways to install:

- [Download the latest release](https://github.com/CastleCSS/castlecss/archive/master.zip)
- Clone the package ```git clone https://github.com/CastleCSS/castlecss.git```
- Install via [npm](https://www.npmjs.com/): ```npm install castlecss```
- Add it to your package.json in your own npm package

When downloading or cloning CastleCSS, you have to run ```npm install``` from the directory to get the full package (core, buttons, notifications and docs). 

## Updating files

NOTE: Only update the dependencies so that you don't overwrite your own SCSS files. If you do update the full package you'll overwrite everything.

We recommend downloading the full package and updating the dependencies like:
```
npm update castlecss-core
npm update castlecss-buttons
npm update castlecss-notifications
npm update castlecss-docs
```

## Documentation and examples
You can find the documentation and examples at http://www.castlecss.com and included in this package (castlecss-docs)

## Setup
Your project should have a setup similair to this (included in the Full package):
With this you make sure your own variables overwrite the castle-core variables and your setup is still updatable.

```
| Your project/
|
|-- scss/
| |-- /* Custom project specific scss files here */
| |-- main.scss
| |
|-- node_modules/
| |
| | /*	CastleCSS files included automatically here */
| | castlecss-core/
| | castlecss-buttons/
| | castlecss-etc ;)/
```

### main.scss
Your main.scss should have a setup similar to this (included in the [CastleCSS (Full package)](https://github.com/CastleCSS/castlecss)):

```
/*  castlecss variable files */
@import "path/to/castlecss-core/sass/variables";


/*  Your own variables so they overwrite the core */
@import "variables";
/*  rest of castle files */
@import "path/to/castlecss-core/sass/main";
@import "path/to/castlecss-buttons/sass/variables";
@import "path/to/castlecss-notifications/sass/variables";

/*  Include your own files below this line
    --------------------------------------
*/
```
