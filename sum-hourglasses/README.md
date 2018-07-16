# Sum Hourglasses in a matrix

### Matric structure: 
    [ [ 1, 2, 3, 4, 5, 6 ],
      [ 0, 0, 6, 1, 5, 9 ],
      [-1, 2, 0, 4, 5, 6 ],
      [ 1, 2, 9, 1, 5, 4 ],
      [-15,2, 3, 3, 3, 6 ],
      [ 1, 1, 3, 2, 5, 0 ]
    ]

### Hourglass structure:
     1  2  3    2  3  4     3  4  5    4  5  6
        0          6           1          5
    -1  2  0    2  0  4     0  4  5    4  5  6

    these are the 4 hourglasses on the top row. return the sum of all hourglasses that can be made in the matrix.