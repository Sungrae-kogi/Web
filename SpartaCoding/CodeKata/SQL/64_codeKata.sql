//헤비 유저가 소유한 장소

//SubQuery를 사용한 조건문, subquery의 결과가 다중행이면, column에 사용이 불가능하다는 것도 알았다.
SELECT ID, NAME, HOST_ID
FROM PLACES
WHERE HOST_ID IN (SELECT HOST_ID FROM PLACES GROUP BY HOST_ID HAVING COUNT(*) > 1)
ORDER BY ID;