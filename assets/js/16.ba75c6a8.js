(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{232:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"请求限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求限制"}},[t._v("#")]),t._v(" 请求限制")]),t._v(" "),a("p",[t._v("请求限制 "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_limit_req_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("limit_req_module"),a("OutboundLink")],1),t._v(" 比连接限制更优化，由于一个连接可以被多次复用。")]),t._v(" "),a("h3",{attrs:{id:"_1-limit-req-zone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-limit-req-zone"}},[t._v("#")]),t._v(" 1. limit_req_zone")]),t._v(" "),a("p",[t._v("首先需要在 "),a("code",[t._v("http")]),t._v(" 作用域定义 "),a("code",[t._v("limit_req_zone")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_req_zone")]),t._v(" key zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("size rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_req_zone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$binary_remote_addr")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-limit-req"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-limit-req"}},[t._v("#")]),t._v(" 2. limit_req")]),t._v(" "),a("p",[t._v("再在指定的作用域启用。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_req")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("burst"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nodelay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" delay"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_req_zone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$binary_remote_addr")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("search"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_req")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("one burst"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_req_zone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$binary_remote_addr")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("perip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_req_zone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_name")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("perserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_req")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("perip burst"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" nodelay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_req")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("perserver burst"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("$binary_remote_addr")]),t._v(" 相对 "),a("code",[t._v("remote_addr")]),t._v(" 占用的空间更少。")]),t._v(" "),a("h2",{attrs:{id:"连接限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接限制"}},[t._v("#")]),t._v(" 连接限制")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("limit_conn_module"),a("OutboundLink")],1),t._v(" 步骤基本与请求限制一致。")]),t._v(" "),a("h3",{attrs:{id:"_1-limit-conn-zone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-limit-conn-zone"}},[t._v("#")]),t._v(" 1. limit_conn_zone")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_conn_zone")]),t._v(" key zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_conn_zone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$binary_remote_addr")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-limit-zone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-limit-zone"}},[t._v("#")]),t._v(" 2. limit_zone")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_zone")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$variable")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_conn_zone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$binary_remote_addr")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("perip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_conn_zone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_name")]),t._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("perserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_conn")]),t._v(" perip "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_conn")]),t._v(" perserver "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"访问-ip-限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-ip-限制"}},[t._v("#")]),t._v(" 访问 IP 限制")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_access_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("access_module"),a("OutboundLink")],1),t._v(" 可用来限制访问的 IP，用法比较简单。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("allow")]),t._v(" address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CIDR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" unix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_except")]),t._v("\n\nSyntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deny")]),t._v(" address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CIDR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" unix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_except")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deny")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("allow")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("allow")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("allow")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("db8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deny")]),t._v("  all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"访问-账号-限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-账号-限制"}},[t._v("#")]),t._v(" 访问 账号 限制")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("auth_basic_module"),a("OutboundLink")],1),t._v(" 可以为路径添加用户密码访问，可配合 IP 限制使用。")]),t._v(" "),a("h3",{attrs:{id:"_1-生成密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成密码"}},[t._v("#")]),t._v(" 1. 生成密码")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成密码工具 htpasswd")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -b 参数为 在一行输入用户名和密码，而非根据提示输入密码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -c 参数为 创建一个加密文件(注意已有则覆盖)，即增加用户时无需指定")]),t._v("\nhtpasswd -bc /etc/nginx/auth_conf shanyuhai "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若缺乏依赖则提示，安装即可")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# centos 下")]),t._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" httpd-tools\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ubuntu 下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" apache2-utils\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/nginx/auth_conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-限制说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-限制说明"}},[t._v("#")]),t._v(" 2. 限制说明")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auth_basic")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auth_basic")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_except")]),t._v("\n\nSyntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auth_basic_user_file")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit_except")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auth_basic")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入用户名、密码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auth_basic_user_file")]),t._v(" auth_conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);