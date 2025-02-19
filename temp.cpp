#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define int long long

bool snt(ll n){
    if(n <= 1) return 0;
    if(n == 2 || n == 3) return 1;
    if(n % 2 == 0 || n % 3 == 0) return 0;
    ll i = 5;
    while(i * i <= n){
        if(n % i == 0 || n % (i + 2) == 0){
            return 0;
        }
        i += 6;
    }

    return 1;
}
bool a[10000007];
void lmao(ll n){
    fill(a, a + n + 1, true);
    a[0] = a[1] = false;
    for(int i = 2; i * i <= n; i ++){
        if(a[i]){
            for(int j = i * i; j <= n; j += i){
                a[j] = false;
            }
        }
    }
    for(int i = 1; i <= n; i++){
        pre[i] = pre[i - 1] +  a[i];
    }
}
ll mulmod(ll a, ll b, ll mod) {
    ll res = 0;
    a = a % mod;
    while (b > 0) {
        if (b % 2 == 1) {
            res = (res + a) % mod;
        }
        a = (a * 2) % mod;
        b = b / 2;
    }
    return res % mod;
}

ll power_mod(ll a, ll b, ll mod) {
    ll res = 1;
    a = a % mod;
    while (b > 0) {
        if (b % 2 == 1) {
            res = mulmod(res, a, mod);
        }
        b = b >> 1;
        a = mulmod(a, a, mod);
    }
    return res;
}
int knapsack(int W, vector<int>& weight, vector<int>& value) {
    int n = weight.size();
    vector<int> dp(W + 1, 0);

    for (int i = 0; i < n; i++) {
        for (int w = W; w >= weight[i]; w--) {
            dp[w] = max(dp[w], dp[w - weight[i]] + value[i]);
        }
    }
    return dp[W];
}
int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));

    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
}
int maxSubArray(vector<int>& nums) {
    int max_sum = nums[0], cur_sum = nums[0];

    for (int i = 1; i < nums.size(); i++) {
        cur_sum = max(nums[i], cur_sum + nums[i]);
        max_sum = max(max_sum, cur_sum);
    }
    return max_sum;
}
int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, 0);
    dp[0] = 1;

    for (int coin : coins) {
        for (int i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
}

int coinCombinations(int amount, vector<int>& coins) {
    vector<int> dp(amount + 1, 0);
    dp[0] = 1;

    for (int coin : coins) { // Duyệt từng đồng xu
        for (int i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin]; // Cộng số cách tạo ra (i - coin)
        }
    }
    return dp[amount];
}


ll n, a[500005], c = 0;

signed main() {
    cin >> n;
    for(int i = 1; i <= n; i++) cin >> a[i]; 
    
    
    for(int i = 1; i < n; i++) {
        for(int j = i + 1; j <= n; j++) {
            if (min(a[i], a[j]) == i && max(a[i], a[j]) == j) {
                c++;
            }
        }
    }
    
    cout << c;
}
