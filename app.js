import {
    promisify
} from "miniprogram-api-promise";
//app.js
App({
    onLaunch: function() {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        promisify(wx.getSetting)().then((res) => {
            if (res.authSetting['scope.userInfo']) {
                promisify(wx.getUserInfo)().then((res) => {
                    this.globalData.userInfo = res.userInfo;
                    if (this.userInfoReadyCallback) {
                        this.userInfoReadyCallback(res);
                    }
                })
            }
        })

    },
    globalData: {
        userInfo: null,
        tabKey: 'homepage'
    }
})