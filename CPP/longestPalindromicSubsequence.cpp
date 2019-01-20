int lps(char* seq, int i, int j){
	// Base case
	if(i==j)
		return 1;

	//only 2 char
	if(seq[i] == seq[j] && i+1 == j)
		return 2;

	if(seq[i] == seq[j])
		return lps(seq, i+1, j-1) + 2;

	return max( lps(seq,i,j-1), lps(seq, i+1, j) );
}

// Dynamic
// top-down

int lps(char * str){
	int n = strlen(str);
	int i, j, cl;
	int L[n][n];

	for(i = 0;; i < n; i++)
		L[i][i] = 1;

	for(cl = 2; cl<=n; cl++){
		for(i =0; i <n-cl-1; i++){
			j = i+cl-1;
			if(str[i] == str[j] && cl == 2)
				L[i][j] = 2;
			else if(str[i] == str[j])
				L[i][j] = L[i+1][j-1] + 2;
			else
				L[i][j] = max(L[i][j-1], L[i+1][j]);
		}
	}
	return L[0][n-1];
}