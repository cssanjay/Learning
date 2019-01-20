#include <iostream>
using namespace std;

int maxProduct(int A[], int n) {
            // store the result that is the max we have found so far

	int r = A[0];
	int  imax = r, imin = r;
			// imax/imin stores the max/min product of
            // subarray that ends with the current number A[i]

	for(int i = 0; i < n; i++){
		// multiplied by a negative makes big number smaller, small number bigger
        // so we redefine the extremums by swapping them
                 
        if(A[i]<0)
			swap(imax, imin);
		// max/min product for the current number is either the current number itself
        // or the max/min by the previous number times the current one
                
		imax = max(A[i], imax*A[i]);
		imin = min(A[i], imin*A[i]);

cout << "IMAX::" <<imax<< " IMIN::"<<imin;//<<endl;
		// the newly computed max value is a candidate for our global result
                
		r = max(r, imax);
		cout << "r" <<r << endl; 
	}

	return r;
}

int main(){
	int A[] = {1,2,3,-1,-2,4,-2,0,1,3,-5,5};

	cout << maxProduct(A, 12);
}
