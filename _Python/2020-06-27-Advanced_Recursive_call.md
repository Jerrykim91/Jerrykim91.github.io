---
title: Advanced - Recursive call
author: Jerry # 작성자 
date: 2020-06-27
layout: post
---

<h5><p align="right"> {{ page.date | date_to_string }} </p></h5>
<!-- 코드 상단 :  -->
<a href="https://hits.seeyoufarm.com">
<img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 

<br>

#### 1\. 파이썬 심화 - 재귀 호출(Recursive call)

  

# 재귀 호출(Recursive call)

  

재귀 호출 혹은 재귀 함수(Recursive call)라고 불리며 함수 안에서 함수 자기 자신을 호출하는 방식이다.

알고리즘을 만들때 유용하며 보통 알고리즘은 반복문으로 구현한 코드보다  
재귀 호출로 구현한 코드가 좀 더 직관적이고 이해하기 쉽다.

또한 여러가지 수학 문제를 해결하는 작업에서 유용하다.

예를 들면

-   팩토리얼
-   피보나치 수열
-   그외...

<br>

## 재귀호출 사용하기

  

아래처럼 구현하게 되면 무한루프에 빠지듯이 끊임없이 계속 함수를 호출한다.

  

```py
def Func():

    print('Hello, world!')
    Func() # 재귀호출

Func()     # 호출

# OutPut
# >>> Hello, world!
# >>> Hello, world!
# >>> Hello, world!
# >>>  ... 에러날때까지 반복 

# 파이썬은 최대 재귀 깊이(maximum recursion depth) 
# -> 1,000으로 정해져 있음
# 최대 재귀 깊이를 초과하면 RecursionError가 발생 
# -> 스택 오버플로를 발생을 제어하기 위함 
```

<br>  

이렇게 반복된다.  
이런 경우 `Ctrl+C` 를 통해 `KeyboardInterrupt` 를 발생시켜서 함수를 빠져나올 수 있다.

<br>

```py
# 이런식으로의 반복
  Func
    ㄴFunc
      ㄴFunc
         ㄴFunc
            ㄴFunc
               ㄴ 반복...
```

<br><br>

## 재귀 호출 - 종료 조건


재귀 호출을 빠져나오기 위해서는 while문에서 사용한 것처럼 if문을 이용해서 빠져나올 수 있다.


<br>

```py
def Func(cnt):

    if cnt == 0:    # 종료 조건을 만족하는 cnt==0이되면 함수를 호출하지 않음 
                    # cnt가 0이 아니면 다시 Func 함수를 호출
        return

    print('Hello, world!', cnt)

    cnt -= 1        # cnt를 1 감소시킨 뒤
    Func(cnt)       # 다시 Func에 넣음

Func(5)             # Func 함수 호출
```

<br><br>
  

## 재귀 호출 - 팩토리얼

실습 겸 팩토리얼을 재귀 호출을 이용해서 만들어 보겠다.

팩토리얼은 1부터 n까지 양의 정수를 차례대로 곱한 값 => `!`로 표기

<br>

```py
def Factorial(n):

    if n == 1:      
        return 1                    # 1을 리턴하고 재귀호출을 종료
    return n * Factorial(n - 1)     # n과 Factorial 함수에 n - 1을 넣어서
                                    # 리턴된 값을 곱함 -> 이게 핵심 

print(Factorial(5))
# Output
# >>> 120 
```

  
<br>

계산 값이 즉시 구해지는 것이 아니라 재귀 호출로 `n-1`을 계속 전달하다가

`n == 1` 때 `1`을 리턴하면서 n과 곱하고 다시 결과값을 리턴하는 구조가 반복된다.

<br>
  

```py
Factorial(5)
5 * Factorial(4)   
5 * 4 * Factorial(3)
5 * 4 * 3 * Factorial(2)
5 * 4 * 3 * 2 * Factorial(1)
5 * 4 * 3 * 2 * 1

120
```

<br>

**여기서 왜 `n ==1`을 한건지 궁금해서 여러 가지 방식으로 실행을 해보았다.**

<br>
  

```py
# n == 0 이고 리턴 값이 없을때 
def Factorial(n):

    if n == 0:      
        return     
    return n * Factorial(n - 1)    

print(Factorial(5))

# Output
# >>> TypeError: unsupported operand type(s) for *: 'int' and 'NoneType'

# n == 0 이고 리턴 값이 0 일때 

def Factorial(n):

    if n == 0:      
        return  0   
    return n * Factorial(n - 1)    

print(Factorial(5))

# Output
# >>> 0
```

  

재귀 호출은 코드를 간단하게 만들어 주는 장점이 있다.  
반대로 디버그 하기가 어렵고 메모리를 많이 잡아 먹는것과 동시에 시간도 소비한다.  
그래서 사용할때 잘 생각하고 사용하는 것을 권장한다.

조금 어려워서 재귀호출을 생략할까라는 생각도 했지만 한 번쯤은 코드를 보고 경험하는 것이 좋다고 판단해서 정리하고 넘어간다.

  
<br>

### 참고 - Isinstance

팩토리얼 함수는 실수와 음의 정수는 계산할 수 없다. 이 경우에 `isinstanc` 를 사용하여 숫자(객체)가 **정수일 때만 계산하도록** 만들 수 있다.

```py
def Factorial(n):

    if not isinstance(n, int) or n < 0:    
    """
    # n이 정수가 아니거나 음수이면 함수를 끝냄
    """
        return None
    if n == 1:
        return 1
    return n * Factorial(n - 1)

print(Factorial(3))
```

<br>

---

  
  

## Reference

-   파이썬 코딩도장   :  [https://dojang.io/](https://dojang.io/)



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