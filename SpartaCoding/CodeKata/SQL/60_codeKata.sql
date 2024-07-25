//년,월,성별 별 상품 구매 회원 수 구하기

//JOIN 과정에서 중복되는 데이터가 존재할 수 있다.
SELECT YEAR(O.SALES_DATE) AS YEAR, MONTH(O.SALES_DATE) AS MONTH, U.GENDER, COUNT(DISTINCT U.USER_ID) AS USERS
FROM USER_INFO U INNER JOIN ONLINE_SALE O ON U.USER_ID = O.USER_ID
WHERE U.GENDER IS NOT NULL
GROUP BY YEAR(O.SALES_DATE), MONTH(O.SALES_DATE), U.GENDER
ORDER BY YEAR(O.SALES_DATE), MONTH(O.SALES_DATE), U.GENDER;