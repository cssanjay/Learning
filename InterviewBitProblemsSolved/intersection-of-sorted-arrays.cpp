#include <iostream>
#include <vector>

using namespace std;

/*
Input : 
    A : [1 2 3 3 4 5 6]
    B : [3 3 5]

Output : [3 3 5]

Input : 
    A : [1 2 3 3 4 5 6]
    B : [3 5]

Output : [3 5]
*/

// A : [ 21, 26, 43, 44, 45, 56, 58, 59, 65, 80, 80, 84, 85 ]
// B : [ 3, 4, 7, 21, 25, 27, 38, 44, 56, 58, 60, 63, 67, 71, 72, 78, 79, 86, 86, 93, 99 ]
vector<int> intersect(int *A, int *B) {

	int a = 13;//A.size();
	int b = 21;//B.size();
	int i = 0, j =0;
for(int i =0; i < 13; i++)
		cout << A[i] << " ";
	cout<< endl;
	for(int i =0; i < 21; i++)
		cout << B[i] << " ";
	vector<int> result;
	// while(A[i]!=B[j] && i<a && b<j){
	// 	if(A[i]<B[j])
	// 		i++;
	// 	else
	// 		j++;
	// }

	for(i,j; i<a, j<b;){
		if(A[i] < B[j])
			i++;
		else if(A[i] > B[j])
			j++;
		else {
			result.push_back(A[i]);
			i++;
			j++;
		}
	}
	return result;
}


int main(){
	int A[] ={ 21, 26, 43, 44, 45, 56, 58, 59, 65, 80, 80, 84, 85 };
	int B[] ={ 3, 4, 7, 21, 25, 27, 38, 44, 56, 58, 60, 63, 67, 71, 72, 78, 79, 86, 86, 93, 99 };

	vector <int> m;
	m = intersect(A,B);

	for(int i =0; i < m.size(); i++)
		cout << endl<<m[i] << " ";
	return 0;

}

/* editorial
vector<int> intersect(vector<int> &A, vector<int> &B) {
    vector<int> intersection;
    int n1 = A.size();
    int n2 = B.size();
    int i = 0, j = 0;
    while (i < n1 && j < n2) {
        if (A[i] > B[j]) {
            j++;
        } else if (B[j] > A[i]) {
            i++;
        } else {
            intersection.push_back(A[i]);
            i++;
            j++;
        }
    }
    return intersection;
}  


*/