# cordova-plugin-alipay-v2
***
### 功能说明
1. 根据支付宝的说明文档的建议，为保证安全，签名都放到后端去做，前端只需要接收后台传入签名字符串，使用该插件调用支付宝SDK完成支付
2. PARTNER_ID：对应开放平台中应用的PARTNER_ID，主要用于iOS平台xcode构建URL Schemes

***
### 支持平台
1. android （alipaySdk-20161129.jar）
2. iOS

***
### 安装
###### 在线安装
    cordova plugin add cordova-plugin-alipay --variable PARTNER_ID=[your PARTNER_ID]

    cordova plugin add https://github.com/king12555/cordova-plugin-alipay.git --variable PARTNER_ID=[your PARTNER_ID]

###### 本地安装
下载插件到本地

    cordova plugin add /your/local/path --variable PARTNER_ID=[your PARTNER_ID]
    
***
### 使用 API
    // 第一步：订单在服务端签名生成订单信息，具体请参考官网进行签名处理
    var payInfo  = "xxxx";

    // 第二步：调用支付插件            
    cordova.plugins.alipay.payment(payInfo,function success(e){},function error(e){});

     //e.resultStatus  状态代码  e.result  本次操作返回的结果数据 e.memo 提示信息
     //e.resultStatus  9000  订单支付成功 ;8000 正在处理中  调用function success
     //e.resultStatus  4000  订单支付失败 ;6001  用户中途取消 ;6002 网络连接出错  调用function error
     //当e.resultStatus为9000时，请去服务端验证支付结果
                /**
                 * 同步返回的结果必须放置到服务端进行验证（验证的规则请看https://doc.open.alipay.com/doc2/
                 * detail.htm?spm=0.0.0.0.xdvAU6&treeId=59&articleId=103665&
                 * docType=1) 建议商户依赖异步通知
                 */
