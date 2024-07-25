//기사단원의 무기

//약수의 갯수를 구하는 알고리즘에 대해서 다시한번 상기.
class Solution {
    public int solution(int number, int limit, int power) {
        int answer = 0;
        
        //기사의 번호
        for(int i=1; i<=number; i++){
            int divisor = divisorCount(i);
            if(divisor <= limit)
                answer += divisor;
            else
                answer += power;    //리미트를 넘으면 power를 설정.
        }
        
        return answer;
    }
    //약수의 갯수 알고리즘, Math.sqrt()를 사용한 방법.
    public int divisorCount(int n){
        if(n==1)
            return 1;
        else if(n==2)
            return 2;
        else{
            int count =0;
            for(int i=1; i<(int)Math.sqrt(n)+1; i++){
                if(i*i==n)
                    count++;
                else if(n%i==0)
                    count+=2;
            }
            return count;
        }
    }
}