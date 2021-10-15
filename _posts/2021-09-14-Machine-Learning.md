---
title: Machine Learning
author: jerry
date: 2021-10-13 09:10:00 +0800
category: ML
layout: post
---
<!-- 코드 상단 : 방문자 수 확인 -->
<a href="https://hits.seeyoufarm.com">
                        <img align="right" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Jerrykim91/jerrykim91.github.io"/></a> 


Ps. test 작업용입니다.

<br>

#### 01. ML - Machine Learning

<br>

# Machine Learning - ML

<br>


## 1. Normalization(정규화)

머신러닝을 데이터의 특성들을 기반으로 데이터의 패턴을 찾는다. 그렇기 때문에 데이터 특성 하나하나에 예민하다.
만약 데이터가 가진 특성들이 지나치게 차이가 나는 상황이 생긴다면 데이터가 한쪽으로 편향되게 쏠리게 되어 올바르게 학습이 되질 않는다. 이럴때 데이터를 정규화 하여 학습을 진행한다. 

잊지말고 머신러닝을 할때 데이터 특성을 확인하고 정규화 여부를 꼭 확인하고 진행 해야한다. 
자, 그러면 정규화의 종류에 대해서 확인 해보도록 하자. 

<br>

### 1) Min-Max Normalization (최소-최대 정규화)

<br>

```py

```

### 2) Z-Score Normalization (Z-점수 정규화)

<br>

```py

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



## 4. 회귀 모델 평가 지표 - `MSE`, `MAE`.. 등등

<br>

### 1) Mean Absolute Error - MAE

실제 값과 예측 값의 차이를 `절대값으로 변환해 평균화 한 것` 으로 회귀 모델의 평균 절대 오차값을 계산 한다.

그렇기 때문에 결과가 `MAE`값 만큼 평균적으로 `target 데이터`와 다르다. 

해당 함수의 첫번째 매개변수는 타겟, 두번째 매개변수는 예측값 전달된다. 

에러에 절대값을 취하기때문에 에러의 크기가 그대로 반영된다. 
에러에 따른 손실이 선형적으로 올라 갈때 적합하다. 
이상치가 많을 때 사용한다. 

<br>

![MAE](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ef87b78a9af65e308cf4aa9acf6f203efbdeded)

```py
MAE = np.mean(np.abs(y - y_pred))
```

<br>

#### `sklearn` 사용 

```py
from sklearn.metrics import mean_absolute_error

