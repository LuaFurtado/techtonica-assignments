# 🍰 Brazilian Carrot Cake — Recipe Page

This project is part of my journey in the Techtonica Bootcamp 2025.

It is a recipe page built with:
- HTML, CSS, JavaScript
- Bootstrap (Navbar, grid, utility classes)
- Paper.js (Bubble animation)
- DOM manipulation for translation between 🇺🇸 EN and 🇧🇷 PT

## 🚀 How to Run
1. Open `index.html` in your browser
2. Click on the cake image 3 times for a sweet surprise 😉

---
## 🧱 Bootstrap Classes Used in This Project

I used **Bootstrap 5.3** to help with responsive layout, navigation, and utility styling.  
Below is a breakdown of each Bootstrap class used and how it was applied in my project:

---

### 📐 Layout and Grid System

| Class | Purpose | Example Usage | Docs Link |
|-------|---------|---------------|-----------|
| `.container` | Creates a responsive horizontal padding and centers content on the screen | Wraps the entire navbar and content sections | https://getbootstrap.com/docs/5.3/layout/containers/ |
| `.row` | Defines a horizontal group of columns | Wraps `.col-12 col-lg-6` for responsive content | https://getbootstrap.com/docs/5.3/layout/grid/ |
| `.col-12` | Makes an element span full width (mobile-first) | Used to stack content in a single column on small screens | https://getbootstrap.com/docs/5.3/layout/grid/#grid-options |
| `.col-lg-6` | Spans half the width on large screens (≥992px) | Creates 2-column layout on desktop views | https://getbootstrap.com/docs/5.3/layout/grid/#grid-options |
| `.g-4` | Adds consistent spacing (gap) between grid elements | Adds vertical and horizontal space between columns | https://getbootstrap.com/docs/5.3/utilities/spacing/ |

---

### 🔗 Navbar and Navigation

| Class | Purpose | Example Usage | Docs Link |
|-------|---------|---------------|-----------|
| `.navbar` | Creates a fully responsive navigation bar | Base class for the main navigation | https://getbootstrap.com/docs/5.3/components/navbar/ |
| `.navbar-expand-lg` | Expands navbar horizontally on `lg` screens and collapses on smaller screens | Makes navbar responsive to screen size | https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works |
| `.navbar-brand` | Styles brand or logo text on navbar | Used for the "🍰 Recipe Page" brand | https://getbootstrap.com/docs/5.3/components/navbar/#brand |
| `.navbar-toggler` | Button for toggling the collapsed menu on small screens | The hamburger button | https://getbootstrap.com/docs/5.3/components/navbar/#toggler |
| `.collapse` & `navbar-collapse` | Toggles the visibility of collapsible content in navbar | Used for menu items that collapse into toggle button | https://getbootstrap.com/docs/5.3/components/navbar/#supported-content |
| `.nav-item` | Wraps each navigation link in the navbar | Applied for each menu item like “Ingredients”, “Steps”, etc. | https://getbootstrap.com/docs/5.3/components/navs-tabs/ |
| `.nav-link` | Styles individual navigation links | Applied to clickable nav items in navbar | https://getbootstrap.com/docs/5.3/components/navs-tabs/#nav |

---

### 🔁 Flexbox and Utility Classes

| Class | Purpose | Example Usage | Docs Link |
|-------|---------|---------------|-----------|
| `.d-flex` | Makes an element a flex container | Used for horizontal image + recipe links container | https://getbootstrap.com/docs/5.3/utilities/flex/ |
| `.flex-wrap` | Allows flex items to wrap onto new lines when needed | Makes child items wrap under each other responsively | https://getbootstrap.com/docs/5.3/utilities/flex/#wrap |
| `.justify-content-center` | Centers flex items horizontally | Used to center list of recipe cards | https://getbootstrap.com/docs/5.3/utilities/flex/#justify-content |
| `.ms-auto` | Pushes an element (navigation) to the far right | Used to align navigation links to right side of navbar | https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding |
| `.gap-3` | Adds spacing between flex or grid items | Creates space between image links | https://getbootstrap.com/docs/5.3/utilities/spacing/#gap |

