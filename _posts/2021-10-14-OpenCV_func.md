---
title: OpenCV function
author: Jerry # 작성자 
date: 2021-10-14 13:00:00 +0800 # 날짜
category: OpenCV #OpenCV
layout: post
---
<h5><p align="right"> {{ page.date | date_to_string }} </p></h5>
<!-- 코드 상단 :  -->
<a href="https://hits.seeyoufarm.com">
<img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 

<br>


#### 0. Open CV function - 자주 쓰는 함수 

<br>



## 1. 마우스를 이용한 크롭 



```py
def onMouse(event, x, y, flags, param):
    """
    리사이즈 추가 예정 
    """
    global is_dragg, x1, y1, img
    if event == cv2.EVENT_LBUTTONDOWN:
        is_dragg = True
        x1 = x
        y1 = y
    elif event == cv2.EVENT_MOUSEMOVE:
        if is_dragg:
            img_draw = img.copy()
            cv2.rectangle(img_draw, (x1, y1), (x, y), blue, 2)
            cv2.imshow('img', img_draw)
    elif event == cv2.EVENT_LBUTTONUP:
        if is_dragg:
            is_dragg = False
            w = x - x1
            h = y - y1
            if w > 0 and h > 0:
                img_draw = img.copy()
                cv2.rectangle(img_draw, (x1, y1), (x, y), red, 2)
                cv2.imshow('img', img_draw)
                roi = img[y1:y1+h, x1:x1+w]
                print('이대로:',y1,y1+h,x1,x1+w,f'[{y1}:{y1+h},{x1}:{x1+w}]') #[이:대,로:-]
                print('채널수:',roi.shape[-1])
                print('크기:',roi.shape[:-1])
                cv2.imshow('cropped', roi)
                cv2.moveWindow('cropped', 0, 0)
                cv2.imwrite('./cropped.png', roi)
            else:
                cv2.imshow('img', img)

import cv2
is_dragg = False
x1, y1, w, h = -1, -1, -1, -1
blue, red = (255, 0, 0), (0, 0, 255)
                
img = cv2.imread(os.path.join(img_dir, img_list[0]))
cv2.imshow('img', img)
cv2.setMouseCallback('img', onMouse)
cv2.waitKey()
cv2.destroyAllWindows()
```

<br><br>




## 2.

<br>

```py

```

<br><br>



## 3.

<br>

```py

```

<br><br>



## 4.

<br>

```py

```

<br><br>





<br>

---

<br>

## Reference <br>

- 파이썬으로 만드는 OpenCV 프로젝트 &nbsp; : &nbsp;<http://www.yes24.com/Product/Goods/71534451?OzSrank=1> <br>
- 귀퉁이 서재 &nbsp; : &nbsp; <https://bkshin.tistory.com/entry/OpenCV-6-dd><br>
<br>
<br>

## Practice makes perfect! <br>

<!-- - [내용](주소) -->


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