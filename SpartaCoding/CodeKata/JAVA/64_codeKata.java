//체육복

import java.util.*;
class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        //정렬되어있어야지 순차적으로 비교가 가능하다.
        Arrays.sort(lost);
        Arrays.sort(reserve);
        
        for(int i=0; i<reserve.length; i++){
            for(int j=0; j<lost.length; j++){
                //본인이 잃어버린경우 본인이 해결
                if(reserve[i] == lost[j]){
                    reserve[i] = -1;
                    lost[j] = -1;
                    break;
                }
            }
        }
        
        //앞이나 뒷사람에게 빌려주는경우
        for(int i=0; i<reserve.length; i++){
            for(int j=0; j<lost.length; j++){
                //앞사람에게 빌려줌
                if(lost[j]+1 == reserve[i]){
                    reserve[i] = -1;
                    lost[j]=-1;
                    break;
                    //뒷사람에게빌려줌
                }else if(lost[j]-1 == reserve[i]){
                    reserve[i] = -1;
                    lost[j] = -1;
                    break;
                }
            }
        }
        int count = 0;
        
        for(int i=0; i<lost.length; i++){
            if(lost[i] != -1)
                count++;
        }
        
        return n-count;
    }
}