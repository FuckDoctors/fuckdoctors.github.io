---
url: 'https://zhaobc.site/notes/other/tools/git.md'
---
# git 小提示

设置用户：

```shell
git config user.email "413853119@qq.com"
git config user.name "ZhaoBin"
```

修改最后一次 commit 的用户信息:

```shell
git commit --amend --author="ZhaoBin <413853119@qq.com>" --no-edit
```

最近几次提交变基：

```shell
# 最近3次提交变基
git rebase -i HEAD~3
```

遍历文件获取第一次提交的信息：

```shell
echo "file,filename,hash,date,author,email,comment" > commit.txt

git ls-files -r --name-only "$branch" | while read file; do
  # 截取最后一个 "/" 后面的文件名
  filename="${file##*/}"
  # 输出第一次提交信息
  log=$(git log --reverse --pretty=format:"%h,%ad,%an,%ae,%s" --date=format:%Y/%m/%d -- "$file" | head -n 1)
  echo "$file,$filename,$log" >> commit.txt
done
```
