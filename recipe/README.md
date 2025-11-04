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

To enable navbar toggle and other components, I also included the Bootstrap JavaScript bundle

## 🎨 Custom CSS and Media Query

While Bootstrap handled most of the responsive layout and utility classes,
I wrote custom CSS to:

Apply a Brazilian gradient effect (🇧🇷 green, yellow, blue) in the page title

Create a fixed Easter Egg animation (Mariah Carey GIF)

Control layout behavior on smaller screens (like setting max widths and showing/hiding elements)

Adjust images inside custom containers for responsiveness

Here's an overview of some choices:

| Feature                            | Bootstrap Handles?          | Why I Used Custom CSS                                         |
| ---------------------------------- | --------------------------- | ------------------------------------------------------------- |
| 2-column → 1-column layout         | ✅ Yes (`col-12 col-lg-6`)   | But I wanted to **cap width to 600px** for better readability |
| Navbar responsiveness              | ✅ Yes (`navbar-expand-lg`)  | No need for custom CSS here                                   |
| Padding around body on mobile      | ❌ No                        | Bootstrap doesn’t modify global body padding                  |
| Custom text gradient               | ❌ No                        | Only possible via CSS (`background-clip: text`)               |
| Image sizing within custom wrapper | ⚠️ Partially (`.img-fluid`) | I needed full width + centering inside `.image-section`       |
| Easter Egg visibility control      | ❌ No                        | Managed via CSS classes: `.hidden`, `.visible` & transitions  |


### 💡 Why Custom CSS?

Some design elements needed:

- A specific **Brazilian gradient effect** (🇧🇷 green, yellow, blue) in the title
- A fixed **Easter Egg animation** (Mariah Carey GIF)
- **Media Query behavior** not covered by Bootstrap, like content caps and padding
- Detailed **image control** inside custom containers

Below is my actual Media Query and an explanation of what each line does ⬇️

css
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

Users can toggle between English and Portuguese by clicking a button in the navbar.

✨ This feature updates text based on custom attributes in the HTML. Curious? Check out the applyLanguage() function in /script.js.

🎤 2. Easter Egg – Click 3x to Reveal Mariah Carey GIF

An invisible GIF appears when the user clicks the main recipe image three times.

🎉 Explore how this trigger works (hint: it's a combo of click counter and CSS classes). Logic is in script.js.

🎤 2. Easter Egg – Click 3x to Reveal Mariah Carey GIF

An invisible GIF appears when the user clicks the main recipe image three times.

🎉 Explore how this trigger works (hint: it's a combo of click counter and CSS classes). Logic is in script.js.

🎉 3. Bubble Animation with Paper.js

Floating bubbles animate in the background using the Paper.js library.

✨ I used PaperScope, Path.Circle, and onFrame to make this effect. Full code is in the initBubbleEffect() function in /script.js.
🧪 What is Paper.js?

Paper.js is an open-source vector graphics scripting framework that runs on top of the HTML5 <canvas> element. It allows you to draw and animate shapes using JavaScript without needing to worry about lower-level canvas details.

🧱 What Paper.js offers:

A simple and expressive API for creating graphics like circles, paths, and curves

Built-in animation support through onFrame

Helpers for math and geometry, mouse interaction, and physics-like behavior

A great starting point for creative coding and generative visuals

🖼️ How Paper.js is used in this project:

I used Paper.js to create floating bubbles in the background of the website that move from the bottom to the top of the screen. This adds a playful, dynamic visual layer to the page — especially fun when paired with the cake and animated Easter Egg!

🔗 Official website: http://paperjs.org/

📚 Beginner tutorial (used for reference): http://paperjs.org/tutorials/getting-started/using-javascript-directly/

✨ Curious how the bubble effect was implemented? Check out the initBubbleEffect() function inside script.js.

🔗 Resources

Bootstrap Docs — https://getbootstrap.com/

Paper.js Docs — http://paperjs.org/

MDN: querySelectorAll() — https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

MDN: textContent — https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

✅ Made with 💛 and ☕ by Luana