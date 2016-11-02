(function (window, undefined) {
    "use strict";
    var businessDialog = function () {
    };
    businessDialog.prototype = {
        params: {
            msg: "",
            buttons: ["取消", "发送"]
        },
        show: function (params, callback) {
            var self = this;
            var msgHTML = params.msg ? '<div class="aui-dialog-body">' + params.msg + '</div>' : '<div class="aui-dialog-body">' + self.params.msg + '</div>';
            var buttonsHTML =
                '<div class="aui-dialog-btn" tapmode button-index="0">' + "取消" + "</div>" +
                '<div class="aui-dialog-btn" tapmode button-index="1">' + "发送" + "</div>";
            var footerHTML = '<div class="aui-dialog-footer">' + buttonsHTML + "</div>";

            var dialogHTML = '<div class="aui-dialog">' + msgHTML + footerHTML + "</div>";
            document.body.insertAdjacentHTML('beforeend', dialogHTML);

            //监听点击事件
            var dialogButtons = document.querySelectorAll(".aui-dialog-btn");
            if (dialogButtons) {
                dialogButtons[0].onclick = function(){
                    self.close();
                    return;
                }
                dialogButtons[1].onclick = function(){
                    callback();
                    self.close();
                    return;
                }

            }
            self.open();
        },
        open: function () {
            if (!document.querySelector(".aui-dialog"))return;
            var self = this;
            document.querySelector(".aui-dialog").style.marginTop = "-" + Math.round(document.querySelector(".aui-dialog").offsetHeight / 2) + "px";
            if (!document.querySelector(".aui-mask")) {
                var maskHtml = '<div class="aui-mask"></div>';
                document.body.insertAdjacentHTML('beforeend', maskHtml);
            }
            // document.querySelector(".aui-dialog").style.display = "block";
            setTimeout(function () {
                document.querySelector(".aui-dialog").classList.add("aui-dialog-in");
                document.querySelector(".aui-mask").classList.add("aui-mask-in");
                document.querySelector(".aui-dialog").classList.add("aui-dialog-in");
            }, 10)
            document.querySelector(".aui-mask").addEventListener("touchmove", function (e) {
                e.preventDefault();
            })
            document.querySelector(".aui-dialog").addEventListener("touchmove", function (e) {
                e.preventDefault();
            })
            return;
        },
        close: function () {
            var self = this;
            document.querySelector(".aui-mask").classList.remove("aui-mask-in");
            document.querySelector(".aui-dialog").classList.remove("aui-dialog-in");
            document.querySelector(".aui-dialog").classList.add("aui-dialog-out");
            if (document.querySelector(".aui-dialog:not(.aui-dialog-out)")) {
                setTimeout(function () {
                    if (document.querySelector(".aui-dialog"))document.querySelector(".aui-dialog").parentNode.removeChild(document.querySelector(".aui-dialog"));
                    self.open();
                    return true;
                }, 200)
            } else {
                document.querySelector(".aui-mask").classList.add("aui-mask-out");
                document.querySelector(".aui-dialog").addEventListener("webkitTransitionEnd", function () {
                    self.remove();
                })
                document.querySelector(".aui-dialog").addEventListener("transitionend", function () {
                    self.remove();
                })
            }
        },

        remove: function () {
            if (document.querySelector(".aui-dialog"))document.querySelector(".aui-dialog").parentNode.removeChild(document.querySelector(".aui-dialog"));
            if (document.querySelector(".aui-mask")) {
                document.querySelector(".aui-mask").classList.remove("aui-mask-out");
            }
            return true;
        }
    };
    window.businessDialog = businessDialog;
})(window, undefined);

