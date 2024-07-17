//콜라 문제
//a 개의 빈 병을 가져가면 b 개의 콜라를 준다.

//남은 병의 갯수 n이 교환 가능한 갯수인 a 보다 작으면 루프가 종료.
//교환 받는 콜라의 갯수는 (n/a)*b개
//남은 콜라의 갯수는 교환받은 콜라의 갯수 + 교환하고 남았던 콜라의갯수
class Solution {
    public int solution(int a, int b, int n) {
        int answer = 0;
        
        while(true){
            if(n < a){
                break;
            }
            
            answer += (n/a)*b;
            n = (n/a)*b + n%a;
        }
        return answer;
    }
}