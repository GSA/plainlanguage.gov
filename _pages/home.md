---
title: Home
layout: base
permalink: /
redirect_from:
  - http://www.plainlanguage.gov/news/meetingrsvp.cfm
  - http://www.plainlanguage.gov/news/index.cfm
  - http://www.plainlanguage.gov/news/currentEvents.cfm
  - http://www.plainlanguage.gov/index.cfm
  - http://www.plainlanguage.gov/site/contactus.cfm
---

<section class="usa-section home-hero bg-tan" markdown="0">
  <div class="usa-grid">
    <h1 class="mb4">{{ site.description }}</h1>
    <a class="usa-button usa-button-big usa-button-primary m0 no-print" href="{{ '/about/definitions/' | relative_url }}">Learn more</a>
  </div>
</section>

<section class="usa-section home-grid" markdown="0">
  <div class="usa-grid md-flex">
    <a href="{{ '/law/' | relative_url }}" class="usa-width-one-half p3 lg-p4 clearfix">
      <i class="icon-large icon-gavel" aria-hidden="true"></i>
      <div class="overflow-hidden">
        <h3 class="arrow">Law and requirements</h3>
        <p class="my0">Learn about the Plain Writing Act, related memoranda, and executive orders that require agencies to use plain language.</p>
      </div>
    </a>
    <a href="{{ '/guidelines/' | relative_url }}" class="usa-width-one-half p3 lg-p4 clearfix">
      <i class="icon-large icon-pencil" aria-hidden="true"></i>
      <div class="overflow-hidden">
        <h3 class="arrow">Plain language guidelines</h3>
        <p class="my0">Official writing guidelines for understanding your audience, being clear and concise, and testing your content.</p>
      </div>
    </a>
  </div>
  <div class="usa-grid md-flex">
    <a href="{{ '/training/' | relative_url }}" class="usa-width-one-half p3 lg-p4 clearfix">
      <i class="icon-large icon-graduation-cap" aria-hidden="true"></i>
      <div class="overflow-hidden">
        <h3 class="arrow">Training</h3>
        <p class="my0">Request in-person training for your federal agency, or use our videos and materials to create your own class.</p>
      </div>
    </a>
    <a href="{{ '/examples/' | relative_url }}" class="usa-width-one-half p3 lg-p4 clearfix">
      <i class="icon-large icon-map-signs" aria-hidden="true"></i>
      <div class="overflow-hidden">
        <h3 class="arrow">Examples</h3>
        <p class="my0">See plain language in action in a variety of regulations, legal documents, handbooks, and publications.</p>
      </div>
    </a>
  </div>
</section>

<section class="usa-section bg-tan home-events" markdown="0">
  <div class="usa-grid">
    <h2 class="mt0 mb3">Upcoming events</h2>
    {% assign events = site.data.events | sort: 'date' %}
    {% assign events_sorted = events | reverse %}
    {% for event in events_sorted %}
      <p class="m0 h5 caps sans-serif">{{ event.date | date: "%B %e, %Y" }}</p>
      <h4 class="m0 h3"><a href="{{ event.link }}" class="text-decoration-none">{{ event.title }}</a></h4>
      <p>{{ event.description }}</p>
    {% endfor %}
  </div>
</section>

<section class="usa-section" markdown="0">
  <div class="usa-grid">
    <h2 class="mt0">About us</h2>
    <div class="usa-width-two-thirds md-pr5">
    <p class="usa-font-lead">The Plain Language Action and Information Network (PLAIN) is a community of federal employees dedicated to the idea that citizens deserve clear communications from government. We believe that using plain language saves federal agencies time and money and provides better service to the American public.</p>
    </div>
    <div class="usa-width-one-third">
      <h3>Subscribe to our mailing list</h3>
        <p>Learn about upcoming events and get the latest news from the federal plain language community.</p>
        <a class="usa-button usa-button-primary block m0 nowrap" href="https://www.digitalgov.gov/communities/plain-language-community-of-practice/">Subscribe</a>
    </div>
  </div>
</section>
