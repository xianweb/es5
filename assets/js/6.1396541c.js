(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"属性的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性的操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性的操作")]),s("p",[t._v("HTML 元素包括标签名和若干个键值对，这个键值对就称为“属性”（attribute）。")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.example.com"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  链接\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("上面代码中，"),s("code",[t._v("a")]),t._v("元素包括两个属性："),s("code",[t._v("id")]),t._v("属性和"),s("code",[t._v("href")]),t._v("属性。")]),s("p",[t._v("属性本身是一个对象（"),s("code",[t._v("Attr")]),t._v("对象），但是实际上，这个对象极少使用。一般都是通过元素节点对象（"),s("code",[t._v("HTMlElement")]),t._v("对象）来操作属性。本章介绍如何操作这些属性。")]),s("h2",{attrs:{id:"element-attributes-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-attributes-属性","aria-hidden":"true"}},[t._v("#")]),t._v(" Element.attributes 属性")]),s("p",[t._v("元素对象有一个"),s("code",[t._v("attributes")]),t._v("属性，返回一个类似数组的动态对象，成员是该元素标签的所有属性节点对象，属性的实时变化都会反映在这个节点对象上。其他类型的节点对象，虽然也有"),s("code",[t._v("attributes")]),t._v("属性，但返回的都是"),s("code",[t._v("null")]),t._v("，因此可以把这个属性视为元素对象独有的。")]),s("p",[t._v("单个属性可以通过序号引用，也可以通过属性名引用。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// <body bgcolor="yellow" onload="">')]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bgcolor\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'ONLOAD'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),s("p",[t._v("注意，上面代码的三种方法，返回的都是属性节点对象，而不是属性值。")]),s("p",[t._v("属性节点对象有"),s("code",[t._v("name")]),t._v("和"),s("code",[t._v("value")]),t._v("属性，对应该属性的属性名和属性值，等同于"),s("code",[t._v("nodeName")]),t._v("属性和"),s("code",[t._v("nodeValue")]),t._v("属性。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// HTML代码为")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// <div id="mydiv">')]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'mydiv'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nn"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{attrs:{class:"token comment"}},[t._v('// "id"')]),t._v("\nn"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName "),s("span",{attrs:{class:"token comment"}},[t._v('// "id"')]),t._v("\n\nn"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{attrs:{class:"token comment"}},[t._v('// "mydiv"')]),t._v("\nn"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue "),s("span",{attrs:{class:"token comment"}},[t._v('// "mydiv"')]),t._v("\n")])]),s("p",[t._v("下面代码可以遍历一个元素节点的所有属性。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" para "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'p'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'result'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("para"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hasAttributes")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" attrs "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" para"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" output "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" attrs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    output "),s("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" attrs"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'->'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" attrs"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  result"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" output"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  result"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'No attributes to show'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h2",{attrs:{id:"元素的标准属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素的标准属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 元素的标准属性")]),s("p",[t._v("HTML 元素的标准属性（即在标准中定义的属性），会自动成为元素节点对象的属性。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'test'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{attrs:{class:"token comment"}},[t._v('// "test"')]),t._v("\na"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{attrs:{class:"token comment"}},[t._v('// "http://www.example.com/"')]),t._v("\n")])]),s("p",[t._v("上面代码中，"),s("code",[t._v("a")]),t._v("元素标签的属性"),s("code",[t._v("id")]),t._v("和"),s("code",[t._v("href")]),t._v("，自动成为节点对象的属性。")]),s("p",[t._v("这些属性都是可写的。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'myImage'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'http://www.example.com/image.jpg'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("上面的写法，会立刻替换掉"),s("code",[t._v("img")]),t._v("对象的"),s("code",[t._v("src")]),t._v("属性，即会显示另外一张图片。")]),s("p",[t._v("这种修改属性的方法，常常用于添加表单的属性。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'submit.php'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("上面代码为表单添加提交网址和提交方法。")]),s("p",[t._v("注意，这种用法虽然可以读写属性，但是无法删除属性，"),s("code",[t._v("delete")]),t._v("运算符在这里不会生效。")]),s("p",[t._v("HTML 元素的属性名是大小写不敏感的，但是 JavaScript 对象的属性名是大小写敏感的。转换规则是，转为 JavaScript 属性名时，一律采用小写。如果属性名包括多个单词，则采用骆驼拼写法，即从第二个单词开始，每个单词的首字母采用大写，比如"),s("code",[t._v("onClick")]),t._v("。")]),s("p",[t._v("有些 HTML 属性名是 JavaScript 的保留字，转为 JavaScript 属性时，必须改名。主要是以下两个。")]),s("ul",[s("li",[s("code",[t._v("for")]),t._v("属性改为"),s("code",[t._v("htmlFor")])]),s("li",[s("code",[t._v("class")]),t._v("属性改为"),s("code",[t._v("className")])])]),s("p",[t._v("另外，HTML 属性值一般都是字符串，但是 JavaScript 属性会自动转换类型。比如，将字符串"),s("code",[t._v("true")]),t._v("转为布尔值，将"),s("code",[t._v("onClick")]),t._v("的值转为一个函数，将"),s("code",[t._v("style")]),t._v("属性的值转为一个"),s("code",[t._v("CSSStyleDeclaration")]),t._v("对象。因此，可以对这些属性赋予各种类型的值。")]),s("h2",{attrs:{id:"属性操作的标准方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性操作的标准方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性操作的标准方法")]),s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),s("p",[t._v("元素节点提供四个方法，用来操作属性。")]),s("ul",[s("li",[s("code",[t._v("getAttribute()")])]),s("li",[s("code",[t._v("setAttribute()")])]),s("li",[s("code",[t._v("hasAttribute()")])]),s("li",[s("code",[t._v("removeAttribute()")])])]),s("p",[t._v("这有几点注意。")]),s("p",[t._v("（1）适用性")]),s("p",[t._v("这四个方法对所有属性（包括用户自定义的属性）都适用。")]),s("p",[t._v("（2）返回值")]),s("p",[s("code",[t._v("getAttribute()")]),t._v("只返回字符串，不会返回其他类型的值。")]),s("p",[t._v("（3）属性名")]),s("p",[t._v("这些方法只接受属性的标准名称，不用改写保留字，比如"),s("code",[t._v("for")]),t._v("和"),s("code",[t._v("class")]),t._v("都可以直接使用。另外，这些方法对于属性名是大小写不敏感的。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" image "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("images"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'class'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'myImage'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("上面代码中，"),s("code",[t._v("setAttribute")]),t._v("方法直接使用"),s("code",[t._v("class")]),t._v("作为属性名，不用写成"),s("code",[t._v("className")]),t._v("。")]),s("h3",{attrs:{id:"element-getattribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-getattribute","aria-hidden":"true"}},[t._v("#")]),t._v(" Element.getAttribute()")]),s("p",[s("code",[t._v("Element.getAttribute")]),t._v("方法返回当前元素节点的指定属性。如果指定属性不存在，则返回"),s("code",[t._v("null")]),t._v("。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// HTML代码为")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// <div id="div1" align="left">')]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'div1'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'align'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('// "left"')]),t._v("\n")])]),s("h3",{attrs:{id:"element-setattribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-setattribute","aria-hidden":"true"}},[t._v("#")]),t._v(" Element.setAttribute()")]),s("p",[s("code",[t._v("Element.setAttribute")]),t._v("方法用于为当前元素节点新增属性。如果同名属性已存在，则相当于编辑已存在的属性。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'d1'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nd"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'align'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'center'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("下面是对"),s("code",[t._v("img")]),t._v("元素的"),s("code",[t._v("src")]),t._v("属性赋值的例子。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myImage "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'img'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyImage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'src'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'path/to/example.png'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h3",{attrs:{id:"element-hasattribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-hasattribute","aria-hidden":"true"}},[t._v("#")]),t._v(" Element.hasAttribute()")]),s("p",[s("code",[t._v("Element.hasAttribute")]),t._v("方法返回一个布尔值，表示当前元素节点是否包含指定属性。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'div1'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hasAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'align'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  d"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'align'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'center'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("上面代码检查"),s("code",[t._v("div")]),t._v("节点是否含有"),s("code",[t._v("align")]),t._v("属性。如果有，则设置为居中对齐。")]),s("h3",{attrs:{id:"element-removeattribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-removeattribute","aria-hidden":"true"}},[t._v("#")]),t._v(" Element.removeAttribute()")]),s("p",[s("code",[t._v("Element.removeAttribute")]),t._v("方法用于从当前元素节点移除属性。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// HTML 代码为")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// <div id="div1" align="left" width="200px">')]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'div1'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("removeAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'align'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 现在的HTML代码为")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v('// <div id="div1" width="200px">')]),t._v("\n")])]),s("h2",{attrs:{id:"dataset-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dataset-属性","aria-hidden":"true"}},[t._v("#")]),t._v(" dataset 属性")]),s("p",[t._v("有时，需要在HTML元素上附加数据，供 JavaScript 脚本使用。一种解决方法是自定义属性。")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mydiv"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("foo")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("上面代码为"),s("code",[t._v("div")]),t._v("元素自定义了"),s("code",[t._v("foo")]),t._v("属性，然后可以用"),s("code",[t._v("getAttribute()")]),t._v("和"),s("code",[t._v("setAttribute()")]),t._v("读写这个属性。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'mydiv'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nn"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// bar")]),t._v("\nn"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'baz'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("这种方法虽然可以达到目的，但是会使得 HTML 元素的属性不符合标准，导致网页代码通不过校验。")]),s("p",[t._v("更好的解决方法是，使用标准提供的"),s("code",[t._v("data-*")]),t._v("属性。")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mydiv"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-foo")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("然后，使用元素节点对象的"),s("code",[t._v("dataset")]),t._v("属性，它指向一个对象，可以用来操作 HTML 元素标签的"),s("code",[t._v("data-*")]),t._v("属性。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'mydiv'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nn"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),s("span",{attrs:{class:"token comment"}},[t._v("// bar")]),t._v("\nn"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'baz'")]),t._v("\n")])]),s("p",[t._v("上面代码中，通过"),s("code",[t._v("dataset.foo")]),t._v("读写"),s("code",[t._v("data-foo")]),t._v("属性。")]),s("p",[t._v("删除一个"),s("code",[t._v("data-*")]),t._v("属性，可以直接使用"),s("code",[t._v("delete")]),t._v("命令。")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'myDiv'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("除了"),s("code",[t._v("dataset")]),t._v("属性，也可以用"),s("code",[t._v("getAttribute('data-foo')")]),t._v("、"),s("code",[t._v("removeAttribute('data-foo')")]),t._v("、"),s("code",[t._v("setAttribute('data-foo')")]),t._v("、"),s("code",[t._v("hasAttribute('data-foo')")]),t._v("等方法操作"),s("code",[t._v("data-*")]),t._v("属性。")]),s("p",[t._v("注意，"),s("code",[t._v("data-")]),t._v("后面的属性名有限制，只能包含字母、数字、连词线（"),s("code",[t._v("-")]),t._v("）、点（"),s("code",[t._v(".")]),t._v("）、冒号（"),s("code",[t._v(":")]),t._v("）和下划线（"),s("code",[t._v("_")]),t._v(")。而且，属性名不应该使用"),s("code",[t._v("A")]),t._v("到"),s("code",[t._v("Z")]),t._v("的大写字母，比如不能有"),s("code",[t._v("data-helloWorld")]),t._v("这样的属性名，而要写成"),s("code",[t._v("data-hello-world")]),t._v("。")]),s("p",[t._v("转成"),s("code",[t._v("dataset")]),t._v("的键名时，连词线后面如果跟着一个小写字母，那么连词线会被移除，该小写字母转为大写字母，其他字符不变。反过来，"),s("code",[t._v("dataset")]),t._v("的键名转成属性名时，所有大写字母都会被转成连词线+该字母的小写形式，其他字符不变。比如，"),s("code",[t._v("dataset.helloWorld")]),t._v("会转成"),s("code",[t._v("data-hello-world")]),t._v("。")])])}],!1,null,null,null);a.default=e.exports}}]);