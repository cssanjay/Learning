#include <iostream>
using namespace std;
int lis(int arr[], int n){
	int *l, i, j, max = 0;
	l = new int[n];

	for(i = 0; i <n; i++)
		l[i] = 1;

	for(i = 0; i < n; i++){
		for(j = 0; j < i; j++){
			if(arr[i] > arr[j] && l[i] < l[j] +1)
				l[i] = l[j]+1;
		}
	}

	for(i = 0; i < n; i++)
		if(max < l[i]) max = l[i];
	return max;
	delete [] l;
}

int main() 
{ 
    int arr[] = { 10, 22, 9, 33, 21, 50, 41, 60 }; 
    int n = sizeof(arr)/sizeof(arr[0]); 
    cout <<"Length of lis is %dn" <<lis( arr, n ) ; 
    return 0; 
} 