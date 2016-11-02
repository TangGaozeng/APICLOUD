//接口配置
var INTERFACE = new Array();
var API_URL = "http://dev.nawanr.com/Api/";


//登录
INTERFACE['LOGIN'] = API_URL + 'User/login';
//获取短信验证码
INTERFACE['SMS_CODE'] = API_URL + 'User/getVerify';
//注册
INTERFACE['REGISTER'] = API_URL + 'User/register';
//获取他人详情
INTERFACE['PERSON_INFO'] = API_URL + 'User/getPersonInfo';
//1.1 手机号码搜索添加好友
INTERFACE['ADD_SEARCH_FRIENDS'] = API_URL + 'Search/addSearchFriends';
//我的好友列表
INTERFACE['FRIEND_LIST'] = API_URL + 'SocialFriend/myFriendList';
//获取token
INTERFACE['GET_TOKEN'] = API_URL + 'RongCloudServer/getToken';
//群聊--创建群组
INTERFACE['CREATE_GROUP'] = API_URL + 'User/createGroup';
//加入群组
INTERFACE['JOIN_GROUP'] = API_URL + 'User/joinGroup';
//退群
INTERFACE['QUIT_GROUP'] = API_URL + 'RongCloudServer/signOutGroup';
//解散群
INTERFACE['DISMISS_GROUP'] = API_URL + 'RongCloudServer/dismissGroup';
//修改群名称
INTERFACE['MDF_GROUP_NAME'] = API_URL + 'SocialGroup/editGroupName';
//修改群公告
INTERFACE['MDF_GROUP_NOTICE'] = API_URL + 'SocialGroup/editGroupNotice';
//设置群消息面打扰
INTERFACE['GROUP_MSG_DISTURB'] = API_URL + 'SocialMember/setGroupIsDisturb';
//设置群置顶
INTERFACE['SET_GROUP_TOP'] = API_URL + 'SocialMember/setGroupIsTop';
//获取群信息
INTERFACE["GET_GROUP_INFO"] = API_URL + "SocialGroup/getGroupInfo";
//申请添加好友
INTERFACE['APPLY_ADD_FRIEND'] = API_URL + 'SocialFriend/addFriend';
//上传用户头像
INTERFACE['UPLOAD_USER_PHOTO'] = API_URL + 'User/setUserAdver';
//申请添加新好友的列表
INTERFACE['APPLY_FRIEND_LIST'] = API_URL + 'SocialFriend/newFriendList';
//接受并同意对方加为好友
INTERFACE['ACCEPT_FRIEND'] = API_URL + 'SocialFriend/agreeFriend';
//统计等待同意好友数量
INTERFACE['WAIT_ACCEPT_NUM'] = API_URL + 'SocialFriend/countNewFriend';
//我的常用联系人列表
INTERFACE['OFTEN_CONTACT_LIST'] = API_URL + 'SocialFriend/getMyContactList';
//我的公司列表
INTERFACE['MY_ORGANIZATION'] = API_URL + 'User/myCompanyList';
//我所属公司下的所有部门
INTERFACE['MY_ORG_DEPARTMENT'] = API_URL + 'User/getMyCompanyDepartmentList';
//查看个人资料
INTERFACE['MY_DATA'] = API_URL + 'PersonCenter/userInformation';
//获取地区列表
INTERFACE['select_address'] = API_URL + 'PersonCenter/regionsList';
//扫一扫加好友
INTERFACE['SCAN_ADD_FRIEND'] = API_URL + 'SocialFriend/scanAddFriend';
//修改个人资料
INTERFACE['AMEND_MY_DATA'] = API_URL + 'PersonCenter/editUserInfo';
//获取我创建的或者加入的群组列表
INTERFACE['MY_GROUP'] = API_URL + 'SocialGroup/mySocialGroup';
//查看我的（个人中心首页）
INTERFACE['MINE_INDEX'] = API_URL + 'PersonCenter/UserIndex';
//获取我的银行卡列表
INTERFACE['GET_BANK_CARD_LIST'] = API_URL + 'PersonCenter/getBankCardList';
//检验是否绑定银行卡
INTERFACE['CHECK_BIND_CARD'] = API_URL + 'PersonCenter/checkBindBank';
//上传用户头像
INTERFACE['UPLOAD_USER_FACE'] = API_URL + 'User/setUserAdver';
//绑定银行卡
INTERFACE['BIND_BANK_CARD'] = API_URL + 'PersonCenter/addBankCard';
//解绑银行卡
INTERFACE['DEL_BANK_CARD'] = API_URL + 'PersonCenter/delBankCard';
//检验是否设置支付密码
INTERFACE['CHECK_IS_PAYPASS'] = API_URL + 'PersonCenter/checkIspayPass';
//设置支付密码
INTERFACE['SET_PAY_PW'] = API_URL + 'PersonCenter/setPayPassword';
//修改支付密码
INTERFACE['CHANGE_PAY_PW'] = API_URL + 'PersonCenter/editPayPassword';
//忘记支付密码
INTERFACE['FORGET_PAY_PASS'] = API_URL + 'PersonCenter/forgetPayPass';
//冻结资金记录表
INTERFACE['FROZEN_RECORD'] = API_URL + 'PersonCenter/freezeLog';
//交易记录表
INTERFACE['TRANSACTION_RECORD'] = API_URL + 'PersonCenter/financeLog';
//验证原密码
INTERFACE['CHECK_OLD_PASS'] = API_URL + 'PersonCenter/checkOldPass';
//重新绑定手机号
INTERFACE['RELATION_MOBILE'] = API_URL + 'PersonCenter/relationMobile';
//校验验证码
INTERFACE['CHECK_VERIFY'] = API_URL + 'User/checkVerify';
//修改密码
INTERFACE['CHANGE_LOGIN_PASSWORD'] = API_URL + 'PersonCenter/editLoginPass';
//请求生成支付宝支付订单
INTERFACE['ALIPAY_CONFIG'] = API_URL + 'AlipayPayRsa/alipayConfig';
//用户实名认证
INTERFACE['NAME_AUTHENTICATION'] = API_URL + 'PersonCenter/userValidate';
//提现
INTERFACE['WIDTHDRAW_MONEY'] = API_URL + 'PersonCenter/withdrawal';
//建群的搜索
INTERFACE['CREATE_GROUP_SEARCH'] = API_URL + 'SocialGroup/createSearchChat';
//检验是否实名认证
INTERFACE['IS_NAME_AUTHENTICATION'] = API_URL + 'PersonCenter/checkRealName';
//默认的头像
DEFAULT_AVATAR = 'widget://image/message/tx2.png';

