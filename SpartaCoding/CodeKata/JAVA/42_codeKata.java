//삼총사

//표본 배열이 주어질때 임의의 세 가지 수를 골라 더한 값이 0인 경우의 수를 출력.
//3중for문을 돌리며 모든 case를 탐색하는 것으로 풀이, 이때 for문의 범위 설정에 주의가 필요했다.
class Solution {
    public int solution(int[] number) {
        int answer = 0;
        
        for(int i=0; i< number.length-2; i++){
            for(int j=i+1; j<number.length-1; j++){
                for(int k=j+1; k<number.length; k++){
                    if(number[i] + number[j] + number[k] == 0)
                        answer++;
                }
            }
        }
        
        return answer;
    }
}