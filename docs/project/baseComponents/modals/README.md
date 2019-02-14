---
title: 模态框
copyright: true
date: 2019-01-06 22:57:32
comments: true
categories:
- Java
tags:
- Java API
---

## 通用模态框

> 方法

----------

```html
	<fade-down-modal :show="show">
		<div style="width:360px;height:300px;background:#fff;">

		</div>
	</fade-down-modal>
```

----------

```js
	import FadeDownModal from '_c/modals/fadeDown'
	export default {
		components:{
			FadeDownModal,
		},
	}
```

----------

## 通用弹窗

> 方法

----------

```html
	<default-modal ref="box"
        :title="``"
        :modalWidth="600"
        :confirmTxt="`保存`"
        @confirm="confirm">
        <div class=modal-body>
            
        </div>
    </default-modal>
```

----------

```js
	import DefaultModal from "_c/modals/defaultModal"
	export default {
		components:{
			DefaultModal,
		},
	}
```

----------

## 全局提示弹窗

> 方法

----------

```js
	window.$Message.show({
		title: '',
		type: 'error',
		msg: res.msg
	})
```

----------

## 全局提示

> 方法

----------

```js
	window.$msg({
		type: 'success',
		message: '操作成功',
		showClose: true
	})
```

----------
