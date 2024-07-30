//문자열 나누기

class Solution {
    public int solution(String s) {
        int answer = 0;
        
        char[] s_arr = s.toCharArray();
        // 첫글자x의 idx인 start와 start와 같은문자가 나오면 늘려줄 x_count, 다른문자가 나오면 늘려줄 notx_count
        int start = 0;
        int x_count = 0;
        int notx_count =0;
        for(int i=0; i<s_arr.length; i++){
            //맨 앞에 배치한 이유는. Index오류 방지로, 한 사이클 돌고나서 다음 루프부터 판별하라
            //라는 의미, 두 카운트가 같되, 둘이 0이 아니라면 자신의 뒤에 분리한 문자열이 있으므로
            //answer++, 그리고 현재 위치한 i값이 맨 첫글자이므로 start 값에 할당.
            if(x_count == notx_count && x_count != 0 && notx_count != 0){
                answer++;
                start = i;
            }
            
            if(s_arr[start] == s_arr[i]){
                x_count++;
            }else{
                notx_count++;
            }
                
        }
        //자신의 뒤에 분리한 문자열이 존재하고, 자기자신 또한 앞에 존재하는것을 
        //확인한 상태이므로 카운트를 한개 더 늘려줘야 정답이된다.
        answer++;
        
        return answer;
    }
}


//다른 사람의 풀이, 나는 풀이가 되게 자잘한 변수도 많고 조잡하게 풀어 잘못된거 같다고 느꼈지만, 다른사람의 풀이 역시도 마찬가지의 구조였다.
//여기 코드가 내가 생각한 풀이와 비슷한 느낌이라 가져왔지만 나와는 다른 생각인 부분이 보인다.
//cntY == cntN 일때, firstChar를 0으로 초기화 시켜줬지만, 나의 경우에는 어차피 둘이 같은값이기때문에 0으로 초기화를 해서
//진행하는것과 같은값을 가진채로 진행하는 것이 같은 동작을 한다고 생각하여 초기화는 시켜주지않았고, 오히려 for문의 앞쪽에 배치하여
//index에러를 방지하고 루프를 벗어나서 answer를 추가시켜주는 동작을 수행했다.
class Solution2 {
    public int solution(String s) {
        int answer = 0;

        char firstChar = 0;
        int cntY = 0;
        int cntN = 0;

        for (char c : s.toCharArray()) {
            if (firstChar == 0) firstChar = c;
            if (c == firstChar) cntY++;
            else cntN++;
            if (cntY == cntN) {
                cntY = cntN = firstChar = 0;
                answer++;
            }
        }
        if (firstChar != 0) answer++;

        return answer;
    }
}