//카드 뭉치

//하나의 배열을 순회하면서 두 개의 배열을 각각 순회 해줘야 하는문제, 두 개의 index를 사용
class Solution {
    public String solution(String[] cards1, String[] cards2, String[] goal) {
        String answer = "";
        
        int cards1_idx = 0;
        int cards2_idx = 0;
        //goal순회하면서 cards1, cards2 둘을 순회하면서 찾아지면 넘어가기
        for(int i=0; i<goal.length; i++){
            if(cards1_idx < cards1.length && goal[i].equals(cards1[cards1_idx])){
                cards1_idx++;
                continue;
            }else if(cards2_idx < cards2.length && goal[i].equals(cards2[cards2_idx])){
                cards2_idx++;
                continue;
            }else{
                return "No";
            }
        }
        
        return "Yes";
    }
}