---

### 🖼️ Images and Boxes

| Class | Purpose | Example Usage | Docs Link |
|-------|---------|---------------|-----------|
| `.img-fluid` | Makes images responsive (scales with parent element) | Ensures cake photo and video thumbnail resize on smaller screens | https://getbootstrap.com/docs/5.3/content/images/#responsive-images |
| `.rounded` | Adds rounded corners to elements | Applied to recipe link images | https://getbootstrap.com/docs/5.3/utilities/borders/#border-radius |
| `.shadow-sm` | Adds a small box-shadow for depth | Applied to dessert cards for visual layering | https://getbootstrap.com/docs/5.3/utilities/shadows/ |
| `.list-unstyled` | Removes bullets and padding from `<ul>` elements | Used in the dessert list under “Similar Recipes” | https://getbootstrap.com/docs/5.3/utilities/text/#unstyled |

---

### 💻 JavaScript Bootstrap Requirements

To enable navbar toggle and other components, I also included the Bootstrap JavaScript bundle:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

## 🎨 Custom CSS and Media Query

While Bootstrap handled most of the responsive layout and utility classes,  
I wrote custom CSS to **fine-tune the design**, make it more visually aligned with my brand,  
and handle some layout details that Bootstrap doesn’t cover by default.

### 💡 Why Custom CSS?

Some design elements needed:

- A specific **Brazilian gradient effect** (🇧🇷 green, yellow, blue) in the title
- A fixed **Easter Egg animation** (Mariah Carey GIF)
- **Media Query behavior** not covered by Bootstrap, like content caps and padding
- Detailed **image control** inside custom containers

Below is my actual Media Query and an explanation of what each line does ⬇️

```css
@media (max-width: 900px) {
  body {
    margin: 0;               /* Removes default browser margin */
    padding: 0 12px;         /* Adds light padding so content isn’t touching the edges */
  }

  .centralize {
    display: block;          /* Disable Flexbox on small screens for stacking layout */
  }

  .left,
  .right {
    width: min(600px, 92vw); /* Max width of 600px but adapts for smaller screens */
    margin: 0 auto 24px;     /* Center and add spacing below each section */
    display: block;          /* Makes sure content stacks vertically in mobile view */
  }

  .image-section img {
    width: 100%;             /* Make images fully responsive within parent container */
    height: auto;            /* Maintain proportional scaling */
    margin: 0 auto;          /* Center the image */
    display: block;          /* Ensure it behaves like a block-level element */
  }
}

| Feature                            | Bootstrap Handles?          | Why I Used Custom CSS                                         |
| ---------------------------------- | --------------------------- | ------------------------------------------------------------- |
| 2-column → 1-column layout         | ✅ Yes (`col-12 col-lg-6`)   | But I wanted to **cap width to 600px** for better readability |
| Navbar responsiveness              | ✅ Yes (`navbar-expand-lg`)  | No need for custom CSS here                                   |
| Padding around body on mobile      | ❌ No                        | Bootstrap doesn’t modify global body padding                  |
| Custom text gradient               | ❌ No                        | Only possible via CSS (`background-clip: text`)               |
| Image sizing within custom wrapper | ⚠️ Partially (`.img-fluid`) | I needed full width + centering inside `.image-section`       |
| Easter Egg visibility control      | ❌ No                        | Managed via CSS classes: `.hidden`, `.visible` & transitions  |

## 🧠 JavaScript – DOM Manipulation

This project uses JavaScript to dynamically control content and user interactions in the webpage.

I implemented the following DOM features:

---

### 🌎 1. Language Toggle (English 🇺🇸 ⇄ Portuguese 🇧🇷)

Users can toggle between **English** and **Portuguese** by clicking a button in the navbar.

```js
function applyLanguage(language) {
  const key = language === "pt" ? "pt" : "en";

  document.querySelectorAll("[data-pt]").forEach((element) => {
    const text = element.getAttribute(`data-${key}`);
    if (text !== null) {
      element.textContent = text;
    }
  });

  document.title = key === "pt"
    ? "Receita de Bolo de Cenoura"
    : "Brazilian Carrot Cake — Recipe";
}
✅ What this does:

