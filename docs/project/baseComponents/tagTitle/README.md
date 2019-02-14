---
title: 头部公共组件
copyright: true
date: 2019-01-05 22:57:32
comments: true
categories:
- Java
tags:
- Java API
---

## 头部的公共组件

> 方法

----------

```html
	<div class=header>
		<header-tag :title="'修改绑定手机'"></header-tag>
	</div>
```

----------

```js
	import HeaderTag from '_c/tagTitle/headerTag',
	export default {
		components:{
			HeaderTag,
		},
	}
```

----------

```css
	.header {
		padding-left: 30px;
		text-align: left;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #d9dee4;
	}
```