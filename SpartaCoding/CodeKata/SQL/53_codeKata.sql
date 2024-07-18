//재구매가 일어난 상품과 회원 리스트 구하기

//동일한 회원이 동일한 상품을! 재구매한 데이터를 구하는것이기때문에, GROUP BY 조건이 두개가 들어간다 이 점이 중요
SELECT USER_ID, PRODUCT_ID
FROM ONLINE_SALE
GROUP BY USER_ID, PRODUCT_ID
HAVING COUNT(*) >1
ORDER BY USER_ID, PRODUCT_ID DESC;