//크기가 작은 부분 문자열

//Integer.parseInt()로 변환하면 Overflow가 발생하는 경우가 있어서. Long.parseLong()으로 변환해야했다.
//뭐 굳이 이런 경우를 푸는입장에서 생각해야하는지 모르겠다.
class Solution {
    public int solution(String t, String p) {
        int answer = 0;
        
        //부분문자열 중 조건을 만족하는 경우를 count해야 하므로 모든 경우를 따져봐야함.
        int p_len = p.length();
        for(int i=0; i<=t.length()-p_len; i++){
            if(Long.parseLong(t.substring(i,i+p_len)) <= Long.parseLong(p))
                answer++;
        }
        
        return answer;
    }
}