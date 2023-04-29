
// 右上角触发事件
$('.languageBox').slideUp();
$('.haed_right>span:nth-child(5)').on({
    mouseenter: function () {
        $('.languageBox').slideDown();
    }, mouseleave: function () {
        $('.languageBox').slideUp();
    }
});

//input输入框
// 样式更改
let data = []
$(".input_self").each(function (index, itme) {
    $(itme).focus(function () {
        $(".input_Box").eq(index).css({
            outline: '1px solid #ff6700',
            boxShadow: '0px 0px 3px 0px #ff6700'
        })
        $(".input_Box>label").eq(index).css({
            transform: 'translateY(-0%)',
            top: '10px',
            fontSize: '12px'
        })
    })
    $(itme).blur(function () {
        //输入框是否有内容判断 
        if ($(itme).val()) {
            $(".input_Box>label").eq(index).css({
                transform: 'translateY(-0%)',
                top: '10px',
                fontSize: '12px'
            })
            $(".input_Box>label").eq(index).css({
                color: 'rgb(149, 149, 149)'
            })
            $(".Warningtext").eq(index).css({
                display: 'none'
            })
            data[index] = $(itme).val()
            console.log(data);
            login_button_fun1()

            login_button_fun2();//登录按钮是否可点击函数
        } else {
            $(".input_Box>label").eq(index).css({
                transform: 'translateY(-50%)',
                top: '50%',
                fontSize: '17px',
                color: 'red'
            })
            $(".Warningtext").eq(index).css({
                display: 'initial'
            })
        }
        $(".input_Box").eq(index).css({
            outline: 'none',
            boxShadow: 'none'
        })
    })
})
//手机号码格式验证
let phoneNumber = '';
let phoneNumberbool='';
$('#phoneNumber').focus(function () {
    $(".phone").css({
        outline: '1px solid #ff6700',
        boxShadow: '0px 0px 3px 0px #ff6700'
    })
    $(".phone>label").css({
        transform: 'translateY(-0%)',
        top: '10px',
        fontSize: '12px'
    })
})
$('#phoneNumber').blur(function () {
    $(".phone").css({
        outline: 'none',
        boxShadow: 'none'
    })
    if ($('#phoneNumber').val()) {
        $(".phone>label").css({
            transform: 'translateY(-0%)',
            top: '10px',
            fontSize: '12px'
        })
    } else {
        $(".phone>label").css({
            transform: 'translateY(-50%)',
            top: '50%',
            fontSize: '17px'
        })
    }

})
$('#phoneNumber').change(function () {
    if ($('#phoneNumber').val()) {
        $(".phone>label").css({
            transform: 'translateY(-50%)',
            top: '50%',
            fontSize: '17px'
        })
        let reg = /^[1][3456789][0-9]{9}$/g;
        if (reg.test($('#phoneNumber').val())) {
            phoneNumber = $('#phoneNumber').val()
            phoneNumberbool=true
            login_button_fun2();//登录按钮是否可点击函数
            $(".Warningtext_phone").css({
                display: 'none'
            })
            $(".phone>label").css({
                transform: 'translateY(-0%)',
                top: '10px',
                fontSize: '12px'
            })
        } else {
            $('.Warningtext_phone').html(`手机号码格式错误`);
            $(".Warningtext_phone").css({
                display: 'initial'
            })
        }
    } else {
        $(".phone>label").css({
            transform: 'translateY(-50%)',
            top: '50%',
            fontSize: '17px',
            color: 'red'
        })
        $(".Warningtext_phone").css({
            display: 'initial'
        })
    }
    $(".phone").css({
        outline: 'none',
        boxShadow: 'none'
    })
})

//用户协议
let Agreement_of_consent_bool = '';
$('.Agreement_of_consent').each(function (index, itme) {
    $('.Agreement_of_consent').eq(index).change(function () {
        Agreement_of_consent_bool = $('.Agreement_of_consent').eq(index).prop('checked')
        console.log(Agreement_of_consent_bool);
        login_button_fun1();//登录按钮是否可点击函数
        login_button_fun2();//登录按钮是否可点击函数

    })
})
$('.Agreement_of_consent_Popup').slideUp();
//验证码点击事件
$('#VerificationCodeBox_button').click(function () {
    if (Agreement_of_consent_bool) {
        if (phoneNumber) {
            $('#VerificationCodeBox_button').css({
                color: 'rgb(149, 149, 149)'
            })
            $(".Warningtext_phone").css({
                display: 'none'
            })
            let time = 60;
            var VerificationCodeBox_button_setin = setInterval(() => {
                time--;
                $("#VerificationCodeBox_button").html(`<span id="VerificationCodeBox_button">重新发送&nbsp (${time})</span>`)
                $("#VerificationCodeBox_button").css({
                    display: 'initial'
                })
                console.log(time);
                if (time == 0) {
                    clearInterval(VerificationCodeBox_button_setin)
                }
            }, 1000);
        } else {
            $(".Warningtext_phone").css({
                display: 'initial'
            })
        }
    } else {
        if (Agreement_of_consent_bool) {
            $('.Agreement_of_consent_Popup').slideUp();
        }
        $('.Agreement_of_consent_Popup').slideDown();
        setTimeout(() => {
            $('.Agreement_of_consent_Popup').slideUp();
        }, 2000);
    }
})

