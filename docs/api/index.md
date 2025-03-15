# API 参考

ToMoon 提供了强大的 API 接口，允许开发者与应用程序进行交互，扩展其功能，或将其集成到其他系统中。本文档提供了 API 的详细说明和使用示例。

## API 概述

ToMoon API 是一组 RESTful 接口，使用 HTTP 请求进行通信。API 支持以下操作：

- 管理自动化任务和工作流
- 控制浏览器自动化脚本
- 访问和使用本地工具功能
- 管理定时任务和调度
- 获取系统状态和日志信息
- 配置应用程序设置

## 认证

所有 API 请求都需要进行认证。ToMoon 使用 API 密钥和密钥进行认证。您可以在应用程序的设置中生成 API 密钥。

### 获取 API 密钥

1. 打开 ToMoon 应用程序
2. 进入"设置" > "API 管理"
3. 点击"生成新密钥"
4. 设置密钥的权限和描述
5. 点击"确认"生成密钥
6. 保存生成的 API 密钥和密钥（注意：密钥只会显示一次）

### 认证方式

API 请求需要在 HTTP 头中包含以下信息：

```
X-TM-API-KEY: 您的API密钥
X-TM-SIGNATURE: 请求签名
X-TM-TIMESTAMP: 请求时间戳
```

签名生成方法：

```javascript
const crypto = require('crypto');

function generateSignature(apiSecret, timestamp, method, endpoint, body = '') {
  const message = `${timestamp}${method}${endpoint}${body}`;
  return crypto.createHmac('sha256', apiSecret).update(message).digest('hex');
}
```

## 请求格式

API 请求使用标准的 HTTP 方法：

- `GET`: 获取资源
- `POST`: 创建资源
- `PUT`: 更新资源
- `DELETE`: 删除资源

请求和响应数据格式为 JSON。

## 基本端点

API 的基本 URL 为：

```
http://localhost:9527/api/v1
```

::: warning 注意
API 默认只接受来自本地的请求。如果需要从远程访问 API，请在设置中配置允许的 IP 地址。
:::

## 响应格式

所有 API 响应都使用以下格式：

```json
{
  "success": true,
  "data": {
    // 响应数据
  },
  "message": "操作成功"
}
```

如果请求失败，响应格式为：

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "错误描述"
  }
}
```

## 错误代码

常见错误代码及其含义：

| 错误代码 | 描述 |
|---------|------|
| `AUTH_FAILED` | 认证失败 |
| `INVALID_PARAMS` | 无效的参数 |
| `RESOURCE_NOT_FOUND` | 资源不存在 |
| `PERMISSION_DENIED` | 权限不足 |
| `RATE_LIMIT_EXCEEDED` | 超出请求频率限制 |
| `INTERNAL_ERROR` | 内部服务器错误 |

## 速率限制

为了防止滥用，API 请求有速率限制。默认限制为每分钟 60 个请求。您可以在响应头中查看剩余的请求次数：

```
X-TM-RATE-LIMIT-REMAINING: 59
X-TM-RATE-LIMIT-RESET: 1609459200
```

## API 类别

ToMoon API 分为以下几个类别：

- [用户 API](/api/user)：管理用户账户和设置
- [自动化 API](/api/automation)：管理和控制自动化任务
- [工具 API](/api/tools)：访问和使用本地工具功能

请点击上面的链接查看各类别的详细文档。

## 示例

以下是一个启动浏览器自动化脚本的示例：

```javascript
const axios = require('axios');
const crypto = require('crypto');

// 配置
const apiKey = 'YOUR_API_KEY';
const apiSecret = 'YOUR_API_SECRET';
const baseUrl = 'http://localhost:9527/api/v1';

// 生成签名
function generateSignature(apiSecret, timestamp, method, endpoint, body = '') {
  const message = `${timestamp}${method}${endpoint}${body}`;
  return crypto.createHmac('sha256', apiSecret).update(message).digest('hex');
}

// 启动浏览器自动化脚本
async function startBrowserAutomation(scriptId) {
  const endpoint = '/automation/browser/scripts/' + scriptId + '/run';
  const method = 'POST';
  const timestamp = Date.now().toString();
  const body = JSON.stringify({});
  const signature = generateSignature(apiSecret, timestamp, method, endpoint, body);
  
  try {
    const response = await axios({
      method,
      url: `${baseUrl}${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
        'X-TM-API-KEY': apiKey,
        'X-TM-SIGNATURE': signature,
        'X-TM-TIMESTAMP': timestamp
      },
      data: body
    });
    
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

startBrowserAutomation('script-123');
```

## SDK

为了简化 API 的使用，我们提供了以下语言的 SDK：

- [JavaScript](https://github.com/tomoon-project/tomoon-js)
- [Python](https://github.com/tomoon-project/tomoon-python)
- [Go](https://github.com/tomoon-project/tomoon-go)

## 支持

如果您在使用 API 时遇到问题，可以：

- 查阅[常见问题](/api/faq)
- 在[GitHub](https://github.com/tomoon-project/tomoon/issues)上提交问题
- 联系我们的[技术支持](/contact) 