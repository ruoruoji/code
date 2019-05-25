function ListNode(val) {
    this.val = val;
    this.next = null;
 }
 var a = new ListNode(-1)
 var b = new ListNode(5)
 var c = new ListNode(3)
 var d = new ListNode(4)
 var e = new ListNode(0)
 a.next = b
 b.next = c
 c.next = d
 d.next = e 

var sortList = function(head, tail = null) {
    var partitionP
    if (head === tail) return head
    partitionP = partition(head, tail)
    sortList(head, partitionP)
    if(partitionP.next) sortList(partitionP.next, tail)
    return head
};

var partition = function(head, tail) {
    var referP = head
    var indexP = referP.next
    var partitionP = head
    for (let traverP = indexP; traverP !== tail; ) {
        if (traverP.val < referP.val) {
            if (indexP !== traverP) [indexP.val, traverP.val] = [traverP.val, indexP.val]
            indexP = indexP.next
        }
        traverP = traverP.next
    }
    while (partitionP.next !== indexP) {
        partitionP = partitionP.next
    }
    [head.val, partitionP.val] = [partitionP.val, head.val]
    return partitionP
}
