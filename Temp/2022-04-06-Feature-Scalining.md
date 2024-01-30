---
title: Feature Scalining(engineering)
author: Jerry
date: 2022-04-06 
layout: post
---

<h5><p align="right"> {{ page.date | date_to_string }} </p></h5>

<!-- 코드 상단 :  -->
<a href="https://hits.seeyoufarm.com">
<img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 


<br>

#### 2.  ML - Feature scalining(engineering)

<br>

# Feature scalining(engineering)


<!-- Feature engineering & Feature Scaling  -->



- 서로 다른 변수의 값 범위를 일정한 수준으로 맞추는 작업

또한 기존의 특성을 사용해서 새로운 특성을 뽑아내는 작업 

<br>

대표적으로 표준화, 정규화 두가지가 존재 

<br>

## 1. Standardization(표준화)

데이터의 특징의 각 평균이 0이고 분산이 1인 가우시안 정규분포를 가진 값으로 변환한것 


<br>

```py
std_data = (data - np.mean(data, axis = 0))/ np.std(data,axis = 0)
print(std_data)
```


```py
def mean_stdscr(df_input):
    "표준 정규 분포"
    return df_input.apply(lambda x: (x-x.mean())/ x.std(), axis=0)
```

<br><br>




## 2. Normalization(정규화)

서로 다른 특성의 크기를 동일 하게 하기 위해 크기를 변환 하는 것으로 
모두 최소 0, 최대 1의 값으로 변환 하는 것 - 동일한 크기 단위로 변수 비교를 하기 위함 


머신러닝을 데이터의 특성들을 기반으로 데이터의 패턴을 찾는다. 그렇기 때문에 데이터 특성 하나하나에 예민하다.
만약 데이터가 가진 특성들이 지나치게 차이가 나는 상황이 생긴다면 데이터가 한쪽으로 편향되게 쏠리게 되어 올바르게 학습이 되질 않는다. 이럴때 데이터를 정규화 하여 학습을 진행한다. 

잊지말고 머신러닝을 할때 데이터 특성을 확인하고 정규화 여부를 꼭 확인하고 진행 해야한다. 
자, 그러면 정규화의 종류에 대해서 확인 해보도록 하자. 


<br>


### 1) Min-Max Normalization (최소-최대 정규화)


<br>

$\displaystyle{ X' = \frac{X - X_{\min}}{X_{\max} - X_{\min}} }$

<br>

**참고 코드**

```py
# 함수 형태 - 수식 구현
data_mm = (data - data.min(axis = 0)) / (data.max(axis = 0) - data.min(axis = 0))
print(data_mm)

# sklearn 내 함수 
from sklearn.preprocessing import MinMaxScaler

data_ms=MinMaxScaler().fit_transform(data)
print(data_ms)

# 함수 형태
def mean_norm(df_input):
    "정규화"
    return df_input.apply(lambda x: (x-x.min())/(x.max()-x.min()), axis=0)
```

[참고 : scikit learn](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html)


<br>

<!-- ### 2) Z-Score Normalization (Z-점수 정규화)


<br>

```py

```


<br> -->


<!-- ### Tips. 표준화와 정규화의 차이 



<br><br>


## 3. 

<br>

```py

```

<br><br> -->


<!-- 
## 4.

<br>

```py

```

<br><br>

 -->



<br>

---

<br>

## Reference <br>

- name &nbsp; : &nbsp;<https://> <br>

<br>

<!-- 코맨트 스크립트 -->
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