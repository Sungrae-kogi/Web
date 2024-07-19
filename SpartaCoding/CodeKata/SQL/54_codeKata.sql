//최댓값 구하기

//분명 풀었는데, 문제 유형을 보니까 SUM,MAX,MIN 에 문제 이름도 최댓값 구하기이다.
//시간이 가장 최근인 데이터 한줄만 뽑으면 되기때문에 이렇게 작성했지만, 뭔가 의도한 풀이가 아닌거같아 찾아볼필요가 있을것같다.
SELECT DATETIME AS 시간
FROM ANIMAL_INS
ORDER BY DATETIME DESC
LIMIT 1;

//다른사람의풀이중 문제 목적에 맞게 풀어낸 풀이
//MAX()는 해당 컬럼의 최대값을 반환하는데, 시간의 경우 최댓값은 가장 최근의 시간을 반환한다고 한다, 
//이렇게 하면 ORDER BY를 사용할 필요도 없고, LIMIT을 사용할 필요도 없었던 것이다.
SELECT MAX(DATETIME) AS 시간
FROM ANIMAL_INS;