//푸드 파이트 대회

//repeat 함수로 반복 가능 String 타입에 char 더하기 할시 String타입 자동변환
class Solution {
    public String solution(int[] food) {
        String answer = "";
        for(int i=1; i<food.length; i++){
            if(food[i]==1)
                continue;
            answer += (""+i).repeat(food[i]/2);
        }
        //물 기준 오른쪽 선수가 먹을 음식은 역순배치임
        String right = "";
        for(int i=answer.length()-1; i>=0; i--){
            right += answer.charAt(i);
        }
        return answer + "0" + right;
    }
}