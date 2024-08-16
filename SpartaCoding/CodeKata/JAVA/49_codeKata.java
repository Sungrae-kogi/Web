//두 개 뽑아서 더하기
import java.util.*;


//Set을 정렬하는 방법으로 Set에 데이터를 넣어 중복을 제거한 뒤, List로 바꿔 Collections.sort()로 정렬한 후 사용하는방법이 있다.
class Solution {
    public List<Integer> solution(int[] numbers) {
        Set<Integer> answer = new HashSet<>();
        
        for(int i=0; i<numbers.length-1; i++){
            for(int j=i+1; j<numbers.length; j++){
                answer.add(numbers[i]+numbers[j]);
            }
        }
        List<Integer> sorted_answer = new LinkedList(answer);
        Collections.sort(sorted_answer);
        
        
        return sorted_answer;
    }
}