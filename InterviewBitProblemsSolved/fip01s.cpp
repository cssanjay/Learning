/*
Note what is the net change in number of 1s in string S when 
we flip bits of string S. 
Say it has A 0s and B 1s. Eventually, there are B 0s and A 1s.

So, number of 1s increase by A - B. We want to choose a 
subarray which maximises this. Note, if we change 1s to -1, 
then sum of values will give us A - B. Then, we have to find a 
subarray with maximum sum, which can be done via Kadane’s 
Algorithm.
*/
vector<int> Solution::flip(string A) {
    int n=A.length();

    //build new array of 1s and -1s
    vector<int> ar(n);
    for(int i=0; i<n; i++)
        if(A[i]=='1')ar[i]=-1;
        else ar[i]=1;

    //pair storing the answer
    pair<int, int> ans=make_pair(INT_MAX, INT_MAX);

    //basic kadane's algorithm implementation
    //we also storing the begin point for best till now
    int best_till_now=0,best_ending_here=0,l=0;
    for(int i=0; i<n; i++){
        if(best_ending_here+ar[i]<0){
            l=i+1;
            best_ending_here=0;
        }
        else best_ending_here+=ar[i];
        if(best_ending_here>best_till_now){
            best_till_now=best_ending_here;
            ans.first=l;
            ans.second=i;
        }
    }

    //if no valid subarray found
    if(ans.first==INT_MAX)return vector<int>();

    //return answer
    vector<int> ret;
    ret.push_back(ans.first+1);
    ret.push_back(ans.second+1);
    return ret;
}