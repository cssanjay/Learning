#include <iostream>
#include <algorithm>
#include <vector>
// #include <pair>
using namespace std;
bool sortbysec(const pair<int,int> &a, 
              const pair<int,int> &b) 
{ 
    return (a.second < b.second); 
}

int findDistance(int x, int y){
	return x*x+y*y;
}
vector<pair<int, int> > nearest(int totalSteakHouses, int allLocations[][3], int numSteakHouses){
	vector<pair<int, int> > result;
	pair<int,int> loc;

	vector<int> distances;

	for(int i = 0; i < totalSteakHouses; i++){
		int dist = findDistance(allLocations[i][0],allLocations[i][1]);
		loc.first = i;
		loc.second = dist;
		result.push_back(loc);
	}
	sort(result.begin(), result.end(), sortbysec);

return result;

}

int main(){
	int arr[][3] = {{1,-3},{1,2},{3,4}};
	vector<pair<int, int> > m ;
	m= nearest(3,arr,3);

	for (int i=0; i<3; i++) 
    { 
        // "first" and "second" are used to access 
        // 1st and 2nd element of pair respectively 
        cout << m[i].first << " "
             << m[i].second << endl;
         
    } 
}