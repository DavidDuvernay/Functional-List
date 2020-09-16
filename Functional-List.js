function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { /* implement this */
  return '()';
};
EmptyList.prototype.isEmpty = function() { /* implement this */
  return true;
};
EmptyList.prototype.length = function() { /* implement this */ 
  return 0;
};
EmptyList.prototype.push = function(x) { /* implement this */ 
  return new ListNode(x, this);
};
EmptyList.prototype.remove = function(x) { /* implement this */ 
  return this;
};
EmptyList.prototype.append = function(xs) { /* implement this */ 
    return xs;
};

function ListNode(value, next) { /* implement this */
  
  this.value = value;
  this.next = next;
    
}
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { /* implement this */ 
    return false;
};
ListNode.prototype.toString = function() { /* implement this */ 
  
  let node = this;
  let acc = '';

  while(!(node instanceof EmptyList)){
    
    acc += node.value + ' '
    node = node.next;

  }

  return `(${acc.trim()})`

};

ListNode.prototype.head = function() { /* implement this */ 
    return this.value
};
ListNode.prototype.tail = function() { /* implement this */  
    return this.next
};
ListNode.prototype.length = function() { /* implement this */ 
    return this.next.length() + 1;
};
ListNode.prototype.push = function(x) { /* implement this */ 
    return new ListNode(x, this)
};
ListNode.prototype.remove = function(x) { /* implement this */ };
ListNode.prototype.append = function(xs) { /* implement this */ 
    
    let node = this;
    
    return new ListNode(node.value, node.next.append(xs))
    
};

const myList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new EmptyList()))));

console.log(myList.toString());
