void convertBSTtoDLL(node * root, node ** head, node ** tail){
	if(!root)
		return;

	if(root->left)
		convertBSTtoDLL(root->left, head, tail);

	root->left = * tail;
	if(*tail)
		(*tail)->right = root;
	else
		*head = root;

	if(root->right)
		convertBSTtoDLL(root->right, head, tail);
}

bool isPresentInDll(node* head, node* tail, int sum){
	while(head != tail){
		int curr = head->key + tail->key;
		if(curr == sum)
			return true;
		else if(curr > sum)
			tail = tail->next;
		else 
			head = head->right;
	}
	retun false;
}

bool isTripletPresent(node * root){
	if(!root)
		return false;
	node * head = NULL;
	node * tail = NULL;
	convertBSTtoDLL(root, &head, &tail);

	while( (head->right != tail) && (head->key < 0) ){
		if( isPresentInDll(head->right, tail, -1*head->key) )
			return true;
		else
			head = head->right;
	}
	return false;
}