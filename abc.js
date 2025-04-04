console.log("abc")
/**
 * github远程仓库操作方式一：
 * git init -> git add . -> git commit -m xxx -> git remote add 别名 地址 -> git branch --set-upstream-to=别名/分支 -> git pull -> git push 别名 head:分支(github远程仓库操作比较特殊 如果上下游分支不同名的话 那么push时需要明确指定别名+head+分支)
 * 
 * github远程仓库操作方式二：
 * git init -> git add . -> git commit -m xxx -> git -> git checkout -b xxx --track 别名/分支(切换本地分支 保持和上游分支同名并关联上游分支) -> git pull -> git push
 */