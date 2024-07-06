//조건에 맞는 도서 리스트 출력하기

//Oracle만 사용해왔기 때문에, TO_CHAR() 함수를 사용한 날짜 처리를 하려했으나, 먹히지 않아 찾아보니 MySQL에서는 DATE_FORMAT() 이라는 것을
//사용한다고 한다, 이거뿐만이 아니라, %Y %M %D %y %m %d 가 서로 같은게 아니라 다른 의미로 작동한다는 것을 실행테스트하면서 알게되었으므로, 따로 TIL에 정리를하겠다.
SELECT BOOK_ID, DATE_FORMAT(PUBLISHED_DATE, "%Y-%m-%d") AS PUBLISHED_DATE
FROM BOOK
WHERE DATE_FORMAT(PUBLISHED_DATE,"%Y") = '2021' AND CATEGORY = '인문'
ORDER BY PUBLISHED_DATE;