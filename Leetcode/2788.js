var sumOfSquares = function(nums) {
    let sum=0

    for(let i=1;i<=nums.length;i++)
    {
        if(nums.length%i==0){
            sum+=nums[i-1]*nums[i-1]
        }
        
    }
    return sum
    
};