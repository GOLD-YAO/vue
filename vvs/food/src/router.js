import Vue from 'vue'
import VueRouter from 'vue-router'
import * as cookie from './lib/cookie'

Vue.use(VueRouter)

const index = resolve => {
    require.ensure(['./views/index'], () => {
        resolve(require('./views/index'))
    })
}

const shop = resolve => {
    require.ensure(['./views/shop'], () => {
        resolve(require('./views/shop'))
    })
}

const payFood = resolve => {
    require.ensure(['./views/pay/payFood'], () => {
        resolve(require('./views/pay/payFood'))
    })
}

const orderFood = resolve => {
    require.ensure(['./views/user/order_food'], () => {
        resolve(require('./views/user/order_food'))
    })
}

const usercenter = resolve => {
    require.ensure(['./views/usercenter'], () => {
        resolve(require('./views/usercenter'))
    })
}

const login = resolve => {
    require.ensure(['./views/login'], () => {
        resolve(require('./views/login'))
    })
}

const order = resolve => {
    require.ensure(['./views/user/order'], () => {
        resolve(require('./views/user/order'))
    })
}

const orderThird = resolve => {
    require.ensure(['./views/user/order_third'], () => {
        resolve(require('./views/user/order_third'))
    })
}

const userinfo = resolve => {
    require.ensure(['./views/user/userinfo'], () => {
        resolve(require('./views/user/userinfo'))
    })
}

const payProduct = resolve => {
    require.ensure(['./views/pay/pay'], () => {
        resolve(require('./views/pay/pay'))
    })
}

const orderDeposit = resolve => {
    require.ensure(['./views/user/order_deposit'], () => {
        resolve(require('./views/user/order_deposit'))
    })
}

const orderQrcode = resolve => {
    require.ensure(['./views/user/order_qrcode'], () => {
        resolve(require('./views/user/order_qrcode'))
    })
}

const orderQrcodeInfo = resolve => {
    require.ensure(['./views/user/qrcode_info'], () => {
        resolve(require('./views/user/qrcode_info'))
    })
}

const payDeposit = resolve => {
    require.ensure(['./views/pay/pay_deposit'], () => {
        resolve(require('./views/pay/pay_deposit'))
    })
}

var routers = new VueRouter({
    mode: 'history',
    base: '/food/',
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/shop',
            component: shop
        },
        {
            path: '/usercenter',
            component: usercenter,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/order',
            component: order,
            meta: { requiresAuth: true }
        },
        {
            path: '/order_third',
            component: orderThird,
            meta: { requiresAuth: true }
        },
        {
            path: '/userinfo',
            component: userinfo,
            meta: { requiresAuth: true }
        },
        {
            path: '/pay',
            component: payProduct,
            meta: { requiresAuth: true }
        },
        {
            path: '/payFood',
            component: payFood,
            meta: { requiresAuth: true }
        },
        {
            path: '/order_deposit',
            component: orderDeposit,
            meta: { requiresAuth: true }
        },
        {
            path: '/order_qrcode',
            component: orderQrcode,
            meta: { requiresAuth: true }
        },
        {
            path: '/qrcode_info',
            component: orderQrcodeInfo,
            meta: { requiresAuth: true }
        },
        {
            path: '/payDeposit',
            component: payDeposit,
            meta: { requiresAuth: true }
        },
        {
            path: '/order_food',
            component: orderFood,
            meta: {requiresAuth: true}
        }
    ]
})

routers.beforeEach((to, from, next) => {
    if (cookie.hasCookie('skiId') && !to.query.skiId) {
        next({
            path: to.path,
            query: Object.assign(to.query, { skiId: cookie.getCookie('skiId') })
        })
        return
    }
    /* 检测id没有的话就跳转到首页 */
    if (!cookie.hasCookie('jfyopenid') || !cookie.hasCookie('openid') || !cookie.hasCookie('skiId')) {
        window.location.href = 'http://wei.softykt.com/?skiId=' + to.query.skiId + '&cat=2'
        return
    }
    if (cookie.hasCookie('newscenic')) {
        cookie.delCookie('newscenic')
        cookie.delCookie('userinfo')
    }
    if (cookie.hasCookie('scenicinfo')) {
        document.title = cookie.getCookie('scenicinfo') ? cookie.getCookie('scenicinfo') : '金色飞鹰'
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!cookie.hasCookie('userinfo_' + cookie.getCookie('skiId'))) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default routers
