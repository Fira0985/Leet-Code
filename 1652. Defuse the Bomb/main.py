class Solution(object):
    def decrypt(self, code, k):
        given_code = list(code) # the initial array given
        n = len(code)
        first_index = 0
        second_index = 0
        third_index = 0
        i = 0

        if (k == 0):
            code = code * 0
            return code

        if (k > 0):
            while (n > 0):
                first_index = i + 1
                second_index = i + 2
                third_index = i + 3

                if (first_index > (n-1)):
                    first_index = 0
                    second_index = 1
                    third_index = 2
                elif(second_index > (n-1)):
                    second_index = 0
                    third_index = 1
                elif(third_index > (n-1)):
                    third_index = 0
                else:
                    pass

                code[i] = given_code[first_index] + given_code[second_index] + given_code[third_index]
                i = i + 1
                n = n - 1
        else:
            while (n > 0):
                j = 0
                while (abs(k) > 0):
                    code[i] = given_code[i-1] + given_code[i-2] + given_code[i-3]
                i = i + 1
                n = n - 1

        return code

n = [1,2,3,4]
code = Solution()
print(code.decrypt(n,-2))