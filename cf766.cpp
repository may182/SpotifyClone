#include<bits/stdc++.h>
using namespace std;

void solve(){
    int n,m,r,c;
    cin>>n>>m>>r>>c;

    vector<vector<char>> vect(n,vector<char>(m));
    int cnt=0;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){

            cin>>vect[i][j];
            if(vect[i][j]=='W')
                cnt++;

        }
    }

    if(cnt==n*m)
        {
            cout<<'-1'<<'\n';
            return ;
        }

    bool flag=0;    

    for(int i=0;i<n;i++){
        if(vect[i][c-1]=='B'){
            flag=1;
            break;
            }
    }    

    for(int i=0;i<m;i++){
        if(vect[r-1][i]=='B'){
            flag=1;
            break;
        }
    }

    if(flag){
        cout<<'1'<<'\n';
        return;
    }

    cout<<'2'<<'\n';

    

    return ;
}

int main(){
    int t;
    cin>>t;
    while(t--){
        solve();
    }
    return 0;
}