---
title: 校验中心
copyright: true
date: 2019-01-02 20:42
comments: true
categories:
- 
tags:
- 
---

## 通行证校验

> 调用用方法

```js
  let re = this.$validateCenter.passportNameWhds(val)
  if(re.res == false){
      wrong = re.msg
      return false;
  }
```

----------

##  网吧名校验

> 调用方法

```js
  let re = this.$validateCenter.barName(val)
  if(re.res == false){
      wrong = re.msg
      return false;
  }
```

##  密码校验

::: tip
密码大于等于6位数，小于等于16位
:::

> 调用方法

```js
  let re = this.$validateCenter.passwordWhds(val)
  if(re.res == false){
      wrong = re.msg
      return false;
  }
```


##  手机号校验

::: tip
手机为十一位的纯数字
:::

> 调用方法

```js
  let re = this.$validateCenter.phoneNum(val)
  if(re.res == false){
      wrong = re.msg
      return false;
  }
```


##  邮箱校验

> 调用方法

```js
  let re = this.$validateCenter.email(val)
  if(re.res == false){
      wrong = re.msg
      return false;
  }
```


##  短信验证码校验

::: tip
验证码为6位数
:::

> 调用方法

```js
  let re = this.$validateCenter.smsCode(val)
  if(re.res == false){
      wrong = re.msg
      return false;
  }
```


##  图形验证码校验

::: tip
验证码为4位
:::

> 调用方法

```js
  let re = this.$validateCenter.imgCode(val)
  if(re.res == false){
      wrong = re.msg
      return false;
  }
```

