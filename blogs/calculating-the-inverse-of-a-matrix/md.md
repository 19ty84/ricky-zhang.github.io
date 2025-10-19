# Calculating the Inverse of a Matrix

Calculating the inverse of a $4 \times 4$ matrix needs at most $224$ steps. Wow.

## Step 0

Let

$$
\begin{pmatrix}
2 & 1 & 1 \\
-5 & -3 & -3 \\
0 & 2 & 0 
\end{pmatrix}
$$

be the matrix you want to calculate.

## Step 1: Create an Augmented Matrix

Add $I$ to the right-hand side of the matrix. In this example, it becomes
$$
\begin{pmatrix}
2 & 1 & 1 & 1 & 0 & 0\\
-5 & -3 & -3 & 0 & 1 & 0\\
0 & 2 & 0 & 0 & 0 & 1
\end{pmatrix}
$$

## Step 2: Calculating the Reduced Row Echelon Form

I hate this step.

Anyway, you want to make the left-hand side of the matrix to be $I$. You can do it through row operations:

- Swap 2 rows.
- Multiply each element in one row by a non-zero constant.
- Add a multiple of another row to one row.

If you don't know how to do that, there are a lot of online resources about it.

Finally, we get

$$
\begin{pmatrix}
1 & 0 & 0 & 3 & 1 & 0\\
0 & 1 & 0 & 0 & 0 & \dfrac{1}{2}\\
0 & 0 & 1 & -5 & -2 & -\dfrac{1}{2}
\end{pmatrix}
$$

## Step 3: The right-hand side of this matrix is the inverse of the original matrix.

So the inverse of the matrix is
$$
\begin{pmatrix}
3 & 1 & 0 \\
0 & 0 & \dfrac{1}{2} \\
-5 & -2 & -\dfrac{1}{2}
\end{pmatrix}
$$

## Why does it work?

Doing a row operation is actually left-multiplying an [elementary matrix](https://en.wikipedia.org/wiki/Elementary_matrix). When the left-hand side becomes $I$, the combination of those elementary matrices is $A^{-1}$ because $A^{-1}A=I$. Since the same operations are done to the right-hand side, it becomes $A^{-1}I=A^{-1}$.
