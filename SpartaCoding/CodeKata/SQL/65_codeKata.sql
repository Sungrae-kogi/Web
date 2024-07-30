//우유와 요거트가 담긴 장바구니

//나의 코드. 셀프 조인을 통해 두 조건이 공통되는 값들을 가져올 수 있다 라는 아이디어가 있다.
//중복되는 CART_ID 의 출력을 제한하기위해 GROUP BY를 사용했지만.
SELECT C.CART_ID
FROM CART_PRODUCTS C INNER JOIN CART_PRODUCTS M ON C.CART_ID = M.CART_ID
WHERE C.NAME = 'Milk' AND M.NAME = 'Yogurt'
GROUP BY C.CART_ID
ORDER BY C.CART_ID;

SELECT DISTINCT C.CART_ID //를 사용하여 CART_ID의 중복을 제거할 수도 있다, 이미 WHERE의 조건에서 요구사항은 만족한 데이터이기때문


//다른 풀이중 인상깊었던 풀이, Subquery를 사용하여 간단하고 이해하기 쉽게 작성하였다, 
//두 개의 조건을 동시에 만족하는 값을 가져오는 방법에는 되게 여러 가지가 있었고, 그중에서 이해하기 쉬운 방법으로는 셀프조인과 서브쿼리가 있다.
SELECT CART_ID
FROM CART_PRODUCTS
WHERE CART_ID IN (SELECT CART_ID FROM CART_PRODUCTS WHERE NAME = 'Milk' ) AND NAME = 'Yogurt'
ORDER BY CART_ID;