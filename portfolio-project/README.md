<span style="color:#4a7c59;">🌿 Personal Portfolio Website</span>

This is my personal portfolio page that I built during the Techtonica program.
My goal for this project was to practice HTML, CSS, responsive design, and a little bit of JavaScript.

I also wanted a page that actually represents me — something clean, simple, and easy to read on any device.

<span style="color:#4a7c59;">📸 Screenshots</span>

I will add:

Desktop view

Mobile view

Lighthouse accessibility results

<span style="color:#4a7c59;">🛠️ What I Used</span>

HTML

CSS

CSS Keyframes

JavaScript (buttons, carousel, slide-in effects)

Flexbox

Media queries

Google Fonts

Git + GitHub

<span style="color:#4a7c59;">🌐 Live Page</span>

GitHub Pages link:
(I will add it here once I publish the site.)

<span style="color:#4a7c59;">📐 Responsive Design</span>

I added layout changes for mobile, tablet, laptop, and large desktop screens.

As the screen size increases, the layout adjusts:

On mobile, everything becomes one column and more compact.

On tablets, spacing gets a little bigger and images can be wider.

On laptops and desktops, the layout opens up, the contact form becomes two columns, and the project cards get larger.

On extra-large screens, I mostly adjust spacing so things don’t look too tight or too wide.

<span style="color:#4a7c59;">🎡 Projects Carousel</span>

My carousel uses:

Horizontal scrolling

scroll-snap-type

overflow-x: auto

JavaScript buttons to move left and right

I also tried to build an infinite carousel, but I wasn’t able to finish it yet.

Here is the YouTube video I followed while trying to build it:
How To Create An Animated Image Carousel With CSS/JavaScript
https://www.youtube.com/watch?v=9HcxHDS2w1s

Even though I couldn’t finish it, I learned a lot while practicing.

<span style="color:#4a7c59;">🌀 About the Animation Event Listeners</span>

To make my slide-in animation work smoothly while scrolling, I used a few browser tools that react to what is happening on the page. Each one has its own job, and together they create a simple animation that feels smooth and reusable.

The first one is the IntersectionObserver. It works like a visibility detector. It watches elements on the page and tells me when they enter the viewport. When an element becomes visible enough, the IntersectionObserver triggers my animation by adding a CSS class.

The second one is the animationend event. This was Naomi’s suggestion, and it made the animation work much better. The animationend event fires when a CSS animation finishes. I use it to remove the animation class right after the animation completes. Removing the class resets the element so the animation can play again the next time the user scrolls away and comes back.

Besides those two, I also use classList.add() and classList.remove().
Adding the class starts the slide-in animation, and removing the class prepares the element to animate again later.

All of these pieces — the IntersectionObserver, the animationend event, and the classList methods — work together to create a lightweight, beginner-friendly scroll animation.

<span style="color:#4a7c59;">💬 Things I Still Want to Do or Improve</span>

Add a hamburger menu for mobile

Try the infinite carousel again

Add a shine/shimmer or soft background effect

Add a Portuguese translation for the whole page

Start a blog section

Learn how to use a CMS and build the blog correctly