//数据渲染
let data = [{
  goodsName: '米家落地电风扇',
  goodsName_img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3edbb646a3296374f5fb6e68e0352bfe.jpg?thumb=1&w=120&h=120&f=webp&q=90",
  unitPrice: 299,
  quantity: 1,
  shippers: '小米发货'
}, {
  goodsName: 'FIVE智能刀筷杀菌架  刀筷砧板杀菌架',
  goodsName_img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617250315.59552338.jpg?thumb=1&w=120&h=120",
  unitPrice: 299,
  quantity: 1,
  shippers: '小米自营(有品)'
}, {
  goodsName: '米家防蓝光眼镜钛轻盈 方形  黑色',
  goodsName_img: "https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205201846_ced50cad24a9654fab07a51d533f86e1.png?thumb=1&w=120&h=120&f=webp&q=90",
  unitPrice: 199,
  quantity: 1,
  shippers: '小米发货'
}, {
  goodsName: '米家保温杯弹盖版  白色',
  goodsName_img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1601304253.78328490.jpg?thumb=1&w=120&h=120",
  unitPrice: 99,
  quantity: 1,
  shippers: '小米发货'
}, {
  goodsName: 'Redmi显示器27英寸 2K  黑色',
  goodsName_img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6de3d3e5295b8205bb69b399750af318.jpg?thumb=1&w=120&h=120&f=webp&q=90",
  unitPrice: 1399,
  quantity: 1,
  shippers: '小米发货'
}, {
  goodsName: '小米电视ES43 2022款 43英寸  灰色 43英寸',
  goodsName_img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d6082f2ce57389b9e56a273c2c1ec34.jpg?thumb=1&w=120&h=120&f=webp&q=90",
  unitPrice: 299,
  quantity: 1,
  shippers: '小米发货'
}, {
  goodsName: 'MIX FOLD折叠屏手机  12GB+256GB 黑色',
  goodsName_img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/116ec3aaeac2d41759e7581316a2d978.jpg?thumb=1&w=120&h=120&f=webp&q=90",
  unitPrice: 7999,
  quantity: 1,
  shippers: '小米发货'
}, {
  goodsName: '小米米家蓝牙温湿度计 2  白色',
  goodsName_img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575878680.4593522.jpg?thumb=1&w=120&h=120",
  unitPrice: 299,
  quantity: 1,
  shippers: '小米发货'
}, {
  goodsName: '小米充电宝 20000mAh 50W  黑色',
  goodsName_img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1620459876.60331523.jpg?thumb=1&w=120&h=120",
  unitPrice: 299,
  quantity: 1,
  shippers: '小米发货'
}];
let goodsValueSum = '';
for (let index = 0; index < data.length; index++) {
  goodsValueSum += `
    <tr class="MI_Shipping">
              <td>${data[index].shippers}</td>
            </tr>
            <tr class="goodsBox_tbody_tr public_width">
              <td class="checkSingle">
              <i class="fa fa-check" aria-hidden="true"></i>
                <input type="checkbox" name="" class="checkSingleinput" />
              </td>
              <td class="Tbody_goodsName">
                <span class="goodsName_img">
                  <img
                    src="${data[index].goodsName_img}"
                    alt=""
                  />
                </span>
                <span>${data[index].goodsName}</span>
              </td>
              <td>
                <span class="unitPrice">${data[index].unitPrice}元</span>
              </td>
              <td class="quantity">
              <span class="buttonBox">
                <span><button class="reduce">-</button></span>
                <span>${data[index].quantity}</span>
                <span><button class="add">+</button></span>
                </span>
              </td>
              <td>
                <span class="tnody_subtotal">${(data[index].quantity) * (data[index].unitPrice)}元</span>
              </td>
              <td class="operation">
                <span class="detele">X</span>
              </td>
            </tr>
    `
}
$(".content tbody").html(goodsValueSum);

//数量按钮点击事件

let quantity = document.querySelectorAll(".buttonBox span:nth-child(2)");//数量节点 
let reduceBut = document.querySelectorAll(".reduce");//减少按钮节点
let addBut = document.querySelectorAll(".add");//增加按钮节点
let unitPrice = document.querySelectorAll(".unitPrice");//单价节点
// 数量减少
for (let index = 0; index < reduceBut.length; index++) {
  reduceBut[index].onclick = function () {
    data[index].quantity--;
    if (data[index].quantity >= 1) {
      quantity[index].innerHTML = data[index].quantity;
      subtotal_fun(data[index].quantity, index);
      PriceSum_fun();//总计函数
    }
    //限制用户数量不能减少到零
    if (data[index].quantity == 0) {
      $(".Quantity_warning_box_bg").css("display", "initial")
      data[index].quantity += 1;
      quantity[index].innerHTML = data[index].quantity;
      subtotal_fun(1, index);//传值1作为默认的数量进行小计计算
    }
  }
}
//数量增加
for (let index = 0; index < addBut.length; index++) {
  addBut[index].onclick = function () {
    data[index].quantity++;
    quantity[index].innerHTML = data[index].quantity;
    subtotal_fun(data[index].quantity, index);
    PriceSum_fun();//总计函数


  }
}

// 数量警告框取消按钮
$(".Quantity_warning_box_X").click(function () {
  $(".Quantity_warning_box_bg").css("display", "none")
})
$(".Quantity_warning_box_bottom span").click(function () {
  $(".Quantity_warning_box_bg").css("display", "none")
})

