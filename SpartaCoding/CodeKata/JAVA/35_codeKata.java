//부족한 금액 계산하기

class Solution {
    public long solution(int price, int money, int count) {
        long sum = 0;
        
        for(int i=1; i<=count; i++){
            sum = sum + price*i;
        }
        
        //돈이 부족하지 않으면 0을 반환, 그게아니라면 부족한 금액을 반환하는 부분을
        //if 문 하나와 if가 아닐때 else를 쓸 것없이 바로 return을 적는 방법.
        if(money >= sum){
            return 0;
        }

        return sum - money;
    }
}