//登录框可点击判断
function login_button_fun1() {
    console.log($("#userName").val());
    console.log($("#passWord").val());
    if ($("#userName").val() && $("#passWord").val() && Agreement_of_consent_bool == true) {
        $('.login_button').eq(0).css({
            backgroundColor: '#ff6700'
        })
        console.log('a');
        console.log($('login_button').eq(0));
    } else {
        $('.login_button').eq(0).css({
            backgroundColor: 'rgb(255, 190, 153)'
        })
    }
}
function login_button_fun2() {
    if ($(".countryValue").html() && phoneNumberbool && $("#VerificationCode").val() && Agreement_of_consent_bool == true) {
        $('.login_button').eq(1).css({
            backgroundColor: '#ff6700'
        })
        console.log('a');
        console.log($('login_button').eq(1));
    }
}

//登录框事件
$('.login_button').click(function () {
    console.log(data);
})

// 密码框小眼睛 
$('.mi-input-adornment').eq(0).hide();
$('.mi-input-adornment').eq(1).click(function () {
    $('.mi-input-adornment').eq(0).show();
    $('.mi-input-adornment').eq(1).hide();
    $('#passWord').attr("type", 'text');
})
$('.mi-input-adornment').eq(0).click(function () {
    $('.mi-input-adornment').eq(1).show();
    $('.mi-input-adornment').eq(0).hide();
    $('#passWord').attr("type", 'password');
})

// 注册页面切换
$(".register_switch").click(function () {
    $(".login").css("transform", "translateX(-402px)")
    $(".centerBox_title>span:last-child").css("transform", "translateX(-50px) translateY(15px)")
    $(".registerBox").css("transform", "translateX(0px)")
})
//登录页面切换
$(".login_switch").click(function () {
    $(".login").css("transform", "translateX(0px)")
    $(".centerBox_title>span:last-child").css("transform", "translateX(-102px) translateY(15px)")
    $(".registerBox").css("transform", "translateX(402px)")
})

//注册页国家名字渲染
let countryArr = [
    "中国", "蒙古", "朝鲜", "韩国", "日本", "不丹", "印度", "越南", "老挝", "缅甸", "泰国", "文莱",
    "东帝汶",
    "菲律宾",
    "柬埔寨",
    "新加坡",
    "尼泊尔",
    "马来西亚",
    "马尔代夫",
    "孟加拉国",
    "巴基斯坦",
    "斯里兰卡",
    "印度尼西亚"
]
let countryArrSum = ''
for (let index = 0; index < countryArr.length; index++) {
    countryArrSum += `<div>${countryArr[index]}</div>`
}
$(".country_list").html(countryArrSum);
// 国家/地区下拉弹出框
$(".country_list").slideUp();
$('.country').on({
    click: function () {
        $(".country_list").slideToggle();
        // $('.country>span:nth-child(3)').css({
        //     transform: 'translateY(-50%) rotateZ(90deg)',
        //     color: 'rgb(255, 92, 0)'
        // })
    }
})
$('.country_list div').on({
    mouseenter: function () {
        $('.country_list div').eq($(this).index()).css({
            color: 'black'
        })
    }, mouseleave: function () {
        $('.country_list div').eq($(this).index()).css({
            color: 'rgb(149, 149, 149)'
        })
    },
    click: function () {
        $(".countryValue").html($(this).html())
        $('.country>span:nth-child(3)').css({
            transform: 'translateY(-50%) rotateZ(180deg)',
            color: 'rgb(149, 149, 149)'
        })
    }
})


// 扫码登录
// 移入弹出提示框
$(".Scanning_code_Popup").hide()
$(".Scanning_code").on({
    mouseenter: function () {
        $(".Scanning_code_Popup").show()
    }, mouseleave() {
        $(".Scanning_code_Popup").hide()
    }
})

// 切换到扫码页
$(".Scanning_code").eq(0).on({
    click: function () {
        $(".centerBox").hide()
        $(".centerBox_Scanning_code_Popup").show();
        setTimeout(() => {
            $('.Scanning_code_img>div').css("boxShadow", "inset 0px 0px 0px 100px rgba(0, 0, 0, 0.568)");
            $(".Scanning_code_img>div>div").show()
        }, 5000);
    }
})
// 切换到密码登录页
$(".Scanning_code").eq(1).on({
    click: function () {
        $(".centerBox").show()
        $(".centerBox_Scanning_code_Popup").hide();
    }
    /*   $('.Scanning_code_img>div').css("boxShadow", "inset 0px 0px 0px 0px rgba(0, 0, 0, 0)");
      $(".Scanning_code_img>div>div").css("display", "none"); */

})

//点击刷新二维码
$(".Scanning_code_img>div>div:last-child").click(function () {
    $('.Scanning_code_img>div').css("boxShadow", "inset 0px 0px 0px 0px rgba(0, 0, 0, 0)");
    $(".Scanning_code_img>div>div").hide();
    // 二维码过期时间
    setTimeout(() => {
        $('.Scanning_code_img>div').css("boxShadow", "inset 0px 0px 0px 100px rgba(0, 0, 0, 0.568)");
        $(".Scanning_code_img>div>div").show();
    }, 5000);
})

//常用答疑弹出框 
$('#Common_Q_A').hide();
$(".centerBox_Scanning_code_Popup div:nth-child(3) svg").on({
    mouseenter: function () {
        $('#Common_Q_A').show();
    }, mouseleave() {
        $('#Common_Q_A').hide();
    }
})