// 全选与单个选择的关系处理
function checkAllinput_fun() {
  $("#checkAllinput").click(function () {
    for (let index = 0; index < checkSingleinput.length; index++) {
      checkSingleinput[index].checked = $("#checkAllinput")[0].checked;
      Number_of_Statistics();//统计选中件数函数
      PriceSum_fun();//总计函数

    }
  })
}
checkAllinput_fun();

//单个选择框
let checkSingleinput = document.querySelectorAll(".checkSingleinput");//单个选择框节点
function checkSingleinput_fn() {
  for (let index = 0; index < checkSingleinput.length; index++) {
    checkSingleinput[index].onclick = function () {
      Number_of_Statistics();//统计选中件数函数
      PriceSum_fun();//总计函数
      for (let index = 0; index < checkSingleinput.length; index++) {
        if (checkSingleinput[index].hasAttribute('type')) {
          if (!checkSingleinput[index].checked) {
            $("#checkAllinput")[0].checked = false
            break;
          } else {
            $("#checkAllinput")[0].checked = true;
          }

        }

      }
    }
  }
}
checkSingleinput_fn();

//统计选中件数函数
function Number_of_Statistics() {
  let Statistics = 0;
  for (let index = 0; index < checkSingleinput.length; index++) {
    if (checkSingleinput[index].checked) {
      Statistics++;
    } else {

    }
  }
  $("#goodsNumber").html(Statistics)
}

//小计函数
let tnody_subtotal = document.querySelectorAll(".tnody_subtotal");
function subtotal_fun(quantity, index) {
  //将数量重新渲染到页面
  tnody_subtotal[index].innerHTML = `${quantity * data[index].unitPrice}元`
}


// 总计函数
function PriceSum_fun() {
  let sum = 0;
  sum = sum.toFixed(2)
  for (let index = 0; index < checkSingleinput.length; index++) {
    if (checkSingleinput[index].checked) {
      let element = tnody_subtotal[index].innerHTML
      let xiaoji_value = element.replace(/元/g, '')
      sum = Number(sum)
      sum += Number(xiaoji_value);
    }
  }
  $("#PriceSum").html(sum);
}

//删除操作
let detele = document.querySelectorAll(".detele");//删除按钮节点 
let goodsBox_tbody_tr = document.querySelectorAll(".goodsBox_tbody_tr");//商品行节点
let MI_Shipping = document.querySelectorAll(".MI_Shipping");//商品配送商节点
for (let index = 0; index < detele.length; index++) {
  detele[index].onclick = function () {
    //删除确认框
    $(".detele_warning_box_bg").css("display", "initial");
    $(".detele_warning_box_bottom>span:first-child").click(function () {
      //取消确认框 
      $(".detele_warning_box_bg").css("display", "none");
      //执行删除代码
      tnody_subtotal[index].innerHTML = 0;//删除对应删除行的小计
      goodsBox_tbody_tr[index].remove();//删除商品行
      MI_Shipping[index].remove();
      Number_of_Statistics();//统计选中件数函数
      PriceSum_fun();// 总计函数
      //全选框按钮逻辑处理
      checkSingleinput[index].removeAttribute('type')
      for (let j = 0; j < checkSingleinput.length; j++) {
        if (checkSingleinput[j].hasAttribute('type')) {
          if (!checkSingleinput[j].checked) {
            $("#checkAllinput")[0].checked = false
            break;
          } else {
            $("#checkAllinput")[0].checked = true;
          }
        }
      }
    })
    $(".detele_warning_box_bottom>span:last-child").click(function () {
      //取消确认框 
      $(".detele_warning_box_bg").css("display", "none");

    })
    $(".detele_warning_box_X").click(function () {
      //取消确认框 
      $(".detele_warning_box_bg").css("display", "none");
    })
  }
}


// 左上角用户名触发事件
let userBox = $("#headBox-Left>span:first-child");
console.log(userBox);
$("#headBox-Left>span:first-child").mouseenter(function () {
  $("#headBox-Left>span:first-child").css("color", "rgb(255, 106, 0)");
  $(".user_info_box").css("height", "150px");
  setTimeout(() => {
    $(".user_info_box a").css("color", "#757575");
  }, 300);
})

$("#headBox-Left>span:first-child").mouseleave(function () {
  $("#headBox-Left>span:first-child").css("color", "");
  $(".user_info_box").css("height", "0px");
  $(".user_info_box a").css("color", "#fff")

})

$(".user_info_box").mouseenter(function () {
  $("#headBox-Left>span:first-child").css("color", "rgb(255, 106, 0)");
  $(".user_info_box").css("height", "150px");
  $(".user_info_box a").css("color", "#757575");
})

$(".user_info_box").mouseleave(function () {
  $("#headBox-Left>span:first-child").css("color", "");
  $(".user_info_box").css("height", "0px");
  $(".user_info_box a").css("color", "#fff")
})
$(".user_info_box a").css("color", "#fff")

for (let index = 0; index < $(".user_info_box a").length; index++) {
  console.log($(".user_info_box a")[index]);
  $(".user_info_box a")[index].onmouseenter=function(){
  $(".user_info_box a")[index].style.color="#ff6700";
  }
}
for (let index = 0; index < $(".user_info_box a").length; index++) {
  console.log($(".user_info_box a")[index]);
  $(".user_info_box a")[index].onmouseleave=function(){
  $(".user_info_box a")[index].style.color="#757575";
  }
}
