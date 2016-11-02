(function(){
  // var rongInstance;//还是设置为局部变量好，方便在页面任何一个位置直接调用融云相关代码。
  var RongCloud = {
    //只需要调用一次
    initSDK: function () {
      var rongInstance = api.require('rongCloud2');
      rongInstance.init(function (ret, err) {
        if(ret){
          console.log("init success");
        }
      });
    },

    //设置接收消息监听器，init方法之后，connect方法之前设置
    // 所有接收到的消息/通知/状态都由这个监听器处理，包括：私聊/讨论组/群组/聊天室/其他各种自定义消息等等
    initGlobalMessageListener: function (api) {
      var rongInstance = api.require('rongCloud2');
      rongInstance.setOnReceiveMessageListener(function (ret, err) {
        if (ret) {
          // alert(JSON.stringify(ret));
          //将监听到的消息再发送出去，其他页面接收
          api.sendEvent({
            name: "receivedMessage",
            extra: {
              result: ret.result
            }
          });
          console.log(JSON.stringify(ret.result));
        }
      });
    },

    initConnect: function (token,api) {
      var rongInstance = api.require('rongCloud2');
      rongInstance.connect({
        token: '' + token
      },function(ret,err){
        if(ret.status == 'success'){
          // api.toast({msg:ret.result.userId});
          setTimeout(function(){api.toast({msg:"connect success",duration:2000,position:"bottom"});},2000);
          api.sendEvent({
            name:"updateConversationList"
          })
        }else if (ret.status == 'error')
          api.toast({ msg: JSON.stringify(err) });
      });
    },

    fake_data : [
        {imageURL:"../image/bottombtn0301.png",user_name:"卫青",user_id:15,token:"tUWnIGag78X8D6djA/MRj/TWfezLYv9HHPfUP7cLko7jtOyu7hGXLT6dMyIfIrcI5JOSSuafe3IPcMk3jUtyow==",password:"CNEzNR4dSEPT4nqwq5clkCb0g8Le8cWjcycoz3lzaWd1LIlmcM7BjBqr6nJ0CSkJrZdbPNFgWg0S2rLZNWrqizWlb8aAPF4P6yVWpN0UyVg2zHRrHdOAaCmA2KcE8BLgmAcnw5THpPQ6tS21rJj3RatDAYoeyv+4T9kFMKZKQyQ=",phone_number:15014600031,gravatar_url:"http://imgsrc.baidu.com/forum/w%3D580/sign=5db90deab27eca80120539efa1219712/a37a929759ee3d6dba532c0241166d224e4ade2f.jpg"},
        {imageURL:"../image/bottombtn0401.png",user_name:"卫子夫",user_id:16,token:"KJMDdbbHW1nOF1QpPrklzPTWfezLYv9HHPfUP7cLko7jtOyu7hGXLaSg8OfsrBYcFPqmPjOJAgcPcMk3jUtyow==",password:"CNEzNR4dSEPT4nqwq5clkCb0g8Le8cWjcycoz3lzaWd1LIlmcM7BjBqr6nJ0CSkJrZdbPNFgWg0S2rLZNWrqizWlb8aAPF4P6yVWpN0UyVg2zHRrHdOAaCmA2KcE8BLgmAcnw5THpPQ6tS21rJj3RatDAYoeyv+4T9kFMKZKQyQ=",phone_number:15014600032,gravatar_url:"http://v1.qzone.cc/avatar/201309/13/20/59/52330c3e104d9472.jpg%21200x200.jpg"},
        {imageURL:"../image/bottombtn0202.png",user_name:"刘彻",user_id:17,token:"GeGVD5LkCdv87fnz00NMwOLcsy+rG/ahVLf2r+3Q9d1P4s7Xd3Z0pAdlw4C5gQtuGa7qJ+OOHRI=",password:"CNEzNR4dSEPT4nqwq5clkCb0g8Le8cWjcycoz3lzaWd1LIlmcM7BjBqr6nJ0CSkJrZdbPNFgWg0S2rLZNWrqizWlb8aAPF4P6yVWpN0UyVg2zHRrHdOAaCmA2KcE8BLgmAcnw5THpPQ6tS21rJj3RatDAYoeyv+4T9kFMKZKQyQ=",phone_number:15014600033,gravatar_url:"http://v1.qzone.cc/avatar/201508/30/00/39/55e1e026dc781749.jpg%21200x200.jpg"},
        {imageURL:"../image/bottombtn0102.png",user_name:"霍去病",user_id:18,token:"mH+xDzQUMXQKzmbkSbajyMfCP5Eo2ZnJwF7OEvjcqsrRIZGK/NA9M1rbaVI79Rstd11DYDd5UVn8s0IYZpmA2w==",password:"CNEzNR4dSEPT4nqwq5clkCb0g8Le8cWjcycoz3lzaWd1LIlmcM7BjBqr6nJ0CSkJrZdbPNFgWg0S2rLZNWrqizWlb8aAPF4P6yVWpN0UyVg2zHRrHdOAaCmA2KcE8BLgmAcnw5THpPQ6tS21rJj3RatDAYoeyv+4T9kFMKZKQyQ=",phone_number:15014600034,gravatar_url:"http://v1.qzone.cc/avatar/201508/23/15/27/55d975f0e0b78668.jpg%21200x200.jpg"}
    ],

    selectUser:function(userId){
      for(var ij =0;ij<RongCloud.fake_data.length;ij++){
        if(userId == RongCloud.fake_data[ij].user_id){
          return RongCloud.fake_data[ij];
        }
      }
    },

    kickOutUser:function(userId){
      for(var i = 0;i<RongCloud.fake_data.length;i++){
        if(RongCloud.fake_data[i].user_id == userId){
          RongCloud.fake_data.splice(i,1);
          return RongCloud.fake_data;
        }
      }
    },

    getCurrentUser:function(){
      return JSON.parse(localStorage.getItem("user"));
    },

  };

  window.RongCloud = RongCloud;
  return RongCloud;
})();