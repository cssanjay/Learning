/*int Solution::minDistance(string A, string B) {
    int m = A.length();
    int n = B.length();
    
    if(m==0) return 0;
    if(n==0) return 0;
    
    if(A[m-1] == B[n-1])
        return minDistance(A.substr(0, A.length()-1),B.substr(0, B.length()-1));
    
    return ! + min(minDistance(A,B.substr(0, B.length()-1)),
                min(minDistance(A.substr(0, A.length()-1),B),
                    minDistance(A.substr(0, A.length()-1),B.substr(0, B.length()-1))
                )
                );
}
*/
int editDistance(string A, string B, int m, int n){
    int dp[m+1][n+1];
    
    for(int i = 0; i <= m; i++){
        for(int j =0; j<=n; j++){
            if(i==0){
                dp[i][j] = j;
            }
            else if(j==0){
                dp[i][j] = i;
            }
            else if(A[i-1] == B[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }
            else{
                dp[i][j] = 1+min(dp[i][j-1], min(dp[i-1][j], dp[i-1][j-1]));
            }
        }
    }
    return dp[m][n];
}
int Solution::minDistance(string A, string B) {
    return editDistance(A,B, A.length(), B.length());
}
