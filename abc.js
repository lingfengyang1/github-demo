console.log("abc")
/**
 * github远程仓库操作方式一：
 * git init -> git add . -> git commit -m xxx -> git remote add 别名 地址 -> git branch --set-upstream-to=别名/分支 -> git pull -> git push 别名 本地分支/head:远程分支(github远程仓库操作比较特殊 如果上下游分支不同名的话 那么push时需要明确指定别名+head+分支)
 * 
 * github远程仓库操作方式二：
 * 利用git checkout --track xxx切换分支和远程分支同名并关联了上游分支 这样 push操作就无需指明修饰符了
 * 
 * git push origin master/head:main的意思是将本地分支master推送到远程分支main
 * git push origin master的意思则是将本地分支master推送到远程分支master 等价于git push origin master:master
 * git push操作不能够正常执行 报错提示必须写明本地分支和远程分支才行 但是前面已经通过git branch设置了上游分支 为什么不会将本地分支推送到上游分支呢
 * 
 * 实际上由于git的push.default默认取值为simple 所以git push的默认操作是将当前本地分支推送到远程的同名分支 即git push origin master:master 而我们要推送的目的地是上游分支main 不匹配
 * 如果想要将本地分支推送到git branch所设置的上游分支的话 那么就需要修改push.default取值为upstream 这样的话等价于git push origin master:main 这就要求我们需要提前修改push的配置 即push.default的值修改为upstream
 * 这同时也解释了为什么git checkout修改本地分支和远程分支同名时 可以直接通过git push完成需求 
 * 
 * 当然 push.default除了simple和upstream这两个取值以外 也有一个比较常见的取值 即current 他的作用和simple很想 都是将本地分支推送到同名的远程分支 只不过 在没有找到的情况下 simple和current的处理方式不同 simple取值会直接报错 而current则是会在远程仓库中新建一个分支作为目标的远程分支
 */