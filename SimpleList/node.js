console.log("Script loaded!")
var nameUser = document.getElementById("texting")

var head; // head of list


class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

function push(new_data) {
	var new_node = new Node(new_data);
	new_node.next = head;
	head = new_node;
}

function insertAfter(prev_node , new_data) {
	if (prev_node == null) {
		document.write(
			"The given previous node cannot be null"
			);
		return;
	}
	var new_node = new Node(new_data);
	new_node.next = prev_node.next;
	prev_node.next = new_node;
}

function append(new_data) {
	var new_node = new Node(new_data);
	if (head == null) {
		head = new Node(new_data);
		return;
	}
	new_node.next = null;
	var last = head;
	while (last.next != null)
		last = last.next;
	last.next = new_node;
	return;
}

function remove() {
  if (this.head) {
  	if (this.head.next) {
  		const secondNode = this.head
  		this.head= secondNode;
  	} else{
  		this.head=null
  	}
  }
}
function removeFrom(data){
	let current = this.head;
	let previous = null;
	while(current != null){
		if (current.data === data) {
			if (!previous) {
				this.head = current.next;
			}else{
				previous.next = current.next;
			};
			this.else--;
			return current.data;
		};
		previous = current;
		current = current.next;
	};
	return null;
};
function addDate(){
	push(document.getElementById("nameUser").value)
	printList();
}

function printList() {
	var tnode = head;
	var phrase = "";
	while (tnode != null) {
		phrase += (`<br><button onclick="deleteNode(tnode.data)">${tnode.data}</button><br>`);
		tnode = tnode.next;
	}
	document.getElementById("list").innerHTML = phrase;
	console.log(head)
}

function deleting() {
	console.log(":*")
	removeFrom(document.getElementById("texting").value);
}

function pushing(){
	push(document.getElementById("texting").value);
	document.getElementById("texting").innerText="";
	document.getElementById("list").innerText = "";
}

