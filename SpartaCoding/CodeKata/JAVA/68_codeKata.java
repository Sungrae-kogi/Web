//햄버거 만들기

import java.util.*;

class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        
        List<Integer> arr = new ArrayList<>();
        for(int i=0; i<ingredient.length; i++){
            arr.add(ingredient[i]);
            //저장한게 4개 이상이되면 판단을 해봄. 1231인지
            if(arr.size()>=4){
                if(arr.get(arr.size()-4) == 1 && arr.get(arr.size()-3) ==2 && arr.get(arr.size()-2) == 3 && arr.get(arr.size()-1) == 1){
                    answer++;
                    for(int j=0; j<4; j++){
                        //마지막꺼를 4번 지워줌
                        arr.remove(arr.size()-1);
                    }
                }
            }
        }
        
        return answer;
    }
}