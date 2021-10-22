{
    "page": {
        "title": "Introduction",
        "level": "1.1",
        "depth": 1,
        {% assign reversed_categories = site.categories | reverse %}
        {% if reversed_categories %}
        {* "next": {
            "title": "{{reversed_categories.title}}",
            "level": "1.2",
            "depth": 1,
            "path": "{{reversed_categories.path}}",
            "ref": "{{reversed_categories.path}}",
            "articles": []
        }, *}
        {% endif %}
        "dir": "ltr"
    },

    {%- include metadata.json.tpl -%}
}