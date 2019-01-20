
// C++ code for finding the 
// maximum length of AP 
  
#include <bits/stdc++.h> 
using namespace std; 
int maxlenAP(int* a, int n, int d) 
{ 
    // key=starting element of an AP, 
    // value=length of AP 
    unordered_map<int, int> m; 
  
    // since the length of longest AP is at least 
    // one i.e. the number itself. 
    int maxt = 1; 
  
    // if element a[i]'s starting element(i.e., a[i]-i*d) 
    // is not in map then its value is 1 else there already 
    // exists a starting element of an AP of which a[i] 
    // can be a part. 
    for (int i = 0; i < n; i++) { 
        m[a[i] - i * d]++; 
    } 
  
    // auto operator stores the key, 
    // value pair type from the map. 
    for (auto& it : m) 
        if (it.second > maxt) 
  
            // calculating the length of longest AP. 
            maxt = it.second; 
  
    return maxt; 
} 
  
// Driver code 
int main() 
{ 
    int n = 10, d = 3; 
    int a[10] = { 1, 4, 2, 5, 20, 11, 56, 100, 20, 23 }; 
  
    cout << maxlenAP(a, n, d) << endl; 
  
    return 0; 
} 