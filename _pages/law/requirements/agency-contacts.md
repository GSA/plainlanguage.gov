---
title: Agency contacts
permalink: /law/requirements/agency-contacts/
sidenav: law
---

[The Act](https://www.gpo.gov/fdsys/pkg/PLAW-111publ274/content-detail.html) was signed in October 2010, but some federal agencies have been promoting the use of plain language for years. (If you don't see your agency's program listed here, [contact us](mailto:{{ site.email }}) so we can include it.)

{% assign contacts = site.data.contacts | sort: 'department' %}
{% for contact in contacts %}
### {{ contact.department }}
* [Website]({{ contact.website }})
  {% if contact.official.name %}
* {{ contact.official.name }}, _{{ contact.official.title }}_
  {% endif %}
  {% if contact.email %}
* Contact: <{{ contact.email }}>
  {% endif %}
{% endfor %}
