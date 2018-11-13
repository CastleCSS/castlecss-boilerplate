# CastleCSS Boilerplate
[CastleCSS](https://github.com/CastleCSS/) is a modular, updatable and easy to use HTML and SCSS framework.
Use this Boilerplate to get started with your project right away!

![CastleCSS logo @CastleCss.com](https://www.doordarius.nl/castlecss-logo-250.png)

## What's included?
- A simple and mobile-friendly HTML5 template to kickstart your website
- Configuration for Grunt, to easily compile and minify your Sass files
- [castlecss-core](https://github.com/CastleCSS/castlecss-core)
- [castlecss-buttons](https://github.com/CastleCSS/castlecss-buttons)
- [castlecss-forms](https://github.com/CastleCSS/castlecss-forms)
- [castlecss-notifications](https://github.com/CastleCSS/castlecss-notifications)
- [castlecss-breadcrumbs](https://github.com/CastleCSS/castlecss-breadcrumbs)
- [castlecss-icons](https://github.com/CastleCSS/castlecss-icons)
- [castlecss-stickers](https://github.com/CastleCSS/castlecss-stickers)

## How to install
- Download or clone this package
- Install the project: ```npm install```

## Build and run automatically
- Start the project with: ```npm run start```

This will automatically start a browserSync server.<br />
The project will watch for changes in your scss and html files in your root and scss folder and automatically reload when you change something

## Build and run manually
- Build the project: ```npm run create_all```
- Only build CSS: ```npm run create_css```

## Basic structure
The basis structure for your website should look similar like this:

```
| Project directory/
|
|-- node_modules/
| | -- castlecss-core/
| | --castlecss-buttons/
| | --castlecss-notifications/
| |
|-- scss/
| |-- main.scss
| |-- variables.scss
| |
|-- img/
|-- dist/
| |-- styles.min.css
| |-- styles.min.map
| |
|-- index.html
|-- Gruntfile.js
|-- package.json
```

### main.scss
Your main.scss should have the following set-up:

```
/* 	CastleCSS Core variables */
@import "node_modules/castlecss-core/sass/variables";

/* 	Your variables */
@import "variables";

/* 	Remaining Core files and other CastleCSS modules */
@import "node_modules/castlecss-core/sass/main";
@import "node_modules/castlecss-buttons/sass/main";
@import "node_modules/castlecss-notifications/sass/main";

/* Include your own files below this line
   -------------------------------------- */



/* --------------------------------------
   Include your own files above this line */

@import "node_modules/castlecss-core/sass/base/utility";
@import "node_modules/castlecss-core/sass/base/utility_spacers";
```

## Documentation and examples
Check out http://www.castlecss.com for an extended documentation and more examples!
