//서울에 위치한 식당 목록 출력하기

//식당의 평균 리뷰점수를 구하라 -> 식당 ID를 GROUP BY 해서 식당 ID별로 집계되도록 하고 거기서 SUM()과 COUNT(*)로 평균을 계산.
//서울에 위치한이라는 말을 간과하여 계속 오답이 났고, HAVING ADDRESS LIKE '서울%'을 사용하여 조건을 만족시켜 해결했듯이 문제조건에 대한 파악도 중요.
SELECT I.REST_ID, I.REST_NAME, I.FOOD_TYPE, I.FAVORITES, I.ADDRESS, ROUND(SUM(R.REVIEW_SCORE)/COUNT(*),2) AS SCORE
FROM REST_INFO I INNER JOIN REST_REVIEW R ON I.REST_ID = R.REST_ID
GROUP BY I.REST_ID
HAVING ADDRESS LIKE '서울%'
ORDER BY SCORE DESC, I.FAVORITES DESC;