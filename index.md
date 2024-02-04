---
layout: home
---
<!-- 코드 상단 : 방문자 수 확인 -->
<a href="https://hits.seeyoufarm.com">
<img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 

<br>

README
--------
안녕하세요. 
제 소개는 조금 정리해서 올리도록 할게요.

<!-- 안녕하세요. AI 개발자로 근무중인 제리입니다.  -->

아, 참고로 현재 저의 블로그는 제가 주로 보러다니는 [sighingnow][1]님의 블로그를 모방하여 블로그를 개설했습니다. 원래는 이 분의 깃북 테마를 이용하다가 심플한 디자인의 블로그로 새롭게 개편했습니다. 
부디 이 블로그를 통해 오늘보다 나은 내일의 내가 되었으면합니다. 방문해 주셔서 감사합니다.




<br>
<br>

### Git History    <a href="https://github.com/jerrykim91"><img height="18" width="32" src="https://unpkg.com/simple-icons@v6/icons/github.svg" /></a>


<!-- github commit history -->
<!-- <a class="introduce_link" href="https://github.com/jerrykim91" rel="nofollow" target="_blank">Github</a> -->
<img src="https://ghchart.rshah.org/jerrykim91" alt="Github Image" style="max-width:100%">

<br>
<br>

Writings
----------

작성 중인 블로그 내역

<ul>
  {% for post in site.posts limit:6 %}
    <li class="alink">
      <a href="{{ post.url }}" class="red-link">
        {{ post.date | date: "%Y-%m-%d" }}&emsp;{{ post.title }}
      </a>
    </li>
  {%- endfor -%}
  <li class="alink"><a href="./blog/" class="red-link">&hellip;&hellip;</a></li>
</ul>


<!-- Why blog?
--------- -->

<!-- [You should blog even if you have no readers](http://nathanmarz.com/blog/you-should-blog-even-if-you-have-no-readers.html). -->

<!-- ./Computer Science and Engineering
----------------------------------

I'm a Haskell enthusiast. I have submitted some patches to GHC and hadrian. I have
also contributed to many open source projects, such as [ghc][16], [apache-arrow][17],
[pandas][18], [mxnet][19], [pytorch][20], [etcd-cpp-apiv3][9], and [more][22] ...

I'm working on cloud-native engineering and thinking about how to make the computational
systems efficient, observable and robust. -->
<br>
<br>


<!-- Projects
----------

#### 프로젝트 이름

내용(대기중) -->




<br>
<br>


곧 추가될 블로그 기능 
-----------
1. 검색기능 
2. 진행한 프로젝트 내용


<!-- Pageviews -->


[1]: https://github.com/sighingnow/sighingnow.github.io
