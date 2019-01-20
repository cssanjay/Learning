#include <iostream>
using namespace std;

int main(){
	int num = 3;
    int &refNum = num;

    int *ptr = &num;
    cout << "num contains " << num << endl;
    cout << "refNum contains " << refNum << endl;

    refNum++;    // increment refNum by 1

    cout << "num contains " << num << endl;
    cout << "refNum contains " << refNum << endl;
    cout << "refNum is located at " << &refNum << " and num is located at " << &num << endl;

    cout << "ptr " << ptr << endl;
    cout << "*ptr " << ++(*ptr) << endl;
    cout << "ptr+1 " << ptr+1 << endl;
    cout << "*(ptr+1) " << *(ptr+1) << endl;
    cout << "sizeof(ptr) " << sizeof(ptr) << endl;
    cout << "sizeof(*ptr) " << sizeof(*ptr) << endl;
    cout << "sizeof(refNum) " << sizeof(refNum) << endl;
    cout << "sizeof(&refNum) " << sizeof(&refNum) << endl;
    cout << "sizeof(num) " << sizeof(num) << endl;

}