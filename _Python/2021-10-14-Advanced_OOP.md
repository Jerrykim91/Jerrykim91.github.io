---
title: Advanced - OOP(추상클래스)
author: Jerry # 작성자 
date: 2020-06-27
layout: post
---

<h5><p align="right"> {{ page.date | date_to_string }} </p></h5>
<!-- 코드 상단 :  -->
<a href="https://hits.seeyoufarm.com">
<img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 

<br>


  
#### 7\. 파이썬 심화 - 추상 클래스

  

# 추상 클래스

  

## 1\. 추상화

  

함수의 이름을 통해 구체적으로 하는 일의 전체적인 특징(특성)을 추상적으로 보여주는 것이 추상화이다.

쉽게 말하자면 하고자하는 것의 전체적인 특징을 보여주는 것이다.

예를 들면 단기간 많은 것을 기억해야 할 때 전부를 기억하는 것보다

일정한 패턴이나 글의 맥락을 외우면 기억해야 할 양을 줄이고

전체적인 그림을 그릴 수 있는 것처럼 하고자 하는 것을 전달하기 쉽게 특징만으로 뽑아서 보여주는 것이다.


<br>
  

### 추상화의 장점

-   코드의 재사용성, 가독성 향상 -> 결국 생산성, 에러의 감소와 같은 요소에 영향

  
<br><br>


## 2\. 추상 클래스

  

메서드 목록**만** 가진 클래스이며 상속받는 클래스에서 메소드 구현을 **강요하기** 위해 사용한다.

-   자식 클래스가 **반드시 구현**해야 하는 메소드를 정해줄 수 있다.

  
<br>

### 추상 클래스 - 기본 구조

  

```py
from abc import *
#import abc       # 일때 abc.ABCMeta, @abc.abstractmethod로 사용
    
class 추상클래스이름(metaclass=ABCMeta):

    @abstractmethod
    def 메소드이름(self):
        코드
```

<br>


### 추상 클래스 - 이해하기 1

  

```py
# ABC를 정의하기 위한 메타 클래스 ABCMeta
from abc import ABC

# ABCMeta를 메타 클래스로 가지는 도우미 클래스

class MyABC(ABC):
    """
    메타클래스 없이 ABC에서 파생 
    """
    pass

# ABC => 여전히  ABCMeta    
```
<br>

#### 다중 상속이 메타 클래스 충돌을 일으킬 수 있기 때문에 메타 클래스 사용할 때 주의가 필요하다.

<br>

```py
from abc import ABCMeta

class MyABC(metaclass=ABCMeta):
    """
    metaclass 키워드를 전달하고 
    ABCMeta를 직접 사용해서 추상 베이스 클래스를 정의
    """

    @abstractmethod
    def 메소드이름(self):
        코드
```

<br>


### 추상 클래스 - 이해하기 2

  

```py
from abc import *
    
class CookBase(metaclass=ABCMeta):

    """
    반드시 해야 하는 일을 추상메소드로 구현 

    추상 클래스는 인스턴스로 만들 수 없음 -> 빈메소드를 만들어야하는 이유
    ㄴ 인스턴스를 만들 수 없다! = 호출할 일이 없다!
    """

    @abstractmethod
    def FindRecipe(self):
        pass
    
    @abstractmethod
    def Ingredients(self):
        pass
    
    
class Cook(CookBase):

    """
    구현할때 Base에서 구현한 item(@abstractmethod 추상메소드)은
    자식클래스에서 모두 구현 해야한다 - 아니면 에러발생 
    """

    def FindRecipe(self):
        print('요리 레시피 준비')
    
    def Ingredients(self):
        print('요리재료 준비')
    

joy = Cook()
joy.FindRecipe()
joy.Ingredients()

# output

# >>> 요리 레시피 준비
# >>> 요리재료 준비
```

<br>
  

추상 클래스는 인스턴스로 만들 때는 사용하지 않으며 오로지 상속에만 사용하며

자식 클래스에서 반드시 구현해야 할 메서드를 정해 줄 때 사용한다.

  
<br><br>

---

  

## Reference

-   파이썬 코딩도장   :  [https://dojang.io/](https://dojang.io/)
-   프로페셔널 프로그래머   :   [https://m.blog.naver.com/PostView.nhn?blogId=knix008&logNo=220700047637&proxyReferer=https:%2F%2Fwww.google.com%2F](https://m.blog.naver.com/PostView.nhn?blogId=knix008&logNo=220700047637&proxyReferer=https:%2F%2Fwww.google.com%2F)

  
  

<!-- ## Practice makes perfect!

-   [Advanced\_OOP\_추상클래스](https://github.com/Jerrykim91/KISS/tree/master/Python/%EC%8B%AC%ED%99%94_%ED%81%B4%EB%9E%98%EC%8A%A4%ED%99%9C%EC%9A%A9/Advanced_OOP_%EC%B6%94%EC%83%81%ED%81%B4%EB%9E%98%EC%8A%A4) -->

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