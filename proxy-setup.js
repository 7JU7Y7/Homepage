// proxy-setup.js 或放在项目入口处（需是 ESM）
import { setGlobalDispatcher, ProxyAgent } from 'undici';

// 通过环境变量读取代理（HTTP_PROXY/HTTPS_PROXY），或直接写死 URI
const proxyUrl = process.env.HTTPS_PROXY || 'http://127.0.0.1:7890';
const dispatcher = new ProxyAgent(proxyUrl);
setGlobalDispatcher(dispatcher);

console.log('Global undici dispatcher set to use proxy:', proxyUrl);
