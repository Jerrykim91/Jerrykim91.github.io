---
layout: home
---

<!-- 코드 상단 : 방문자 수 확인 -->
<a href="https://hits.seeyoufarm.com">
<img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 

<br>

**좋아하는 직업을 선택하면 평생 하루도 일하지 않아도 된다! 핳!**
- 언제 어디서나 빠르게 작성하고 읽기위해 만든 페이지입니다. 

<br>



### Git History
<!-- github commit history -->
<a class="introduce_link" href="https://github.com/jerrykim91" rel="nofollow" target="_blank">Github</a>
	<img src="https://ghchart.rshah.org/jerrykim91" alt="Github Image" style="max-width:100%">




<!-- <script>
// Instanciating InstantSearch.js with Algolia credentials
const search = instantsearch({
  appId: '{{ site.algolia.application_id }}',
  apiKey: '{{ site.algolia.search_only_api_key }}',
  indexName: '{{ site.algolia.index_name }}',
  searchParameters: {
    restrictSearchableAttributes: [
      'title',
      'content'
    ]
  }
});

const hitTemplate = function(hit) {
  const url = hit.url;
  const title = hit._highlightResult.title.value;
  const content = hit._highlightResult.html.value;

  return `
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
        <h2 class="archive__item-title" itemprop="headline"><a href="{{ site.baseurl }}${url}">${title}</a></h2>
        <div class="archive__item-excerpt" itemprop="description">${content}</div>
      </article>
    </div>
  `;
}

// Adding searchbar and results widgets
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '.search-searchbar',
    {% unless site.algolia.powered_by == false %}poweredBy: true,{% endunless %}
    placeholder: '{{ site.data.ui-text[site.locale].search_placeholder_text | default: "Enter your search term..." }}'
  })
);
search.addWidget(
  instantsearch.widgets.hits({
    container: '.search-hits',
    templates: {
      item: hitTemplate,
      empty: '{{ site.data.ui-text[site.locale].search_algolia_no_results | default: "No results" }}',
    }
  })
);

// Starting the search only when toggle is clicked
$(document).ready(function () {
  $(".search__toggle").on("click", function() {
    if(!search.started) {
      search.start();
    }
  });
});
</script> -->



---


Main page
---



#### 앞으로 작업 할 내용 

- category : 기능 추가 작업 중(80%) 
- search : 기능 개발 중 
	- Algolia를 이용해 검색 기능 추가 진행 예정 
- 다른 깃허브 레파지토리(repository)연동 해보기 



#### issue

- 페이지 이동시 끊김?이 존재 - 추적 중 




<br>
<link rel="next" href="{{site.baseurl}}{{reversed_posts.first.url}}" />

