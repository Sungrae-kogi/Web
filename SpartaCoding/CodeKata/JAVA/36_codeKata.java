//문자열 다루기 기본

//char 타입을 다루는 방식이 String타입을 다루는 방식과 다른것을 알아야한다,
//ex) Integer.parseInt()는 char타입이 사용불가능하다, Character.isLetter()라는 해당 char 변수가 알파벳인지 여부를 반환하는 함수도 따로있고.
//아래와 같이 숫자로 이루어졌는지만 판별하면 되므로 a<'0' || a>'9'을 조건식으로 걸어 아예 숫자 이외의 char가 나오면 바로 flag를 반환하는 식으로도 가능하다.
class Solution {
    public boolean solution(String s) {
        boolean answer = true;
        char[] arr = s.toCharArray();
        
        if(arr.length != 4 && arr.length != 6){
            return false;
        }else{
            for(char a : arr){
                if(a<'0' || a>'9')
                    answer = false;
            }
        }
        return answer;
    }
}