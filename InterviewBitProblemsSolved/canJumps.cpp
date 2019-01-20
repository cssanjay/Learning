#include <iostream>
#include <climits>
using namespace std;

int canJump(vector<int> &A) {
    
    int n=A.size();
    int dp[n];
    dp[n-1]=0;
    for(int i=n-2;i>=0;i--){
        if(i+A[i]>n-1) {
            dp[i]=n-1;
            continue;
        }
        dp[i]=i+A[i];
        for(int j=i+1;j<=i+A[i];j++)
         dp[i]=max(dp[i],dp[j]);
    }
    if(dp[0]==n-1)
     return 1;
    else return 0;
}

bool canJump(int A[], int n) {
    int minIndexPossible = n - 1;
    for (int i = n - 2; i >= 0; i--) {
        bool isPossibleFromThisIndex = false;
        if (i + A[i] >= minIndexPossible) {
            isPossibleFromThisIndex = true;
            minIndexPossible = i;
        }
        if (i == 0) return isPossibleFromThisIndex;
    }
    return true;
}
/*
int Solution::canJump(vector<int> &A) {
    if(A.size()==0 || A.size()==1){
        return 1;
    }
    int j= A.size()-1;
    int i= A.size()-2;
    while(i>=0){
        if(i+A[i]<j){
            if(i==0){
                return 0;
            }
        }else{
            j = i;
        }
        i--;
    }
    return 1;
}

int minJumps(int arr[], int l, int h) 
{ 
   // Base case: when source and destination are same 
   if (h == l) 
     return 0; 
  
   // When nothing is reachable from the given source 
   if (arr[l] == 0) 
     return INT_MAX; 
  
   // Traverse through all the points reachable from arr[l]. Recursively 
   // get the minimum number of jumps needed to reach arr[h] from these 
   // reachable points. 
   int min = INT_MAX; 
   for (int i = l+1; i <= h && i <= l + arr[l]; i++) 
   { 
       int jumps = minJumps(arr, i, h); 
       if(jumps != INT_MAX && jumps + 1 < min) 
           min = jumps + 1; 
   } 
  
   return min; 
}
*/
int main(){
    int A[] = { 10, 0, 1, 1, 0 };
    cout<< "--"<<(canJump(A));
    // cout << (minJumps(A,0,5)<2147483647)?1:0;

}