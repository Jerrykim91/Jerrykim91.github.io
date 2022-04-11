---
title: Advanced - 클래스 상속(inheritance)
author: Jerry # 작성자 
date: 2020-06-27
layout: post
---

<h5><p align="right"> {{ page.date | date_to_string }} </p></h5>
<!-- 코드 상단 :  -->
<a href="https://hits.seeyoufarm.com">
<img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 

<br>


  

#### 6\. 파이썬 심화 - 클래스 상속(inheritance)

  

# 클래스 상속(inheritance)

  

## 1\. 상속(inheritance)

상속은 물려받은 기능을 유지한 채로 다른 기능을 추가할 때 사용하는 기능이라고 보면 된다.

상속에는 두 가지 클래스가 있다. 부모 클래스(기반 클래스)와 자식 클래스(파생 클래스)!

부모클래스틑 우리가 클래스를 만들었을 때 가장 기본이 되는 클래스이며

자식 클래스는 부모 클래스에서 가지고 온 클래스를 기반으로 만든 것을 자식 클래스라고 한다.

    
<br>
  

사람을 예로 설명하자면

가장 기본적 구성요소들로 이루어진 `Person라는` 클래스를 하나 만들었다.

여기서 모든 값은 기본값으로 설정한다.

그런 후 `Person` 클래스를 활용해 `Doctor` 클래스를 만든다.
  
<br>
  

자 여기서!

부모 클래스는  Person 클래스이다.

이것을 베이스로 해서 만들어진 `Doctor` 클래스는 자식 클래스라고 보면 된다.

부모 클래스를 통해서 나올 수 있는 자식 클래스는 `Doctor` 클래스뿐만 아니라 학생, 선생님, 요리사 등등이 될 수 있다.

  
<br>

### 상속 - 기본 구조

  

상속은 새로운 기능을 만들 때마다 계속 클래스를 만든다면 중복되는 부분은 계속 중복되기 때문에

이런 부분들을 보완하기 위해서 상속을 사용하고 중복되는 기능을 반복해서 만들지 않게 하기 위함이다.

기존 기능들을 재사용 가능하게 하여 효율성과 코드의 간결함을 극대화시킬 수 있다.

    
<br>

```py
class 부모클래스:
    code
    
class 자식클래스(부모클래스):  # ()내부에 부모클래스의 이름을 넣는다.
    code
```

  
<br>  
<br>

### 상속 - 이해하기

  

```py
class Person:

    def greeting(self):
        print('안녕하세요!')
    
class Doctor(Person):
    """
    Person을 상속 받음
    """
    def checkUp(self):
        print('어디가 아프신가요?')


Joy = Doctor()
Joy.greeting()     # 부모클래스에서 호출 -> 상속 
Joy.checkUp()      # 자식클래스의 checkUp 메소드 

# outPut

# >>> 안녕하세요!       
# >>> 어디가 아프신가요?
```

    
<br>

상속은 클래스의 기능을 유지하면서 새로운 기능을 추가할 수 있다.

상속에도 범위가 존재한다. 여기저기 다 쓸 수는 없다. 어디까지를 상속으로 사용하는 것이 좋을까?

음... 상속은 명확하게 같은 종류이며 동등한 관계일 경우...?

즉, 연관성 + 동등한 기능을 사용할 때 그냥 쉽게 확장의 개념일 때 사용한다.

  
    
<br>  
<br>


## 2\. 상속 & 포함 관계

  

포함관계라는 것이 있다. 상속처럼 한 번에 이해하고, 활용하기는 어려울 수 있다.

이 부분은 리뷰하기에는 조금 부족한 느낌이 있어 추후 다시 업데이트하도록 하겠다.

  
<br>

  
<!-- 
## 3\. 포함 관계(심화)

추후 -->

## 4\. 메서드 오버 라이딩\*\*

  

메서드 오버 라이딩은 같은 이름의 메서드를 덮어쓴다.

상속의 개념 중 하나로 같은 이름으로 기능을 다양하게 사용해야 할 때 사용한다.

중복을 줄일 수 있는 아주 좋은 문법이다.

- 재정의 ->> 부모 클래스의 메서드를 무시하고 새로운 메소드를 생성

    
<br>

### 메소드 오버 라이딩 - 이해하기

```py
class Person:

    def greeting(self):
        print('안녕하세요!')
    
class Doctor(Person):

    def greeting(self):
        print('어디가 아프신가요?')


Joy = Doctor()
Joy.greeting()     
```
  
<br>

