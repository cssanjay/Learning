bool Solution::hotel(vector<int> &arrive, vector<int> &depart, int K) {
    sort(arrive.begin(), arrive.end());
    sort(depart.begin(), depart.end());
    
    int room_needed = 1, result = 1;
    int i = 1, j = 0, n = arrive.size();
    
    while(i < n && j <n ){
        if(arrive[i] < depart[j]){
            room_needed++;
            i++;
            
            if(room_needed > K){
                return false;
            }
        }
        else{
            room_needed--;
            j++;
        }
        // cout << room_needed << endl;
    }
    return 1;
}
