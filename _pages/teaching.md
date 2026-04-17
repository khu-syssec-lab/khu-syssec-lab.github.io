---
layout: page
permalink: /teaching/
title: Teaching
description: 
nav: true
nav_order: 10
---

<!-- ## Courses -->

#### List of courses
- CSE201 Discrete Structure
- CSE304 Algorithm
- CSE406 Capstone Design
- CSE495 Individual In-Depth Study
- CSE7406 Advanced Information Security


{% assign courses = site.courses | where: "past", false | reverse %}

### 📚 Current Courses
<div class="table-responsive">
    <table class="table table-sm table-borderless">
        {% for course in courses %}
        <tr>
            <td>{{ course.semester }}</td>
            <td>
                {% if course.external_page %}
                    <a href="{{ course.external_page }}" target="_blank">
            {% else %}
                    <a href="{{ course.url | relative_url }}">
                {% endif %}
                    {{ course.title }}
                    {% if course.external_page %}
                        <i class="fas fa-external-link-alt"></i>
                    {% endif %}
                </a>
            </td>
        </tr>
        {% endfor %}
    </table>
</div>

{% assign past_courses = site.courses | where: "past", true | reverse %}
{% if past_courses.size > 0 %}
### 🏛 Past Courses
<div class="table-responsive">
    <table class="table table-sm table-borderless">
        {% for course in past_courses %}
        <tr>
            <td>{{ course.semester }}</td>
            <td>
                <a href="{{ course.url | relative_url }}">{{ course.title }}</a>
            </td>
        </tr>
        {% endfor %}
    </table>
</div>
{% endif %}
