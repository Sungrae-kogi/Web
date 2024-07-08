//보호소에서 중성화한 동물

//WHERE 문에서 여러 조건 중 하나를 만족하는지를 판별할 시에 IN 을 사용할 수 있다.
SELECT I.ANIMAL_ID, I.ANIMAL_TYPE, I.NAME
FROM ANIMAL_INS I
INNER JOIN ANIMAL_OUTS O
ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE I.SEX_UPON_INTAKE IN ('Intact Female', 'Intact Male') AND O.SEX_UPON_OUTCOME IN ('Spayed Female', 'Neutered Male')
ORDER BY O.ANIMAL_ID, O.ANIMAL_TYPE, O.NAME; 