//조건에 맞는 사용자와 총 거래금액 조회하기

//두 테이블이 주어질때 어떤 컬럼이 기본키인지 알려주는 경우만 보다가 키의 별칭도 다르고, 어떤 키가 기본키인지 알려주지 않아 조금 헤매었다.
//조건이 완료된 거래의 총 금액이 70만원 이상인 경우를 따져야 하므로 INNER JOIN으로 묶고, 두 가지의 조건으로 데이터를 추출한다.

//첫 번째 조건 : 판매가 완료된 상품, 컬럼값을 따지므로 WHERE 절의 조건
//두 번째 조건 : 총 거래 금액이 70만원 이상, 그룹핑된 결과에서의 추가적인 조건을 따지므로 HAVING 절을 이용한 조건.
SELECT U.USER_ID, U.NICKNAME, SUM(B.PRICE) AS TOTAL_SALES
FROM USED_GOODS_BOARD B
INNER JOIN USED_GOODS_USER U
ON B.WRITER_ID = U.USER_ID
WHERE B.STATUS = 'DONE'
GROUP BY U.USER_ID
HAVING TOTAL_SALES >= 700000
ORDER BY TOTAL_SALES;