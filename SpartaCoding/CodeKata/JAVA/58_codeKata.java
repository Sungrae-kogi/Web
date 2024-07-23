//소수 만들기

//소수 판별 함수에서, 소수 판별시 탐색 범위는 자기 자신의 제곱근을 기준으로 이후에는 대칭으로 인해 같은부분을 판단하므로 제외하여 효율을높임
class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        int sum;
        for(int i=0; i<nums.length-2; i++){
            sum = 0;
            for(int j=i+1; j<nums.length-1; j++){
                for(int k=j+1; k<nums.length; k++){
                    
                    sum = nums[i] + nums[j] + nums[k];
                    if(isPrimeNumber(sum))
                        answer++;
                }
            }
        }

        return answer;
    }
    
    //call by value
    private boolean isPrimeNumber(int number){
        for(int i=2; i<Math.sqrt(number)+1; i++){
            //나누어떨어지는게 있으면 소수가 아니므로 바로 false
            if(number%i ==0)
                return false;
        }
        //루프 다도는데 성공하면 소수
        return true;
    }
}