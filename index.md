---
layout: default
title: App Policies
description: 各アプリのプライバシーポリシーなどを公開しています。
---

# App Policies

このサイトでは、公開している各アプリのプライバシーポリシーなどのポリシー文書を掲載しています。

This site hosts the privacy policies and other policy documents for our apps.

<ul class="app-list">
{% for app in site.data.apps %}
  <li>
    <h2><a href="{{ app.url | relative_url }}">{{ app.name }}</a></h2>
    {% if app.tagline %}<p>{{ app.tagline }}</p>{% endif %}
    {% for doc in app.docs %}
      <a class="doc" href="{{ doc.url | relative_url }}">{{ doc.name }}</a>
    {% endfor %}
  </li>
{% endfor %}
</ul>
