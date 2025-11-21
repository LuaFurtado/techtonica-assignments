_This is my second project at Techtonica. I’m still getting more comfortable with HTML and CSS, and especially with JavaScript, which I know I need to keep practicing to understand better. I already added the blog section, but it’s not finished yet. I plan to use this website as my real portfolio and continue expanding it as I document my learning journey._

# 🌿 **Personal Portfolio Website**

This is my personal portfolio page that I built during the Techtonica program.  
My goal for this project was to practice **HTML**, **CSS**, **responsive design**, and a little bit of **JavaScript**.

---

## 📸 **Screenshots**

(Coming soon)

- Desktop view  
- Mobile view  
- Lighthouse accessibility results  

---

## 🛠️ **What I Used**

- **HTML**  
- **CSS**  
- **CSS Keyframes**  
- **JavaScript** (buttons, carousel, slide-in effects)  
- **Flexbox**  
- **Media queries**  
- **Google Fonts**  
- **Git + GitHub**  

---

## 🌐 **Live Page**

GitHub Pages link:  
*Coming soon — I will add it once I publish the site.*

---

## 📐 **Responsive Design**

I added layout changes for **mobile**, **tablet**, **laptop**, and **large desktop** screens.

As the screen size increases, the layout adjusts:

- **Mobile:** one column layout, compact spacing  
- **Tablet:** more space, wider images  
- **Laptop/Desktop:** two-column contact form, larger project cards  
- **Extra-large screens:** spacing adjustments so the layout doesn’t feel too tight or too wide  

---

## 🎡 **Projects Carousel**

My carousel uses:

- Horizontal scrolling  
- `scroll-snap-type`  
- `overflow-x: auto`  
- JavaScript buttons to move left and right  

I also tried to build an **infinite carousel**, but I wasn’t able to finish it yet.

YouTube video I followed:  
**How To Create An Animated Image Carousel With CSS/JavaScript**  
https://www.youtube.com/watch?v=9HcxHDS2w1s

Even though I couldn’t finish it, I learned a lot while practicing.

---

## 🌀 **About the Animation Event Listeners**

To make the slide-in animation work, I used a few browser tools that react to the page:

### • **IntersectionObserver**  
Works like a *visibility detector*, it watches elements and tells me when they enter the viewport.  
When something becomes visible enough, the observer adds a CSS class and triggers the animation.

### • **animationend event**  
Naomi suggested this, and it made the animation work much better.  
The event fires when a CSS animation finishes.  
I use it to **remove the animation class** right after the animation completes.  
Removing the class resets the element so the animation can run again when the user scrolls away and back.

### • **classList.add() and classList.remove()**  
- `add()` starts the animation  
- `remove()` resets it  

All of these pieces together create a scroll-based animation.

---

## 💬 **Things I Still Want to Do or Improve**

- Add a **hamburger menu** for mobile  
- Try the **infinite carousel** again  
- Add a **shine/shimmer** or soft background effect  
- Add a **Portuguese translation**  
- Start a **blog section**  
- Learn how to use a **CMS** and build the blog correctly