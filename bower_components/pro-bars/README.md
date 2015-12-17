ProBars v1.1
============

Stylish progress bars that animate as they enter the viewport.

**Demo:** http://www.cloud-eight.com/github/pro-bars/


Usage
=====

Link both 'pro-bars.min.css', 'pro-bars.min.js' and 'appear.min.js' to your document.

Using ProBars requires a simple HTML markup and a few select class names.

It also uses the [Flat UI Color Scheme](http://flatuicolors.com/) to help style the progress bars, if color classes aren't provided it uses a default grey color scheme.

There are 2 data attributes you must specify `data-pro-bar-percent` is how far the bar will animate to and `data-pro-bar-delay` to set a delay on the animation.

Since it relies on jQuery to animate the bars length from 0 to 'x', applying the class `bar-*` to the `pro-bar` element and it will set the width as a CSS fallback (non animated).

```
<div class="pro-bar-container color-nephriti">
  <div class="pro-bar bar-50 color-emerald" data-pro-bar-percent="50" data-pro-bar-delay="100">
    <div class="pro-bar-candy"></div>
  </div>
</div>
```

By default, the candy stripe is static, to animate the stripes left or right, apply either the `candy-ltr` or `candy-rtl` class on the `pro-bar-candy` element.
To remove the candy stripes, simply remove the `pro-bar-candy` element to leave a solid progress bar.


Browser Compatibility
=====================

<ul>
  <li>IE 10+</li>
  <li>Firefox 25+</li>
  <li>Chrome 31+</li>
  <li>Safari 7+</li>
  <li>Opera 18+</li>
  <li>Most mobile browsers</li>
</ul>


Author
======

Joe Mottershaw, Cloud Eight<br />
http://www.cloud-eight.com


Credits
=======

jquery.appear, bas2k<br />
https://github.com/bas2k/jquery.appear

Flat UI Colors, Ahmet Sülek<br />
http://flatuicolors.com/