module.exports = function(app) {
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");   //允许所有跨域请求
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
        res.header("Access-Control-Allow-Methods","POST,GET,PUT,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("X-Powered-By",' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });

    app.use('/index', require('./index/index'))

    app.use('/cart', require('./cart/index'))

    app.use('/order', require('./order/index'))

    app.use('/user', require('./user/index'))

    // app.use('/*', function (req,res,next) {
    //     return res.json({status:'success',data:'访问的接口不存在'});
    // })
};
