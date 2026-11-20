---
layout: default
title: Bosaid
permalink: /bosaid/
description: Bosaid のポリシー文書一覧 / Policy documents for Bosaid
---

{% assign app = site.data.apps | where: "id", "bosaid" | first %}

<nav class="breadcrumb"><a href="{{ '/' | relative_url }}">Home</a> / <span>{{ app.name }}</span></nav>

# {{ app.name }}

{{ app.tagline }}

<ul class="app-list">
{% for doc in app.docs %}
  <li><a href="{{ doc.url | relative_url }}">{{ doc.name }}</a></li>
{% endfor %}
</ul>
