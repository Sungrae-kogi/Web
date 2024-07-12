//시저 암호

//문자를 특정 수만큼 밀었을때 변하는 값이라고 한다면, char로 변환 한 뒤 더하면 자동으로 다음 문자로 변환함.but, 'z' 이후의 문자로 변환시
//다시 'a'로 돌려줘야 한다는것을 잊으면 안된다.
class Solution {
    //A 65 a 97 z보다 ascii 값이 크면 더한 값에서 -26
    public String solution(String s, int n) {
        String answer = "";
        
        char[] sArr = s.toCharArray();
        
        for(int i=0; i<sArr.length; i++){
            if(sArr[i] == ' '){
                answer += sArr[i];
                continue;
            }
            if(sArr[i]>= 'a' && sArr[i]<='z'){
                if(sArr[i]+n >'z'){
                    answer += (char)(sArr[i]+n-26);
                }else{
                    answer += (char)(sArr[i]+n);
                }
            }else if(sArr[i]>='A' && sArr[i] <= 'Z'){
                if(sArr[i]+n >'Z'){
                    answer += (char)(sArr[i]+n-26);
                }else{
                    answer += (char)(sArr[i]+n);
                }
            }
        }
        
        return answer;
    }
}