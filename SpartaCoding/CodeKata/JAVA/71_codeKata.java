//개인정보 수집 유효기간

import java.util.*;
class Solution {
    public List<Integer> solution(String today, String[] terms, String[] privacies) {
        List<Integer> answer = new ArrayList<>();
        
        for(int i=0; i<privacies.length; i++){
            char type = privacies[i].charAt(privacies[i].length()-1);
            int year = Integer.parseInt(privacies[i].substring(0,4));
            int month = Integer.parseInt(privacies[i].substring(5,7));
            int day = Integer.parseInt(privacies[i].substring(8,10))-1;
            //약관 타입을 찾으면 월에다가 더하고 빠져나오라.
            for(int j=0; j<terms.length; j++){
                if(terms[j].charAt(0) == type){
                    month += Integer.parseInt(terms[j].substring(2));
                    break;
                }
            }
            if(month > 12){
                year++;
                month-=12;
            }
            if(day < 1){
                if(month == 1){
                    year -= 1;
                    month = 12;
                    day = 28;
                }
                month -=1;
                day = 28;
            }
            int total = year*12*28 + month*28 + day;
            
            int total_today = Integer.parseInt(today.substring(0,4))*12*28 + Integer.parseInt(today.substring(5,7))*28 + Integer.parseInt(today.substring(8,10));
            //만료날짜를 만든 다음에 해당 날짜를 일 수로 바꿔서 비교.
            if(total < total_today){
                answer.add(i+1);
            }
            continue;
            
        }
        
        return answer;
    }
}