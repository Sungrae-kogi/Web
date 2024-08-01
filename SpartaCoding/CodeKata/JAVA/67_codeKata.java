//둘만의 암호

class Solution {
    public String solution(String s, String skip, int index) {
        String answer = "";
        
        for(int i=0; i<s.length(); i++){
            char s_char = s.charAt(i);
            int count = 0;
            while(count < index){
                if(s_char == 'z')
                    s_char = 'a';
                else
                    s_char += 1;
                
                if(!skip.contains(String.valueOf(s_char))){
                    count++;
                }
            }
                
            answer += s_char;
        }
        
        return answer;
    }
}