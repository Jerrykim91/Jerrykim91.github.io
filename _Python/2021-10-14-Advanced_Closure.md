---
title: Advanced - 클로저(Closure)
author: Jerry # 작성자 
date: 2020-06-27
layout: post
---

<h5><p align="right"> {{ page.date | date_to_string }} </p></h5>
<!-- 코드 상단 :  -->
<a href="https://hits.seeyoufarm.com">
<img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 

<br>


#### 3\. 파이썬 심화 - 클로저(Closure)

  

# 클로저(Closure)

  

```py
# 함수안에 함수를 만들어서 지역변수 호출 

def Func():              # 1. 선언 
    Code = 'Func의 test' # 3. 변수 선언

    def FuncInFunc():
        print(Code)      # 4. Code변수를 참고하여 출력 
                            # 6. 이 함수에서 정의 되지 않았지만 사용됨  
                            # -> Func안에 들어있는 모든 코드에 접근가능 함
        
    return FuncInFunc()  # 5. 호출과 동시에 리턴 -> return 생략가능

Func()                   # 2. 실행

# Output
# >>>> Func의 test

```

    

일반 함수와는 다르게 자신의 영역 밖에서 호출된 함수의 변수 값과 레퍼런스를 복사하고

저장한 뒤 값들을 액세스 가능하게 해주는 역할을 한다.

어떤 함수를 함수 자신이 가지고 있는 환경과 함께 저장한 레코드이며 코드 안에 정의되지 않은 변수를 클로저가 만들어지는 당시의 값과 레퍼런스에 맵핑하여 주기도 한다.

이렇게 함수를 둘러싼 환경을 유지하다가, 함수를 호출 할때 다시 꺼내서 사용하는 함수를 클로저라고 한다.

  

<br><br>
  

## 클로저(Closure) 사용하기

<br>

- 함수 내부에서 정의된 함수는 클로저
- 바깥 함수로부터 생성된 변수값을 변경 또는 저장할 수 있는 함수

<br>

### 함수를 클로저 형태로 만드는 방법

  
함수 바깥쪽에 있는 지역변수를 사용해서 연산을 진행

글로저를 사용하면 프로그램의 흐름을 변수에 **저장가능**  
클로저 = 지역변수 + 코드 묶어서 사용

클로저에 속한 지역변수는 바깥에서 **직접** 접근할 수 없으므로 데이터를 숨기고 싶을 때 사용

  <br>

```py
## 클로저 형태의 함수 

def Closr():                # 1. 선언 
    i = 10
    j = 10

    def mul(x):             # 4. 호출
        return i * x + j    # 5. 함수 밖의 변수 호출해서 연산 후 리턴  

    return mul              # 3. mul 함수를 리턴 
                            # 함수를 리턴 할때는 함수이름만 반환->()는 사용하면 x 


y = Closr()                 # 2. 호출 
                            # y에 저장된 함수 => 클로저

print(y(1),y(2),y(3),y(4),y(5))

# Output
# >>> 20 30 40 50 60 

dum = [ y(i) for i in range(1,6)]
print(dum) 

# Output
# >>> [20, 30, 40, 50, 60]

    
```

<br>

### 클로저 만들기 - Lambda 사용

  

람다 표현식을 이용하면 클로저를 쉽게 만들 수 있다.  
클로저와 람다 표현식은 주로 같이 사용하는 경우가 많아서 혼동하기가 쉬운데

\- **람다**

- 이름 없는 익명함수

\- **클로저**

- 함수를 둘러싼 환경을 유지하고 이후에 다시 사용하는 함수

두 함수는 다르다. 그렇기 때문에 혼동하지 말자.

  

```py
# lambda 사용 

def Closr(): 

    i = 10
    j = 10

    return lambda x: i * x + j  # 람다 표현식을 반환 

y = Closr() 
print(y(1),y(2),y(3),y(4),y(5))

# Output
# >>> [20, 30, 40, 50, 60]
    
```

<br><br>



## 클로저 심화

  

```py
def Func():
    Code = 'Func의 test'

    def FuncInFunc():
        print(Code)
        
    FuncInFunc()

MyFunc = Func()
    
```

<br>

MyFunc에 함수가 들어있는지 확인해보자

<br>

```py
def Func():
    Code = 'Func의 test'

    def FuncInFunc():
        print(Code)
        
    return FuncInFunc

MyFunc = Func()
print(MyFunc)

# Output
# >>> <function Func.<locals>.FuncInFunc at 0x0000021C2FDEEF78>
    
```

  
<br>

FuncInFunc 함수가 할당된 것을 확인 -> MyFunc을 이용해서 FuncInFunc 호출해보자!!

**FuncInFunc = MyFunc**

  

```py
def Func():
    Code = 'Func의 test'

    def FuncInFunc():
        print(Code)
        
    return FuncInFunc

MyFunc = Func()
print(MyFunc)

# Output
# >>> <function Func.<locals>.FuncInFunc at 0x0000021C2FDEEF78>
    
    
```

  

