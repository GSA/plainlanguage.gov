---
title: Agency contacts
permalink: /law/agency-contacts/
sidenav: law
---

[The Act](https://www.gpo.gov/fdsys/pkg/PLAW-111publ274/content-detail.html) was signed in October 2010, but some federal agencies have been promoting the use of plain language for years. (If you don't see your agency's program listed here, [contact us](mailto:{{ site.email }}) so we can include it.)

<ul class="usa-accordion-bordered mt4">
{% assign contacts = site.data.contacts | sort: 'department' %}
{% for department in contacts %}
<li>
<button class="usa-accordion-button" aria-expanded="false" aria-controls="a{{forloop.index}}">
{{ department.department }}
</button>
<div id="a{{forloop.index}}" class="usa-accordion-content">

{% if department.website or department.contacts contains "@" %}
<h4>Department information</h4>
<ul>
{% if department.website %}<li><a href="{{ department.website }}">Visit website<i class="icon icon-external-link ml1" aria-hidden="true"></i></a></li>{% endif %}
{% if department.contacts contains "@" %}<li><a href="mailto:{{ department.contacts }}">{{ department.contacts }}</a></li>{% endif %}
</ul>
{% endif %}

{% if department.officials %}
<h4>Senior official</h4>
<ul>
{% for official in department.officials %}
<li>{% if official.email %}<a href="mailto:{{ official.email }}">{% endif %}{{ official.name }}{% if official.email %}</a>{% endif %}{% if official.title %}, <em>{{ official.title }}</em>{% endif %}</li>
{% endfor %}
</ul>
{% endif %}

{% if department.contacts %}
{% unless department.contacts contains "@" %}
<h4>Contact</h4>
<ul>
{% for contact in department.contacts %}
<li>{% if contact.email %}<a href="mailto:{{ contact.email }}">{% endif %}{{ contact.name }}{% if contact.email %}</a>{% endif %}{% if contact.title %}, <em>{{ contact.title }}</em>{% endif %}</li>
{% endfor %}
</ul>
{% endunless %}
{% endif %}

</div>
</li>
{% endfor %}
</ul>
