int Solution::maxSubArray(const vector<int> &a) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    int currsum = 0, maxsum = INT_MIN;
    for(int i = 0; i< a.size(); i++){
        currsum += a[i];
        if(currsum > maxsum)
            maxsum = currsum;
        if(currsum < 0)
            currsum = 0;
    }
    return maxsum;
}

int Solution::maxSubArray(const vector<int> &a){
    int currsum = 0, maxsum = INT_MIN;

    for(int i = 0; i < a.size(); i++){
        currsum += a[i];
        if(currsum > maxsum)
            maxsum = currsum;
        if(currsum < 0)
            currsum = 0;
    }
    return maxsum;
}