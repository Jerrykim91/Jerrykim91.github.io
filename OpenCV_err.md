<br>

#### 2. OpenCV 에러 코드  

<br>

# OpenCV 사용시 발생 하는 에러 코드 및 솔루션 모음

<br>

## 1. Oepn Cv - grabCut 에러 

<br>

```py
# Error 내용
cv2.error: OpenCV(4.5.1) C:\Users\appveyor\AppData\Local\Temp\1\pip-req-build-i1s8y2i1\opencv\modules\imgproc\src\grabcut.cpp:557: 
error: (-5:Bad argument) image must have CV_8UC3 type 
in function 'cv::grabCut'  
```
<br>

### 주관적 원인 

**차원이 안 맞아서 생기는 에러로 판단**    
**주변 값(프레임), Input 값(프레임)의 이미지 shape을 확인 해 보는 것을 추천**

<br>


### CV_8UC3 type 란? 

<br>

`CV_8U` 와 달리 `C3`라는 값이 붙었는데 이 값은 채널(Channel)을 의미 한다. 
그렇기 때문에 3개의 채널 `RGB`로 표현 되는 데이터라고 보면 된다. 

<br>

### 여기서 잠깐 ! 

<br>

어? 그러면 `CV_8U`는 뭘까?     
`8bit`의 `unsigned`를 의미한다. 


어? 그러면 `unsigned`는? 양수 값만 표현이 가능하다.    
즉, 양수 값만 사용 할 때 부호 비트가 없을 때 사용한다. 
부호 값을 가지지 않으며 음수를 사용하지 않는 만큼 양수의 범위를 배로 늘리는 역활을 한다. 

<br>

자, 그럼  `signed`는?
부호를 가지는 값, 양수와 음수의 구별이 가능한 것을 말한다.     
`signed`에 대해서 더 궁금 하다면 [추가 설명](https://maivve.tistory.com/173) 
을 통해 자세한 부분을 확인 하기 바란다. 

<br>

`signed` 와 `unsigned`는 
자료형의 특성으로 `Commputer program` 에서 수치를 표현 해 준다고 보면 되겠다.

만약 `8bit`에서 
`signed` 는 `-128` 에서 `127`로 표현 되고 `unsigned`는 `0`에서 `255` 범위로 표현이 가능하다. 

뭐, 이 둘의 차이는 **음수를 표현하고 안하고의 차이**라고 보면 좀 더 명확하고 쉽게 이해 될 것이다. 

자, 그러니까 `CV_8U`는 `8bit`의 `0`에서 `255` 범위를 가지는 픽셀로 이루어진 1 채널 자료형이라는 것! Okey?

<br>

여기서 `CV_8U`와 `CV_8UC1`의 차이는 뭘까? 

구조만 다를 뿐 동일한 유형으로 보면 된다고 한다. 
하자만 개인적으로는 1채널을 쓸 때는 `CV_8UC1`로 명확하게 명시된 것을 쓰는 것이 좋을 것 같다. 

자세한 내용은 [여기](https://stackoverflow.com/questions/14543420/in-opencv-whats-the-difference-between-cv-8u-and-cv-8uc1)를 보면 될 것 같다. 

<br><br>

---

<br><br>

## 2. [제목](주소)

<br>

```py

```

<br><br>



## 3. 제목

<br>

```py

```

<br><br>



## 4. 제목

<br>

```py


```

<br><br>





<br>

---

<br>

## Reference <br>

<br>

- [위키 백과] Signed와 Unsigned &nbsp; : &nbsp;<https://ko.wikipedia.org/wiki/Signed%EC%99%80_unsigned> <br>
- [메이쁘] signed 와 unsigned 의 차이 간단 비교 정리! &nbsp; : &nbsp;<https://maivve.tistory.com/173> <br>
- [stackoverflow] In OpenCV, what's the difference between CV_8U and CV_8UC1? &nbsp; : &nbsp;<https://stackoverflow.com/questions/14543420/in-opencv-whats-the-difference-between-cv-8u-and-cv-8uc1> <br>

<br>
<br>

---