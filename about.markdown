---
layout: page
title: About
permalink: /about/
timeline:
  - date: "2022 – Present"
    title: "GitHub"
  - date: "2020 – 2022"
    title: "Spectric Labs"
  - date: "2019 – 2020"
    title: "CACI"
  - date: "2015 – 2019"
    title: "LGS Innovations"
  - date: "2015 - 2016"
    title: "UVA"
    description: "M.S. Electrical Engineering"
  - date: "2014 – 2015"
    title: "Axios"
  - date: "2010 – 2014"
    title: "UVA"
    description: "B.S. Electrical Engineering & Computer Science"
---

<div class="timeline">
{% for item in page.timeline %}
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <span class="timeline-date">{{ item.date }}</span>
      <h3 class="timeline-title">{{ item.title }}</h3>
      {% if item.description %}<p class="timeline-description">{{ item.description }}</p>{% endif %}
    </div>
  </div>
{% endfor %}
</div>
