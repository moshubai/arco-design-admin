import Mock from 'mockjs';
import { isSSR } from '@/utils/is';
import setupMock from '@/utils/setupMock';
import { generatePermission } from '@/router/permission';

if (!isSSR) {
  Mock.XHR.prototype.withCredentials = true;

  setupMock({
    setup: () => {
      // 用户信息
      const userRole = window.localStorage.getItem('userRole') || 'admin';
      Mock.mock(new RegExp('/api/user/userInfo'), () => {
        return Mock.mock({
          name: 'admin',
          avatar:
            'https://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
          email: 'wangliqun@email.com',
          job: 'frontend',
          jobName: '前端开发工程师',
          organization: 'Frontend',
          organizationName: '前端',
          location: 'beijing',
          locationName: '北京',
          introduction: '王力群并非是一个真实存在的人。',
          personalWebsite: 'https://www.arco.design',
          verified: true,
          phoneNumber: /177[*]{6}[0-9]{2}/,
          accountId: /[a-z]{4}[-][0-9]{8}/,
          registrationTime: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          permissions: generatePermission(userRole),
        });
      });

      // 登录
      Mock.mock(new RegExp('/api/user/login'), (params) => {
        const { userName, password } = JSON.parse(params.body);
        if (!userName) {
          return {
            status: 'error',
            msg: '用户名不能为空',
          };
        }
        if (!password) {
          return {
            status: 'error',
            msg: '密码不能为空',
          };
        }
        if (userName === 'admin' && password === 'admin') {
          return {
            status: 'ok',
            data: {
              token:
                'eyJzdWIiOiIzMCIsImV4cCI6MTcyMTgwMjAzNCwiZ3ctYWNjb3VudC1pbmZvIjoie1widGlja2V0XCI6bnVsbCxcIm1vYmlsZVwiOm51bGwsXCJ0ZW5hbnRJZFwiOm51bGwsXCJpZFwiOlwiMzBcIixcInR5cGVcIjowLFwiYWRtaW5GbGFnXCI6bnVsbCxcIm1hcFwiOm51bGwsXCJlbWFpbFwiOlwi5LyB5Lia566h55CG5ZGYXCIsXCJ1c2VybmFtZVwiOm51bGwsXCJzdGF0dXNcIjpudWxsfSIsInRva2VuX2xvZ2luX3RpbWUiOjE3MjE3ODQwMzQsIl9vbmxpbmVfdXNlcl8iOiIzMCIsIl9vbmxpbmVfaW5kZXhfIjoyMCwiX29ubGluZV91c2VyX3V1aWRfIjoiMTIxM2Y5MGEtNmJjZi00Nzc4LTgyNTItZTJjOWI0NmY0MWZhIn0',
              role: 'admin',
            },
          };
        }
        return {
          status: 'error',
          msg: '账号或者密码错误',
        };
      });
    },
  });
}
