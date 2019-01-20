function cmp(a, b) { return a - b; }

function solution(A, B) {
    var n = A.length;
    var m = B.length;
    // if(n>m)
    //     swap(n,m)
    A.sort(cmp);
    B.sort(cmp);
    var i = 0;
    for (var k = 0; k < n; k++) {
        while (i < m - 1 && B[i] < A[k])
            i += 1;
        if (A[k] == B[i])
            return A[k];
    }
    return -1;
}

A=[-1,-2,3]
B=[0,1,2,3,4,5,6,7,8]

console.log(solution(A,B))