이 함수의 상세 내부 구조에 대해서 확인해보자

  

```py
def Func():
    Code = 'Func의 test'

    def FuncInFunc():
        print(Code)
        
    return FuncInFunc

MyFunc = Func()

d = [dir(MyFunc),
    type(MyFunc.__closure__),
    MyFunc.__closure__, 
    MyFunc.__closure__[0],
    dir(MyFunc.__closure__[0]),
    MyFunc.__closure__[0].cell_contents
    ]

for i in d :
    print(i)
    print('='*50)

    
```

  

### dir(MyFunc) => \_\_closure\_\_ 라는 속성을 확인

```py
>>> ['__annotations__', '__call__', '__class__', '__closure__', '__code__', 
'__defaults__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__',  
'__format__', '__ge__', '__get__', '__getattribute__', '__globals__', 
'__gt__',    '__hash__', '__init__', '__init_subclass__', '__kwdefaults__',
'__le__',   '__lt__', '__module__', '__name__', '__ne__', '__new__',
'__qualname__',  '__reduce__', '__reduce_ex__', '__repr__', '__setattr__',
'__sizeof__',  '__str__', '__subclasshook__']
```

  

### type(MyFunc.**closure\_\_)** 

\- closure\_\_의 타입 - 튜플

```py
>>> <class 'tuple'> 
```

  

### MyFunc.\_\_closure\_\_ 

\- 튜플 안을 확인 - 1개의 객체 확인

```py
>>> (<cell at 0x000001CA797BB6A8: str object at 0x000001CA797D77A0>,)
```

  

### MyFunc.\_\_closure\_\_\[0\] 

\- "cell" 문자열 객체

```py
>>> <cell at 0x000001CA797BB6A8: str object at 0x000001CA797D77A0>
```

  

### dir(MyFunc.\_\_closure\_\_\[0\])

\- cell의 속성 - cell\_contents 확인

```py
>>> ['__class__', '__delattr__', '__dir__', '__doc__', '__eq__',
'__format__', '__ge__', '__getattribute__', '__gt__', '__hash__',
'__init__', '__init_subclass__', '__le__', '__lt__', '__ne__',
'__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__',
'__sizeof__', '__str__', '__subclasshook__', 'cell_contents']
```

  

### MyFunc.\_\_closure\_\_\[0\].cell\_contents 

\- Func의 test

```py
>>> Func의 test
```

  

언제나 느꼈지만... 함수의 내부구조는 복잡하구나를 또다시 느끼고....

  
<br><br>  

## 클로저 응용 및 실습

  

앞에서 배운 변수들을 이용해서 클로저의 지역 변수를 변경해보자.

```py
def Closr():     

    i = 10
    j = 10
    tal = 0

    def mul(x):   
        nonlocal tal  # 
        tal = tal + i * x + j     # 값이 누적   
        print(tal)  
    return mul

y = Closr() 

print(y(1),y(2),y(3))

# Output
# >>> 20
# >>> 50
# >>> 90
# >>> None None None  # print()문 때문에 생성 

y(1)
y(2)
y(3)

# Output
# >>> 20
# >>> 50
# >>> 90
    
```

  
<br>

### 이렇게도 활용이 가능하다.

\- schoolofweb를 통해 알게 된 건데 

<br>

  

#### h1태그와 p태그로 문자열을 감싸는 함수

```py
def Closr(tag):  

    txt = '안녕하세요'  
    tag = tag  

    def Func():  
        print(f'<{tag}>{txt}<{tag}>')

    return Func  

h1Func = Closr('h1')  
pFunc  = Closr('p')  

h1Func() 
pFunc()  

# Output
# >>> <h1>안녕하세요<h1>
# >>> <p>안녕하세요<p>
    
```

  <br>

#### 태그 안의 문자열을 컨트롤

```py
def Closr(tag):  

    tag = tag  

    def Func(input):  
        txt = input  
        print(f'<{tag}>{txt}<{tag}>')

    return Func  

h1Func = Closr('h1')  
pFunc  = Closr('p')  

h1Func('여긴 h1태그의 내부')  
pFunc('여긴 p태그의 내부')  

# Output
# >>> <h1>여긴 h1태그의 내부<h1>
# >>> <p>여긴 p태그의 내부<p>
    
```

  <br>

#### 1~10까지 출력하는 연습문제

```py
# MyFunc
def cnt():
    i = 0 
    
    def count(x):
        nonlocal i
        i = i + 1
        print(i)
    return count

c = cnt()

for i in range(10):
    c(i)

print('='*50)

# 정답 

def cnt_an():
    i = 0 

    def count_an(x):
        nonlocal i
        i += 1
        return i 
    return count_an

my_fnc = cnt_an()

for k in range(10):
    print(my_fnc(k), end= ' ')
```

  
  <br><br>

---

  

## Reference

-   파이썬 코딩도장   :  [https://dojang.io/](https://dojang.io/)
-   SchoolOfWeb   :   [http://schoolofweb.net/](http://schoolofweb.net/)
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