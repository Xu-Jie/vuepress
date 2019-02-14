---
title: 搜索框
copyright: true
date: 2019-01-05 22:57:32
comments: true
categories:
- Java
tags:
- Java API
---

## 搜索框

> 方法

----------

```html
	<search-bar-input @change="searchChange"
                    :placeholder="`搜索网吧名/网吧ID`"
                    @blur="searchBlur"
                    @search="searchBar"></search-bar-input>
```

----------

```js
	import SearchBarInput from '_c/search/searchInputGray'
	export default {
		components:{
			SearchBarInput,
		},
		methods:{
			searchBlur() {
				setTimeout(() => {
					this.searchList = []
				},100)
			},
			searchBar(search) {
            	this.$router.push({
					path: this.$PAGE_API.home.children.barManager.children.index.children.searchBar.path,
				})
				this.$router.push({
					path: this.$PAGE_API.home.children.barManager.children.index.children.searchBar.path + '?search=' + search,
				})
			},
		}
	}
```

----------
