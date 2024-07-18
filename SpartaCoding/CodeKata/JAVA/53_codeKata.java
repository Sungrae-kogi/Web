//명예의 전당(1)
import java.util.*;
//k 가 score의 길이보다 크면 에러.

class Solution {
    public int[] solution(int k, int[] score) {
        int[] answer = new int[score.length];
        int[] rank = new int[k];
        for(int i=0; i<k; i++){
            rank[i] = 2001;
        }
        if(k <= score.length){
            for(int i=0; i<k; i++){
                rank[i] = score[i];
                Arrays.sort(rank);
                answer[i] = rank[0];
            }
            
            for(int i=k; i<score.length; i++){
                //더 큰값이 오면 rank[0]를 바꿔주고 다시 정렬한뒤 answer[i]에 rank[0]를
                if(score[i] > rank[0]){
                    rank[0] = score[i];
                    Arrays.sort(rank);
                    answer[i] = rank[0];
                }else{
                    //그게아니면 정렬할필요도없이 그냥 rank[0]값을 answer[i]에
                    answer[i] = rank[0];
                }
            }
            
        }else{  //k > score.length
            for(int i=0; i<score.length; i++){
                rank[i] = score[i];
                Arrays.sort(rank);
                answer[i] = rank[0];
            }
        }
        
        return answer;
    }
}