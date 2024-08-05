//바탕화면 정리

//좌상단, 우하단 점을 기준으로 드래그를 하면 최소 길이를 이동한다는 점을 문제를 읽고 파악하여
//두 좌표를 구하는 방식에 대해 생각해 보았고 2중 for문으로 #을 탐색할 경우마다 네 좌표에 대한 계산을 해주면 정답.
class Solution {
    public int[] solution(String[] wallpaper) {
        int[] answer = new int[4];
        int x_min = wallpaper.length;
        int x_max = 0;
        int y_min = wallpaper[0].length();
        int y_max = 0;
        for(int i=0; i<wallpaper.length; i++){
            //가장 작은 x행 값과 큰 x행값
            for(int j=0; j<wallpaper[i].length(); j++){
                //가장 작은 y행 값, 큰 y행값도 찾아야함.
                if(wallpaper[i].charAt(j) == '#'){
                    x_min = Math.min(x_min,i);  //O
                    x_max = Math.max(x_max, i+1);   //O
                    y_min = Math.min(y_min,j);
                    y_max = Math.max(y_max,j+1);    //O
                }
            }
            
        }
        answer[0] = x_min;
        answer[1] = y_min;
        answer[2] = x_max;
        answer[3] = y_max;
        return answer;
    }
}