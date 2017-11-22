import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import apiRouter from './api' //api
import query from './common/mysql/db' //数据库连接句柄
import http from 'http'

const app = express();
const server = http.createServer(app);
server.listen(3000,'0.0.0.0');
//解析表单POST数据
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());
app.use('/api',apiRouter);
global.query = query;

module.exports = app;