/*
 * @Description: ProLayout API
 * @Version: 2.0
 * @Author: 白雾茫茫丶
 * @Date: 2023-09-14 15:16:33
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-11 22:41:47
 */
import { HeaderProps } from '@ant-design/pro-components';
import { Icon } from '@umijs/max';

import type { UmiIcon } from '@/utils/types';

// 渲染图标
const renderIcon = (icon: UmiIcon, color: string) => (
  <Icon icon={icon} style={{ fontSize: '40px', color }} />
);

/* 跨站点导航列表 */
export const appList: HeaderProps['appList'] = [
  {
    icon: 'https://react-admin.xworker.icu/static/image/2023-09-12/abf837e0-d149-48f0-8d0a-c078d74adfff.jpeg',
    title: '齐大胜',
    desc: '记录学习，记录生活',
    url: 'https://xworker.icu/',
    target: '_blank',
  },
  {
    icon: 'https://hot.baiwumm.com/logo.svg',
    title: '今日热榜',
    desc: '汇聚全网热点，热门尽览无余',
    url: 'https://hot.baiwumm.com/',
    target: '_blank',
  },
  {
    icon: 'https://dream-site.cn/_vercel/image?url=%2Flogo.svg&w=1536&q=100',
    title: 'Dream Site',
    desc: '致力于打造程序员的梦中情站',
    url: 'https://dream-site.cn/',
    target: '_blank',
  },
  {
    icon: renderIcon('ri:github-fill', '#000000'),
    title: 'baiwumm',
    desc: '立志成为一名优秀的前端工程师',
    url: 'https://github.com/baiwumm/',
    target: '_blank',
  },
  {
    icon: renderIcon('local:gitee', '#C71D23'),
    title: 'baiwumm',
    desc: '立志成为一名优秀的前端工程师',
    url: 'https://gitee.com/baiwumm/',
    target: '_blank',
  },
  {
    icon: renderIcon('local:juejin', '#006CFF'),
    title: '大胜的掘金',
    desc: '星光不问赶路人，岁月不负有心人',
    url: 'https://juejin.cn/user/984795790719005/',
    target: '_blank',
  },
  {
    icon: 'https://vue3.baiwumm.com/logo.png',
    title: 'Vue3 Admin',
    desc: '基于 Vue3 + Nest.js  开发的全栈后台应用',
    url: 'https://vue3.baiwumm.com/',
    target: '_blank',
  },
  {
    icon: 'https://cdn.baiwumm.com/project/vue2-admin/logo.svg',
    title: 'Vue2 Admin',
    desc: '基于 Vue2.0 + ElementUI 的后台解决方案',
    url: 'https://vue2.baiwumm.com/',
    target: '_blank',
  },
  {
    icon: renderIcon('ri:vuejs-fill', '#41B883'),
    title: 'vue3-element-table',
    desc: '基于 Vue3 + Element-plus 封装的 Table 组件',
    url: 'https://ele-plus-table.baiwumm.com/',
    target: '_blank',
  },
  {
    icon: renderIcon('ri:vuejs-fill', '#41B883'),
    title: 'vue3-element-form',
    desc: '基于 Vue3 + Element-plus 封装的 Form 组件',
    url: 'https://ele-plus-form.baiwumm.com/',
    target: '_blank',
  },
];
