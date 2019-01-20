#include <iostream>
#include <vector>
#include <stack>

using namespace std;
vector<int> prevSmaller(vector<int> &A) {
    int n = A.size();
    stack<int> s;
    vector<int> m;
    m.push_back(-1);
    s.push(4);
    // Input : A : [4, 5, 2, 10, 8]
    // Return : [-1, 4, -1, 2, 2]
    for(int i = 1; i < n; i++){
        while(!s.empty() && A[i]<s.top()){
            s.pop();
        }
        if(s.empty()){
            s.push(A[i]);
            m.push_back(-1);
        }
        else{
            m.push_back(s.top());
        }
    }
    for(int i = 0; i < 5; i++){
        cout << ":"<<m[i];
    }
    return m;
}

int main(){
    vector<int> ar;
    ar.push_back(4);
    ar.push_back(5);
    ar.push_back(2);
    ar.push_back(10);
    ar.push_back(9);
    vector<int> aasdf = prevSmaller(ar);
    cout<< endl<< aasdf.size()<< endl;
    for(int i = 0; i < aasdf.size(); i++){
        cout << aasdf[i];
    }
}

/*
vector<int> Solution::prevSmaller(vector<int> &A) {
    int n = A.size();
    stack<int> s;
    vector<int> m;
    m.push_back(-1);
    s.push(A[0]);
    // Input : A : [4, 5, 2, 10, 8]
    // Return : [-1, 4, -1, 2, 2]
    for(int i = 1; i < n; i++){
        while(!s.empty() && A[i]<=s.top()){
            s.pop();
        }
        if(s.empty()){
            s.push(A[i]);
            m.push_back(-1);
        }
        else{
            m.push_back(s.top());
            s.push(A[i]);
        }
    }
    // for(int i = 0; i < 5; i++){
    //     cout << ":"<<m[i];
    // }
    return m;
}

*/