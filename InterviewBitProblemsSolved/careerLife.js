A = [1, 3, 6, 4, 1, 2]

console.log(A.length)

A.sort();

// let i = 0;

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort();
    i = 1;
    if(A[A.length-1]<1)
        return 1;
    else{
        for(i = 0; i<A.length; i++){
            while(A[i]==A[i+1])
                i+=1;
            if(A[i]!=A[i+1]-1){
                return A[i]+1;
            }
        }
    }
}

console.log('a',solution(A))