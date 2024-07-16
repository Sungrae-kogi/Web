//가장 가까운 같은 글자

//
class Solution {
    public int[] solution(String s) {
        int[] answer = new int[s.length()];
        answer[0] = -1;
        
        char[] s_arr = s.toCharArray();
        
        for(int i=1; i<s.length(); i++){
            int before_idx = -1;
            for(int j=0; j<i; j++){
                if(s_arr[i] == s_arr[j])
                    before_idx = j;
            }
            if(before_idx != -1){
                answer[i] = i - before_idx;
            }else{
                answer[i] = before_idx;
            }
            
        }
        
        
        return answer;
    }
}