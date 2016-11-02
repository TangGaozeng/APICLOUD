(function () {
    var UIChatBox = {
        open: function (chatBox, targetId, type) {
            chatBox.open({
                placeholder: '',
                maxRows: 4,
                emotionPath: 'widget://image/emotion',
                texts: {
                    recordBtn: {
                        normalTitle: '按住 说话',
                        activeTitle: '松开 结束'
                    }
                },
                styles: {
                    inputBar: {
                        borderColor: '#d9d9d9',
                        bgColor: '#f2f2f2'
                    },
                    inputBox: {
                        borderColor: '#B3B3B3',
                        bgColor: '#FFFFFF'
                    },
                    emotionBtn: {
                        normalImg: 'widget://image/chatBox/face1.png'
                    },
                    extrasBtn: {
                        normalImg: 'widget://image/chatBox/add1.png'
                    },
                    keyboardBtn: {
                        normalImg: 'widget://image/chatBox/key1.png'
                    },
                    speechBtn: {
                        normalImg: 'widget://image/chatBox/speed.png'
                    },
                    recordBtn: {
                        normalBg: '#c4c4c4',
                        activeBg: '#999999',
                        color: '#000',
                        size: 14
                    },
                    indicator: {
                        target: 'both',
                        color: '#c4c4c4',
                        activeColor: '#9e9e9e'
                    }
                },
                extras: {
                    titleSize: 10,
                    titleColor: '#a3a3a3',
                    btns: [{
                        title: '图片',
                        normalImg: 'widget://image/chatBox/album1.png',
                        activeImg: 'widget://image/chatBox/album2.png'
                    }, {
                        title: '拍照',
                        normalImg: 'widget://image/chatBox/paizhao.png',
                        activeImg: 'widget://image/chatBox/cam2.png'
                    }, {
                        title: '转账',
                        normalImg: 'widget://image/chatBox/zhuangzhang.png',
                        activeImg: 'widget://image/chatBox/key2.png'
                    }, {
                        title: "定位",
                        normalImg: "widget://image/chatBox/loc1.png",
                        activeImg: "widget://image/chatBox/loc2.png"
                    }, {
                        title: "名片",
                        normalImg: "widget://image/chatBox/mingpian.png",
                        activeImg: "widget://image/chatBox/add2.png"
                    }]
                }
            }, function (ret) {
                //点击附加功能面板
                if (ret.eventType == 'clickExtras') {
                    //alert("用户点击了第"+ ret.index +"个按钮");
                    if (ret.index == 0) {
                        //图片
                        api.getPicture({
                            sourceType: 'library',
                            encodingType: 'jpg',
                            mediaValue: 'pic',
                            destinationType: 'url',
                            allowEdit: true,
                            quality: 70,
                            targetWidth: 320,
                            saveToPhotoAlbum: false
                        }, function (ret, err) {
                            if (ret) {
                                api.sendEvent({
                                    name: 'sendMessage',
                                    extra: {
                                        targetId: targetId,
                                        objectName: 'RC:ImgMsg',
                                        conversationType: type,
                                        message: ret.data
                                    }
                                });
                                api.sendEvent({name: 'scrollToBottom'});//通知页面滚滚滚
                            }
                        });
                    } else if (ret.index == 1) {
                        //拍照
                        api.getPicture({
                            sourceType: 'camera',
                            encodingType: 'jpg',
                            mediaValue: 'pic',
                            destinationType: 'url',
                            allowEdit: true,
                            quality: 70,
                            targetWidth: 640,
                            saveToPhotoAlbum: false
                        }, function (ret, err) {
                            if (ret) {
                                api.sendEvent({
                                    name: 'sendMessage',
                                    extra: {
                                        targetId: targetId,
                                        objectName: 'RC:ImgMsg',
                                        conversationType: type,
                                        message: ret.data
                                    }
                                });
                                api.sendEvent({name: 'scrollToBottom'});//通知页面滚滚滚
                            }
                        });
                    } else if (ret.index == 2) {
                        // api.toast({msg: "转账功能正在紧张开发中。。。", location: "bottom", duration: 1000});
                        api.sendEvent({
                            name: "sendMessage",
                            extra: {
                                targetId: targetId,
                                objectName: "RC:CmdNtf",
                                conversationType: type,
                                name: "transfer_money",
                                data: "暂时不转账"
                            }
                        });
                    } else if (ret.index == 3) {
                        //开启地图
                        console.log("开启地图");
                        api.openWin({
                            name: "baidu_map",
                            url: "widget://html/message/bmap_win.html",
                            pageParam: {
                                targetId: targetId,
                                conversationType: type
                            }
                        });

                    } else if (ret.index == 4) {
                        if (ret) {
                            console.log("open business card");
                            api.sendEvent({name:"sendUserCard"})
                        }
                    }
                }
                chatBox.closeKeyboard();//关闭键盘

                //点击发送按钮
                if (ret.eventType == 'send' && ret.msg) {
                    //通过sendEvent将发送内容广博，消息页面接收并广播回来
                    //单聊文字消息类型
                    api.sendEvent({
                        name: 'sendMessage',
                        extra: {
                            targetId: targetId,
                            objectName: 'RC:TxtMsg',
                            conversationType: type,
                            message: ret.msg
                        }
                    })
                }
                api.sendEvent({name: 'scrollToBottom'});//通知页面滚滚滚
            });
        },

        record: function (chatBox, targetId, type) {
            chatBox.addEventListener({
                target: 'recordBtn',
                name: 'press'
            }, function (ret, err) {
                console.log("start record");
                api.startRecord({});
                api.sendEvent({name:"startRecording"});
            });
//监听松开录音键
            chatBox.addEventListener({
                target: 'recordBtn',
                name: 'press_cancel'
            }, function (ret, err) {
                //松开后停止录音
                console.log("end record");
                api.stopRecord(function (ret, err) {
                    if (ret && ret.duration > 0) {
                        console.log(JSON.stringify(ret));
                        api.sendEvent({
                            name: 'sendMessage',
                            extra: {
                                targetId: targetId,
                                objectName: 'RC:VcMsg',
                                conversationType: type,
                                message: ret
                            }
                        })
                    }
                });
                api.sendEvent({name:"endRecording"});
                api.sendEvent({name: 'scrollToBottom'});//通知页面滚滚滚
            });
        },

        adjustFrame: function (api,chatBox, headerHeight, frameName) {
            chatBox.addEventListener({
                target: 'inputBar',
                name: 'move'
            }, function (ret, err) {
                setChatInit(api,frameName, headerHeight, ret.panelHeight + ret.inputBarHeight);
            });

            chatBox.addEventListener({
                target: 'inputBar',
                name: 'change'
            }, function (ret, err) {
                setChatInit(api,frameName, headerHeight, ret.panelHeight + ret.inputBarHeight);
            });
        },

        transText: function (text, emotions) {
            var regex = /\[(.*?)\]/gm;
            var textTransed = text.replace(regex, function (match) {
                var imgSrc = emotions[match];
                if (!imgSrc) {/* 说明不对应任何表情,直接返回即可.*/
                    return match;
                }
                // var img = "<img src='" + imgSrc + "' width='" + imgWidth + "' height ='" + imgHeight + ''+"/>";
                var img = "<img src='" + imgSrc + "' width=24 height=24 style='display:inline-block'/>";
                console.log(img);
                return img;
            });
            console.log(textTransed)
            return textTransed;
        },

        getEmotionsPath: function (callback) {
            var jsonPath = "widget://image/emotion/emotion.json";
            //表情的JSON数组
            api.readFile({
                path: jsonPath
            }, function (ret, err) {
                if (ret.status) {
                    var emotionArray = JSON.parse(ret.data);
                    var emotion = {};
                    for (var i in emotionArray) {
                        var emotionItem = emotionArray[i];
                        var emotionText = emotionItem["text"];
                        var emotionUrl = "../../image/emotion/" + emotionItem["name"] + ".png";
                        emotion[emotionText] = emotionUrl;
                    }
                    if ("function" === typeof (callback)) {
                        callback(emotion);
                    }
                }
            });
        },

    };

    function setChatInit(api,frameName, headerHeight, inputAreaHeight) {
        api.setFrameAttr({
            name: frameName,
            rect: {
                x: 0,
                y: headerHeight,
                w: api.winWidth,
                h: api.winHeight - headerHeight - inputAreaHeight
            }
        });
        setTimeout(function () {
            // 通知会话页面滚动到底部
            api.sendEvent({
                name: 'scrollToBottom',
                extra: {}
            });
        }, 50);
    }

    window.UIChatBox = UIChatBox;
    return UIChatBox;
})();
