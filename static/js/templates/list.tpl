{% for note in notes %}
<div class="note">
  <h4>{{ note.title }}</h4>
  <p class="note-content">{{ note.content }}</p>
  {% if note.checklist_items %}
  <ul>
    {% for item in note.checklist_items %}
    <li class="{%if item.get().checked%}checked{%endif%}">{{item.get().title}}</li>
    {% endfor %}
  </ul>
  {% endif %}
</div>
{% endfor %}
