# modalSetting
    模版设置插件

# develop
    npm start

# build 
    npm build

# Usage
    
    渲染保存模版

        modalSetting.render({
            options : [],//组件设置项
            data : {}, //默认数据
            el : 'settingBody',//渲染组件设置的容器id
            componentId : "" //组件id
        });

    监听保存设置
        document.addEventListener('modalSettingUpdata',function(e){
            var _data = e.modalSettingData;
            console.log(_data);
        });

# [demo](http://wj77998.coding.me/modal-setting)

> 说明
    ui组件使用的是ant design
