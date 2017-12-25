---
title: Best Practices When the $#IT Hits the Fan
subtitle: Notes from HEWeb2015 Technical Academy
author: Kevin D. Sherman
date: "2015-10-03"
tags: [heweb15]
---

These are notes from a talk by Dave Cliffe during the HighEdWeb 2015 Technology Academy. Dave is from PagerDuty which ingests alerts from a lot of monitoring projects.

* Running a service in production
* At PagerDuty, they inject failure every Friday to test their process. It also desensitizes their initial response to failure (Love that idea, 'Don't Panic').
* [DevOps] The hard part is other human, social
* Tools can help you automate, measure, and share, but they cannot define your culture.

1. Sharing Operational Responsibility

   * Why: Giving developers operational responsibilities improves the quality of what they build. "You build it, you run it." - Werner Vogels, CTO Amazon
   * Eliminate the idea that it's someone else's problem.
   * Goals: Keep customers happy, this is more than just uptime (user experience); Keep engineers happy, don't burn people out, responsibility is a positive.
   * How: Engineers and Operations share Monitoring and Incident Management
   * Impacts: Monitoring strategy; what to alert on; Who's on call; Incident Response
   * Choose the right tool for the job, don't try to find a do-all suite

2. Optimizing Incident Response
   * Triage: What is the business/customer impact (operationalize your business metrics)? Is my stuff busted? Should I escalate, if yes to whom?
   * If Management only sees operations as a cost center, it will only ever be about uptime. Learn to "speak their terminology".
   * Collaboration: ChatOps
   * Act: OODA Loop - Observe, Orient, Decide, Act

* Learn: failure should make you better
* Individual Events - Was the alert actionable? Right Context? Right Person?
* Individual Incidents - What was surprising about the event? Indicated more help was needed? How do we collaborate as a team?
* "Remember that failure is an events, not a person." - Zig Ziglar
* Learn from trends in your operational metrics
* Responding quicker to issues tended to lead to teams that were performing better over time.
* Value on-call quality of life, this leads to people managing the system better and lead to higher quality.
* Practice failure often; find out how well your application responds and how well the team responds to an incident.

Peace<br>-- KS<br>Web Developer at Benedictine University near Chicago
