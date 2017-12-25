---
title: Automate All the Things
subtitle: Notes from HEWeb2015 Technical Academy
author: Kevin D. Sherman
date: "2015-10-04"
tags: [heweb15]
---

These are notes from a talk by Jesse Beach during the HighEdWeb 2015 Technology Academy. Jesse is an accessibility specialist at Facebook. 

* Drupal Core FED
* Quail Accessibility Testing Library

* [https://goo.gl/HTcjnR](https://goo.gl/HTcjnR)

* Web Design: Filling the semantic gaps of HTML through visual metaphor.
* Web Accessibility: Filling the gaps of web design through semantic HTML.
* Responsive Design: Semantic HTML, optimized to the output of the medium. (meeting the end user where they are)
* WAI-ARIA: a set of attributes for HTML that express up to assistive technology. Provides roles (aria-* attributes).
* Page landmarks, document structure, widgets.
* Key Points:
	1. Stick to no more than six landmarks
	2. Only 1 Main region
	3. Only 1 Banner region
	4. Probably just 1 Navigation region
	5. [http://www.w3.org/TR/wai-aria/](http://www.w3.org/TR/wai-aria/)
* WAI-ARIA alters semantics, it does not create behavior. (roles don't actually make it do something, only describes what it does to assitive technology)
* The browser tries to determine a label for each element in the accessibility tree.
* Explicit labels with aria-label
* Composite labels with aria-labelledby
* Recommended to use aria attributes for style/state where possible. 
* The Accessibilty (AX) Tree
	* DOM -> AX Tree -> Accessibility API -> Assistive Tech client app
* Developers are responsible for coding the expected behaviors of accessible widgets.
* Always use a tabindex value of zero, this makes the element focusable.
* Using -1 allows the element to be focused, but not tabbed.
* For Navigation, prefferable to only have the first item tabable, then the other nav items are accessible through direction pad. Reduced the number of tabable items. 


Peace<br>-- KS<br>Web Developer at Benedictine University near Chicago