y_pred = knr.predict(y)
MAE = mean_absolute_error(y, y_pred)
print(MAE)
```
- 아, 참고로 스케일에 의존적임

<br>

### 2) Mean Squared Error - MSE

`MSE`는 실제값과 예측 값의 차이를 **제곱해 평균화**를 진행한다.    
예측 값과 실제값 차이의 면적의 합이라고 보면 될 것 같다. 

특이값이 존재하면 수치가 많이 늘어난다. 

- 타깃과 예측값을 뺀 값을 제곱한 다음 전체 셈플에 대해 평균한 값을 반환 
- 주의 할점은 오차가 적을 수록 좋지만 과대적합이 될 수 있음 

<br>

![MSE](https://wikimedia.org/api/rest_v1/media/math/render/svg/e258221518869aa1c6561bb75b99476c4734108e)

```py
MSE = np.mean((y - y_pred)**2)
print('MSE = {:.3f}'.format(MSE)) 
```
<br>

#### `sklearn` 사용 

```py
from sklearn.metrics import mean_squared_error 
MSE = mean_squared_error(y, y_pred) 
print(MSE)
```

<br>

### 3) RMSE - Root Mean Squared Error

`MSE` 값은 오류의 제곱을 하기 때문에 실제 에러 평균 보다 더 커지는 특성이 존재한다. 에러가 크면 가중치 값도 커진다. 
그렇기 때문에 MSE에 루트를 씌운 `RMSE`값을 사용한다. 
코드는 간단하다. **루트만 씌우면 된다**. 해당 MSE 식에 `np.sqrt(MSE)` 만 추가 하면 된다. 

<br>

#### `sklearn` 사용 
```py
from sklearn.metrics import mean_squared_error 
MSE = mean_squared_error(y, y_pred) 
RMSE= np.sqrt(MSE)
print(RMSE)
```

- 에러에 따른 손실이 급 상승시에 사용하면 적합  

<br>

### 4) $R^2$ Score - 결정 계수(Coefficient of Determination)

$R^2$ Score
통계학 회귀 분석에서 가장 자주 쓰이는 회귀 평가 지표로 실제 값의 분산 대비 예측 값의 분산의 비율을 나타냄    
`1`에 가까울수록 좋은 모델, `0`에 가까울 수록 나쁨 음수 일 경우 잘못 평가 되었음을 의미 



<br>

![residual sum of squares](https://wikimedia.org/api/rest_v1/media/math/render/svg/2669c9340581d55b274d3b8ea67a7deb2225510b)

```py 
res = sum((y - y_pred)**2)
print('res = {:.3f}'.format(res))
```

<br>

![total sum of squares](https://wikimedia.org/api/rest_v1/media/math/render/svg/3a1f55d7e84c24299917fb3fec4d0439b81e728d)

```py 
tot = sum(mean(y - y)**2)
print('tot = {:.3f}'.format(tot))
```
<br>

![coefficient of determination](https://wikimedia.org/api/rest_v1/media/math/render/svg/c7e3ab84636f38c257641f85f009bcb422c73151)


```py 
R2 = 1 - ((y - y_pred)**2).sum()/((y - y.mean())**2).sum()
print('R2 = {:.3f}'.format(R2))
```
<br>

#### `sklearn` 사용 

```py
from sklearn.metrics import r2_score
R2 = r2_score(y, y_pred)
print('R2 = {:.3f}'.format(R2))
```

<br>

---

`An article published in the PeerJ Computer Science journal in 2021 states that the coefficient of determination can be more truthful than SMAPE, MAE, MAPE, MSE, and RMSE in regression analysis evaluation.[7] - 위키백과 발췌`

---

2021년 `PeerJ Computer Science` 저널에서 발표한 바에 따르면 회귀 분석 평가에서 `SMAPE, MAE, MAPE, MSE, RMSE` 보다 결정 계수가 더 신뢰 할 수 있다고 함. 

<br><br>




## 5. Overfitting - 과대적합

훈련 데이터 세트가 검증 데이터 세트 보다 성능이 좋을 때 혹은 과도하게 좋을 때 과대적합 되었다고 말한다. 

이 말은 모델은 어떤 새로운 데이터가 들어와도 잘 분류하거나 예측 해야하는데 모델 학습 시 올바르게 패턴과 특징을 학습하지 못했을 때 발생한다.   

이럴때는 데이터의 질은 올바른지 이 데이터가 가진 특징이 단조롭지 않은지를 파악해 데이터를 조정하거나 재선별하여 학습을 진행 해야한다. 

<br>

쉽게 말하자면 기출 문제만 풀고 시험치는 것과 같은 상태이다.


<br><br>




## 6. Underfitting - 과소적합 


훈련 데이터와 검증 데이터 모두에서 낮은 성능이 나올 때 과소적합 되었다고 말한다.

훈련 세트 성능보다 테스트 세트 성능이 높으면 상황에 따라 과소적합 혹은 과대 적합으로 판단 할 수 있다. 


훈련, 검증 데이터 세트에서 패턴과 특징들을 잘 추출 했지만 학습 시킬수 있는 데이터가 부족해 모델을 충분히 학습시킬 수 없을 때 발생한다. 

모델이 충분히 복잡하지 않거나 훈련 데이터의 패턴을 모두 잡아 내지 못할때 나타난다. 

<br>

이를 해결하기 위해서는 **모델의 복잡도**를 높이거나 **가중치의 규제**를 완화 해야한다.



<br><br>



## 7. Regularization - 규제

머신러닝 모델이 훈련 세트를 너무 과도 하게 학습 하지 못하도록(과적합 되지 않도록) 훼방(제약)하는 것을 말함

- 선형 회귀 모델의 경우 특성에 곱해지는 계수의 크기를 작게 만드는 일 

- 데이터 확인 -> 계수 값의 크기 차이가 크다면 -> 정규화 


<br>

### **선형 회귀에 규제를 추가한 모델**

<br>

### 1) Ridge - 랏지 회귀 

선형 계수를 작게 만들어서 과대적합을 완화, 비교적 효과가 좋음

```py
from sklearn.linear_model import Ridge
ridge = Ridge()
ridge.fit(x, y)
print(ridge.score(x, y))
```

릿지와 라쏘 모델 사용할대 규제의 양을 임의로 조절 가능 

`alpha`는 하이퍼 파라미터 값으로 사용자가 지정 해야하는 변수로 규제 계수라고 하는 이 매개 변수를 이용해 규제의 강도를 조절 할 것  

`alpha`의 값의 크면 규제 강도가 세지므로 계수의 값을 줄이고 조금 더 과소적합이 되도록 유도 
`alpha`의 값이 적으면 계수를 줄이는 역활이 줄어 들고 선형 회귀 모델과 유사 - 과대 적합이 될 가능성이 큼 

<br>

### 2) 적절한 랏지 `alpha` 찾기 

`alpha`에 대한 $R^2$ 값의 그래프를 그려 보면 훈련, 테스트 각각의 값이 가장 가까운 지점이 최적의 `alpha` 값.

<br>

```py
import matplotlib.pyplot as plt
from sklearn.linear_model import Ridge

