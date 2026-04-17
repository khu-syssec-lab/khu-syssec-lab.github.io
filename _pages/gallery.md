---
layout: page
title: Gallery
permalink: /gallery/
nav: true
nav_rank: 5
description: Photos from recent KHU SysSec Lab activities
---

A snapshot of seminars, experiments, and research activities from our lab.

{% if site.features.gallery %}
  {% include gallery.liquid %}
{% else %}
  The gallery is currently being prepared.
{% endif %}
