/*
1) Input: 3, 6, 9, 12
Output: 4

2) Input: 9, 4, 7, 2, 10
Output: 3(If we choose elements in positions 1, 2 and 4(0-indexed))
*/


int Solution::solve(const vector<int> &A) {
    int ans = 1, cur, lst, dif;
    int n = A.size();
    for(int i = 0; i <n - 1; i++)
        for(int j = i + 1; j<=n - 1; j++){
            cur = 2;
            lst = A[j];
            dif = A[j] - A[i];
            for(int k= j + 1; k<=n - 1; k++){
                if (A[k] == lst + dif){
                    cur++;
                    lst = A[k];
                }
                
            }
            ans = max(ans, cur);
        }
    
    return ans;
}