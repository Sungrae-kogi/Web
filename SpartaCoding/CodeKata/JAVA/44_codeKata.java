//최소직사각형

//회전시켜서라도 명함을 지갑에 넣을 수 있으면 되므로, 가로,세로 중 가장 큰값을 첫 번째 값으로 정렬시킨다음 
//가로,세로의 Max값을 찾으면 그게 정답.
class Solution {
    public int solution(int[][] sizes) {
        int answer = 0;
        
        int max_x = -1;
        int max_y = -1;
        
        for(int[] size : sizes){
            if(size[0] < size[1])
                change(size);
            
            //배열 첫번째, 두번째값들 끼리 중 최대값을 탐색.
            max_x = Math.max(max_x,size[0]);
            max_y = Math.max(max_y,size[1]);
        }
        
        return max_x*max_y;
    }
    
    public void change(int[] size){
        int temp = 0;
        temp = size[0];
        size[0] = size[1];
        size[1] = temp;
    }
}