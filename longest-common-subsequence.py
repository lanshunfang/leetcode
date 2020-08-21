from typing import List


class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:

      # solution copied from discussion area
      
      # declare 2 varialbles, fo length + 1
      # so that the matrix table could contains all observations
      # at [m][n] for range text1[0: m-1] and text2[0: n-1]
      m, n = len(text1) + 1, len(text2) + 1

      # generate m x n matrix
      matrix_m_n = [[0] * n for i in range(m)]

      '''
      The idea here is to iterate all chars in text1 and itext2 combination
      Accumuate all sameness into the matrix cell

      e.g.
     
        text1 = 'abc'
        text2 = 'bc'
        Any matrix row is for its char in text1 respectively
        The cells of the row indicate if its row predecessor and cell predecessor has any sameness 
        in accumulation manner

        Eventually, the matrix will record down all the sameness

        Say in the case of 'abc' | 'bc' above, the matrix will look like:
        
        matrix_m_n == [
          [0, 0, 0], 
          [0, 0, 0], 
          [0, 1, 1], 
          [0, 1, 2]
        ]
      '''
      for i in range(1, m):
          for j in range(1, n):
              if text1[i-1] != text2[j-1]:
                # with the trick, we could always make the [i][j] 
                # inherit the max value of current i x j sub matrix
                # it will be used by `return matrix_m_n[-1][-1]` 
                  matrix_m_n[i][j] = max(
                      matrix_m_n[i-1][j],
                      matrix_m_n[i][j-1]
                  )
              else:
                  matrix_m_n[i][j] = 1 + matrix_m_n[i-1][j-1]
      print(matrix_m_n)
      return matrix_m_n[-1][-1]


sol = Solution()

sol.longestCommonSubsequence(
    "abc",
    "bc"
)
