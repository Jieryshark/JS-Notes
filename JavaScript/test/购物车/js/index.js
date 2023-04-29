//第一步
//渲染数据 goodsName:商品名  price:价格 goodsQuantityNum:商品数量  subtotalNum:价格小计
let tbody = document.querySelector('tbody');//查找节点
//数据源
let data = [
    {
        goodsName: 'BMW',
        price: 256,
        goodsQuantityNum: 1,
        subtotalNum: 256
    }, {
        goodsName: 'AUDI',
        price: 347,
        goodsQuantityNum: 1,
        subtotalNum: 347
    }, {
        goodsName: 'CHANGAN',
        price: 78,
        goodsQuantityNum: 1,
        subtotalNum: 78
    }, {
        goodsName: 'TELSA',
        price: 45,
        goodsQuantityNum: 1,
        subtotalNum: 45
    },
];
function showdata() {
    let trSum = '';
    for (let index = 0; index < data.length; index++) {
        trSum += `<tr class='goodsTr'>
    <td class='SingleChoiceTd'><input type="checkbox" class="SingleChoice" /></td>
    <td><span class="goodsName">${data[index].goodsName}</span></td>
    <td><span class="priceNum">${data[index].price}</span></td>
    <td>
      <button class="reduce">-</button>
      <span class="goodsQuantity">${data[index].goodsQuantityNum}</span>
      <button class="increase">+</button>
    </td>
    <td><span class="subtotal">${data[index].subtotalNum}</span></td>
    <td><span class="delete">删除</span></td>
  </tr>`
    }
    tbody.innerHTML = trSum;
    console.log(tbody);
}
showdata();

//第二步
//全选按钮点击事件
let choiceAll = document.querySelector('#choiceAll');//全选按钮节点
let SingleChoice = document.querySelectorAll('.SingleChoice');//商品选择按钮节点
function selectAllfun() {
    choiceAll.addEventListener('click', function () {
        for (let index = 0; index < SingleChoice.length; index++) {
            SingleChoice[index].checked = choiceAll.checked

        }
        totalfun();// 总计
    })

}
selectAllfun();

//第三步
//单个选择框决定全部按钮状态
function SingleChoicefun() {
    SingleChoice = [...SingleChoice];
    SingleChoice.map((itme, index) => { //循环给所有商品选择按钮添加点击事件
        itme.addEventListener('click', function () {
            //循环对比 
            for (let index = 0; index < SingleChoice.length; index++) {
                if (SingleChoice[index].hasAttribute('type')) {
                    if (!SingleChoice[index].checked) {
                        choiceAll.checked = false
                        break; //如果选择框里有false就取消全选按钮 并结束循环
                    } else {
                        choiceAll.checked = true;
                    }
                }
            }
            totalfun();// 总计
        })


    })
}
SingleChoicefun();

//第四步
//商品数量，价格小计
let reduce = document.querySelectorAll('.reduce');//-按钮节点
let increase = document.querySelectorAll(".increase");//+按钮节点
let goodsQuantity = document.querySelectorAll(".goodsQuantity");//数量节点
let priceNum = document.querySelectorAll(".priceNum");//价格节点
//循环给所有的-+添加点击事件
//小计计算
function subtotalValuefun(res, index) {
    let subtotalValue = 0;//小计初始化
    //小计计算 
    subtotalValue = res * priceNum[index].innerHTML;
    //将数量重新渲染到页面
    subtotal[index].innerHTML = subtotalValue;
}

//减法按钮
function reducefun() {
    for (let index = 0; index < reduce.length; index++) {
        reduce[index].addEventListener('click', function () {
            console.log(index);
            //数量递减
            data[index].goodsQuantityNum--;
            if (data[index].goodsQuantityNum >= 0) {
                //将数量重新渲染到页面
                goodsQuantity[index].innerHTML = data[index].goodsQuantityNum;
                reduce[index].disabled = false;
                reduce[index].classList.remove("reduceStyle");
            }
            if (data[index].goodsQuantityNum == 0) {
                reduce[index].disabled = true;//如果数量为零,对应按钮为不能点击
                reduce[index].classList.add("reduceStyle");
            }
            subtotalValuefun(data[index].goodsQuantityNum, index);//小计
            totalfun();// 总计


        })
    }
};
reducefun();

//加法按钮
function increasefun() {
    for (let index = 0; index < increase.length; index++) {
        increase[index].addEventListener('click', function () {
            console.log(index);

            data[index].goodsQuantityNum++;
            //数量递增
            //将数量重新渲染到页面
            goodsQuantity[index].innerHTML = data[index].goodsQuantityNum;
            reduce[index].disabled = false;//点击＋按钮,对应按钮为能点击
            reduce[index].classList.remove("reduceStyle");
            subtotalValuefun(data[index].goodsQuantityNum, index)
            totalfun();// 总计

        })
    }
};
increasefun();


//第五步
// 总计
let total = document.querySelector(".total");//共计节点
let subtotal = document.querySelectorAll(".subtotal");//小计节点
function totalfun() {
    let Sum = 0
    for (let index = 0; index < SingleChoice.length; index++) {
        if (SingleChoice[index].checked) {
            Sum += Number(subtotal[index].innerHTML)
        };
    }
    total.innerHTML = `总计费用:${Sum}`
}

// 第六步
//删除按钮事件添加
let Tr = document.querySelectorAll('tbody tr');//tr节点
let deteleBut = document.querySelectorAll(".delete");//删除键节点
//循环删除按钮添加事件
for (let j = 0; j < deteleBut.length; j++) {
    deteleBut[j].addEventListener('click', function () {
        subtotal[j].innerHTML = 0;//删除对应行的小计
        Tr[j].remove();//删除对应行
        totalfun();//调用总计


        //全选框逻辑处理
        SingleChoice[j].removeAttribute('type')
        for (let i = 0; i < SingleChoice.length; i++) {
            if (SingleChoice[i].hasAttribute('type')) {
                if (!SingleChoice[i].checked) {
                    choiceAll.checked = false
                    break; //如果选择框里有false就取消全选按钮 并结束循环
                } else {
                    choiceAll.checked = true;
                }
            }
        }
    })
}

