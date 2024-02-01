(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{481:function(e,t,v){"use strict";v.r(t);var _=v(14),a=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"官-说说你对git-rebase-和-git-merge的理解-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官-说说你对git-rebase-和-git-merge的理解-区别"}},[e._v("#")]),e._v(" 官：说说你对git rebase 和 git merge的理解？区别？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/77590970-fdd4-11eb-bc6f-3f06e1491664.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"一、是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[e._v("#")]),e._v(" 一、是什么")]),e._v(" "),t("p",[e._v("在使用 "),t("code",[e._v("git")]),e._v(" 进行版本管理的项目中，当完成一个特性的开发并将其合并到 "),t("code",[e._v("master")]),e._v(" 分支时，会有两种方式：")]),e._v(" "),t("ul",[t("li",[e._v("git merge")]),e._v(" "),t("li",[e._v("git rebase")])]),e._v(" "),t("p",[t("code",[e._v("git rebase")]),e._v(" 与 "),t("code",[e._v("git merge")]),e._v("都有相同的作用，都是将一个分支的提交合并到另一分支上，但是在原理上却不相同")]),e._v(" "),t("p",[e._v("用法上两者也十分的简单：")]),e._v(" "),t("h3",{attrs:{id:"git-merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[e._v("#")]),e._v(" git merge")]),e._v(" "),t("p",[e._v("将当前分支合并到指定分支，命令用法如下：")]),e._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git merge xxx\n")])])]),t("h3",{attrs:{id:"git-rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[e._v("#")]),e._v(" git rebase")]),e._v(" "),t("p",[e._v("将当前分支移植到指定分支或指定"),t("code",[e._v("commit")]),e._v("之上，用法如下：")]),e._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git rebase -i <commit>\n")])])]),t("p",[e._v("常见的参数有"),t("code",[e._v("--continue")]),e._v("，用于解决冲突之后，继续执行"),t("code",[e._v("rebase")])]),e._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git rebase --continue\n")])])]),t("h2",{attrs:{id:"二、分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、分析"}},[e._v("#")]),e._v(" 二、分析")]),e._v(" "),t("h3",{attrs:{id:"git-merge-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-2"}},[e._v("#")]),e._v(" git merge")]),e._v(" "),t("p",[e._v("通过"),t("code",[e._v("git merge")]),e._v("将当前分支与"),t("code",[e._v("xxx")]),e._v("分支合并，产生的新的"),t("code",[e._v("commit")]),e._v("对象有两个父节点")]),e._v(" "),t("p",[e._v("如果“指定分支”本身是当前分支的一个直接子节点，则会产生快照合并")]),e._v(" "),t("p",[e._v("举个例子，"),t("code",[e._v("bugfix")]),e._v("分支是从"),t("code",[e._v("master")]),e._v("分支分叉出来的，如下所示：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/88410a30-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),t("p",[e._v("合并"),t("code",[e._v("bugfix")]),e._v("分支到"),t("code",[e._v("master")]),e._v("分支时，如果"),t("code",[e._v("master")]),e._v("分支的状态没有被更改过，即 "),t("code",[e._v("bugfix")]),e._v("分支的历史记录包含"),t("code",[e._v("master")]),e._v("分支所有的历史记录")]),e._v(" "),t("p",[e._v("所以通过把"),t("code",[e._v("master")]),e._v("分支的位置移动到"),t("code",[e._v("bugfix")]),e._v("的最新分支上，就完成合并")]),e._v(" "),t("p",[e._v("如果"),t("code",[e._v("master")]),e._v("分支的历史记录在创建"),t("code",[e._v("bugfix")]),e._v("分支后又有新的提交，如下情况：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/929eb220-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),t("p",[e._v("这时候使用"),t("code",[e._v("git merge")]),e._v("的时候，会生成一个新的提交，并且"),t("code",[e._v("master")]),e._v("分支的"),t("code",[e._v("HEAD")]),e._v("会移动到新的分支上，如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/9fdfa3e0-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),t("p",[e._v("从上面可以看到，会把两个分支的最新快照以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照")]),e._v(" "),t("h3",{attrs:{id:"git-rebase-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-2"}},[e._v("#")]),e._v(" git rebase")]),e._v(" "),t("p",[e._v("同样，"),t("code",[e._v("master")]),e._v("分支的历史记录在创建"),t("code",[e._v("bugfix")]),e._v("分支后又有新的提交，如下情况：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/ab2d5120-fdd4-11eb-bc6f-3f06e1491664.png",alt:""}})]),e._v(" "),t("p",[e._v("通过"),t("code",[e._v("git rebase")]),e._v("，会变成如下情况：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/b72aed70-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),t("p",[e._v("在移交过程中，如果发生冲突，需要修改各自的冲突，如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/c9ba0e80-fdd4-11eb-bc6f-3f06e1491664.png",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("rebase")]),e._v("之后，"),t("code",[e._v("master")]),e._v("的"),t("code",[e._v("HEAD")]),e._v("位置不变。因此，要合并"),t("code",[e._v("master")]),e._v("分支和"),t("code",[e._v("bugfix")]),e._v("分支")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/dc660660-fdd4-11eb-991d-334fd31f0201.png",alt:""}})]),e._v(" "),t("p",[e._v("从上面可以看到，"),t("code",[e._v("rebase")]),e._v("会找到不同的分支的最近共同祖先，如上图的"),t("code",[e._v("B")])]),e._v(" "),t("p",[e._v("然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件（老的提交"),t("code",[e._v("X")]),e._v("和"),t("code",[e._v("Y")]),e._v("也没有被销毁，只是简单地不能再被访问或者使用）")]),e._v(" "),t("p",[e._v("然后将当前分支指向目标最新位置"),t("code",[e._v("D")]),e._v(", 然后将之前另存为临时文件的修改依序应用")]),e._v(" "),t("h2",{attrs:{id:"三、区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[e._v("#")]),e._v(" 三、区别")]),e._v(" "),t("p",[e._v("从上面可以看到，"),t("code",[e._v("merge")]),e._v("和"),t("code",[e._v("rebasea")]),e._v("都是合并历史记录，但是各自特性不同：")]),e._v(" "),t("h3",{attrs:{id:"merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[e._v("#")]),e._v(" merge")]),e._v(" "),t("p",[e._v("通过"),t("code",[e._v("merge")]),e._v("合并分支会新增一个"),t("code",[e._v("merge commit")]),e._v("，然后将两个分支的历史联系起来")]),e._v(" "),t("p",[e._v("其实是一种非破坏性的操作，对现有分支不会以任何方式被更改，但是会导致历史记录相对复杂")]),e._v(" "),t("h3",{attrs:{id:"rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[e._v("#")]),e._v(" rebase")]),e._v(" "),t("p",[t("code",[e._v("rebase")]),e._v("会将整个分支移动到另一个分支上，有效地整合了所有分支上的提交")]),e._v(" "),t("p",[e._v("主要的好处是历史记录更加清晰，是在原有提交的基础上将差异内容反映进去，消除了 "),t("code",[e._v("git merge")]),e._v("所需的不必要的合并提交")]),e._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),t("ul",[t("li",[e._v("https://zhuanlan.zhihu.com/p/361182707")]),e._v(" "),t("li",[e._v("https://yuweijun.github.io/git-zh/1-git-branching.html#_rebasing")]),e._v(" "),t("li",[e._v("https://backlog.com/git-tutorial/cn/stepup/stepup1_4.html")])])])}),[],!1,null,null,null);t.default=a.exports}}]);