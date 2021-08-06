# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Intro component with sign up form solution](#frontend-mentor---intro-component-with-sign-up-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot/screenshot-deskptop.jpg)

### Links

- Solution URL: [View demo](https://intro-component-with-singup-form-master.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Sass
- CSS Grid
- Mobile-first workflow
- Javascript
- Nodejs


### What I learned

 I learned the use of sass maps and then implementing it in handling media queries and font sizes from this blog [responsive-typography-with-sass-maps](https://www.smashingmagazine.com/2015/06/responsive-typography-with-sass-maps/#top)


So implement the maps and mixins in the project, it looks like this

```scss

$breakpoints: (
  xs   :  25em, // 400px
  ms   :  34em, // 544px
  md   :  48em, // 768px
  lg   :  55em, // 960px
  lg-2 :  60em,
  xl   :  80em, // 1280px
  xxl  :  90em  // 1440px
);

$h1-font-sizes: (
  null :  1.8rem,
  xs   :  1.8rem,
  ms   :  1.8rem,
  md   :  1.7rem,
  lg   :  2.5rem,
  lg-2 :  3rem,
  xl   :  3rem,
  xxl  :  3rem
);

$p-font-sizes: (
  null :  0.95rem,
  xs   :  0.95rem,
  ms   :  0.95rem,
  md   :  0.9rem,
  lg   :  0.9rem,
  lg-2 :  0.9rem,
  xl   :  0.95rem,
  xxl  :  0.95rem
);

$input-font-sizes: (
  null :  0.8rem,
  xs   :  0.8rem,
  ms   :  0.8rem,
  md   :  0.75rem,
  lg   :  0.75rem,
  lg-2 :  0.75rem,
  xl   :  0.80rem,
  xxl  :  0.80rem
);

$small-font-sizes: (
  null :  0.75rem,
  xs   :  0.75rem,
  ms   :  0.75rem,
  md   :  0.65rem,
  lg   :  0.65rem,
  lg-2 :  0.8rem,
  xl   :  0.8rem,
  xxl  :  0.8rem
);



// ==============================================================================================================

// ======MIXINS====== //

@mixin font-size($fs-map, $fs-breakpoints: $breakpoints) {
  @each $fs-breakpoint, $fs-font-size in $fs-map {
    @if $fs-breakpoint == null {
      font-size: $fs-font-size;
    }
    @else {
      // If $fs-font-size is a key that exists in $fs-breakpoints, use the value
      @if map-has-key($fs-breakpoints, $fs-breakpoint) {
        $fs-breakpoint: map-get($fs-breakpoints, $fs-breakpoint);
      }
      @media screen and (min-width: $fs-breakpoint) {
        font-size: $fs-font-size;
      }
    }
  }
}

@mixin query($breakpoint) {
  // If the breakpoint exists in the map.
  @if map-has-key($breakpoints, $breakpoint) {
    // Get the breakpoint value.
    $breakpoint-value: map-get($breakpoints, $breakpoint);
    // Write the media query.
    @media (min-width: $breakpoint-value) {
      @content;
    }
    // If the breakpoint doesn't exist in the map.
  } @else {
    // Log a warning.
    @warn 'Invalid breakpoint: #{$breakpoint}.';
  }
}


```



  Then I implement a grid system with css grid.

```scss

/*Movile First*/

.form-section {
  
  display: grid;
  grid-template-columns: 2vw repeat(4, 1fr) 2vw;
  grid-template-rows: auto;
  place-items: center;
  gap: 3.5rem 1rem ;

  grid-template-areas:
    ". title title title title ."
    ". container container container container ."
    ". footer footer footer footer .";
  
```

Making use of the mixins of media queries ..

```scss

/*Tablet*/

@include query(md) {

    grid-template-columns:repeat(8, 1fr);
    grid-template-rows:0.2fr 1fr 0.2fr;
    grid-template-areas:
    ". title title title title title title ."
    ". container container container container container container ."
    ". footer footer footer footer footer footer.";
  }

```

```scss

/*Deskptop*/

@include query(lg-2) {
    gap: 1rem;
    padding: 1rem;
    
    grid-template-columns:repeat(12, 1fr);
    grid-template-rows:2vw auto 2vw;
    grid-template-areas:
    ". . . . . . . . . . . ."
    ". title title title title . container container container container  container ."
    ". footer footer footer footer footer footer footer footer footer footer .";
  }

```




### Continued development

- I would like to improve the handling of the BEM methodology in css for future projects.

- I plan to implement vuejs, because it is a scalable framework and this project can grow, in addition to the speed of loading the page and the experience of the developer using this framework.



## Author

- Frontend Mentor - [@Ryusse](https://www.frontendmentor.io/profile/Ryusse)
- Linkedin - [Joel Angel](https://www.linkedin.com/in/joel-angel-oca%C3%B1o-ore-9a52b5202/)
