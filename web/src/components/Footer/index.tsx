/*
 * @Description: 公共页脚版权
 * @Version: 2.0
 * @Author: 白雾茫茫丶
 * @Date: 2022-09-08 11:09:03
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-11 22:45:31
 */
import { DefaultFooter } from '@ant-design/pro-components';
import { Icon } from '@umijs/max';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{ background: 'none' }}
      copyright={`${currentYear} 齐大胜 by xworker@foxmail.com`}
      links={[
        {
          key: '齐大胜',
          title: '齐大胜',
          href: 'https://xworker.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <Icon
              icon="ri:github-fill"
              style={{ display: 'inline-block', fontSize: 16, verticalAlign: 'middle' }}
            />
          ),
          href: 'https://github.com/qidasheng369/react-admin/',
          blankTarget: true,
        },
        {
          key: 'Vue3 Admin',
          title: 'Vue3 Admin',
          href: 'https://github.com/qidasheng369/vue3-admin/',
          blankTarget: true,
        },
        {
          key: 'Next Admin',
          title: 'Next Admin',
          href: 'https://github.com/qidasheng369/next-admin/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
