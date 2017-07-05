/*
 * @Author: wj77998
 * @Date:   2017-07-04 18:21:28
 * @Email:  wj77998@qq.com
 * @Last Modified by:   wj77998
 * @Last Modified time: 2017-07-05 15:57:23
 */

'use strict';

export default [{
    label: '轮胎',
    value: "lt",
    children: [
	    {
	        label: '查找轮胎',
	        value: 'ah.callapp(["toTire"])&&https://m.qccr.com/searchTire'
	    }, {
	        label: '马牌轮胎',
	        value: 'ah.callapp([["tireBrandList","209"]])'
	    }, {
	        label: '固铂轮胎',
	        value: 'ah.callapp([["tireBrandList","231"]])'
	    }, {
	        label: '固特异轮胎',
	        value: 'ah.callapp([["tireBrandList","205"]])'
	    }, {
	        label: '米其林轮胎',
	        value: 'ah.callapp([["tireBrandList","204"]])'
	    }, {
	        label: '邓禄普轮胎',
	        value: 'ah.callapp([["tireBrandList","207"]])'
	    }, {
	        label: '倍耐力轮胎',
	        value: 'ah.callapp([["tireBrandList","203"]])'
	    }, {
	        label: '固铂轮胎',
	        value: 'ah.callapp([["tireBrandList","231"]])'
	    }, {
	        label: '锦湖轮胎',
	        value: 'ah.callapp([["tireBrandList","241"]])'
	    }, {
	        label: '普利司通轮胎',
	        value: 'ah.callapp([["tireBrandList","206"]])'
	    }, {
	        label: '韩泰轮胎',
	        value: 'ah.callapp([["tireBrandList","208"]])'
	    }, {
	        label: '佳通轮胎',
	        value: 'ah.callapp([["tireBrandList","210"]])'
	    }, {
	        label: '玛吉斯轮胎',
	        value: 'ah.callapp([["tireBrandList","216"]])'
	    }
    ]
}, {
    label: '保养',
    value : "by",
    children: [
	    {
	        label: '保养',
	        value: 'ah.callapp([["carToMaintainD","{\\"upkeepCategoryId\\":\\"1\\",\\"promote\\":\\"true\\"}"]])'
	    }, {
	        label: '小保养',
	        value: 'ah.callapp([["carToMaintainD","{\\"upkeepCategoryId\\":\\"5\\",\\"promote\\":\\"true\\"}"]])'
	    }, {
	        label: '机油',
	        value: 'ah.callapp([["goodList","{\\"id\\":\\"102\\",\\"name\\":\\"机油\\",\\"categoryCode\\":\\"ABALAC\\"}"]])'
	    }, {
	        label: '电瓶',
	        value: ''
	    }, {
	        label: '雨刷',
	        value: 'ah.callapp([["carToMaintainD","{\\"upkeepCategoryId\\":\\"26\\",\\"promote\\":\\"false\\"}"]])'
	    }
    ]
}, {
    label: '洗车',
    value : "xc",
    children: [
	    {
	        label: '普通洗车-5座',
	        value: 'ah.callapp([["storeServiceList","{\\"serverId\\":\\"-2\\",\\"type\\":\\"2\\",\\"categoryCode\\":\\"ACABAE\\"}","普通洗车-5座"]])'
	    }, {
	        label: '普通洗车-7座',
	        value: 'ah.callapp([["storeServiceList","{\\"serverId\\":\\"-2\\",\\"type\\":\\"2\\",\\"categoryCode\\":\\"ACABAC\\"}","普通洗车-7座"]])'
	    }, {
	        label: '精细洗车-5座',
	        value: 'ah.callapp([["storeServiceList","{\\"serverId\\":\\"-2\\",\\"type\\":\\"2\\",\\"categoryCode\\":\\"ACABAD\\"}","精细洗车-5座"]])'
	    }, {
	        label: '精细洗车-7座',
	        value: 'ah.callapp([["storeServiceList","{\\"serverId\\":\\"-2\\",\\"type\\":\\"2\\",\\"categoryCode\\":\\"ACABAB\\"}","精细洗车-7座"]])'
	    }, {
	        label: '全车抛光',
	        value: 'ah.callapp([["storeServiceList","{\\"serverId\\":\\"-2\\",\\"type\\":\\"2\\",\\"categoryCode\\":\\"ACABAF\\"}","全车抛光"]])'
	    }, {
	        label: '内饰清洗',
	        value: 'ah.callapp([["storeServiceList","{\\"serverId\\":\\"-2\\",\\"type\\":\\"2\\",\\"categoryCode\\":\\"ACABAG\\"}","内饰清洗"]])'
	    }, {
	        label: '空调除臭',
	        value: 'ah.callapp([["storeServiceList","{\\"serverId\\":\\"-2\\",\\"type\\":\\"2\\",\\"categoryCode\\":\\"ACABAJ\\"}","空调除臭"]])'
	    }, {
	        label: '空调清洗',
	        value: 'ah.callapp([["storeServiceList","{\\"serverId\\":\\"-2\\",\\"type\\":\\"2\\",\\"categoryCode\\":\\"ACABBE\\"}","空调清洗"]])'
	    }, {
	        label: '全车打蜡',
	        value: 'ah.callapp([["storeServiceList","{\\"serverId\\":\\"-2\\",\\"type\\":\\"2\\",\\"categoryCode\\":\\"ACABAS\\"}","全车打蜡"]])'
	    }
    ]
}]