var SERVER_API = {
    groupMemberList: API_URL + "SocialGroup/groupMemberList",
    joinGroup: API_URL + 'User/joinGroup',
    getCompanyStaffList: API_URL + 'User/getCompanyStaffList',
    getMyCompanyDepartmentList: API_URL + 'User/getMyCompanyDepartmentList',
    kickOutGroup: API_URL + 'User/kickOutGroup',
    signOutGroup:API_URL + "User/signOutGroup"
};
var AJAX = {
    //AJAX请求超时设置
    TIMEOUT: 3000,

    //AJAX请求失败的全局回调
    ERROR: function(err){
        var errcode = err.code;
        if(api.connectionType.toLowerCase() == 'none'){
            api.alert({msg:'没有连接到网络'});
            return;
        }
        if(errcode == 0){
            api.alert({msg:'连接错误'});
            return;
        }
        if(errcode == 1){
            api.alert({msg:'请求超时'});
            return;
        }
        if(errcode == 2){
            api.alert({msg:'授权错误'});
            return;
        }
        if(errcode == 3){
            api.alert({msg:'数据类型错误'});
            return;
        }
        api.alert({msg:'请求失败'});
    },
};

//获取自己的user_id
function getSelfUserId() {
    return JSON.parse(localStorage.getItem('user')).data.user_id;
}

//获取自己的user_password
function getSelfUserPwd() {
    return localStorage.getItem('password');
}

