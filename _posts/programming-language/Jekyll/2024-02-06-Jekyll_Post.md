---
title: Jekyll 포스트용 excerpt 다루기
author: Jerrykim91
date: 2025-02-06 # 업로드 
tag: [Jekyll]
category: Jekyll
layout: post
---


Jekyll 블로그를 사용하면 대부분 다른 개발자가 만든 블로그를 포크해서 사용하지만 일부 사람들은 원하는 기능을 구현 해야하는 상황이 발생한다. 
그리고 생각치 못하게 포크해서 가지고 왔는데 일부 기능이 동작하지 않는 경우가 있다. 그런 경우 관리자가 직접 작업을 해야한다.

excerpt는 주로 사용되는 변수다. 오늘은 이 excerpt에 대해서 알아 보고자 한다. 

<!--more-->

## Jekyll - excerpt

일단 필자의 상황은 포크(?)를 해왔는데 중간중간 튜닝을해서 그런지는 몰라도 블로그 페이지에서 포스트의 전체 글이 다 노출 되는 상황이 발생했다. 원래는 블로그 페이지는 포스트의 상단 내용만 노출시키는데 뭔가 누락된 것 같아. 결국에는 변수를 하나하나 분해해보다가 excerpt를 컨트롤 하면 된다는 것을 파악했다. 


<br>

### 결론

---
 

<br>

 

## Reference


### [이론]

---

### [기타]




-----

<br>


<h5><p align="right"> {{ page.date | date_to_string }} </p></h5>
<!-- 코드 상단 :  -->
<a href="https://hits.seeyoufarm.com">
<img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 

<br>

<!-- 코드 하단 -->
<br>
<script src="https://utteranc.es/client.js"
    repo="Jerrykim91/jerrykim91.github.io"
    issue-term="title"
    label="😎"
    theme="github-light"
    crossorigin="anonymous"
    async>
</script>
<br>