Selects all elements with the custom attribute [data-pt]

Reads the data-en or data-pt content, depending on user’s selected language

Updates the text content of each element using .textContent

Dynamically updates the 🔖 page title too

🔗 DOM Method Used:
querySelectorAll

✅ What this does:

Selects all elements with the custom attribute [data-pt]

Reads the data-en or data-pt content, depending on user’s selected language

Updates the text content of each element using .textContent

Dynamically updates the 🔖 page title too

DOM Method Used: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
textContent: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

🎤 2. Easter Egg – Click 3x to reveal Mariah Carey GIF

An invisible GIF appears when the user clicks the main recipe image three times in a row.

let clickCount = 0;
const img = document.getElementById("recipeImage");
const mariah = document.getElementById("mariah");

img.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 3) {
    mariah.classList.remove("hidden");

    setTimeout(() => mariah.classList.add("visible"), 100);
    setTimeout(() => {
      mariah.classList.remove("visible");
      setTimeout(() => mariah.classList.add("hidden"), 500);
    }, 4000);

    clickCount = 0;
  }
});

✅ What this does:

Listens for a click event on the main image

Counts the number of clicks, resets after 3

Adds/removes CSS classes (hidden, visible) to reveal the GIF

Automatically hides the GIF after a timeout

🔗 DOM Methods Used:

getElementById: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
classList: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

🎉 3. Bubble Animation with Paper.js
I added a visual bubble animation in the website background using the Paper.js library.
🧪 What is Paper.js?

Paper.js is an open-source vector graphics scripting framework that runs on top of the HTML5 Canvas element.
It allows you to easily create and animate shapes, paths, and artwork using JavaScript — without needing deep knowledge of low-level canvas drawing operations.

🧱 Paper.js gives you:

A clean API for creating and styling shapes like circles, lines, and curves

Built-in animation tools using onFrame

Support for mathematical operations, mouse interaction, and physics-like movement

A visual programming experience ideal for creative coding and generative art

🖼️ In this project, I used Paper.js to draw and animate floating bubbles in the background, making the UI more dynamic and cheerful!

🔗 Official site: http://paperjs.org/

📚 Beginner tutorial: http://paperjs.org/tutorials/getting-started/using-javascript-directly/

function initBubbleEffect() {
  const canvas = document.getElementById("bubbleCanvas");
  if (!canvas) return;

  const bubbleScope = new paper.PaperScope();
  bubbleScope.setup(canvas);

  const { width, height } = bubbleScope.view.size;
  const colors = ["#41B883", "#FDDD62", "#6CB6FF"];
  const bubbles = [];

  function createBubble() {
    const side = Math.random() < 0.5 ? "left" : "right";
    const x = side === "left" ? width * 0.05 : width * 0.95;
    const y = height + 20;
    const radius = Math.random() * 15 + 10;

    const circle = new bubbleScope.Path.Circle({
      center: [x + (Math.random() * 20 - 10), y],
      radius,
      fillColor: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.7,
    });

    bubbles.push({
      circle,
      speed: Math.random() * 1 + 0.5,
    });
  }

  setInterval(createBubble, 1000);

  bubbleScope.view.onFrame = () => {
    bubbles.forEach((bubble, index) => {
      bubble.circle.position.y -= bubble.speed;
      if (bubble.circle.position.y < -50) {
        bubble.circle.remove();
        bubbles.splice(index, 1);
      }
    });
  };
}
✅ What this does:

Creates animated bubbles using a <canvas> element

Uses setInterval and Paper.js drawing API for visual effects

Runs independently of user input

🔗 Paper.js Docs: http://paperjs.org/reference/global/

| Feature           | DOM Methods                                   | Why?                             |
| ----------------- | --------------------------------------------- | -------------------------------- |
| Text translation  | `querySelectorAll`, `textContent`             | Lightweight, dynamic update      |
| Easter Egg reveal | `addEventListener`, `classList`, `setTimeout` | Fun & interactive feature        |
| Bubble animation  | Paper.js via `Path.Circle`                    | Adds visual polish to background |



✅ Made with 💛 by Luana
