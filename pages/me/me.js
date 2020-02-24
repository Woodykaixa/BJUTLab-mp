const {
    $Toast
} = require('../../iview/base/index');
const app=getApp();
Page({
    data: {
        fixedId: "18074104",
		fixedPw:"18074104",
        index: "homepage",
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

	showToast: () => {
		$Toast({
			content: "你点击了一条预约记录"
		});
	},
	handleChange({
		detail
	}) {
		this.setData({
			current: detail.key
		});
	},
	onLoad:()=>{
		
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})