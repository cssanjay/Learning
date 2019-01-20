#include <iostream>
using namespace std;


int pow(int x, int n, int d) {
    if(x == 0)
        return 0;
    if(n == 0)
        return 1%d;
    if(n == 1)
        return x%d > 0? x%d : x%d+d;
    long a = pow(x%d, n/2,d) %d;
    if(n%2)
        return (((a%d*a%d)%d)*x)%d;
    else return ((a%d*a%d)%d > 0)? (a%d*a%d)%d : ((a%d*a%d)%d) + d  ;
}

int main(){
/*
A : 71045970
B : 41535484
C : 64735492
*/
    // cout <<-1%20; 
    cout << (pow(-1,1,20)) << endl;
    cout << (pow(2,3,3)) <<endl;
    cout << (pow(2,12,3)) <<endl;
    cout << (pow(71045970,41535484,64735492))%64735492;

}

/*
class Solution {
    public:
        int pow(int x, int n, int p) {
            if (n == 0) return 1 % p;

            long long ans = 1, base = x;
            while (n > 0) {
                // We need (base ** n) % p. 
                // Now there are 2 cases. 
                // 1) n is even. Then we can make base = base^2 and n = n / 2.
                // 2) n is odd. So we need base * base^(n-1) 
                if (n % 2 == 1) {
                    ans = (ans * base) % p;
                    n--;
                } else {
                    base = (base * base) % p;
                    n /= 2;
                }
            }
            if (ans < 0) ans = (ans + p) % p;
            return ans;
        }
};
*/