from collections import Counter

n=int(input())
l=[input() for k in range(n) ]
a=Counter(l)
ans=a.values()
print(len(set(l)))
for i in ans:
    print(i,end=" ")

PROBLEM:
Sample Input

4
bcdef
abcdefg
bcde
bcdef
Sample Output

3
2 1 1
Explanation

There are  distinct words. Here, "bcdef" appears twice in the input at the first and last positions.
The other words appear once each. The order of the first appearances are "bcdef", "abcdefg" and "bcde"
which corresponds to the output.
