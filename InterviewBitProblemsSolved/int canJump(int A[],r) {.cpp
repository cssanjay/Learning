int canJump(int A[],r) {
    
    int n = r;
    int *jumps = new int[n];
    if(A[0] == 0) return 1;
    if(n==0){
        return 0;
    }
    jumps[0] = 0;
    for(int i = 0; i < n; i++){
        jumps[i] = INT_MAX;
        for(int j = 0; j<i; j++){
            if(i<=j+A[i] && jumps[j]!=INT_MAX){
                jumps[i] = min(jumps[j]+1,jumps[i]);
                break;
            }
        }
    }
    for(int i = 0; i < n; i++)
        cout << jumps[i]<<endl;

    return jumps[n-1];
}


int main(){
    int A[] = { 10, 0, 1, 1, 0 };
    cout<< "--"<<canJump(A);
}