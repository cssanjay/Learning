#include <iostream.h>

using namespace std;

struct Word{
	char * str;
	int index;
};

struct DupArray{
	struct Word* array;
	int size;
};

struct DupArray* createDupArray(char* str[], int size){
	struct DupArray* dupArray;
	dupArray->size = size;
	dupArray->array = (struct Word*) malloc(dupArray->size * sizeof(struct Word));


	int i;
	for(i = 0; i < size; i++){
		dupArray->array[i].index = i;
		strcpy(dupArray->array[i].str, str[i])
	}
	return dupArray;
}

int compChar(const void *a, const void * b){
	return *(char*)a - *(char*)b;
}

int compStr(const void *a, const void *b){
	return strcmp(a1->str, b1->str);
}

void printAnagramsTogether(char* wordArr[], int size) 
{ 
    // Step 1: Create a copy of all words present in given wordArr. 
    // The copy will also have orignal indexes of words 
    struct DupArray* dupArray = createDupArray(wordArr, size); 
  
    // Step 2: Iterate through all words in dupArray and sort 
    // individual words. 
    int i; 
    for (i = 0; i < size; ++i) 
        qsort(dupArray->array[i].str, 
              strlen(dupArray->array[i].str), sizeof(char), compChar); 
  
    // Step 3: Now sort the array of words in dupArray 
    qsort(dupArray->array, size, sizeof(dupArray->array[0]), compStr); 
  
    // Step 4: Now all words in dupArray are together, but these 
    // words are changed. Use the index member of word struct to 
    // get the corresponding original word 
    for (i = 0; i < size; ++i) 
        printf("%s ", wordArr[dupArray->array[i].index]); 
}