train  = []
target = []

# 0.001 에서 100까지 10배씩 늘려가면서 회귀 모델을 훈련한 다음 각 점수를 저장 
alpha = [0.001, 0.01, 0.1, 1, 10, 100]

for a in alpha:
    ridge = Ridge(alpha=a)
    ridge.fit(x, y)
    train.append(ridge.score(x,y))    # 학습 데이터 
    target.append(ridge.score(x_,y_)) # 검증 데이터 

plt.plot(np.log10(alpha), train)  # 0.001 -> -3 , 0.01 -> -2  0.1 -> -1 
plt.plot(np.log10(alpha), target)

plt.xlabel('Alpha')
plt.ylabel('R2-Score')
# 두 그래프가 가장 근접한 위치의 값을 채택
```

<br>

### 3) Lasso - 라쏘 회귀(Least Absolute Shrinkage and Selection Operator)

불필요한 계수를 줄이고 0으로 만들어 제거 -> 유용한 특성을 골라내는 용도로 사용가능 함 

최적의 모델을 찾기 위해 좌표축을 따라 최적화를 수행하는 좌표 하강법을 사용 

```py
from sklearn.linear_model import Lasso
lasso = Lasso()
lasso.fit(x,y)
print(lasso.score(x,y))
```

<br>

### 4) 적절한 라쏘 `alpha` 찾기 

```py
import matplotlib.pyplot as plt
from sklearn.linear_model import Lasso

train  = []
target = []

alpha = [0.001, 0.01, 0.1, 1, 10, 100]

for a in alpha:
    lasso = Lasso(alpha=a)
    lasso.fit(x, y)
    train.append(lasso.score(x,y))    # 학습 데이터 
    target.append(lasso.score(x_,y_)) # 검증 데이터 

plt.plot(np.log10(alpha), train)  # 0.001 -> -3 , 0.01 -> -2 , 0.1 -> -1 , 1 -> 10
plt.plot(np.log10(alpha), target)

plt.xlabel('Alpha')
plt.ylabel('R2-Score')
```

<br>

### ?) ElasticNet

ElasticNet 모델은 릿지와 라쏘를 동시에 충족하는 제약 조건을 가지는 모델


```py

```

<br><br>






## 3. Pipeline - 파이프 라인 


파이프라인은 여러 변환 단계를 정확한 순서대로 실행할 수 있도록 하는 것
`sklearn.pipeline`

<br>

```py

```

<br><br>


## 0. 

내용

<br>

```py

```

<br><br>




## ?. 차원 축소

차원의 저주를 피하기 위해 알고리즘을 적용하기 전에 차원 축소를 진행한다. 
주로 고차원의 데이터(10이상)에서 진행 된다.

기본적으로 특징 추출과 차원 축소는 전처리 과정에서 대부분 이루어진다. 
    - 주성분 분석(PCA), 선형 판별 분석(LDA), 정준 상관 분석(CCA)

그 후 k-NN 알고리즘을 사용해 축소된 차원 공간에서 군집화를 진행하며 기계 학습에서 이 과정을 저차원 매장이라고 함


<br>

```py

```

<br><br>




## scikit-learn algorithm cheat-sheet

![scikit-learn algorithm cheat-sheet](https://scikit-learn.org/stable/_static/ml_map.png)




<br>

---

<br>

## Reference <br>

- wikipedia- knn :<https://ko.wikipedia.org/wiki/K-%EC%B5%9C%EA%B7%BC%EC%A0%91_%EC%9D%B4%EC%9B%83_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98> <br>
- wikipedia - Mean_squared_error :<https://en.wikipedia.org/wiki/Mean_squared_error>
- mizykk &nbsp; : &nbsp;<https://mizykk.tistory.com/102>
- 테디 노트 &nbsp; : &nbsp;<https://teddylee777.github.io/scikit-learn/scikit-learn-linear-with-regularizations>
- scikit-learn - algorithm cheat-sheet &nbsp; : &nbsp;<https://scikit-learn.org/stable/_static/ml_map.png>

<br><br>


<!-- 코드라인 -->
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