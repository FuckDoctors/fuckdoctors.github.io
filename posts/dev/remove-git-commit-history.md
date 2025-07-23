---
url: 'https://zhaobc.site/posts/dev/remove-git-commit-history.md'
---
# git 中如何删除指定 commit 之前的所有 commit 履历

在使用 Git 进行版本控制时，有时候我们需要删除指定 commit 之前的所有历史。这可能是因为我们需要重新开始一个新的项目，或者因为我们发现了一些错误，需要修复历史记录。
或者，forked 了一个项目，不想保留它原历史记录，需要重新开始一个新的项目。

在 Git 中删除指定 commit 之前的所有历史，可以通过将该 commit 设为新的根提交来实现。以下是具体步骤：

:::tip
本文方法由 DeepSeek 生成，这里仅是为了记录一下，方便自己查阅。
:::

在Git中删除指定commit之前的所有历史，可以通过将该commit设为新的根提交来实现。以下是具体步骤：

***

## **方法一：使用 `git rebase`（适用于线性历史）**

1. **找到目标commit的哈希值**\
   使用 `git log` 确定你要保留的最早commit的哈希（例如 `abc123`）。

2. **启动交互式rebase**

   ```bash
   git rebase -i --root
   ```

   * 这会从仓库的初始提交开始编辑历史。

3. **编辑提交列表**\
   在打开的编辑器中：
   * **删除目标commit（`abc123`）之前的所有行**，只保留 `abc123` 及其之后的commit。
   * 保存并退出编辑器。

4. **解决可能的冲突**\
   如果发生冲突，按提示解决后继续：

   ```bash
   git rebase --continue
   ```

***

## **方法二：使用 `git filter-branch`（适用于复杂历史）**

1. **将目标commit设为根提交**

   ```bash
   git filter-branch --parent-filter '
       if [ $GIT_COMMIT = <目标commit哈希> ]; then
           echo ""
       else
           cat
       fi
   ' -- --all
   ```

   * 替换 `<目标commit哈希>` 为实际的哈希值（如 `abc123`）。
   * 此命令将目标commit的父提交设为空，使其成为新的根提交。

2. **清理仓库**

   ```bash
   git reset --hard
   git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d
   git reflog expire --expire=now --all
   git gc --aggressive --prune=now
   ```

***

## **方法三：使用孤儿分支（最彻底，但需手动操作）**

1. **创建孤儿分支**

   ```bash
   git checkout --orphan new-branch <目标commit哈希>
   ```

   * 这会基于目标commit创建一个无历史的新分支。

2. **提交当前状态**

   ```bash
   git commit -m "新的根提交"
   ```

   * 将当前文件状态作为新分支的第一个提交。

3. **删除旧分支并重命名**

   ```bash
   git branch -D main  # 删除旧分支（如main）
   git branch -m main  # 重命名新分支为main
   ```

4. **强制推送到远程**

   ```bash
   git push -f origin main
   ```

***

## **注意事项**

* **备份仓库**：操作前务必备份，历史重写不可逆。
* **协作影响**：强制推送（`git push -f`）会覆盖远程历史，需通知所有协作者重新克隆仓库。
* **敏感信息**：若历史中包含敏感数据，需彻底清除（推荐使用 `git filter-repo`）。

选择适合你场景的方法，谨慎操作！
本人使用的是方法二，经验证可满足需求。
