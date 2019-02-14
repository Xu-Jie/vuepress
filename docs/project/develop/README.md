---
title: 开发结构
copyright: true
date: 2019-01-04 22:57:32
comments: true
categories:
- 
tags:
- 
---

```
src
|————api
|   |——httpApi------------------http的请求地址
|   └──pageApi------------------路由地址路径
|————assets
|   |——img----------------------项目中所需要用的图片存放文件夹
|   └──style--------------------存放项目中所需要用到的公共css样式
|————components-----------------组件库
|————page
|   |——accountSafe--------------账号安全
|   |——accountThaw--------------账号解冻
|   |——barManager---------------网吧管理
|   |   |——barDetails-----------网吧内容
|   |   |——default--------------全部网吧
|   |   |   |——allBar-----------全部网吧
|   |   |   |——groupBar---------网吧分组
|   |   |   |——recentRemote-----最近远程
|   |   |   |——remoteRecord-----远程协助记录
|   |   |   |——searchBar--------搜索后出来的列表
|   |   |   └──serverOffineBar--服务器离线的网吧
|   |   |——modals---------------模态框
|   |   └──msgbox---------------提示弹窗
|   |——emplyeeManage------------员工管理
|   |——home---------------------主体
|
```

## api

api存放的是ajax请求地址

httpApi是http的请求地址

pageApi是路由地址路径

----------

## assets

img就是项目中所需要用的图片存放文件夹

style是存放项目中所需要用到的公共css样式

----------

## components

components是存放项目的公共组件

dropdown是公共的下拉框

modals是公共弹窗，内有公共模态框，全局提示弹窗

noDate是表格暂无数据的组件

pagination是分页的公共组件，所有分页都是引用这个组件的

search是头部的搜索框

selector是城市的三级联动公共组件

switch是开关的组件

tagtitle是头部的公共组件，很多地方都会用到

----------

## page

page是存放页面组件的

### accountSafe是账号安全

    safeLeft是左边部分

    safeRight是右边部分

    progressBar是左边部分的进度条

    modals是弹窗组件

### accountThaw是账号解冻

### barManager是网吧管理

    barDetails是网吧内容
        siderList是侧边菜单栏
        barHeader是头部
        barContent是主要内容
        
    default是全部网吧
        allBar是全部网吧
        groupBar是网吧分组
        recentRemote是最近远程
        remoteRecord是远程协助记录
        searchBar是搜索后出来的列表
        serverOffineBar是服务器离线的网吧

    modals是模态框

    msgbox是提示弹窗

### emplyeeManage是员工管理

    header是头部
    registeredSubAccount是注册子账号和修改子账号的模态框
    sms是短信验证的模态框
    table是表格

### home是主体框架

    homeheader是头部
        menu是头部菜单栏
        usericon是头像

    homesider是侧边栏

    modals是模态框
        feedback是意见反馈模态框
        remoteAssistance是开始协助模态框

### login是登录

### operationLog是操作日志

    header是头部
    table是表格

### register是注册

    terms是注册协议

### reset是忘记密码

    successMsg是提示弹窗

### userInfo是用户信息

### wxBind是未登录绑定微信

----------

## requests是所有请求的方法

    bar是网吧管理的请求

    emplyee是员工管理的请求

    operationLog是操作日志的请求

    plugin是获取插件版本的请求

    safe是账号安全的请求

    user是关于用户的一些请求

----------

## router是路由

## service是一些业务方法和组件

    components是业务组件

    lib是一些业务方法

----------

## store是vuex

## utils是一些封装好的插件和方法



