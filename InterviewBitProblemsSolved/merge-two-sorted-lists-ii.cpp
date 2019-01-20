// merge-two-sorted-lists-ii
void merge(vector<int> &A, vector<int> &B) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details

    vector<int> M;
    int i =0, j= 0;
    int a = A.size();
    int b = B.size();

    while(i<a && j<b){
    	if(A[i] < B[j])
    		M.push_back(A[i++]);
    	else
    		M.push_back(B[j++]);
    }
    while(i<a) M.push_back(A[i++]);
    while(j<b) M.push_back(B[j++]);

    A = M;
}

void merge(int A[], int m, int B[], int n) {
            int temp[m+n+2];
            int indexA = 0, indexB = 0;
            for (int i = 0; i < m+n; i++){
                if (indexB == n || (indexA < m && A[indexA] < B[indexB])) {
                    temp[i] = A[indexA];
                    indexA++;
                } else {
                    temp[i] = B[indexB];
                    indexB++;
                }
            }
            for (int i = 0; i < m+n; i++) {
                A[i] = temp[i];
            }
            return;
        }


