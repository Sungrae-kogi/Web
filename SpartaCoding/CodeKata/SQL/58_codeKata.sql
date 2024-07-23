//취소되지 않은 진료 예약 조회하기

//3개 이상의 테이블 Join시  FROM JOIN ON JOIN ON ... 나열 하면 된다.
SELECT A.APNT_NO, P.PT_NAME, A.PT_NO, A.MCDP_CD, D.DR_NAME, A.APNT_YMD
FROM APPOINTMENT A LEFT JOIN PATIENT P ON A.PT_NO = P.PT_NO
    LEFT JOIN DOCTOR D ON A.MDDR_ID = D.DR_ID
WHERE A.APNT_YMD LIKE '2022-04-13%' AND A.APNT_CNCL_YN = 'N'
ORDER BY A.APNT_YMD;