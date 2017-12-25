---
title: Getting Started with Performance Budgets
subtitle: Notes from HEWeb2015 Technical Academy
date: "2015-10-04"
author: Kevin D. Sherman
tags: [heweb15]
---

These are notes from a talk by Tim Kadlec (@tkadlec) during the HighEdWeb 2015 Technology Academy. Tim is a Technology Advocate at Akami. 

* Performance on the web is not a technical issue, it is a cultural issue. 
* Lack of Performance = Lack of Planning
* from Beautiful Robust and Fast to Beautiful and Done on time
* "We're going to come back and fix it after" fails
* If performance wasn't a priority at the start, it won't be a priority at the end.
* Performance (like plumbing) is only a problem if it's broken.
* Performance is linked to every key performance indicator (traffic, bounce rates, revenue, conversion rates, etc.)
* Performance Budget = A clearly defined performance goal to guide design & development
* WebPageTest.org
* Four Types of Metrics: 
	1. Quantity Based - metrics related to the site's performance. Easy to understand, clear tie to design/development decisions. http://bit.ly/1Jw2jj7. Not the whole picture, almost no connection to the user experience.
	2. Rule Based - adherence to specific rules. [Google PageSpeed, YSlow]. Great checklist of basic optimizations. Easy to understand. Still no connection to the user experience. 
	3. Milestone Timing - Timing of a very specific moment in the course of loading the page. Easy to track and communicate. Allows for very specific metrics. Limited view of the user experience (though getting closer).
		* TTFB: when the browser receives first byte. 
		* Start Render: when stuff starts to show up on the page. 
		* DOMContentLoaded: execute scripts attached to the page. 
		* DocumentComplete: when the document has finished executing. 
		* Fully Loaded: Nothing else to load.
	4. Speed Index - a representation of the perceived load of a page, from start to finish. How quickly the majority of the content is displayed. Takes a video of the loading and then analyzes the video. Currently the best representation of the user experience. Difficult to communicate. Limited tracking options.
* How fast is fast enough?
	* As fast as possible.
	* Study from the 1960's around response times: if there is a 100ms delay, it feels instantaneous. If 1000ms or less keeps you within the state of flow. At 10,000ms people tend to walk away.
	* 1,000 Speed Index or less (Paul Irish)
	* But the media speed index is over 5,000 and mobile is almost 8,000. 
	* This is a cultural issue with many barriers. 
* Celebrate the small victories (Lara Hogan). This helps make it part of the culture, creates sustainable change by celebrating all the small steps along the way.
* 20% rule: "Designing and Engineering Time" Become notably faster than a competitor (20% faster). Your site and 10-12 competitors. 
* Request a WebPageTest API key. WPT-Bulk-Tester = Super cool.
* Use the results of the 20% to set a performance budget. 
* http://bit.ly/15A74dw
* [20% could also be just 20% faster than your site runs now]
* You can (roughly) translate target times into file size weights
* http://bit.ly/1qtilDT
* Designers can learn to like working within constraints.
* perf.js gist from Tim
* PerfBar plugin. (suggested changing the color of the bar on load)
* Enforce: automate it!
* Monitor. Speedcurve.com
* What happens after load?
	* Our websites are made up of little experiences. 
	* RAIL: 
		* Response: 100ms = instantaneous
		* Animation: fluid 60fps (jankfree.org)
		* Idle: if you're going to do something, do it while the user is idle 
		* Load: ready to use in 1,000ms (or your budget/goal)
1. Pick your metrics
2. Define your budget
3. Enforce the budget 


Peace<br>-- KS<br>Web Developer at Benedictine University near Chicago
