# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Advice generator](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub](https://github.com/Saga-sanga/advice-generator)
- Live Site URL: [GitHub Pages](https://saga-sanga.github.io/advice-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/)
- [Advice Slip API](https://api.adviceslip.com/)

### What I learned

I used this project to reinforce my knowledge on fetch API and async await. I also had practice on using `querySelector()` to select a DOM element and bind an Event Listener to it.

```js
const adviceID = document.querySelector('#advice-id');
const adviceQuote = document.querySelector('#advice-text');
const randomButton = document.querySelector("#random-advice-button");

async function fetchQuote() {
  let data;
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    data = await response.json();
  } catch(err) {
    console.log(err);
    data = {};
  }

  adviceID.innerHTML = data.slip.id;
  adviceQuote.innerHTML = `"${data.slip.advice}"`;
}

// Event Listener
randomButton.addEventListener("click", fetchQuote);
```

### Useful resources

- [Traversy Media - Async JS Course](https://www.youtube.com/watch?v=PoRJizFvM7s) - This course on Async JS by Traversy Media proved useful in understanding how async, await and Promises work.
- [Mozilla Documentation on EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#syntax) - This is a documentation on addEventListener by Mozilla which helped me understand the syntax and parameters of addEventListener.

## Author

- GitHub - [Saga-sanga](https://github.com/Saga-sanga)
- Frontend Mentor - [@Saga-Sanga](https://www.frontendmentor.io/profile/Saga-sanga)
- Twitter - [@RecksonKhiangte](https://twitter.com/RecksonKhiangte)
