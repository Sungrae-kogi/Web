//최대공약수 = 1~ Math.min(n,m) 중 (n%i==0 && m%i==0)을 만족하는 최대값.
//혹은, 탐색 범위가 길어진다면 Math.min(n,m) 부터 1까지 내려오면서 조건을 만족하는 첫 번째 값.
//최소공배수 = 두 수의 곱 / 최대공약수
class Solution {
    public int[] solution(int n, int m) {
        int[] answer = new int[2];
        int max = Math.max(n,m);
        int min = Math.min(n,m);
        
        int maxdiv = 1;
        for(int i=1; i<=min; i++){
            if(n%i==0 && m%i==0)
                maxdiv = i;
        }
        
        //알고리즘 공식이 아닌 따로 최소공배수를 구하는 방식.
        int minmul = max;
        int count=1;
        while(true){
            //최소공배수값(두 수중 큰값의 배수)이 작은값으로 나뉘어떨어지면 stop.
            if(minmul % min==0){
                break;
            }
            minmul = minmul*(count+1);
        }
        
        //알고리즘공식을 이용한 최소공배수.
        answer[0] = maxdiv;
        answer[1] = n*m/maxdiv;
        
        return answer;
    }
}