/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
O(n)
because this function is linear search algorithm in the worst case it will have to check all of the student in the list to find the matching id or not found.

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
O(log n) 
because this function is binary search algorithm it will divide the search space in half each time it makes a comparison. 
In the worst case, it will take logarithmic time to find the target product or determine that it is not present in the list.
*/

/* 
Which function is more efficient and why?
Answer:
Function findProductPrice is more efficient because it uses binary search algorithm with O(log n) time complexity,
which is faster than linear search algorithm with O(n) time complexity used in Function findStudentById, especially for large datasets.

*/
