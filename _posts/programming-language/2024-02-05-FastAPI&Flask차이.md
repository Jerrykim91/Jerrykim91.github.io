---
title: FastAPI & Flask차이
author: Jerry
date: 2024-02-05 # 업로드 
tag: [programming-language]
category: programming-language
layout: post
---

## FastAPI & Flask 차이

최근에 갑자기 대두 되고 있는 FastAPI 와 flask에 대해 알아보고자 한다.

 
![FastAPIvsFlask](https://d226lax1qjow5r.cloudfront.net/blog/blogposts/the-ultimate-face-off-flask-vs-fastapi/flask-vs-fastapi_1200x600.png)


 **FastAPI & Flask 다 API* 및 웹 애플리케이션 구축**에 사용된다. 

그리고 부풀려진 부가 기능이 없는 **간소화된 Python 마이크로프레임워크**이므로 **개발 시간이 단축되고 유연성**이 높다.

그런 의미로 **FastAPI와 Flask는 다소 비슷**하다. 

- API(Application Programing Interface)
    - 요청과 응답을 처리하는 기능(서비스)를 의미
    

음, 파이썬의 **웹 프레임워크***으로 Django, Flask 가 대표적인데 

- 웹 개발 프레임워크란 ??
    - 웹 애플리케이션을 개발하는데 사용한다.
    - 예를들면 응용프로그램을 작성하는데 도움이 되는 모듈 라이브러리 클래스 및 함수의 모음이라고 보면 된다.
    - 웹 프레임워크로는 피라미드, 체리파이,보틀, 토네이도 등등….이 있다.

API 부분에서는 이제까지는 Flask가 장고보다는 압도적이었다. 

장고에서는 Django REST framework, 이것도 Heavy하니 훨씬 간편한 FlaskREST framework이 나오면서는  API를 Flask로 빠르게 만들어 버린다.  

그러다가 더한 웹 프레임워크가 나오는데 그것이 바로 FastAPI이다. 

Flask는 django의 복잡함?*을 없애기는 했지만, async와 속도를 해결하진 못했다. 

- 복잡함?
    - Flask보다 약 10배 많은 코드 라인으로 개발해서 더 무거움(full stack web framework)
    - 보안부터 DRF(Django Rest Framework), ORM, 서드파티와의 연계 등 대부분의 기능이 갖추어져 있음
    

그동안 django와 Flask가 공존해 왔다면, 앞으로는 django, Flask 그리고 FastAPI가 공존할 것 같다.

자, 그럼 FastAPI는 무엇이냐 ?

### FastAPI

![FastAPI](https://upload.wikimedia.org/wikiversity/en/8/8c/FastAPI_logo.png)

 API를 만들기 위한 파이썬 웹 프레임워크이며 Django와 Flask와는 다르게 API를 만드는데 좀 더 집중한 프레임워크이다.

 ~~또한 한번 만든 API를 여러 클라이언트에서 변경 없이 사용할 수 있다.~~

FastAPI는 Starlette(스타얼랏)을 기반으로 하고 있다.  ****

- (일단)속도가 빠른 이유
    - fastAPI가 내부적으로  [Starlette](https://www.starlette.io/)이라는 비동기 프레임워크를 사용하기 때문
        - [Starlette](https://www.starlette.io/)(스타얼랏)
            
            가볍고 복잡하지 않은 **HTTP 웹 프레임워크로** 장고나 플라스크 보다 가벼운 ASGI(비동기식) 프레임워크라고 보면 된다. 
            
            - ASGI(Asynchronous Server Gateway Interface)
                
                기존의 웹 스크립트나 애플리케이션이 웹서버와 통신하는 방식이던 WSGI(동기 함수 처리 방식) 보다 더 빠르게 비동기 처리 방식을 통해서 많은 트래픽을 처리 할 수 있으며 더욱 빠른 처리가 가능하다.
                
            

![Starlette](https://www.starlette.io/img/starlette.png)

Starlette은 **HTTP 웹 프레임워크**다. ****그래서 Flask에 있는 기능은 대부분이 FastAPI에 있다고 보면 된다.  

또한 FastAPI는 Starlette 기반의 프레임워크이기 때문에 **기존의 WSGI(Web Server Gateway Interface)방식의 프레임워크인 Flask나 Django보다 빠른 성능을 자랑**한다. 

- FastAPI 인기를 얻고 있는 이유는 뭘까?
    
    1.  의존성 주입(DI) 위주의 설계로, DB 등 의존성 관리가 편리하고 버그 위험이 적다
    2. 동시성 기반의 비동기 동작으로 충분히 빠른 성능을 가진다. 
    3. 파이다이나믹 기반의 벨리데이션(Validation)이 잘 동작한다.
    4. Swagger(OpenAPI) 기반의 자동 문서화가 효율적
    5. Starlette 을 갖다쓴 덕분에 WebSocket 과 같은 빌트인 기능이 충분
    6. 공식문서가 훌륭하다?

(**자체 피셜**) FastAPI는 파이썬 웹 프레임워크중 가장 빠르며 빠른 속도로 Node.js 혹은 Go와 대등 할 정도라고 하는데 

- **일부 개발자**는 문제를 제기 (FastAPI를 사용하지 않고 **Starlette를 직접** 또는 Sanic, Flask, Responder 등과 같은 다른 도구 **사용한 경우 모든 데이터 유효성 검사 및 직렬화를 직접 구현한 것이  전제** 일 것이다.)

 **ASGI**(Asynchronous Server Gateway Interface)중 한 종류인 Uvicorn(유바이콘/유비콘)와 함께 비동기적인 형태로 돌아간다. (동작한다.)

- Uvicorn은 프로덕션에 사용되는 ASGI서버

- 동기와 비동기
    
    동기(**Synchronous**): 서버에서 요청을 보냈을 때 응답이 돌아와야 다음 동작을 수행 
    
    즉, A 작업이 모두 진행 될 때까지 B 작업은 대기
    
    비동기(**Asynchronous**): 반대로 요청을 보냈을 때 응답 상태와 상관없이 다음 동작을 수행 
    
    즉 A 작업이 시작하면 동시에 B작업이 실행된다.
    A 작업은 결과 값이 나오는대로 출력 
    

    **동기**는 **비동기** 보다 간단하고 직관적이다. 
    하지만 결과가 주어질 때까지 아무것도 못하고 대기 해야하는 문제가 있다. 
    
    반면에 **비동기**는 **동기**보다 복잡하지만 결과가 주어지는데 시간이 걸려도 그 시간 동안 다른 작업을 할 수 있어서 보다 효율적일 수 있다. 
    
<br>

최근 들어서는 FastAPI가 Flask를 대체 가능하다는 이야기들이 나오고 있다. 

최근의 어느 한 블로그에서 **[FastAPI의 시대. 아직도 Flask 쓰시나요?](https://planb.hashnode.dev/fastapi-flask)** 라는 주제로 글이 올라오기도 했다.

결론은 FastAPI와 Flask를 비교하는 것이 틀렸다는 것이다. FastAPI와 Flask의 사용 범위는 다르다는 것이다. 
뭐... 
**[FastAPI로 만든 웹사이트](https://www.notion.so/c5c27bafbd694a9385a2ea0a900cf241?pvs=21)**도 나와있긴 하지만 ...

<br>

파이썬 언어에서 Flask는 아직까지도 유연성이 많이 필요한 다른 HTTP 작업에 적합한 선택이다. 

아직까지는 그렇다. 

그리고 **FastAPI가 API용으로써** Flask보다 훨씬 나은 프레임워크 라는 것.

결국은 각자의 위치에서 두 프레임워크는 각자의 범위에서 최선을 다하고 있는 것이다.  

앞에서 FastAPI로 웹 사이트를 만들었다고 언급했었는데 추측하건데 이런 이유가 아닐까 한다. 

플라스크를 가끔 사용하다 보면 데이터 유효성 검사가 부족하다고 느낄 때가 있다. 

예외 처리가 적절하게 되어 있지 않으면 높은 확률로 사망하곤 한다. 

너무나 당연하게 사용자가 항상 올바른 값을 줄 것이라고 가정을 두고 생각해서 그렇지 않은가 싶은데

참고로 플라스크의 경우 클라이언트로부터 전달되는 데이터의 유효성을 검증을 위해서 추가로
 확장 패키지([Flask-WTF](https://flask-wtf.readthedocs.io/en/0.15.x/))를 사용 해야 한다. 

*`Flask-WTF`패키지 이름이다 … 오해 말자….*

![Flask-WTF](https://flask-wtf.readthedocs.io/en/0.15.x/_images/flask-wtf.png)

<br>

암튼 그렇다? 

FastAPI에는 기본적(기능적)으로 데이터 유효성 검사가 내장되어 있다. 

또한 API 문서 자동생성, 타입정의 및 기타 부가기능이 더 강력하다.   

이렇게 특정 기능들이 뛰어나보니  Flask의 부족함을 보완 해 주다 보니 최근 들어 Flask를 사용하는 개발자들이 FastAPI로 마이그레이션 한다거나 

혹은 어쩌면 FastAPI가 Flask를 대체 하지 않을까 하는 목소리가 나오는 것이 아닐까 생각된다.  

<br>

### 결론
---------

<br>

FastAPI는 Flask와 유사하게 가볍고 쉬운 코드를 지향한다. 어쩌면 Flask보다 더 쉬운 코드를 지향할지도 모르겠다.  

사용해보니 코드의 간편성? 간결함을 따진다면 FastAPI 우세인 것은 확실한 것 같다.  

반면에 Flask는 **다양한 확장**으로 **다양한 조합**을 만들어 낼 수 있다.  FastAPI는 그런 기능적 부분에서 조금 떨어져 보인다. 

이렇게 확인해보니 서로의 강점이 확실해 보인다. 

<br>

둘의 차이점이라고 하면 WSGI를 지원하는지 혹은 ASGI를 지원하는 지라고 생각된다. 

각 상황에 따라 서버를 구현할 때 WSGI서버를 구현한다면 Flask, ASGI서버를 쓰고 싶다면 FastAPI를 사용한다면 조금 더 나은 결과를 얻지 않을까 생각된다. 

<br>

 

 참조
-----

### [이론]

1. **[KR] FastAPI의 시대. 아직도 Flask 쓰시나요?  →** https://www.jamesshore.com/v2/blog/2006/dependency-injection-demystified
2. **[KR] FLASK에서 FASTAPI로 간 이유 →** https://tech.madup.com/FastAPI/
3. **[ENG] The Ultimate Face-off: Flask vs. FastAPI →** https://developer.vonage.com/blog/21/08/10/the-ultimate-face-off-flask-vs-fastapi
4. **[KR] 파이썬 웹 API 개발, 이제 FastAPI →** http://egloos.zum.com/madchick/v/4200740
5. **[KR] FastAPI의 시대. 아직도 Flask 쓰시나요? →** https://planb.hashnode.dev/fastapi-flask
6. **[KR] Flask에서 FastAPI로 전환하기 →** https://blog.hopsoffice.com/a387f4a1-a738-425e-a3c1-13af488f5c46

<br>

-----

### [기타]

1. **[KR] DI_파이썬 애플리케이션 의존성 주입 →** https://www.humphreyahn.dev/blog/dependency-injector
2. **[ENG] 종속성_Dependency Injection Demystified →** https://www.jamesshore.com/v2/blog/2006/dependency-injection-demystified
3. **[KR] API 와 Endpoint →** https://blog.naver.com/ghdalswl77/222401162545 
4. **[KR] 백엔드 전체를 FastAPI로 개발한 숏링크 서비스** → https://app.abit.ly/
