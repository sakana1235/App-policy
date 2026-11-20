---
layout: default
title: NiyaReco
permalink: /niyareco/
description: NiyaReco のポリシー文書一覧 / Policy documents for NiyaReco
---

{% assign app = site.data.apps | where: "id", "niyareco" | first %}

<nav class="breadcrumb"><a href="{{ '/' | relative_url }}">Home</a> / <span>{{ app.name }}</span></nav>

# {{ app.name }}

{{ app.tagline }}

<ul class="app-list">
{% for doc in app.docs %}
  <li><a href="{{ doc.url | relative_url }}">{{ doc.name }}</a></li>
{% endfor %}
</ul>
