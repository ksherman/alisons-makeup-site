---
title: Building a Modern Course Catalog Search
subtitle: Notes from HEWeb2015
date: "2015-10-06"
author: Kevin D. Sherman
tags: [heweb15]
---

These are notes from a talk by Jim Muir and Scott Mascio titled "Building a Modern Course Catalog Search" during the HighEdWeb 2015. The Ohio State University

![These are notes from a talk by Jim Muir and Scott Mascio titled "Building a Modern Course Catalog Search" during the HighEdWeb 2015. The Ohio State University](https://s3-us-west-2.amazonaws.com/assets.kshermphoto.com/images/2015/heweb2015-courseSearch.JPG)

[https://classes.osu.edu/class-search/](https://classes.osu.edu/class-search/)

### 3 Goals

* Prioritize User Experience
* Fast
* Intuitive

### Uses

* Elasticsearch _ Open Source Full-text search and analytics engine _ Schema Free _ Developer Frenziedly API _ High Availability
* NodeJS: REST API
* AngularJS: Front-End
* Modeled after Amazon (side filters) and Google (single search box) ![Flow](https://s3-us-west-2.amazonaws.com/assets.kshermphoto.com/images/2015/heweb2015-courseSearch_2.JPG)

### The Project

* Weekly meet ups
* Version Control - Git
* Gitlab Issues
* Pull Requests and Code Reviews
* Accessibility: Bootstrap (sr-only classes) + ngAria (AngularJS library)
* Student Feedback _ Very positive response _ 20 person user groups \* Used the survey to iterate and improve.
* Other Uses _ Recruitment Tools (could show prospects the courses they offered) _ Each campus wants their own unique search.
* Challenges: _ Relevance or Course Number? _ Dropdowns? _ Why isn't my course first? _ Let the data speak - use analytics, not your opinion. \* Not yet launched

Peace<br>-- KS<br>Web Developer at Benedictine University near Chicago
