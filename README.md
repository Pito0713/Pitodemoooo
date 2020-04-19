# pitodemoooo

## 查詢 git 狀態

git status

## git新增修改檔案 
```
git add . (全選)
git add <檔案名稱>
```

### 提交修改
```
git commit -m "你做了啥更新"
(-m 參數設定摘要說明文字)
```

###  設立遠端連結 origin(這連結的名稱)
```
git remote add origin https://github.com/Pito0713/Pitodemoooo.git
```

### push 上遠端連結
```
 第ㄧ次push
git push -u <remote name> <branch name>
 (參數 -u 等同於 --set-upstream)

第二次
git push
設定好 上游端upstream 就會被設定去追蹤遠端
```

# GIt 上 GitPage
## npm run build
## cd dist 
(到build的資料夾)

## git init 
build 重新建立新的dist
先把 git 初始化

## git add .

## git commit -m <做啥>

## git push -f https://github.com/Pito0713/Pitodemoooo.git master:gh-pages
git push --force 使用本地端直接覆蓋遠端