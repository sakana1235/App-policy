---
layout: default
title: APP_NAME
permalink: /APP_ID/
description: APP_NAME のポリシー文書一覧 / Policy documents for APP_NAME
---

{% assign app = site.data.apps | where: "id", "APP_ID" | first %}

<nav class="breadcrumb"><a href="{{ '/' | relative_url }}">Home</a> / <span>{{ app.name }}</span></nav>

# {{ app.name }}

{{ app.tagline }}

<ul class="app-list">
{% for doc in app.docs %}
  <li><a href="{{ doc.url | relative_url }}">{{ doc.name }}</a></li>
{% endfor %}
</ul>
