//없어진 기록 찾기

//RIGHT JOIN 시에는 공통 컬럼을 기준으로 오른쪽 테이블의 값이 전부 출력되며, 기준값을 만족하는 왼쪽 값들을 다 가져오면서 없는 부분은 NULL로 채운다.
SELECT O.ANIMAL_ID, O.NAME
FROM ANIMAL_INS I RIGHT JOIN ANIMAL_OUTS O ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE I.ANIMAL_ID IS NULL;