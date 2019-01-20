int getInversionCount(int arr[], int n){
	int inv_count = 0;
	for(int i = 0; i < n-1; i++)
		for(int j = i+1; j < n; j++)
			if(arr[i] > arr[j])
				inv_count++;
	return inv_count;
}

// using STL
int getInvCount(int arr[], int n){
	set<int> setIC;
	setIC.insert(arr[0]);

	int inv_count = 0;
	set<int>::iterator iter;

	for(int i = 0; i < n; i++){
		setIC.insert(arr[i]);

		iter = setIC.upper_bound(arr[i]);

		inv_count += distance(iter, setIC.end());
	}

	return inv_count;
}

// getInversionofsize3

int getInv(int arr[], int n){
	int inv_count = 0;
	for(int i = 0; i< n-1; i++){
		int small = 0;
		//smaller elements on right of arr[i]
		for(int j = i+1; j < n; j++)
			if(arr[i] > arr[j])
				small++;

		int greater = 0;
		//greater elements on left of arr[i]
		for(int j = i-1; j >= 0; j--)
			if(arr[i] < arr[j])
				great++;

		inv_count += greater*small;
	}

	return inv_count;
}