//删除数组的某个值
function removeItFromArr(arr,val) {
    var index = arr.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
}

//判断手机号是否合法
function telRuleCheck(string) {
    var pattern = /^1[34578]\d{9}$/;
    if (pattern.test(string)) {
        return true;
    }
    return false;
}

//产生一个指定长度的随机的字符串
function randomString(len) {
    len = len || 32;
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

//下载图片到本地并缓存
function downloadMyPhotoAndSaveLocal(user_id,url,callback) {
    api.download({
        url: url,
        report: true,
        cache: true,
        allowResume: true
    }, function(ret, err) {
        if (ret.state == 1) {
            localStorage.setItem('Photo'+user_id,ret.savePath);
            callback();
        }
    });
}

//sentEvent选中人或部门的事件
function sentChosenMemberEvent(num) {
    var num = parseInt(localStorage.getItem('isChosenNum')) + parseInt(num);
    localStorage.setItem('isChosenNum',num);
    api.sendEvent({
        name: 'chosenMember'
    });
}

//sentEvent部门导航栏
function sentCompanyOrDepartName(compan_id,company_name,department_id,department_name) {
    console.log(compan_id+","+company_name+","+department_id+","+department_name);
    api.sendEvent({
        name: 'navChangeEvent',
        extra: {
            company_id:compan_id,
            company_name:company_name,
            department_id:department_id,
            department_name:department_name
        }
    });
}

//记录选中的人
function recordChosen(str) {
    var items = document.getElementsByClassName(str);
    Thenjs.each(items,function (defer,value) {
        value.onchange = function () {
            var sql;
            var userType = this.getAttribute('data-userType');
			var _this = $api.dom(this,'.aui-checkbox');
            if(userType == 'person'){
                var user_mobile = this.getAttribute('data-userMobile');
                var user_id = this.getAttribute('data-userId');
                //var user_mobile = this.getAttribute('data-userMobile').(/\s+/g,""); 去空格失败
                //var mobile = user_mobile.split(" ");  去空格失败
                //user_mobile = mobile.join('');
                var mobile = user_mobile.split("-");
                user_mobile = mobile.join('');

                if(!telRuleCheck(user_mobile)){
                    this.checked = false;
                    _this.checked = false;
                    api.toast({
                        msg: '目前仅支持手机号码',
                        duration: 1000,
                        location: 'bottom'
                    });
                    return ;
                }else{
                    console.log('你选中的用户user_id为:' + user_id);
                    if(!_this.checked){
                        this.checked = false;
                        sql = "delete from chosenPersonList where user_id=" + user_id;
                        executeSqlSync('user',sql);
                        sentChosenMemberEvent(-1);
                        var selectAllInput = document.getElementById('selectAllInput');
                        if(selectAllInput){
                            isNeedSelectAll();
                        }
                    }else{
                        this.checked = true;
                        sql = "insert into chosenPersonList (user_id,user_mobile,user_type) values (" + user_id + ",\'" + user_mobile + "\','person');";
                        executeSqlSync('user',sql);
                        sentChosenMemberEvent(1);
                    }
                }
            }
            if(userType == 'department'){
                var department_id = this.getAttribute('data-departmentId');
                var company_id = this.getAttribute('data-companyId');
                var total_staff = this.getAttribute('data-totalStaff');
                var total_department = this.getAttribute('data-sonDeprtNum');
				var department_name = this.getAttribute('data-departName');
				console.log('你选中的部门department_id为:' + department_name);
                if(!_this.checked){
                    this.checked = false;
                    sql = "delete from chosenDepartList where department_id=\'" + department_id +"\'";
                    executeSqlSync('user',sql);
                    sentChosenMemberEvent(-(total_staff));
                    $api.dom(this,'.next').style.color = '#4877e7';
                    var selectAllInput = document.getElementById('selectAllInput');
                    if(selectAllInput){
                        isNeedSelectAll();
                    }
                }else{
                    this.checked = true;
                    sql = "insert into chosenDepartList (department_id,department_name,company_id,total_staff,total_department,user_type) values (" + department_id +",\'" + department_name + "\'," + company_id + ","+ total_staff + "," + total_department + ",'department');";
                    executeSqlSync('user',sql);
                    sentChosenMemberEvent(total_staff);
                    $api.dom(this,'.next').style.color = '#a5b6fb';
                }
            }
        };
    })
    .then(function (defer, result) {
        console.log(result);
    });
}

//根据选择的项来确定全选按钮是否需要选中
function isNeedSelectAll() {
    var selectAllInput = document.getElementById('selectAllInput');
    var auiCheckbox = document.getElementsByClassName('aui-checkbox');
    var len = auiCheckbox.length;
    for(var i=1;i<len;i++){
        if(!auiCheckbox[i].checked){
            selectAllInput.checked = false;
            return;
        }
    }
    selectAllInput.checked = true;
}

//SQLite 打开或创建数据库(异步)
function openDatabase(dbname,callback) {
    var db = api.require('db');
    db.openDatabase({
        name: dbname
    }, function(ret, err) {
        if (ret.status) {
            localStorage.setItem('sqliteIsOpend',true);
            console.log('创建或打开数据库（异步）成功');
            callback(ret);
        } else {
            alert(JSON.stringify(err));
        }
    });
}

//SQLite 查询(异步)
function selectSql(dbname,sql,callback) {
    var db = api.require('db');
    db.selectSql({
        name: dbname,
        sql: sql
    }, function(ret, err) {
        if (ret.status) {
            callback(ret);
        } else {
            alert(JSON.stringify(err));
        }
    });
}

//SQLite 执行sql语句(异步)
function excuteSql(dbname,sql,callback) {
    var db = api.require('db');
    db.executeSql({
        name: dbname,
        sql: sql
    }, function(ret, err) {
        if (ret.status) {
            callback(ret);
        } else {
            alert(JSON.stringify(err));
        }
    });
}

//打开数据库，若数据库不存在则创建数据库（同步）
function openDatabaseSync(dbname) {
    var db = api.require('db');
    var ret = db.openDatabaseSync({
        name: dbname
    });
    console.log('创建或打开数据库（同步）' + JSON.stringify(ret));
    return ret;
}

//执行 sql（同步）
function executeSqlSync(dbname, sql) {
    var db = api.require('db');
    var ret = db.executeSqlSync({
        name: dbname,
        sql: sql
    });
    console.log('执行 sql（同步）' + JSON.stringify(ret));
    return ret;
}

//查询 sql（同步）
function selectSqlSync(dbname,sql) {
    var db = api.require('db');
    var ret = db.selectSqlSync({
        name: dbname,
        sql: sql
    });
    console.log('查询 sql（同步）' + JSON.stringify(ret));
    return ret;
}

//获取公司下的所有部门列表
function getDepartmentList(user_id,user_password,company_id,department_id,type,object_id,callback) {
    var params;
    //通讯录查看组织架构
    if(type == 1){
        params = {user_id:user_id,user_password:user_password,company_id:company_id,department_id:department_id,type:type};
    }
    //创建群 选择成员的组织架构
    if(type == 2 && object_id == ''){
        params = {user_id:user_id,user_password:user_password,company_id:company_id,department_id:department_id,type:type};
    }
    //给已有的群加好友
    if(type == 2 && object_id != ''){
        params = {user_id:user_id,user_password:user_password,company_id:company_id,department_id:department_id,type:type,object_id:object_id};
    }
    api.ajax({
        url: INTERFACE['MY_ORG_DEPARTMENT'],
        method: 'post',
        dataType: 'json',
        data: {
            values: params
        },
        timeout: AJAX.TIMEOUT,
    }, function(ret, err) {
        if (ret) {
            callback(ret);
        } else {
            AJAX.ERROR(err);
        }
    });
}

//退出登录时清理缓存
function cleanCache() {
    //清理自己的二维码缓存
    localStorage.removeItem('myCodePath');
    //清理userInfo信息
    localStorage.removeItem('user');
    //清理密码
    localStorage.removeItem('password');
    //清理登录者的手机号码
    localStorage.removeItem('mobile');
}

//融云的全局定义
var rongCloud_appKey = 'p5tvi9dstslx4';
var rongCloud_appSecret = '9b4huvdJMpi5B';

function fnReady() {
    is_login(); //是否登陆
    pageInit();
    fnReadyHeader();
    fnReadyBack();
    fnReadyOpenWin();
}

//判断是否登陆
function is_login() {
    var loginInfo = JSON.parse(localStorage.getItem('user'));
    var _user_password = localStorage.getItem('password');
    console.log(_user_password);
    if (!loginInfo || !_user_password || _user_password == "null") {
        api.openWin({
            name : 'login',
            url : '../mine/login.html'
        });
    }

    return false;

}

var headerHeight = 0, footerHeight = 0;

function fnReadyHeader() {
    var header = $api.byId('header'), footer = $api.byId('footer');

    if (header) {
        //$api.fixStatusBar(header);
        headerHeight = $api.offset(header).h;
    }

    if (footer) {
        footerHeight = $api.offset(footer).h;
    }
}

function fnReadyBack() {
    var buttons = $api.domAll('.back');
    for (var i = 0; i < buttons.length; i++) {
        $api.attr(buttons[i], 'tapmode', 'active');
        buttons[i].onclick = function() {
            api.closeWin({
                duration : 500
            });
            //打了个补丁，妈蛋的设计,状态栏颜色不同
            if (api.winName == 'checkuserinfo') {
                var statusBarAppearance = api.statusBarAppearance;
                if (statusBarAppearance) {
                    api.setStatusBarStyle({
                        style : 'light',
                        color : '#4977e7'
                    });
                }
            }
        };
    }

    api.parseTapmode();
}

function fnReadyOpenWin() {
    var buttons = $api.domAll('.open-win');
    for (var i = 0; i < buttons.length; i++) {
        $api.attr(buttons[i], 'tapmode', 'active');
        buttons[i].onclick = function() {
            var winName = $api.attr(this, 'win');
            var callback = $api.attr(this, 'callback');
            var pageParam = {};
            if (callback) {
                pageParam = window[callback]();
            }

            var param = $api.attr(this, 'param');
            if (param) {
                pageParam = JSON.parse(param);
            }

            api.openWin({
                name : winName,
                url : './' + winName + '.html',
                vScrollBarEnabled : false,
                pageParam : pageParam,
                duration : 500
            });
        };
    }

    api.parseTapmode();
}

function fnReadyFrame() {
    api.openFrame({
        name : api.winName + '_frame',
        url : './' + api.winName + '_frame.html',
        bounces : false,
        vScrollBarEnabled : false,
        rect : {
            x : 0,
            y : headerHeight,
            w : 'auto',
            h : api.winHeight - headerHeight - footerHeight
        },
        pageParam : api.pageParam
    });
}

//打开指定的frame
function fnDetailFrame(frameName) {
    api.openFrame({
        name : frameName + '_frame',
        url : 'widget://html/' + frameName + '_frame.html',
        bounces : true,
        rect : {
            x : 0,
            y : headerHeight,
            w : 'auto',
            h : api.winHeight - headerHeight - footerHeight
        },
        pageParam : api.pageParam
    });
}


//rsa 加密
var UtilService = {
    doEncrypt : ( function() {
        var key, modulus, exponent, maxDigits;

        function initRSA(maxDigits, modulus, exponent) {
            if (key)
                return;
            if (!exponent || !modulus || !maxDigits) {
                modulus = document.getElementById("rsa_modulus").value;
                exponent = document.getElementById("rsa_exponent").value;
                maxDigits = document.getElementById("rsa_maxDigits").value;
            }
            setMaxDigits(parseInt(maxDigits));
            //   key = new RSAKeyPair("10001","10001","D15AA98C75B32630C8191CDF9156F55091053C101C58965B2A1A00C3404553B8D953E81BEB22A46200911BE4BDE7A9BB839D01F6819379B60C68725AA479CF1C081E300F1D5DE197FCDE3CADF68F5A5CCC97BEA93F0B2C857691BBE9E28D2BC1F25B7BEBA950D3507376C442B8E6E163018C4800A2B33CE28A53863713AFA133",1024);
            key = new RSAKeyPair(exponent, exponent, modulus, 1024);
        }

        return function(maxDigits, modulus, exponent, password) {
            initRSA(maxDigits, modulus, exponent);

            if (!password) {
                password = arguments[0];
            }
            if (!password) {
                return '';
            }
            var Result = password;
            if (password.length !== 0 && password.length < 30) {
                Result = encryptedString(key, password, RSAAPP.PKCS1Padding, RSAAPP.RawEncoding);
            }
            var _tt = window.btoa(Result);
            return _tt;
        };
    }())
};

function pageInit() {
    //设置状态栏的样式
    var header = $api.byId('header');
    $api.fixStatusBar(header);
    var statusBarAppearance = api.statusBarAppearance;
    if(statusBarAppearance){
        api.setStatusBarStyle({
            style: 'light',
            //color: '#4977e7'
        });
    }
}

function doubleBackCloseApp() {
    //监听手机的返回键
    var flag = false;
    api.addEventListener({
        name : 'keyback'
    }, function() {
        if (!flag) {
            api.toast({
                msg : '再按一次退出',
                duration : 1500,
                location : 'bottom'
            });
            flag = true;
            setTimeout(function() {
                flag = false;
            }, 1500);
        } else {
            api.closeWidget({
                silent : true
            });
        }
    });
}
//弹窗
function exitTip(callback) {
    var shield = document.getElementsByClassName("shield")[0];
    var exitTips = document.getElementsByClassName("exitTips")[0];
    var exitY = document.getElementById("exitY");
    var exitN = document.getElementById("exitN");
    if(exitTips){
        if(shield){
            shield.style.display = "block";
        }
        exitTips.style.display = "block";
    }
    if(exitN){
        exitN.onclick = function () {
            if(shield){
                shield.style.display = "none";
            }
            exitTips.style.display = "none";
        }
    }
    if(exitY){
        exitY.onclick = function () {
            if(shield){
                shield.style.display = "none";
            }
            exitTips.style.display = "none";
            if(callback){
                callback();
            }
        }
    }
}
function ajaxRequest(_url, datas, callBack, limit, isLoad) {
    //默认的参数
    if (!arguments[3])
        limit = false;
    if (!arguments[4])
        isLoad = false;

    if (api.connectionType.toLowerCase() == 'none') {
        api.toast({
            msg : '…(⊙o⊙)…断网了…',
            duration : 3000,
            location : 'button'
        });

        var ret = {
            code : '-1'
        };
        callBack(ret);
        return;
    }
    if (!limit)
        limit = false;
    //判断相同方法请求不能大于3秒
    if (limit) {
        if (((new Date().getTime() - reqTime.getTime()) / 1000) < 4) {
            api.toast({
                msg : '频繁访问，休息一下喝杯茶...',
                duration : 3000,
                location : 'button'
            });

            var ret = {
                code : '-2'
            };
            callBack(ret);
            return;
        }
    }
    //加载提示
    if (isLoad) {
        api.showProgress({
            title : '加载中...',
            modal : true
        });

    }

    api.ajax({
        url : _url,
        method : "post",
        cache : false,
        timeout : 60,
        dataType : 'json',
        data : {
            values : datas
        }
    }, function(ret, err) {

        //如果有连接网络，去不能上网的话
        //		if (err.statusCode == 0) {
        //			H.$toast(err.body);
        //		}
        //		try {
        //			ret.lastTimestamp && ($api.setStorage('lastTimestamp', ret.lastTimestamp));
        //		} catch(e) {
        //		}
        //加载提示
        if (isLoad) {
            api.hideProgress();
        }
        callBack(ret, err);
    });
}

function serverResponseMsg(ret){
    api.toast({msg:"服务器响应信息: " + ret.msg,location:"bottom",duration:2000});
    console.log(JSON.stringify(ret));
}