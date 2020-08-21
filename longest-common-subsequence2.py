from typing import List

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:

        results = []
        i1 = j1 = 0

        lookup_map_text2 = {}

        for tmp_i2 in range(len(text2)):
            tmp_ele2 = text2[tmp_i2]
            if tmp_ele2 not in lookup_map_text2:
                lookup_map_text2[tmp_ele2] = []
            lookup_map_text2[tmp_ele2].append(tmp_i2)

        while i1 < len(text1):

            

            ele_i_1 = text1[i1]
            results_current = []

            j2_min = 0

            if ele_i_1 in lookup_map_text2:
                j2_min = lookup_map_text2[ele_i_1][0]
                results_current.append(ele_i_1)
                pass
            else:
                i1 += 1
                continue

           

            j1 = i1 + 1

            while j1 < len(text1):

                ele_j_1 = text1[j1]
                if ele_j_1 in lookup_map_text2:
                    for tmp_ele_for_j2 in lookup_map_text2[ele_j_1]:
                        if (tmp_ele_for_j2 > j2_min):
                            j2_min = tmp_ele_for_j2
                            results_current.append(ele_j_1)
                            break
                j1 += 1

            i1 += 1
            j1 = i1

            if len(results_current) > len(results):
                results = results_current
            
        print(results) 

        return len(results)


sol = Solution()
#sol.longestCommonSubsequence('abcd', 'cdef')

#sol.longestCommonSubsequence('psnw', 'vozsh')

#sol.longestCommonSubsequence('hofubmnylkra', 'pqhgxgdofcvmr')
# sol.longestCommonSubsequence(
#     "ezupkr",
#     "ubmrapg"
# )
sol.longestCommonSubsequence(
    "mhunuzqrkzsnidwbun",
    "szulspmhwpazoxijwbq"
)
# sol.longestCommonSubsequence(
#     "szulspmhwpazoxijwbq",
#     "mhunuzqrkzsnidwbun",
# )
