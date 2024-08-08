//달리기 경주

//구현 부분을 분리하여 천천히 진행, HashMap 사용하여 순위표처럼 사용
import java.util.*;
class Solution {
    public String[] solution(String[] players, String[] callings) {
        Map<String, Integer> rank = new HashMap<>();
        
        //초기세팅
        for(int i=0; i<players.length; i++){
            rank.put(players[i], i);
        }
        
        //경주시작
        for(int i=0; i<callings.length; i++){
            //현재 부른사람의 순위
            int plrank = rank.get(callings[i]);
            
            //앞번호 순위의 이름를 검색
            String player = players[plrank-1];
            
            //순위표를 갱신
            //부른사람을 앞랭킹으로
            rank.replace(callings[i],plrank-1);
            //앞에있던사람을 뒷랭킹으로
            rank.replace(player,plrank);
            
            //리턴할 배열도 갱신
            players[plrank-1] = callings[i];
            players[plrank] = player;
        }
        
        
        return players;
    }
}