---
title: Agency contacts
permalink: /law/agency-contacts/
sidenav: law
---

[The Act](https://www.gpo.gov/fdsys/pkg/PLAW-111publ274/content-detail.html) was signed in October 2010, but some federal agencies have been promoting the use of plain language for years. (If you don't see your agency's program listed here, [contact us](mailto:{{ site.email }}) so we can include it.)

<ul class="usa-accordion-bordered mt4">
{% assign contacts = site.data.contacts | sort: 'department' %}
{% for contact in contacts %}
<li>
<button class="usa-accordion-button" aria-expanded="false" aria-controls="a{{forloop.index}}">
{{ contact.department }}
</button>
<div id="a{{forloop.index}}" class="usa-accordion-content">
{% if contact.official.name %}
<p>{{ contact.official.name }}, <em>{{ contact.official.title }}</em></p>
{% endif %}
<ul class="usa-unstyled-list">
<li class="inline-block mr3"><a href="{{ contact.website }}"><i class="fa fa-external-link mr1" aria-hidden="true"></i>Website</a></li>
{% if contact.email %}
<li class="inline-block"><a href="mailto:{{ contact.email }}"><i class="fa fa-envelope-o mr1" aria-hidden="true"></i>Email</a></li>
{% endif %}
</ul>
</div>
</li>
{% endfor %}
</ul>
