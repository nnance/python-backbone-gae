{% if note.checklist_items %}
<ul>
  {% for item in note.checklist_items %}
  <li class="{%if item.get().checked%}checked{%endif%}">{{item.get().title}}</li>
  {% endfor %}
</ul>
{% endif %}
