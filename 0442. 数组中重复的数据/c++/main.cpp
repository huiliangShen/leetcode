#include <iostream>
#include <vector>
#include <map>

using namespace std;

class Solution {
public:
    vector<int> findDuplicates(vector<int> &nums) {
        map<int, int> mapNum;
        vector<int> res;
        for (int i = 0; i < nums.size(); i++) {
            // int item = nums[i];
            int isExist = mapNum.count(nums[i]);
            if (isExist > 0) {
                res.push_back(nums[i]);
            }
            mapNum.insert(pair<const int, int>(nums[i], nums[i]));
        }
        return res;
    }
};

int main() {
    vector<int> nums = {1, 2, 3, 4, 5, 5, 7, 2};
    vector<int> res = Solution().findDuplicates(nums);
    for (int i = 0; i < res.size(); i++) {
        std::cout << res[i] << std::endl;
    }
    return 0;
}
