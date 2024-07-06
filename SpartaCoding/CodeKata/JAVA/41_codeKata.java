//이상한 문자 만들기.

// 예전에 풀어본 적 있는 문제로, 그때는 s를 순회하며 answer에 하나씩 더하는식으로 진행했었다.
// 따라서 다른방식으로 접근해보았는데, toCharArray()를 사용하여 String 문자열을 char 배열로 변환할 수 있고.
// 변환된 char 배열을 String.valueOf()의 인자로 전달하여 String을 리턴받을 수 있다.
class Solution {
    public String solution(String s) {
        char[] answer = s.toCharArray();
        
        int idx = 0;
        for(int i=0; i<answer.length; i++){
            if(answer[i]==' '){
                idx = 0;
            }else if(idx%2==0){
                answer[i] = Character.toUpperCase(answer[i]);
                idx++;
            }else if(idx%2==1){
                answer[i] = Character.toLowerCase(answer[i]);
                idx++;
            }
        }
        
        return String.valueOf(answer);
    }
}

//과거 풀이
class Solution2 {
    public String solution(String s) {
        String answer = "";
        
        String[] arr = s.split("");
        
        int idx =0;
        for(int i=0; i<arr.length; i++){
            //char과 달리 String의 값 비교는 .equals()를 통해서, char는 스택영역에 값을 저장, String은 스택영역에 힙영역의 주소값을 저장하기때문.
            if(arr[i].equals(" ")){
                idx=1;
            }
            if(idx%2==0)
                answer += arr[i].toUpperCase();
            else
                answer += arr[i].toLowerCase();
            idx++;
            
        }
        
        return answer;
    }
}