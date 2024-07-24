//자동차 대여 기록에서 대여중 / 대여 가능 여부 구분하기

//풀지 못하고 구글링을 하여 참고했다,문제 이해를 또 잘못함 풀이 방법이 여러가지이므로 따로 정리.

//MAX와 GROUP BY를 이용한 풀이, 각 ID 별 렌탈 기록이 존재하므로 GROUP BY로 그룹화 하고 MAX를 사용하는데 MAX를 사용하는 이유가
//과거의 렌탈 기록은 필요치않기 때문에 MAX를 사용하여, 가장 최신의 기록만 가져온것.
SELECT CAR_ID, MAX(CASE 
    WHEN '2022-10-16' BETWEEN START_DATE AND END_DATE THEN '대여중'
    ELSE '대여 가능'
    END) AS AVAILABILITY
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
ORDER BY CAR_ID DESC;


//SubQuery를 사용한 풀이, 서브쿼리를 사용하여 22년 10월 16일을 기준으로 대여중인 데이터만 가져와 대여중으로 처리하고
//그 이외에는 전부 대여 가능으로 표시하면 되기 때문에 MAX를 사용하여 최신 기록을 가져올 필요가 없었다.
SELECT CAR_ID, 
    CASE 
        WHEN CAR_ID IN 
        (
            SELECT CAR_ID
            FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
            WHERE '2022-10-16' BETWEEN START_DATE AND END_DATE
        ) THEN '대여중'
        ELSE '대여 가능'
    END AS AVAILABILITY
FROM 
    CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY 
    CAR_ID
ORDER BY 
    CAR_ID DESC;