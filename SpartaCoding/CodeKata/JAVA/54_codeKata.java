//2016년

//내장함수, 라이브러리 사용하지 않은 방법
class Solution {
    public String solution(int a, int b) {
        String answer = "";
        String[] weekstr = {"FRI","SAT","SUN","MON","TUE","WED","THU"};
        int[] dayOfMonth = {31, 29, 31,30,31,30,31,31,30,31,30,31};
        
        int dayAfterStart = 0;
        //a-1월까지의 일수를 더해준다.
        for(int i=0; i<a-1; i++){
            dayAfterStart += dayOfMonth[i];
        }
        
        //b일을 더하고 1일을빼줌. 1월1일부터 시작했으므로
        dayAfterStart += b;
        dayAfterStart--;
        
        return weekstr[dayAfterStart%7];
    }
}
