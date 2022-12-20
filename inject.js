function ManageUser_i(tuserALLid) {

    //return false;
    alert("inject sucess");
    event.stopPropagation();

    //fun_loading(true);

    //fun_loading(false);

    var tuserid = tuserALLid.split('_')[2];
    var tusername = tuserALLid.split('_')[3];


    var htmlstr = "<div class='inroom_zone' style='text-align: center;'>" +
                    "<div>" +
                        "<p id='title_manageUser' style='margin:8px auto;color: #FFF;' class='oneline'>" + tusername + "</p>" +
                        "<button id='manageUser_Del' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>删除</button><br/>" +
                        "<button id='manageUser_ShowInfo' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>在线记录</button><br/>" +
                        "<button id='manageUser_doBlack' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>拉黑</button><br/>" +
                        "<button id='manageUser_warningReport' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>举报</button><br/>" +
                        "<button id='manageUser_DelAll' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>清空此列表</button>" +
                        "<button id='get_chat_link_inject' class='btn btn-success' style='margin:5px 3px;width:110px;border-radius: 1px;padding:8px;' type='button'>获取对话链接</button>" +
                    "</div>" +
                  "</div>";

    manageUser = layer.open({
        type: 1,
        title: "",
        skin: 'demo-class',
        shadeClose: true,
        closeBtn: 0,
        //offset: ['30px'],
        area: ['130px', '280px'],
        content: htmlstr
    });


    $("#manageUser_Del").click(function () {

        DelUser(tuserALLid);

    });

    $("#manageUser_ShowInfo").click(function () {

        if ($.cookie('randomVipCode')) {
            sendJson('ShowUserLoginInfo', tuserid, true);
        }
        else {
            layer.msg('此为VIP特权功能，请先购买VIP激活码哦');
        }

    });

    $("#manageUser_doBlack").click(function () {

        warning_Black();

    });

    $("#manageUser_warningReport").click(function () {

        warning_Black();

    });

    $("#manageUser_DelAll").click(function () {

        // 当前好友列表类型 0：未收藏，1：已收藏
        if (CurrUserType == '0') {
            Del_User_list('random', '确定清空未收藏记录？<br/>任何一方清空，对应双方都会删除<br/>如误操作，可联系客服恢复');
        }
        else {
            Del_User_list('heart', '确定清空已收藏记录？<br/>任何一方清空，对应双方都会删除<br/>如误操作，可联系客服恢复');
        }

    });


}