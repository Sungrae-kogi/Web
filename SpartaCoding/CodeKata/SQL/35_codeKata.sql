//오랜 기간 보호한 동물(2)

///LEFT 조인을 하면 왼쪽의 테이블 값은 전부 출력되고 오른 쪽 테이블은 조건이 일치하는 행만 출력
SELECT I.ANIMAL_ID, I.NAME
FROM ANIMAL_INS I LEFT JOIN ANIMAL_OUTS O ON I.ANIMAL_Id = O.ANIMAL_ID
WHERE O.DATETIME IS NOT NULL
ORDER BY O.DATETIME-I.DATETIME DESC
LIMIT 2;
