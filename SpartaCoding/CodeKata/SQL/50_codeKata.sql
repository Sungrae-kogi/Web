//5월 식품들의 총매출 조회하기

//상품 ID 별 총 판매액 계산방법 중 SUM(O.AMOUNT) 부분이 약간 헷갈렸다, ID로 GROUP BY 했으므로 각 아이디들의 AMOUNT들의 누적합을 가져와야한다.
SELECT P.PRODUCT_ID, P.PRODUCT_NAME, SUM(O.AMOUNT) * P.PRICE AS TOTAL_SALES
FROM FOOD_PRODUCT P RIGHT OUTER JOIN FOOD_ORDER O ON P.PRODUCT_ID = O.PRODUCT_ID
WHERE DATE_FORMAT(O.PRODUCE_DATE, '%Y-%m') = '2022-05'
GROUP BY O.PRODUCT_ID
ORDER BY TOTAL_SALES DESC, P.PRODUCT_ID;