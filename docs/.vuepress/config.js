module.exports = {
    title: '维护大师开发文档', // 设置网站标题
    description: '文档主要这个项目的开发结构、公共方法、公共组件、注意事项、待优化事项', //描述
    dest: './dist',   // 设置输出目录
    host:"192.168.103.17",
    port: 2233, //端口
    themeConfig: { //主题配置
      // 添加导航栏
      locales: {
        '/': {
          label: '简体中文',
          selectText: '选择语言',
          editLinkText: '编辑此页',
          lastUpdated: '上次更新',
          nav: [
            { text: '主页', link: '/' }, // 导航条
            {
              text: "project",
              link: '/project/develop/'
            },
          ],
          // 为以下路由添加侧边栏
          sidebar:{
            '/project/': [
              {
                title: '开发结构',
                collapsable: true,
                children: [
                  '/project/develop/',
                ]
              },
              {
                title: '公共方法',
                children: [
                  '/project/baseMethods/domFn/',
                  '/project/baseMethods/ajax/',
                  '/project/baseMethods/time/',
                  '/project/baseMethods/url/',
                  '/project/baseMethods/validateCenter/',
                ]
              },
              {
                title: '公共组件',
                children: [ 
                  '/project/baseComponents/tagTitle/',
                  '/project/baseComponents/switch/',
                  '/project/baseComponents/citySelector/',
                  '/project/baseComponents/search/',
                  '/project/baseComponents/modals/',
                  '/project/baseComponents/noData/',
                ]
              },
              {
                title: '账号分类权限',
                children: [
                  '/project/account/',
                ]
              },
              {
                title: '流程处理',
                children: [
                  '/project/process/',
                ]
              },
              {
                title: '注意事项',
                children: [
                  '/project/precautions/',
                ]
              },
              {
                title: '待优化事项',
                children: [
                  '/project/optimization/',
                ]
              },
            ]
          }
        }
        }
      },
      
  }