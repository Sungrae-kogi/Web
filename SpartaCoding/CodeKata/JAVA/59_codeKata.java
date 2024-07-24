//덧칠하기

class Solution {
    public int solution(int n, int m, int[] section) {
        int answer = 0;
        
        //첫 위치를 배열 시작점의 바로앞으로
        int curr = section[0]-1;
        
        for(int i=0; i<section.length; i++){
            //현재 위치가 칠해야 할 곳보다 크다면, 이미 칠한거니 넘김.
            if(section[i] < curr){
                continue;
            }
            curr = section[i] + m;
            answer++;
        }
        return answer;
    }
}