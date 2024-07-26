//로또의 최고 순위와 최저 순위

import java.util.*;

//HashMap을 배운김에 사용해보았음, put을 사용해서 데이터를 입력, get(key)를 사용하여 데이터를 불러옴
class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = new int[2];
        Map<Integer,Integer> rank = new HashMap<>();
        rank.put(6,1);
        rank.put(5,2);
        rank.put(4,3);
        rank.put(3,4);
        rank.put(2,5);
        rank.put(1,6);
        rank.put(0,6);
        
        int count = 0;
        int zero_count = 0;
        
        //탐색범위가 한정적이기 때문에 2중 for문으로 로또 번호와, 0의 갯수를 체크
        for(int i=0; i<lottos.length; i++){
            for(int j=0; j<win_nums.length; j++){
                if(lottos[i] == win_nums[j]){
                    count++;
                    break;
                }else if(lottos[i] ==0){
                    zero_count++;
                    break;
                }
            }
        }
        
        //HashMap은 get메소드로 value를 가져옴, 최고순위 = count+zero_count 최저순위 = count
        answer[0] = rank.get(count+zero_count);
        answer[1] = rank.get(count);
        
        return answer;
    }
}