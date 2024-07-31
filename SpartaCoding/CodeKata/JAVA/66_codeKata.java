//대충 만든 자판

class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        
        for(int i=0; i<targets.length; i++){
            int count = 0;
            for(int j=0; j<targets[i].length(); j++){
                String alpha =""+targets[i].charAt(j);
                
                //문자열은 indexOf로 찾으면 가장 먼저나오는 인덱스값이 반환, 없으면 -1
                int keymap_idx = 102;
                for(int k=0; k<keymap.length; k++){
                    if(keymap[k].indexOf(alpha) != -1){
                        //keymap문자열 중 최솟값을 담음.
                        //alpha가 나오는 가장 첫 idx를 현재값과 Math.min() 비교
                        keymap_idx = Math.min(keymap_idx, keymap[k].indexOf(alpha)+1);
                    }else{
                        //keymap문자열 중 alpha가 없으면 다음 루프로넘겨버림.
                        continue;
                    }
                }
                
                if(keymap_idx != 102){
                    //count += keymap_idx;
                    answer[i] += keymap_idx;
                }else{
                    //keymap 어디에도 alpha가 없다면 -1
                    //잘못된 부분, 알파벳 하나가 아예없는거를 전부 없다고 해버리는중.
                    answer[i] = -1;
                    break;
                }
            }
            
        }
        
        return answer;
    }
}