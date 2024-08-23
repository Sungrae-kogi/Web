//문자열 내 마음대로 정렬하기

//객체의 정렬 기준을 설정할때는 사용자 지정방식으로
//Comparator interface의 compare 메소드를 재정의 하여 사용할 수 있다. Comparator의 compare는 매개변수를 두 개를 받아 둘을 비교하는 방식.
import java.util.Arrays;
import java.util.Comparator;
class Solution {
    public String[] solution(String[] strings, int n) {
        Arrays.sort(strings, new Comparator<String>(){
            
            @Override
            public int compare(String s1, String s2){
                if(s1.charAt(n) < s2.charAt(n)){
                    return -1;
                }else if(s1.charAt(n) == s2.charAt(n)){
                    return s1.compareTo(s2);
                }else if(s1.charAt(n) > s2.charAt(n)){
                    return 1;
                }else{
                    return 0;
                }
            }
        });
        return strings;
    }
}