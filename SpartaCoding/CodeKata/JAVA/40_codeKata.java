package SpartaCoding.CodeKata.JAVA;
import java.util.*;

class Solution {
    public int solution(int n) {
        int answer = 0;
        List<Integer> num = new ArrayList<>();
        
        
        while(n>=3){
            num.add(n%3);
            n = n/3;
        }
        num.add(n);
        
        int sum =0;
        for(int i=0; i<num.size(); i++){
            int res = (int) Math.pow(3,num.size()-i-1);
            sum = sum + res*num.get(i);
        }
        
        return sum;
    }
}