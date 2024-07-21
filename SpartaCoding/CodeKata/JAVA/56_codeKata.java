//과일 장수

//요구사항이 간단했기 때문에, 아이디어를 떠올리는것으로 해결방안이 간단히 잡혔다.
import java.util.*;

class Solution {
    public int solution(int k, int m, int[] score) {
        int answer = 0;
        //아이디어, 내림차순으로 정렬한 뒤, m개씩 포장해서 파는게 가장 가치가 크다.
        Arrays.sort(score);
        int[] desc_score = new int[score.length];
        for(int i=0; i<score.length; i++){
            desc_score[i] = score[score.length-1-i];
        }
        
        //아이디어, 어차피 내림차순이기 때문에 m개씩 골랐을때 마지막으로 포장되는 과일의 점수가
        //결국 그 박스의 가치를 결정하지않을까? 
        for(int i=m-1; i<desc_score.length; i+=m){
            answer += (desc_score[i]*m);
        }
        
        
        return answer;
    }
}
