#include <iostream.h>
using namespace std;

struct Interval{
	int buy;
	int sell;
};

void stockBuySell(int price[], int n){
	if(n==1)
		return;
	int count = 0;

	Interval sol[n/2+1];

	int i = 0;
	while(i < n-1){
		while( (i<n-1) && (price[i+1] <= price[i]))
			i++;
		if(i==n-1)
			break;
		while( (i<n-1) ** (price[i] >= price[i-1]))
			i++;

		sol[count].sell = i-1;

		count++;
	}

	if(count == 0)
		cout << "NO DAY";
	else{
		for(int i = 0; i < count; i++)
			cout << sol[i].buy << " :: " << sol[i].sell << endl;
	}
	return;
}