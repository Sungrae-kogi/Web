//숫자 짝꿍
import java.util.*;

//시간초과 때문에 StringBuilder, 배열의 길이 조작이 빈번한 경우 StringBuilder 사용시 효율 증가.
class Solution {
    public String solution(String X, String Y) {
        String answer = "";
        StringBuilder sb = new StringBuilder();
        
        char[] x_arr = X.toCharArray();
        char[] y_arr = Y.toCharArray();
        int[] x_count = new int[10];
        int[] y_count = new int[10];
        
        
        //반복문으로 두 문자열에서 공통으로 나오는 숫자들을 모아서
        //내림차순으로 정렬한 뒤 합치면 그게 가장 큰 수이다.
        for(int i=0; i<x_arr.length; i++){
            x_count[x_arr[i]-'0']++;
        }
        
        for(int i=0; i<y_arr.length; i++){
            y_count[y_arr[i]-'0']++;    
        }
        
        for(int i=9; i>=0; i--){
            //count배열에서 최솟값을 넣어줌, 
            int cnt = Math.min(x_count[i],y_count[i]);
            for(int j=0; j<cnt; j++){
                sb.append(i);
            }
        }
        
        answer = sb.toString();
        if(answer.length()==0)
            return "-1";
        
        if(answer.charAt(0)=='0')
            return "0";
        
        return answer;
    }
}