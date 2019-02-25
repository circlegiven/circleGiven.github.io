## Cards Jekyll Template - [Demo](https://willianjusten.github.io/cards-jekyll-template)

- Navi theme custom version


## Color customization

All color variables are in [src/styl/_variables.styl](src/styl/_variables.styl). To change the main color, just set the new value at `main` assignment. Another colors are for texts and the code background color.

## Theme Colors

Every post has a main color that is defined on [src/styl/_theme-colors.styl](src/styl/_theme-colors.styl). Just create a new color with the prefix `post-` and define your main-class: 'css' and color: '#2DA0C3' on every post you create.

## Creating posts

You can use the `initpost.sh` to create your new posts. Just follow the command:

```
./initpost.sh -c Post Title
```

The new file will be created at `_posts` with this format `date-title.md`.


## Running the blog in local

In order to compile the assets and run Jekyll on local you need to follow those steps:

- Install [NodeJS](https://nodejs.org/) (remember to use the latest version)
- Run `npm install`
- Run `npm install -g gulp gulp-cli`
- Run `gulp`


## Thank you for giving me a good template
https://github.com/willianjusten/cards-jekyll-template
