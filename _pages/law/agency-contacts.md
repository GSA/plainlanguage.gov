---
title: Agency contacts
permalink: /law/agency-contacts/
sidenav: law
---

[The Act](https://www.gpo.gov/fdsys/pkg/PLAW-111publ274/content-detail.html) was signed in October 2010, but some federal agencies have been promoting the use of plain language for years. (If you don't see your agency's program listed here, [contact us](mailto:{{ site.email }}) so we can include it.)

<ul class="usa-accordion-bordered">
{% assign contacts = site.data.contacts | sort: 'department' %}
{% for contact in contacts %}
<li>
<button class="usa-accordion-button" aria-expanded="false" aria-controls="a{{forloop.index}}">
{{ contact.department }}
</button>
<div id="a{{forloop.index}}" class="usa-accordion-content">
<ul>
<li><a href="{{ contact.website }}">Website</a></li>
{% if contact.official.name %}
<li>{{ contact.official.name }}, <em>{{ contact.official.title }}</em></li>
{% endif %}
{% if contact.email %}
<li>Contact: <a href="mailto:{{ contact.email }}">{{ contact.email }}</a></li>
{% endif %}
</ul>
</div>
</li>
{% endfor %}
</ul>
