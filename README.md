# Recoil_Study

[制作プロジェクト](https://5f2179a522839569c4f1a935--nifty-kare-a9645b.netlify.app/)

## Recoilの学習のためのプロジェクト

Recoilの型定義ファイルは現時点では公開されていないと記述していますが、公開されています。

確認不足でした申し訳ございません。

## 現時点での問題点

当プロジェクトではJestを用いてレンダリングテストを行うコードを作成指定すが、componentsディレクトリのテストを行うと

```
This component must be used inside a <RecoilRoot> component.
```

と表示されます。jsの場合対処の方法があるそうですが、当プロジェクトではTypeScriptを利用しているため、有力な情報が少なく、私には対処できませんでした。

また、setupTestでenzymeのdomのスナップショットを行う設定を記述しましたが、Jestとの関連付けを行えずテストファイルに直接設定を書いてしまいました。今後は設定ファイルはテストコードに記述しなくてもいいように学習をします。

### Why Recoil
状態管理のできるライブラリを実践でも利用できるようになるための学習のため。<br>
Reduxを学習し状態管理について学ぼうと試みたが上手く使いこなせていないので、Reduxよりコンパクトにフロントの状態管理ができるRecoilを習得したいと考え、Recoilの学習をはじめました。

### What Recoil
RecoilとはFacebook製のReactの状態管理ライブラリ。<br>
まだ正式リリースはされてはいない。(2020/07/04時点では)<br>
Reactの公式の状態管理ライブラリではない。<br>
<br>
上記が簡単なRecoilの説明だと私は考えます。また、実際にRecoilを利用した人はReactのHooksとの相性が良いと仰っています。~~ただ現時点(2020/07/04)では正式リリースではないので~~今後も追加機能の実装があり、現時点で実装されている機能の修正もあると考えられます。

[公式ドキュメント](https://recoiljs.org/)


### Develop enviroment

- OS - MacOS Catalina

- TextEditor - Visual Studio Code

- git - 2.24.3

- Node - 12.18.1

- yarn - 1.22.4

- React - 16.13.1

- TypeScript - 3.7.2

- Recoil - 0.0.10

- @material-ui/core - 4.11.0

- deploy - netlify

- netlify - netlify-cli/2.58.0

### command
local環境での実行コマンド
- git

https
```
https://github.com/K-Daiki-0ne/Recoil_Study.git
```

ssh
```
git@github.com:K-Daiki-0ne/Recoil_Study.git
```

- npm
```
npm install
```
```
npm run start
```

- yarn
```
yarn add
```

```
yarn start
```

Docker
```
docker build -t recoil ./
```

```
docekr run -it --name recoil -p 3000:3000 -v $PWD:/usr/src/app recoil
```

<br>

### Recoilを使用した感想
使いやすいです。簡単に状態管理ができる印象です。<br>
今回はTypeScriptで記述しましたが~~現時点ではRecoilの型定義ファイルは有志の開発のみで公式にはリリースされていないようなので~~型定義ファイルは[こちら](https://qiita.com/serinuntius/items/3d6519988233d7ba643c)に型定義のソースコードが載せていたので、利用されていただきました。<br>
Recoilはカスタムフックとの相性が状態管理のライブラリの中でも特に優れている印象を抱いたので、今後も機会があれば利用していきたいと考えています。<br>
テストコードの記述に関してですが、Reactに標準で搭載されているtesing-library/reactを用いてテストコードを記述しましたが、Recoilを利用したテストコードに関するドキュメントはまだ少ないように思いました。

## 参考資料
- [Recoil
A state management library for React](https://recoiljs.org/)
- [話題の「Recoil」を使ってTodoアプリ作ってみた with TypeScript](https://qiita.com/serinuntius/items/3d6519988233d7ba643c)
- [ReduxのサンプルTODOアプリをRecoilを使って書く](https://qrunch.net/@Catminusminus/entries/SzU0RYinBLhucxsk?ref=qrunch)