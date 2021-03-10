# BFC概念
> BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于普通流。通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

## 触发BFC
### 只要元素满足下面任一条件即可触发 BFC 特性：
1. body 根元素
2. 浮动元素：float除none以外的值
3. 绝对定位元素： position(fixed||absolute)
4. display: inline-block || table-cell || flex
5. overflow除visible以外的值（hidden || auto || scroll）
