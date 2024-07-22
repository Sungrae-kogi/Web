//모의고사

//배열의 범위를 초과할 경우 다시 배열의 idx=0으로 바꿔주는 작업은 idx % 배열.length로 가능하다.
import java.util.*;

class Solution {
    public List<Integer> solution(int[] answers) {
        List<Integer> answer = new ArrayList<>();
        int[] first = {1,2,3,4,5};
        int[] second = {2,1,2,3,2,4,2,5};
        int[] third = {3,3,1,1,2,2,4,4,5,5,};
        
        int first_score = 0;
        int second_score = 0;
        int third_score = 0;
        for(int i=0; i<answers.length; i++){
            if(answers[i] == first[i % first.length]){
                first_score++;
            }
            if(answers[i] == second[i % second.length]){
                second_score++;
            }
            if(answers[i] == third[i % third.length]){
                third_score++;
            }

        }
        //세 명 중 최대값
        int max = Math.max(first_score,Math.max(second_score, third_score));
        //세 명 다 같은값일 수 있으므로, 세 명 다 Max와 비교
        if(first_score == max)
            answer.add(1);
        if(second_score == max)
            answer.add(2);
        if(third_score == max)
            answer.add(3);
        
        return answer;
    }
}