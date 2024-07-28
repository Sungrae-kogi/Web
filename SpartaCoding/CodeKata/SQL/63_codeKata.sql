//자동차 평균 대여 기간 구분하기

//ROUND로 소숫점 자리 반올림, AVG로 평균, DATEDIFF()로 날짜 차이.
//주의할점이 DATEDIFF()를 하면 그냥 두 날짜의 차이를 구하지만 여기 문제의 조건에서는
//당일 대여해서 당일 반납한 것이 1일 이기때문에, DATEDIFF 결과에 +1을 해줘야 답이나온다.
SELECT CAR_ID, ROUND(AVG(DATEDIFF(END_DATE,START_DATE)+1),1) AS AVERAGE_DURATION
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
HAVING AVG(DATEDIFF(END_DATE, START_DATE)+1) >=7
ORDER BY 2 DESC, CAR_ID DESC;