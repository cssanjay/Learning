int jumpSs(vector<int> &arr, int n){
    int *jumps = new int[n];  // jumps[n-1] will hold the result 
    int i, j; 
  
    if (n == 0 || arr[0] == 0) 
        return INT_MAX; 
  
    jumps[0] = 0; 
  
    // Find the minimum number of jumps to reach arr[i] 
    // from arr[0], and assign this value to jumps[i] 
    for (i = 1; i < n; i++) 
    { 
        jumps[i] = INT_MAX; 
        for (j = 0; j < i; j++) 
        { 
            if (i <= j + arr[j] && jumps[j] != INT_MAX) 
            { 
                 jumps[i] = min(jumps[i], jumps[j] + 1); 
                 break; 
            } 
        } 
    } 
    return jumps[n-1];
}
int Solution::jumpSs(vector<int> &A) {
    if(A[0] == 0 && A.size() == 1) return 0;
    return jumpSs(A, A.size());
}


//solution 2
int jump(int A[], int n) {
    if(n <= 1){
        return 0;
    }
    int maxReachPos = A[0];
    int curMaxReachPos = A[0];
    int curStep = 1;
    for(int i = 1; i <= maxReachPos; i++){
        if(i == n - 1){
            return curStep;
        }
        curMaxReachPos = max(curMaxReachPos, i + A[i]);
        if(i == maxReachPos){
            if (curMaxReachPos <= i) return -1;
            maxReachPos = curMaxReachPos;
            curStep++;
        }
    }
    return -1;
}