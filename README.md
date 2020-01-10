### restful
> 规范前端调用后端的接口。
> 中后台少代码或者无代码。
> 客户端通过四个HTTP动词（get、post、put、delete），对服务器端资源进行操作，实现”表现层状态转化”。
>http://localhost:3000/api/user。
>调用统一的api接口，仅仅是http动词的不同而实现不同的操作 不需要那么多的规约，url地址中只包含名词 
```js
    GET /blog/getArticles --> GET /blog/Articles 获取所有文章
    GET /blog/addArticles --> POST /blog/Articles 添加一篇文章
    GET /blog/editArticles --> PUT /blog/Articles 修改一篇文章
    GET /rest/api/deleteArticles?id=1 --> DELETE /blog/Articles/1 删除一篇文章
```
>loader.js自动读取model文件夹下的文件，创建与文件名同名的表(model--->user)
>api.js 使用get,create,update,del等操作数据库的方法
>router.js 接口规约 get,post,put,delete对应不同的方法