const {
    $Toast
} = require('../../iview/base/index');
import {
    promisify
} from "miniprogram-api-promise";
const app = getApp();
Page({
    data: {
        fixedId: "18074104",
        fixedPw: "18074104",
        userInfo: {}
    },

    showToast: () => {
        $Toast({
            content: "你点击了一条预约记录"
        });
    },
    onLoad: function() {
        let self = this; //这里要提前声明变量保存this。下面不能直接写this.setData，因为this指向的对象已经发生了变化。
        wx.getUserInfo({
            withCredentials: false,
            lang: 'zh_CN',
            success: function(res) {
                self.setData({
                    userInfo: res.userInfo
                });
            }
        })
    }
})