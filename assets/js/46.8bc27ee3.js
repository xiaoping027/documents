(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{295:function(t,a,e){"use strict";e.r(a);var s=e(24),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("系统定时任务，解放双手，从定时器开始～")]),t._v(" "),e("h2",{attrs:{id:"命令格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令格式")]),t._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",[t._v("crontab [选项] [参数]")])]),t._v(" "),e("h2",{attrs:{id:"选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-e")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("编辑该用户的计时器设置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-l")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("列出该用户的计时器设置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-r")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("删除该用户的计时器设置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-u")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("指定要设定计时器的用户名称。")])])])]),t._v(" "),e("h2",{attrs:{id:"crontab-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crontab-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" crontab 文件")]),t._v(" "),e("p",[t._v("crontab 文件中，每一行都代表一项任务，每行的每个字段代表一项设置，它的格式共分为六个字段，前五段是时间设定段，第六段是要执行的命令，格式如下：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("minute（分） hour（时） day（天） month（月） week（周） command（命令）\n")])])]),e("p",[t._v("在以上各个字段中，还可以使用以下特殊字符：")]),t._v(" "),e("ul",[e("li",[t._v("*：代表所有可能的值；")]),t._v(" "),e("li",[t._v(",：可以表示一个分隔；")]),t._v(" "),e("li",[t._v("-：可以表示一个区间；")]),t._v(" "),e("li",[t._v("/：可以表示一个间隔频率，每隔该时间段。")])]),t._v(" "),e("blockquote",[e("p",[t._v("全局任务计划列列表："),e("code",[t._v("cat /etc/crontab")]),t._v("。")]),t._v(" "),e("p",[t._v("anacron 可用于解决在服务器处于关机状态导致 crontab 计划无法执行的情况，在检测周期内判断是否有定时任务在关机后没有执行，若存在，则在特定的时间段内重新执行这些特定任务。")])]),t._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("p",[t._v("首先需要执行 "),e("code",[t._v("crondtab -e")]),t._v(" 启用编辑。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("每天凌晨 1:30 分重启 docker 服务：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" * * * systemctl restart docker.service\n")])])])]),t._v(" "),e("li",[e("p",[t._v("每月 1、10、20 日的 23:59 重启 docker 服务：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,10")]),t._v(",20 * * systemctl restart docker.service\n")])])])]),t._v(" "),e("li",[e("p",[t._v("每月 1 到 10 日的 4:45 重启 docker 服务：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-10 * * systemctl restart docker.service\n")])])])]),t._v(" "),e("li",[e("p",[t._v("每隔两分钟重启 docker 服务：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("*/2 * * * * systemctl restart docker.service\n")])])])]),t._v(" "),e("li",[e("p",[t._v("每月 10 到 20 日每隔两日的 4:45 重启 docker 服务：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("-20/2 * * systemctl restart docker.service\n")])])])]),t._v(" "),e("li",[e("p",[t._v("晚上 11 点到早上 7 点之间每隔一个小时重启 docker 服务：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("-7/1 * * * systemctl restart docker.service\n")])])])])])])},[],!1,null,null,null);a.default=r.exports}}]);