이해가 잘 안 될 것 같아서 다른 예를 들어 설명하겠다.

  
<br>

``` py
class father(): # 부모 클래스

    def handsome(self):
        print('잘생겼다.')

class Brother(father):
    """
    아들
    """

class Sister(father):
    """
    딸 : 예쁘다 라는 걸 가지고 있기 때문에 
    잘생겼다에서 오버라이딩 됨

    딸에게만 영향을 미치며 아빠와는 무광 
    """
    def pretty(self):
        print('예쁘다')

    def handsome(self):
        self.pretty()


Child_b = Brother()
Child_b.handsome()
    
Child_g = Sister()
Child_g.handsome()
```

  
    
<br> <br>


## 5\. `super()` 개념

  

자식 클래스에서 부모 클래스의 내용을 사용하고 싶을 경우 사용한다.

`super().메소드()`

  
<br>


### `super()` - 이해하기

```py
class Person:

    def __init__(self):
        print('부모 - 생성자')
        self.hello = '안녕하세요!'
    
class Doctor(Person):

    def __init__(self):
        print('자식 - 생성자')
        super().__init__()              # super()로 부모 __init__  호출 
                                        # 부모클래스 초기화 
        self.hospital = 'Severance!'


Joy = Doctor()
print(Joy.hello)  
print(Joy.hospital)  
```

  
<br>

만약 자식 클래스에 생성자가 없다면 `super()을` 사용해서 부모 클래스를 초기화할 필요 없다.

  
<br>

```py
class Person:

    def greeting(self):
        print('안녕하세요!')
    
class Doctor(Person):

    def greeting(self):
        super().greeting()        # 만약 없으면 '안녕하세요'는 누락 -> 오버라이딩 때문
        print('어디가 아프신가요?')


Joy = Doctor()
Joy.greeting()     
```

  
<br><br>

<!-- 추가 실습은 -> Practice makes perfect! 의 링크를 참조 -->

  
  

## 6\. 다중 상속

  
다중 상속은 두 개 이상의 부모 클래스로부터 상속받아 자식 클래스를 생성하는 것을 의미한다.

#### 장점

- 여러 개의 부모 클래스로부터 멤버(메소드) 모두 상속 받을 수 있다는 점에서 매우 강력한 상속 방법

#### 단점

- 상속 받은 부모클래스에 같은 이름의 멤버(메소드)가 존재
- 하나의 클래스를 간접적으로 두번 이상 상속 받을 가능성 존재

다 떠나서 다중 상속은 프로그래밍을 복잡하게 만들 수 있다.

그렇기 때문에 될수록 사용을 자제하는 것이 좋다.

  
  
<br>

### 다중 상속 - 기본 구조

  

```py
class 부모클래스1:
    code

class 부모클래스2:
    code
    
class 자식클래스(부모클래스1, 부모클래스2):  
    code
```

  
<br>
  

### 다중 상속 - 이해하기

```py
class Father:
    
    def __init__(self):
        self.fname = '김우빈'

    def fatherName(self):
        print(f'아빠는 {self.fname} ,')

class Mather:

    def __init__(self):
        self.mname = '신민아'

    def matherName(self):
        print(f'엄마는 {self.mname} ,')

class Child(Father,Mather):

    def __init__(self):
        # super().__init__()
        Father.__init__(self)
        Mather.__init__(self)
        self.name = '김빈아'

    def greeting(self):
        super().__init__()
        print(f'저는 {self.name}입니다.')


child = Child()
print(child.__dict__)

child.fatherName()
child.matherName()
child.greeting()

# outPut

# >>> {'fname': '김우빈', 'mname': '신민아', 'name': '김빈아'}
# >>> 아빠는 김우빈 ,
# >>> 엄마는 신민아 ,
# >>> 저는 김빈아입니다.
```
  
<br>  
<br>
  
  

## Reference

-   파이썬 코딩도장   :  [https://dojang.io/](https://dojang.io/)
-   개발자의 취미 생활 : [https://rednooby.tistory.com/55?category=633023](https://rednooby.tistory.com/55?category=633023)
-   뚱땡이우주인 : [https://uzooin.tistory.com/137](https://uzooin.tistory.com/137)

<!-- ## Practice makes perfect! -->

<!-- -   [심화\_클래스 활용](https://github.com/Jerrykim91/KISS/tree/master/Python/%EC%8B%AC%ED%99%94_%ED%81%B4%EB%9E%98%EC%8A%A4%ED%99%9C%EC%9A%A9) -->


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