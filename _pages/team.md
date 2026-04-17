---
layout: page
permalink: /team
title: Team
description: Members and close collaborators of the group
nav: true
nav_rank: 2
---

{% assign faculty_members = site.members | sort: "order" | where: "group", "Faculty" %}
{% assign phd_members = site.members | sort: "order" | where: "group", "Ph.D students" %}
{% assign master_members = site.members | sort: "order" | where: "group", "Master students" %}
{% assign undergrad_members = site.members | sort: "order" | where: "group", "Undergraduate students" %}
{% assign alumni_members = site.members | sort: "order" | where: "group", "Alumni" %}

{% if faculty_members.size > 0 %}
<section class="team-section">
<h2 class="team-group">Faculty</h2>
<div class="faculty-grid">
{% for member in faculty_members %}
<article class="faculty-card">
<a href="{{ member.url | relative_url }}" class="faculty-link">
<img src="{{ '/assets/img/' | append: member.profile.image | relative_url }}" class="faculty-photo" alt="{{ member.profile.name }}" />
<div class="faculty-info">
<h3>{{ member.profile.name }}</h3>
<div class="faculty-title">{{ member.title }}</div>
<div class="team-role">{% if member.profile.role %}{{ member.profile.role }}{% else %}Principal Investigator{% endif %}</div>
{% if member.teaser %}<p>{{ member.teaser }}</p>{% endif %}
</div>
</a>
<div class="team-links faculty-links">
{% if member.profile.email %}<a href="mailto:{{ member.profile.email }}"><i class="fas fa-envelope"></i></a>{% endif %}
{% if member.profile.website %}<a href="{{ member.profile.website }}" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i></a>{% endif %}
{% if member.profile.github %}<a href="https://github.com/{{ member.profile.github }}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>{% endif %}
{% if member.profile.linkedin %}<a href="https://linkedin.com/in/{{ member.profile.linkedin }}/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>{% endif %}
</div>
</article>
{% endfor %}
</div>
</section>
{% endif %}

{% assign current_groups = "Ph.D students,Master students,Undergraduate students" | split: "," %}
{% for group in current_groups %}
{% assign members = site.members | sort: "order" | where: "group", group %}
{% if members.size > 0 %}
<section class="team-section">
<h2 class="team-group">{{ group }}</h2>
<div class="member-grid">
{% for member in members %}
<article class="member-card">
<a href="{{ member.url | relative_url }}" class="member-link">
<img src="{{ '/assets/img/' | append: member.profile.image | relative_url }}" class="member-photo" alt="{{ member.profile.name }}" />
<div class="member-info">
<h3>{{ member.profile.name }}</h3>
<div class="member-title">{{ member.title }}</div>
</div>
</a>
<div class="team-links member-links">
{% if member.profile.email %}<a href="mailto:{{ member.profile.email }}"><i class="fas fa-envelope"></i></a>{% endif %}
{% if member.profile.github %}<a href="https://github.com/{{ member.profile.github }}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>{% endif %}
{% if member.profile.website %}<a href="{{ member.profile.website }}" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i></a>{% endif %}
{% if member.profile.linkedin %}<a href="https://linkedin.com/in/{{ member.profile.linkedin }}/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>{% endif %}
</div>
</article>
{% endfor %}
</div>
</section>
{% endif %}
{% endfor %}

{% if alumni_members.size > 0 %}
<section class="team-section">
<h2 class="team-group">Alumni</h2>
<div class="alumni-archive">
{% for member in alumni_members %}
<a href="{{ member.url | relative_url }}" class="alumni-archive-row">
<span class="alumni-name">{{ member.profile.name }}</span>
<span class="alumni-title">
{% if member.profile.alumni_note %}{{ member.profile.alumni_note }}{% else %}{{ member.title }}{% endif %}
</span>
</a>
{% endfor %}
</div>
</section>
{% endif %}
