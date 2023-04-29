// 头部鼠标移入事件
$(".linkA").each(function (index, itme) {
    $(".linkA").eq(index).on({
        mouseenter: function () {
            $(this).css("color", "white")
        }, mouseleave: function () {
            $(this).css("color", "#b0b0b0")
        }
    })
})

//头部购物车标题触发事件
$('.ShoppingCart_icons_Popup').hide();
$('.ShoppingCart_icons').on({
    mouseenter: function () {
        $('.ShoppingCart_icons_Popup').show();

    }, mouseleave: function () {
        $('.ShoppingCart_icons_Popup').hide();

    }
})

//搜索框点击下拉框
$('.SearchBox_Dropdownbox').hide();
$('.SearchBox_Dropdownbox').slideUp();
$('.SearchBox').click(function () {
    $('.SearchBox_Dropdownbox').slideDown();
    $('.SearchBox,.SearchBox>div:nth-child(2),.SearchBox_Dropdownbox').css('outline', '1px solid rgb(255, 103, 0)')
})
$('.SearchBox').mouseleave(function () {
    $('.SearchBox_Dropdownbox').slideUp();
    $('.SearchBox,.SearchBox>div:nth-child(2),.SearchBox_Dropdownbox').css('outline', '1px solid rgb(224, 224, 224)')
})

// 下拉框中的商品数据
let data = [
    [{// xiaomi手机
        phoneName: 'Xiaomi Civi2',
        price: '2399',
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1664192126.84785883.png'
    }, {
        phoneName: 'Xiaomi MIX Fold2',
        price: '8999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/581f3a690e6803add02e4c9fde98cb78.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'Xiaomi 12S Ultra',
        price: '5999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7a15df55e98e4163390096ed05b1ef5.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'Xiaomi 12S Pro',
        price: '4399',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b01bb7ee0f8c9865c11eeb2c483015e2.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'Xiaomi 12S',
        price: '2399',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1f5a30b6e9e29c7f4ad6ed26023f4de.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'Xiaomi 12Pro 天玑版',
        price: '2399',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a811f07a4e13510b23ada8e2eca473ae.png?thumb=1&w=240&h=165&f=webp&q=90'
    }], [{ //redmi手机
        phoneName: 'Redmi Note 12 5G',
        price: '1199',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/570184de014d26516f4c334f7132878a.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'Redmi Note 12 Pro',
        price: '1699',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/93e23b29e03f62164c5494a31dbbed25.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: ' Redmi Note 12 Pro+',
        price: '2199',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/86122140712f0f645e42934d07d262a8.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'Redmi K50 至尊版',
        price: '2999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ee06a9131e93619c75c49b88c740203b.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: ' Redmi Note 11T Pro+ ',
        price: '1899',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e1f915167554e99916273b5269da1b5.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'Redmi Note 11T Pro ',
        price: '1569',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11d7da9517953d11e02d0b459003f19.png?thumb=1&w=240&h=165&f=webp&q=90'
    }], [{ //电视
        phoneName: 'Redmi智能电视X55 2022',
        price: '2999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'Redmi智能电视X65 2022 ',
        price: '3999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米电视6 65” OLED',
        price: '6699',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8871821795310769c1d3896c99b12381.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米电视 大师 77” OLED',
        price: '17999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a1ae5341d2dae66cd42566c60d2d666.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米透明电视',
        price: '49999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米电视 大师 65英寸OLED ',
        price: '8999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=240&h=165&f=webp&q=90'
    }], [{//笔记本
        phoneName: 'XiaomiBookAir13',
        price: '5999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/55c17a67fff345d161ae55b9fb0d6f6a.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'RedmiG游戏本锐龙版R5',
        price: '6299',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'RedmiGPro游戏本2022 ',
        price: '8999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'RedmiGPro游戏本锐龙版R7 ',
        price: '8799',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'XiaomiBookPro14锐龙版',
        price: '6399',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c926842a23c7316b17792e075be9d055.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'RedmiG游戏本2022',
        price: '7499',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c86a7877e4ed76f50e204875e7372428.png?thumb=1&w=240&h=165&f=webp&q=90'
    }], [{//平板
        phoneName: 'Redmi Pad',
        price: '1799',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a887139f3995c4cac2a167e014ffd91e.jpg?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米平板5Pro 12.4',
        price: '6299',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ba211a988be47d7ae5a1a448ecf0b67.jpeg?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米平板5 ',
        price: '8999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33de34a4caf2834a1828dc51203dc922.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米平板5Pro 5G ',
        price: '8799',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03892b203a6413bcd8ef3f92d77df79c.gif?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米平板5Pro',
        price: '6399',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aad55902a2cc64bf0306b004adb14ef7.png?thumb=1&w=240&h=165&f=webp&q=90'
    }], [{//家电
        phoneName: '小米空调 1.5匹新1级能效',
        price: '2999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80416c1c7040aabbafa527a6ea652948.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '米家扫拖机器人 1T',
        price: '999',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65df9e92c06dcd148de5f0eb13e16ea2.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '新风空调 立式3匹',
        price: '6699',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/950767dbf6e63b853d39d413e97685a8.png?thumb=1&w=240&h=165&f=webp&q=90'
    }], [{//笔记本
        phoneName: 'Redmi 电竞路由器 AX5400',
        price: '549',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1465737a8a6ac8772560dce2ef0a39f.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米路由器AX6000',
        price: '549',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米路由器AX9000 ',
        price: '1299',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2815a0a208be362cba673aae9a1f9c93.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: 'Xiaomi HOmeWIFI 三频 Mesh 路由器 ',
        price: '8799',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f88d17e29314286967eeb88bf86cdfc.png?thumb=1&w=240&h=165&f=webp&q=90'
    }, {
        phoneName: '小米路由器4A 千兆版',
        price: '6399',
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&w=240&h=165'
    }, {
        phoneName: '查看全部路由器',
        price: '',
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&w=240&h=165'
    }]
]
//渲染xiaomi手机数据
let dataSum = '';
let goodsLinks = [`../www/小米商城-首页.html`,
    `../www/小米商城-首页.html`,
    `../www/小米商城-首页.html`,
    `../www/小米商城-首页.html`,
    `../www/小米商城-首页.html`,
    `../www/小米商城-首页.html`,
]
$('.goods_titleName').each(function (index, itme) {
    $('.goods_titleName').eq(index).mouseenter(function () {
        $('.site_heder_Dropdownbox').html('')
        dataSum = '';
        for (let j = 0; j < data[index].length; j++) {
            dataSum += `
                <div class="site_heder_Dropdownbox_goods">
                <div class='imgBox'><img src="${data[index][j].img}" alt=""></div>
                <div>${data[index][j].phoneName}</div>
                <div>${data[index][j].price}元起</div>
                </div>`
        }
        $('.site_heder_Dropdownbox').html(dataSum)
        //添加商品之间的线段
        for (let i = 1; i < $('.imgBox').length; i++) {
            $('.imgBox').eq(i).css({
                borderLeft: '1px solid rgba(0, 0, 0, 0.215)'
            })
        }
        // 下拉框中商品打开链接
        console.log($('.site_heder_Dropdownbox_goods'));
        $('.site_heder_Dropdownbox_goods').each(function (y, itme1) {
            $('.site_heder_Dropdownbox_goods').click(function () {
                location.href = `${goodsLinks[y]}`
            })
        })

    })
})

//头部商品标题触发下拉框
$('.site_heder_DropdownboxBgc').hide();
$('.site_heder_DropdownboxBgc').css({
    height: '0px'
})
$('.goods_title>span').on({
    mouseenter: function () {
        $('.site_heder_DropdownboxBgc').show();
        $('.site_heder_DropdownboxBgc').css({
            height: '240px'
        })
        $(this).css({
            color: 'rgb(255, 103, 0)'
        })
        $('.site_hederBgc').css({
            // borderBottom:'1px solid rgba(51, 51, 51, 0.57)'
        })
    }, mouseleave: function () {
        $('.site_heder_DropdownboxBgc').css({
            height: '0px'
        })
        $(this).css({
            color: 'black'
        })
        $('.site_hederBgc').css({
            borderBottom: 'none'
        })
    }
})
$('.site_heder_DropdownboxBgc').on({
    mouseenter: function () {
        $('.site_heder_DropdownboxBgc').css({
            height: '240px'
        })
    }, mouseleave: function () {
        $('.site_heder_DropdownboxBgc').css({
            height: '0px'
        })
    }
})

// banner轮播图渲染
let bannerImg = [
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57e3bb825e664e6d77fcc84079441605.jpg?w=2452&h=920',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d90fda69e63bf93ae62120901bafc0e.jpg?thumb=1&w=1839&h=690&f=webp&q=90',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dce8b00fb3b4ebecbcf72353bff8a030.jpg?thumb=1&w=1839&h=690&f=webp&q=90',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/454c1da2c5b64a3f2c07c5a4c01aa9c4.jpg?thumb=1&w=1839&h=690&f=webp&q=90'
];
$(".swiper-slide").each(function (index, itme) {
    $(".swiper-slide").eq(index).html(`<img src="${bannerImg[index]}" alt="">`)
})
/* banner上左边的商品分类盒子中的标题 */
let bannertitle = [
    '手机', '电视', '家电', '笔记本 平板', '出行穿戴', '耳机  音箱', '健康 儿童', '生活 箱包', '智能 路由器', '电源 配件'
];
let bannertitleSum = ''
for (let i = 0; i < bannertitle.length; i++) {
    bannertitleSum += `
    <a class="goodsClassification_title" href="https://www.baidu.com/">
    <span> ${bannertitle[i]}</span>
    <svg t="1670501018348" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2661" width="16" height="16"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" p-id="2662"></path></svg>
   </a>
    `
}
$('.left_goodsClassification_Box').html(bannertitleSum)



// 商品分类标题触摸事件
$('.goods_showBox').on({
    mouseenter: function () {
        console.log($(this).index());
        $('.goods_showBox').show();
    }, mouseleave: function () {
        $('.goods_showBox').hide();
    }
})
// 商品分类盒子数据渲染
let goods_showBox_data = [
    [{ // 手机
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c13977eeb29cd4b2fbbe803ef5884176.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi Note 12 pro+'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7461b336cc97727a36fa1b827608af1f.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi Note 12 Pro'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6235756c2fb278e1d35b2e4c282d4223.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi Note 12 5G'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8eb4a86e68e5fc1ddeb4bf6a6f3d042.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi 12S Pro'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b883131e62133041d7ac8272c17762b0.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi 12S'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca3caca774dc8be0a453c90d1fa58e13.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Note 11 5G'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/930ddc941c1e6c81042406440e88ac45.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi Civi 2'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52ef2b0a20fdb016f11d717e63f460db.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi MIX Fold 2'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a0311105bc8bc7229579e3aec37831ba.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi K50 至尊版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4edfc1f6882f01caeccdd11550ec88e9.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi 12S Ultra'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3554015510bdc129ff52477b1aca0763.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi 12 Pro 天玑版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Note 11T Pro+'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cef72d0fea727cdf62b8e18b3d039d1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Note 11T Pro'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c680c8d69a77ebfa924af7daa1a854be.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi Civi 1S'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/58eff3ffcf8df68e9ee8bbf90f1e8fa9.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '黑鲨5 Pro'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd1f0b06757ab64cb320a9a545f616ef.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi 10A'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/199b6e1769dd4002b0e6373fd3a5dd0e.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi K50'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b251574ddd82dca50a160d4acc09ceb5.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi K50 电竞版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c0553468a73cc445012577d8993dfc9.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi 12 Pro'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae8f6a46838f737d69290f12fd95de35.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi 12'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi11青春活力版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a95d59ec8c9c6ae7061f314eb4901e7c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Note 11 Pro系列'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2c570b7cd666114a7d351a1dd10a527.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Note 11 4G'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f33903e1162959f500360a39896f2306.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Xiaomi Civi'
    }], [{//电视
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi X65 2022款'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/943995e8d1b1a884e123aec25cc1f8b8.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米拍拍4K高清投屏器'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi X55 2022款'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '米家激光小米电视6'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50194366cfebbc7c82489d0094c1f944.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视6 65”OLED'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b91c9ef670fa1c12eddf23b209f9ff33.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视大师 77”OLED'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视6 至尊版 55英寸'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视6 至尊版 65英寸'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视6 至尊版 75英寸'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视 ES43 2022款'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视 ES55 2022款'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视 ES65 2022款'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视 ES75 2022款'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d219d8b9c4a74eda4ae6c0222d194cd2.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '金属全面屏电视'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '大师电视 65英寸 OLED'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1df560d16cc983b0f34d24fc484bd697.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视4A 60英寸'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi智能电视X55'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&w=60&h=60',
        Name: '小米全面屏电视'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce75f4a3fef148b6729061a18f994aa7.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '米家激光投影仪'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: 'Redmi 智能电视 MAX 98'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3fbb9ad7c67775fcc1a10219bdbd7257.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视5 75英寸'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6797917392e912577135d9eb8ad92f1f.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视4A 70英寸'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8cb5791161d8b25897f60385f0ec7ab2.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '小米电视4S 75英寸'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fa264c15d3829e6de4283a552651e22.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '激光投影电视'
    }], [{//家电
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png',
        Name: '壁挂空调'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20e478a62b19d36ff05e92763fe7396f.png" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '立式空调'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6fe32cdaf14e104013384d89100f9c6.png" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '冰箱'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d6b345f54d0f35126bab77e5e2855f17.png" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '滚筒洗衣机'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c807c71a5afd7c1a6e964ff06887f480.png" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '波轮洗衣机'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc14493d86277936ebf37fe79b95c6f4.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '米家电暖器 超薄版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/245008085a0758287da30d4e5d186d04.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '米家电暖器 仿真火焰版'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '电暖器'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '净水器'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg',
        Name: '微蒸烤'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf07e32a082098cc81a433fe360811c8.gif',
        Name: '烟灶'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/91ccbb3270bcfd72a3c3ae98f15aed9d.png" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '洗碗机'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '扫地机器人'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '吸尘器'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '空气净化器'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '电饭煲'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '电磁炉'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '水壶'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '落地风扇'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '投影仪'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '灯具'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1c8cfb055709db380c6de981a4c894b.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '插线板'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cc417a7cae8c4ff8b0041fa29003717.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '新风机'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0bf0ba35dc3ad57115c59f0ebde0fd1d.jpg" src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png',
        Name: '料理机'
    }], [{//笔记本平板
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdfa6656603fa56ab60500c8cd1b5cb8.png',
        Name: 'Redmi Pad'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/014c946d501d7725ecae7381753f3ddd.png',
        Name: 'Xiaomi Book Air 13'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7640eb8b71e25f211ee2eac916f868b.png',
        Name: 'Redmi G 游戏本 锐龙版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7640eb8b71e25f211ee2eac916f868b.png',
        Name: 'Redmi G Pro 游戏本'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7640eb8b71e25f211ee2eac916f868b.png',
        Name: 'Redmi G Pro 游戏本 锐龙版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad17029a1de5b7880af26ca465937c0c.png',
        Name: '小米平板5 Pro 12.4'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7640eb8b71e25f211ee2eac916f868b.png',
        Name: 'Redmi G 游戏本 2022'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08623078b19af34e76eff407c418d384.png',
        Name: 'RedmiBook Pro14 2022'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/22ae4c69db55780b34e10bbab5091f8c.png',
        Name: 'RedmiBook Pro15 2022'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png',
        Name: 'RedmiBook Pro 14 增强版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69901cac7084025d81300155e9beb5f2.png',
        Name: '小米笔记本 Pro 14 锐龙版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png',
        Name: 'RedmiBook Pro 15 增强版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/903da48ebe975727aeb5ef76186d03cf.png',
        Name: '小米笔记本 Pro X 14'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/994d6bcece6aa49d9c6cb709f4d9344a.png',
        Name: 'Redmi G 2021 Intel版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/90bbbedc36c06c931c471d3587425914.png',
        Name: 'Redmi G 2021 AMD版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8760786dbdaff5162ba9b0c3c61a7ab.png',
        Name: '小米平板5'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d63d8ac9dfb64bf7ca84c7d674047f19.png',
        Name: '小米平板5 Pro'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b34e14c8896df008e17e73e5cfdd3e2c.png',
        Name: '小米平板5 Pro 5G'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg',
        Name: '小米笔记本 Pro 14 增强版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png',
        Name: '小米笔记本 Pro 15 增强版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e69fe4849e3e42bd4394e2be04a5c82.png',
        Name: '小米笔记本 Pro X 15'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png',
        Name: 'RedmiBook Pro 14 锐龙版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png',
        Name: 'RedmiBook Pro 15 锐龙版'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53ac63f76d43a47fadb8eae6f43d6b04.png',
        Name: '小米笔记本 Pro 15 锐龙版'
    }], [{//出行 穿戴
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00272e7727cc093f8fb763f8b7e595c1.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }], [{//耳机音箱
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d5ba4e161efa507a06c7d4935bd6a4c.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }], [{//健康 儿童
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }], [{//生活 箱包
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例商品'
    }], [{//智能 路由器
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&w=60&h=60&f=webp&q=90',
        Name: '示例数据'
    }], [{//电源 配件
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }, {
        img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=60&h=60',
        Name: '示例商品'
    }]
]
let goods_showBox_dataSum = ''
$('.goods_showBox').hide();
$('.goodsClassification_title').each(function (index, itme) {
    $(".goodsClassification_title").eq(index).on({
        mouseenter: function () {
            //初始化
            $('.goods_showBox').html('');
            goods_showBox_dataSum = '';
            //商品分类盒子
            $('.goods_showBox').show();
            //通过数据个数决定商品分类盒子宽度
            if (goods_showBox_data[index].length == 24) {
                console.log();
                $('.goods_showBox').css({
                    width: '996px'
                })
            }
            if (goods_showBox_data[index].length == 18) {
                console.log();
                $('.goods_showBox').css({
                    width: '747px'
                })
            }
            if (goods_showBox_data[index].length == 12) {
                console.log();
                $('.goods_showBox').css({
                    width: '498px'
                })
            }
            //循环渲染数据
            for (let i = 0; i < goods_showBox_data[index].length; i++) {
                goods_showBox_dataSum += `
                <a href="https://www.baidu.com/"><div><img src="${goods_showBox_data[index][i].img}" alt=""></div>${goods_showBox_data[index][i].Name}</a>
                `
            }
            $('.goods_showBox').html(goods_showBox_dataSum)
        }, mouseleave: function () {
            $('.goods_showBox').hide();
        }
    })
})


// banner_bottom数据渲染
let banner_bottom_data = [
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0c515086acb3c3a3e976ad20901aac5.jpg?w=632&h=340',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/254c711cc71facf156ac955b8719dffa.jpg?w=632&h=340',
    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b120c0dddc056dcb36e847269fb92cd.jpg?w=632&h=340'
];
let banner_bottom_dataSum = ''

for (let index = 0; index < banner_bottom_data.length; index++) {
    banner_bottom_dataSum += `
    <a href="" class="box_sadhow_pubilc banner_bottom_a"><img src="${banner_bottom_data[index]}" alt=""></a>
    `
}
$(".banner_bottom").append(banner_bottom_dataSum);

// home_channel_list数据渲染
// home_banner数据渲染
let home_banner_data = `https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab888d01ba8897ba2b4fc55e33481f58.jpg?thumb=1&w=1839&h=180&f=webp&q=90`;
$('.home_banner').html(`<a href=""> <img src="${home_banner_data}" alt=""> </a>`)


// home_classification_box数据渲染
// 手机数据
let home_classification_phone = {
    title: {
        box_bdLeft_img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/059f14c9ba134897be7db7a7286f1bb5.jpg?thumb=1&w=351&h=921&f=webp&q=90',
        box_hd_title: '手机',
        more_but: '查看更多',
        more_but_icon: ' <svg t="1670640549183" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2674" width="22" height="22"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM398.4 784l-45.6-45.6L580 512 353.6 285.6l45.6-45.6 272 272-272.8 272z" p-id="2675"></path></svg>  '
    },
    bd_img: [{
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012000_0b9df066c110f201154013ac373df1d9.png?thumb=1&w=300&h=300&f=webp&q=90',
        Name: 'Xiaomi 12S Pro',
        introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
        price: 4399
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012000_0b9df066c110f201154013ac373df1d9.png?thumb=1&w=300&h=300&f=webp&q=90',
        Name: 'Xiaomi 12S Pro',
        introyduce: '骁龙8+ 旗舰处理器 | 徕卡影像',
        price: 4399
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012000_0b9df066c110f201154013ac373df1d9.png?thumb=1&w=300&h=300&f=webp&q=90',
        Name: 'Xiaomi 12S Pro',
        introyduce: '骁龙8+ 旗舰处理器 | 徕卡影像',
        price: 4399
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012000_0b9df066c110f201154013ac373df1d9.png?thumb=1&w=300&h=300&f=webp&q=90',
        Name: 'Xiaomi 12S Pro',
        introyduce: '骁龙8+ 旗舰处理器 | 徕卡影像',
        price: 4399
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012000_0b9df066c110f201154013ac373df1d9.png?thumb=1&w=300&h=300&f=webp&q=90',
        Name: 'Xiaomi 12S Pro',
        introyduce: '骁龙8+ 旗舰处理器 | 徕卡影像',
        price: 4399
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012000_0b9df066c110f201154013ac373df1d9.png?thumb=1&w=300&h=300&f=webp&q=90',
        Name: 'Xiaomi 12S Pro',
        introyduce: '骁龙8+ 旗舰处理器 | 徕卡影像',
        price: 4399
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012000_0b9df066c110f201154013ac373df1d9.png?thumb=1&w=300&h=300&f=webp&q=90',
        Name: 'Xiaomi 12S Pro',
        introyduce: '骁龙8+ 旗舰处理器 | 徕卡影像',
        price: 4399
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012000_0b9df066c110f201154013ac373df1d9.png?thumb=1&w=300&h=300&f=webp&q=90',
        Name: 'Xiaomi 12S Pro',
        introyduce: '骁龙8+ 旗舰处理器 | 徕卡影像',
        price: 4399
    }]
}

$(".content").append(`
<div class="home_classification_box pubilcWidth ">
    <div class="box_hd">
        <span>${home_classification_phone.title.box_hd_title}</span>
        <div class="more">
        <a class="moreLink" href="">${home_classification_phone.title.more_but}</a>
        ${home_classification_phone.title.more_but_icon}
        </div>
    </div>
    <div class="box_bd">
    <div class="left_img box_sadhow_pubilc"><img src="${home_classification_phone.title.box_bdLeft_img}" alt=""></div>
    <div class="right_img">
</div>
</div>
`)
let bd_imgValue = ''
for (let i = 0; i < home_classification_phone.bd_img.length; i++) {
    bd_imgValue += `
    <a href="" class="box_sadhow_pubilc home_classification_goods_box">
            <div><img src="${home_classification_phone.bd_img[i].img}" alt=""></div>
            <span>${home_classification_phone.bd_img[i].Name}</span>
            <span>${home_classification_phone.bd_img[i].introyduce}</span>
            <span>${home_classification_phone.bd_img[i].price}元起</span>
        </a>
    `
}
$('.right_img').eq(0).html(bd_imgValue)


//智能穿戴数据渲染
let home_classification_wear = {
    rightContent: [
        {
            Title: '耳机',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Buds 4 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Buds 4 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Buds 4 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Buds 4 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Buds 4 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Buds 4 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111200_c1016839eae2c1f5bb79d5afde498e81.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Buds 4 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Redmi Buds 3 青春版',
                price: 699
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '耳机'
            }

        },
        {
            Title: '穿戴',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208102330_fec8af4d5861f2c0a3fea2b8879ae859.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Wacth S1 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1499
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208102330_fec8af4d5861f2c0a3fea2b8879ae859.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Wacth S1 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1499
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208102330_fec8af4d5861f2c0a3fea2b8879ae859.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Wacth S1 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1499
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208102330_fec8af4d5861f2c0a3fea2b8879ae859.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Wacth S1 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1499
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208102330_fec8af4d5861f2c0a3fea2b8879ae859.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Wacth S1 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1499
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208102330_fec8af4d5861f2c0a3fea2b8879ae859.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Wacth S1 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1499
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208102330_fec8af4d5861f2c0a3fea2b8879ae859.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi Wacth S1 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1499
            }],
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '耳机'
            }
        }
    ],
    leftConten: {
        leftTile: '智能穿戴',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9895c56a7b792fb9053e3085fc261072.jpg?thumb=1&w=351&h=921&f=webp&q=90'
    }
}

//智能穿戴数据渲染 左边固定商品
$(".content").append(`
<div class="home_classification_box pubilcWidth ">
    <div class="box_hd">
        <span>${home_classification_wear.leftConten.leftTile}</span>
        <div class="classificationTitle_wear_Box">
        <span class="classificationTitle_wear headseTitle">${home_classification_wear.rightContent[0].Title}</span>
        <span class="classificationTitle_wear wacthTitle">${home_classification_wear.rightContent[1].Title}</span>
        </div>
    </div>
    <div class="box_bd">
    <div class="left_img box_sadhow_pubilc"><img src="${home_classification_wear.leftConten.img}" alt=""></div>
    <div class="right_content">
</div>
</div>
`)

//智能穿戴数据渲染  商品分类板块右上角分类词触发事件
$('.classificationTitle_wear').eq(0).css({
    borderBottom: '2px solid #ff6700'
})
$('.classificationTitle_wear').each(function (index, itme) {
    $('.classificationTitle_wear').eq(index).on({
        mouseenter: function () {
            $(this).css({
                borderBottom: '2px solid #ff6700'
            })
            $(this).siblings().css({
                borderBottom: '2px solid #ffffff00'
            })

            // 右上角分类名词触发渲染数据
            let j = $(this).index()
            headsetDataSum = ''
            $('.right_img').html()
            for (let i = 0; i < home_classification_wear.rightContent[j].Data.length; i++) {
                headsetDataSum += `
                <a href="" class="box_sadhow_pubilc home_classification_goods_box">
                <div><img src="${home_classification_wear.rightContent[j].Data[i].img}" alt=""></div>
                <span>${home_classification_wear.rightContent[j].Data[i].Name}</span>
                <span>${home_classification_wear.rightContent[j].Data[i].introyduce}</span>
                <span>${home_classification_wear.rightContent[j].Data[i].price}元起</span>
                </a>
                `
            }
            $('.right_content').eq(0).html(headsetDataSum)
            $('.right_content').eq(0).append(`
            <div href="" class="Last_home_classification_goods_box">
            <a  href=""
                class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
                <div>
                    <div>${home_classification_wear.rightContent[0].Lookmore.Name}</div>
                    <div class='more_text'>${home_classification_wear.rightContent[0].Lookmore.price}</div>
                </div>
                <div>${home_classification_wear.rightContent[0].Lookmore.img}</div>
            </a>
        </div>
           `)
            if (j == 0) {
                $(".Last_home_classification_goods_box").eq(0).prepend(`
            <a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_wear.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_wear.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_wear.rightContent[0].endData.img} " alt="">
    </div>
</a>
            `)
            }

        }
    })
})

//智能穿戴数据渲染 页面进入默认渲染第一页
let headsetDataSum = ''
for (let i = 0; i < home_classification_wear.rightContent[0].Data.length; i++) {
    headsetDataSum += `
    <a href="" class="box_sadhow_pubilc home_classification_goods_box">
    <div><img src="${home_classification_wear.rightContent[0].Data[i].img}" alt=""></div>
    <span>${home_classification_wear.rightContent[0].Data[i].Name}</span>
    <span>${home_classification_wear.rightContent[0].Data[i].introyduce}</span>
    <span>${home_classification_wear.rightContent[0].Data[i].price}元起</span>
    </a>
    `
}
$('.right_content').eq(0).html(headsetDataSum)

//智能穿戴数据渲染 最后商品渲染
$('.right_content').eq(0).append(`
<div class="Last_home_classification_goods_box">

<a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_wear.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_wear.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_wear.rightContent[0].endData.img} " alt="">
    </div>
</a>

<a  href="" class="Last_home_classification_goods_boxBottm box_sadhow_pubilc Last_home_classification_goods_boxTop">
    <div>
        <div>${home_classification_wear.rightContent[0].Lookmore.Name}</div>
        <div class='more_text'>${home_classification_wear.rightContent[0].Lookmore.price}</div>
    </div>
    <div>${home_classification_wear.rightContent[0].Lookmore.img}</div>
</a>

</div>
`)


//笔记本平板数据渲染
let home_classification_computer = {
    rightContent: [
        {
            Title: '热门',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50b73aeedeeb27392a15d9d479e5d793.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Redmi G Pro 游戏本',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 8999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米平板5 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米平板5 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米平板5 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米平板5 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米平板5 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50b73aeedeeb27392a15d9d479e5d793.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Redmi G Pro 游戏本',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 8999
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208101822_61eaf5f69fdc3e6c2fa0eb570e091d4d.png?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米平板5 Pro 12.4',
                price: 2799
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '热门'
            }
        }

    ],
    leftConten: {
        leftTile: '笔记本 | 平板',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/06d75467973ea188caa56e18a67647b4.png?thumb=1&w=351&h=921&f=webp&q=90'
    }
}

//笔记本平板数据渲染 左边固定商品
$(".content").append(`
<div class="home_classification_box pubilcWidth ">
    <div class="box_hd">
        <span>${home_classification_computer.leftConten.leftTile}</span>
        <div class="classificationTitle_wear_Box">
        </div>
    </div>
    <div class="box_bd">
    <div class="left_img box_sadhow_pubilc"><img src="${home_classification_computer.leftConten.img}" alt=""></div>
    <div class="right_content">
</div>
</div>
`)

//笔记本平板数据渲染 商品分类板块右上角分类词
$('.classificationTitle_wear_Box').eq(1).html(`
<span class="classificationTitle_wear computer_Title">${home_classification_computer.rightContent[0].Title}</span>
`)
$('.computer_Title').css({
    borderBottom: '2px solid #ff6700'
})

//笔记本平板数据渲染 页面进入默认渲染第一页
let computerDataSum = ''
for (let i = 0; i < home_classification_computer.rightContent[0].Data.length; i++) {
    computerDataSum += `
    <a href="" class="box_sadhow_pubilc home_classification_goods_box">
    <div><img src="${home_classification_computer.rightContent[0].Data[i].img}" alt=""></div>
    <span>${home_classification_computer.rightContent[0].Data[i].Name}</span>
    <span>${home_classification_computer.rightContent[0].Data[i].introyduce}</span>
    <span>${home_classification_computer.rightContent[0].Data[i].price}元起</span>
    </a>
    `
}
$('.right_content').eq(1).html(computerDataSum)


//笔记本平板数据渲染  最后商品渲染
$('.right_content').eq(1).append(`
<div class="Last_home_classification_goods_box">

<a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_computer.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_computer.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_computer.rightContent[0].endData.img} " alt="">
    </div>
</a>

<a  href="" class="Last_home_classification_goods_boxBottm box_sadhow_pubilc Last_home_classification_goods_boxTop">
    <div>
        <div>${home_classification_computer.rightContent[0].Lookmore.Name}</div>
        <div class='more_text'>${home_classification_computer.rightContent[0].Lookmore.price}</div>
    </div>
    <div>${home_classification_computer.rightContent[0].Lookmore.img}</div>
</a>

</div>
`)


//家电数据渲染
let home_classification_homeElectricity = {
    rightContent: [
        {
            Title: '热门',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74d58c933744cca5fce7e198a90bf364.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家直驱洗烘一体机 10kg',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cd8a5a447b4f84faeb3791811a179f9.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家新风空调 立式3匹',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 6999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cd8a5a447b4f84faeb3791811a179f9.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家新风空调 立式3匹',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 6999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cd8a5a447b4f84faeb3791811a179f9.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家新风空调 立式3匹',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 6999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cd8a5a447b4f84faeb3791811a179f9.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家新风空调 立式3匹',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 6999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cd8a5a447b4f84faeb3791811a179f9.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家新风空调 立式3匹',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 6999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9cd8a5a447b4f84faeb3791811a179f9.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家新风空调 立式3匹',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 6999
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b649a329983ad590fde607472f73e55a.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家波轮洗衣机8kg',
                price: 799
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '耳机'
            }
        },
        {
            Title: '电视影音',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/363bf63e1ca2c6b21a0e5e21cd284368.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米电视EA65 2022款65英寸',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1799
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/363bf63e1ca2c6b21a0e5e21cd284368.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米电视EA65 2022款65英寸',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1799
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/363bf63e1ca2c6b21a0e5e21cd284368.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米电视EA65 2022款65英寸',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1799
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/363bf63e1ca2c6b21a0e5e21cd284368.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米电视EA65 2022款65英寸',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1799
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/363bf63e1ca2c6b21a0e5e21cd284368.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米电视EA65 2022款65英寸',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1799
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/363bf63e1ca2c6b21a0e5e21cd284368.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米电视EA65 2022款65英寸',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1799
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/363bf63e1ca2c6b21a0e5e21cd284368.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米电视EA65 2022款65英寸',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1799
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4769d147d65c64de4fd808e0d5229b5e.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米电视EA50 2022款50英寸',
                price: 1199
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '电视影音'
            }
        }

    ],
    leftConten: {
        leftTile: '家电',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=351&h=450&f=webp&q=90',
        img1: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/229bbaccda43f32f464c0a810b800106.jpg?thumb=1&w=351&h=450&f=webp&q=90'
    }
}

//家电数据渲染 左边固定商品
$(".content").append(`
<div class="home_classification_box pubilcWidth ">
    <div class="box_hd">
        <span>${home_classification_homeElectricity.leftConten.leftTile}</span>
        <div class="more homeElectricityTitle">
     
        </div>
    </div>
    <div class="box_bd">
    <div class="left_img_double ">
    <div class="box_sadhow_pubilc"><img src="${home_classification_homeElectricity.leftConten.img}" alt=""></div>
    <div class="box_sadhow_pubilc"><img src="${home_classification_homeElectricity.leftConten.img1}" alt=""></div>
    </div>
    <div class="right_content">
</div>
</div>
`)
let classificationTitle = ''
for (let i = 0; i < home_classification_homeElectricity.rightContent.length; i++) {
    classificationTitle += `<span class='classificationTitle'>${home_classification_homeElectricity.rightContent[i].Title}</span>
    `

}
$('.homeElectricityTitle').html(classificationTitle)
//家电数据渲染  商品分类板块右上角分类词触发事件
$('.homeElectricityTitle>span').eq(0).css({
    borderBottom: '2px solid #ff6700'
})
$('.homeElectricityTitle>span').each(function (index, itme) {
    $('.homeElectricityTitle>span').eq(index).on({
        mouseenter: function () {
            $(this).css({
                borderBottom: '2px solid #ff6700'
            })
            $(this).siblings().css({
                borderBottom: '2px solid #ffffff00'
            })

            // 右上角分类名词触发渲染数据
            let j = $(this).index()
            headsetDataSum = ''
            $('.right_img').html()
            for (let i = 0; i < home_classification_homeElectricity.rightContent[j].Data.length; i++) {
                headsetDataSum += `
                <a href="" class="box_sadhow_pubilc home_classification_goods_box">
                <div><img src="${home_classification_homeElectricity.rightContent[j].Data[i].img}" alt=""></div>
                <span>${home_classification_homeElectricity.rightContent[j].Data[i].Name}</span>
                <span>${home_classification_homeElectricity.rightContent[j].Data[i].introyduce}</span>
                <span>${home_classification_homeElectricity.rightContent[j].Data[i].price}元起</span>
                </a>
                `
            }
            $('.right_content').eq(2).html(headsetDataSum)
            $('.right_content').eq(2).append(`
            <div href="" class="Last_home_classification_goods_box">
            
            <a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
                <div>
                    <div class='goods_Name'>${home_classification_homeElectricity.rightContent[j].endData.Name}</div>
                    <div class='goods_peice'>${home_classification_homeElectricity.rightContent[j].endData.price}元起</div>
                </div>
                <div>
                    <img src="${home_classification_homeElectricity.rightContent[j].endData.img} " alt="">
                </div>
            </a>
            
            <a  href=""
                class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
                <div>
                    <div>${home_classification_homeElectricity.rightContent[j].Lookmore.Name}</div>
                    <div class='more_text'>${home_classification_homeElectricity.rightContent[j].Lookmore.price}</div>
                </div>
                <div>${home_classification_homeElectricity.rightContent[j].Lookmore.img}</div>
            </a>
            </div>
            `)
            /* if (j == 0) {
                $(".Last_home_classification_goods_box").prepend(`
            <a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_wear.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_wear.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_wear.rightContent[0].endData.img} " alt="">
    </div>
</a>
            `)
            } */

        }
    })
})

//家电数据渲染 进入第一页默认显示
headsetDataSum = ''
$('.right_img').html()
for (let i = 0; i < home_classification_homeElectricity.rightContent[0].Data.length; i++) {
    headsetDataSum += `
    <a href="" class="box_sadhow_pubilc home_classification_goods_box">
    <div><img src="${home_classification_homeElectricity.rightContent[0].Data[i].img}" alt=""></div>
    <span>${home_classification_homeElectricity.rightContent[0].Data[i].Name}</span>
    <span>${home_classification_homeElectricity.rightContent[0].Data[i].introyduce}</span>
    <span>${home_classification_homeElectricity.rightContent[0].Data[i].price}元起</span>
    </a>
    `
}
$('.right_content').eq(2).html(headsetDataSum)
$('.right_content').eq(2).append(`
<div href="" class="Last_home_classification_goods_box">

<a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_homeElectricity.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_homeElectricity.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_homeElectricity.rightContent[0].endData.img} " alt="">
    </div>
</a>

<a  href=""
    class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
    <div>
        <div>${home_classification_homeElectricity.rightContent[0].Lookmore.Name}</div>
        <div class='more_text'>${home_classification_homeElectricity.rightContent[0].Lookmore.price}</div>
    </div>
    <div>${home_classification_homeElectricity.rightContent[0].Lookmore.img}</div>
</a>
</div>
`)

//生活电器数据渲染 
let home_classification_homeElectricity2 = {
    rightContent: [
        {
            Title: '电暖器',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812e9a25e79fb3055b581f2bef2ae05b.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家石墨烯智能电暖器',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812e9a25e79fb3055b581f2bef2ae05b.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家石墨烯智能电暖器',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812e9a25e79fb3055b581f2bef2ae05b.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家石墨烯智能电暖器',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812e9a25e79fb3055b581f2bef2ae05b.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家石墨烯智能电暖器',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812e9a25e79fb3055b581f2bef2ae05b.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家石墨烯智能电暖器',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812e9a25e79fb3055b581f2bef2ae05b.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家石墨烯智能电暖器',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812e9a25e79fb3055b581f2bef2ae05b.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家石墨烯智能电暖器',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7acbaf884ce4295b856ce04a935a5717.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家直流变频两季扇',
                price: 799
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '电暖器'
            }
        },
        {
            Title: '扫地机',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d910c9c340274064a1e784e1d371ce5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家扫地机器人 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d910c9c340274064a1e784e1d371ce5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家扫地机器人 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d910c9c340274064a1e784e1d371ce5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家扫地机器人 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d910c9c340274064a1e784e1d371ce5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家扫地机器人 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d910c9c340274064a1e784e1d371ce5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家扫地机器人 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d910c9c340274064a1e784e1d371ce5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家扫地机器人 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d910c9c340274064a1e784e1d371ce5.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家扫地机器人 Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a52276de04933354cfe5b62f6a6edd3.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家免洗扫拖机器人',
                price: 1999
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '电暖器'
            }
        },
        {
            Title: '空净',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74a5cf7ecc2bb102b3f5d83ae1b25fae.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家空气净化器F1',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74a5cf7ecc2bb102b3f5d83ae1b25fae.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家空气净化器F1',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74a5cf7ecc2bb102b3f5d83ae1b25fae.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家空气净化器F1',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74a5cf7ecc2bb102b3f5d83ae1b25fae.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家空气净化器F1',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74a5cf7ecc2bb102b3f5d83ae1b25fae.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家空气净化器F1',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74a5cf7ecc2bb102b3f5d83ae1b25fae.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家空气净化器F1',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74a5cf7ecc2bb102b3f5d83ae1b25fae.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家空气净化器F1',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1199
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a767a69bdd59d1f43c83088be28082e.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家空气净化器 4',
                price: 899
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '空净'
            }
        },
        {
            Title: '清洁',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49ce27de01e2f841c21abc6a40ce7162.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家直驱洗烘一体机 10kg',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/467cedb8205d291c6015bc10ee2f9260.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家除螨仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/467cedb8205d291c6015bc10ee2f9260.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家除螨仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/467cedb8205d291c6015bc10ee2f9260.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家除螨仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/467cedb8205d291c6015bc10ee2f9260.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家除螨仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/467cedb8205d291c6015bc10ee2f9260.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家除螨仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/467cedb8205d291c6015bc10ee2f9260.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家除螨仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56c994c255ccea03452f0b14afab44fc.jpg?thumb=1&w=150&h=150&f=webp&q=90 ',
                Name: '米家双刷无线吸尘器',
                price: 799
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '清洁'
            }
        }

    ],
    leftConten: {
        leftTile: '生活电器',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37973c4bedc27bae38e1b1758ed4b318.png?thumb=1&w=351&h=450&f=webp&q=90',
        img1: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d51103fe64d90aca747a6d753beae293.jpeg?thumb=1&w=351&h=450&f=webp&q=90'
    }
}

//生活电器数据渲染 左边固定商品
$(".content").append(`
<div class="home_classification_box pubilcWidth ">
    <div class="box_hd">
        <span>${home_classification_homeElectricity2.leftConten.leftTile}</span>
        <div class="more homeElectricity2">
     
        </div>
    </div>
    <div class="box_bd">
    <div class="left_img_double ">
    <div class="box_sadhow_pubilc"><img src="${home_classification_homeElectricity2.leftConten.img}" alt=""></div>
    <div class="box_sadhow_pubilc"><img src="${home_classification_homeElectricity2.leftConten.img1}" alt=""></div>
    </div>
    <div class="right_content">
</div>
</div>
`)
let homeElectricity2 = ''
for (let i = 0; i < home_classification_homeElectricity2.rightContent.length; i++) {
    homeElectricity2 += `<span class='classificationTitle'>${home_classification_homeElectricity2.rightContent[i].Title}</span>
    `

}
$('.homeElectricity2').html(homeElectricity2)

//生活电器数据渲染  商品分类板块右上角分类词触发事件
$('.homeElectricity2>span').eq(0).css({
    borderBottom: '2px solid #ff6700'
})
$('.homeElectricity2>span').each(function (index, itme) {
    $('.homeElectricity2>span').eq(index).on({
        mouseenter: function () {
            $(this).css({
                borderBottom: '2px solid #ff6700'
            })
            $(this).siblings().css({
                borderBottom: '2px solid #ffffff00'
            })

            // 右上角分类名词触发渲染数据
            let j = $(this).index()
            console.log(j);
            headsetDataSum = ''
            $('.right_img').html()
            for (let i = 0; i < home_classification_homeElectricity2.rightContent[j].Data.length; i++) {
                headsetDataSum += `
                <a href="" class="box_sadhow_pubilc home_classification_goods_box">
                <div><img src="${home_classification_homeElectricity2.rightContent[j].Data[i].img}" alt=""></div>
                <span>${home_classification_homeElectricity2.rightContent[j].Data[i].Name}</span>
                <span>${home_classification_homeElectricity2.rightContent[j].Data[i].introyduce}</span>
                <span>${home_classification_homeElectricity2.rightContent[j].Data[i].price}元起</span>
                </a>
                `
            }
            $('.right_content').eq(3).html(headsetDataSum)
            $('.right_content').eq(3).append(`
            <div href="" class="Last_home_classification_goods_box">
            
            <a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
                <div>
                    <div class='goods_Name'>${home_classification_homeElectricity2.rightContent[j].endData.Name}</div>
                    <div class='goods_peice'>${home_classification_homeElectricity2.rightContent[j].endData.price}元起</div>
                </div>
                <div>
                    <img src="${home_classification_homeElectricity2.rightContent[j].endData.img} " alt="">
                </div>
            </a>
            
            <a  href=""
                class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
                <div>
                    <div>${home_classification_homeElectricity2.rightContent[j].Lookmore.Name}</div>
                    <div class='more_text'>${home_classification_homeElectricity2.rightContent[j].Lookmore.price}</div>
                </div>
                <div>${home_classification_homeElectricity2.rightContent[j].Lookmore.img}</div>
            </a>
            </div>
            `)
        }
    })
})

//生活电器数据渲染 进入第一页默认显示
headsetDataSum = ''
$('.right_img').html()
for (let i = 0; i < home_classification_homeElectricity2.rightContent[0].Data.length; i++) {
    headsetDataSum += `
    <a href="" class="box_sadhow_pubilc home_classification_goods_box">
    <div><img src="${home_classification_homeElectricity2.rightContent[0].Data[i].img}" alt=""></div>
    <span>${home_classification_homeElectricity2.rightContent[0].Data[i].Name}</span>
    <span>${home_classification_homeElectricity2.rightContent[0].Data[i].introyduce}</span>
    <span>${home_classification_homeElectricity2.rightContent[0].Data[i].price}元起</span>
    </a>
    `
}
$('.right_content').eq(3).html(headsetDataSum)
$('.right_content').eq(3).append(`
<div href="" class="Last_home_classification_goods_box">

<a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_homeElectricity2.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_homeElectricity2.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_homeElectricity2.rightContent[0].endData.img} " alt="">
    </div>
</a>

<a  href=""
    class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
    <div>
        <div>${home_classification_homeElectricity2.rightContent[0].Lookmore.Name}</div>
        <div class='more_text'>${home_classification_homeElectricity2.rightContent[0].Lookmore.price}</div>
    </div>
    <div>${home_classification_homeElectricity2.rightContent[0].Lookmore.img}</div>
</a>
</div>
`)


//厨房电器数据渲染 
let home_classification_KitchenAppliances = {
    rightContent: [
        {
            Title: '净水器',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4f05377a98e5b005e92703b943c4e03.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米双核净水器1200G',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3099
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4f05377a98e5b005e92703b943c4e03.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米双核净水器1200G',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3099
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4f05377a98e5b005e92703b943c4e03.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米双核净水器1200G',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3099
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4f05377a98e5b005e92703b943c4e03.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米双核净水器1200G',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3099
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4f05377a98e5b005e92703b943c4e03.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米双核净水器1200G',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3099
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4f05377a98e5b005e92703b943c4e03.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米双核净水器1200G',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3099
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4f05377a98e5b005e92703b943c4e03.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米双核净水器1200G',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3099
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e79891260659fa51cac50f64c4e4147d.png?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米净水器H800G Pro',
                price: 1799
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '电暖器'
            }
        },
        {
            Title: '烟灶',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b366b9f38c40394f7c71c3c991d8fba2.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跨界烟灶套装S1 天然气',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b366b9f38c40394f7c71c3c991d8fba2.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跨界烟灶套装S1 天然气',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b366b9f38c40394f7c71c3c991d8fba2.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跨界烟灶套装S1 天然气',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b366b9f38c40394f7c71c3c991d8fba2.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跨界烟灶套装S1 天然气',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b366b9f38c40394f7c71c3c991d8fba2.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跨界烟灶套装S1 天然气',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b366b9f38c40394f7c71c3c991d8fba2.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跨界烟灶套装S1 天然气',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b366b9f38c40394f7c71c3c991d8fba2.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跨界烟灶套装S1 天然气',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2699
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30fdb68d9cf6a588dfa17237866f79cb.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家侧吸油烟机S1',
                price: 1099
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '电暖器'
            }
        },
        {
            Title: '电饭煲',
            Data: [{
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/580B42EF8BDEC3E0AA9C48F661C0D1C3.jpg',
                Name: '米家透明蒸汽电饭煲 4L',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 599
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/580B42EF8BDEC3E0AA9C48F661C0D1C3.jpg',
                Name: '米家透明蒸汽电饭煲 4L',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 599
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/580B42EF8BDEC3E0AA9C48F661C0D1C3.jpg',
                Name: '米家透明蒸汽电饭煲 4L',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 599
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/580B42EF8BDEC3E0AA9C48F661C0D1C3.jpg',
                Name: '米家透明蒸汽电饭煲 4L',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 599
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/580B42EF8BDEC3E0AA9C48F661C0D1C3.jpg',
                Name: '米家透明蒸汽电饭煲 4L',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 599
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/580B42EF8BDEC3E0AA9C48F661C0D1C3.jpg',
                Name: '米家透明蒸汽电饭煲 4L',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 599
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/580B42EF8BDEC3E0AA9C48F661C0D1C3.jpg',
                Name: '米家透明蒸汽电饭煲 4L',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 599
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205201909_0c600f8b38a0c5de1354c613dffa28b4.png?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家智能小饭煲 2',
                price: 199
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '空净'
            }
        },
        {
            Title: '微蒸烤',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家智能蒸烤箱',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家智能蒸烤箱',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家智能蒸烤箱',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家智能蒸烤箱',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家智能蒸烤箱',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家智能蒸烤箱',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家智能蒸烤箱',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 1999
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205202040_62a3156576af2ac79910581abe324e4b.png?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家智能空气炸锅Pro 4L',
                price: 399
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '清洁'
            }
        }

    ],
    leftConten: {
        leftTile: '厨房电器',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0a92bc19df74c4da59563206321320a.jpg?thumb=1&w=351&h=450&f=webp&q=90',
        img1: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00c61477413eb05a67b1ec032a148121.png?thumb=1&w=351&h=450&f=webp&q=90'
    }
}

//厨房电器数据渲染 左边固定商品
$(".content").append(`
<div class="home_classification_box pubilcWidth ">
    <div class="box_hd">
        <span>${home_classification_KitchenAppliances.leftConten.leftTile}</span>
        <div class="more KitchenAppliances">
     
        </div>
    </div>
    <div class="box_bd">
    <div class="left_img_double ">
    <div class="box_sadhow_pubilc"><img src="${home_classification_KitchenAppliances.leftConten.img}" alt=""></div>
    <div class="box_sadhow_pubilc"><img src="${home_classification_KitchenAppliances.leftConten.img1}" alt=""></div>
    </div>
    <div class="right_content">
</div>
</div>
`)
let KitchenAppliances = ''
for (let i = 0; i < home_classification_KitchenAppliances.rightContent.length; i++) {
    KitchenAppliances += `<span class='classificationTitle'>${home_classification_KitchenAppliances.rightContent[i].Title}</span>
    `
}
$('.KitchenAppliances').html(KitchenAppliances)

//厨房电器数据渲染  商品分类板块右上角分类词触发事件
$('.KitchenAppliances>span').eq(0).css({
    borderBottom: '2px solid #ff6700'
})
$('.KitchenAppliances>span').each(function (index, itme) {
    $('.KitchenAppliances>span').eq(index).on({
        mouseenter: function () {
            $(this).css({
                borderBottom: '2px solid #ff6700'
            })
            $(this).siblings().css({
                borderBottom: '2px solid #ffffff00'
            })

            // 右上角分类名词触发渲染数据
            let j = $(this).index()
            console.log(j);
            headsetDataSum = ''
            $('.right_img').html()
            for (let i = 0; i < home_classification_KitchenAppliances.rightContent[j].Data.length; i++) {
                headsetDataSum += `
                <a href="" class="box_sadhow_pubilc home_classification_goods_box">
                <div><img src="${home_classification_KitchenAppliances.rightContent[j].Data[i].img}" alt=""></div>
                <span>${home_classification_KitchenAppliances.rightContent[j].Data[i].Name}</span>
                <span>${home_classification_KitchenAppliances.rightContent[j].Data[i].introyduce}</span>
                <span>${home_classification_KitchenAppliances.rightContent[j].Data[i].price}元起</span>
                </a>
                `
            }
            $('.right_content').eq(4).html(headsetDataSum)
            $('.right_content').eq(4).append(`
            <div href="" class="Last_home_classification_goods_box">
            
            <a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
                <div>
                    <div class='goods_Name'>${home_classification_KitchenAppliances.rightContent[j].endData.Name}</div>
                    <div class='goods_peice'>${home_classification_KitchenAppliances.rightContent[j].endData.price}元起</div>
                </div>
                <div>
                    <img src="${home_classification_KitchenAppliances.rightContent[j].endData.img} " alt="">
                </div>
            </a>
            
            <a  href=""
                class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
                <div>
                    <div>${home_classification_KitchenAppliances.rightContent[j].Lookmore.Name}</div>
                    <div class='more_text'>${home_classification_KitchenAppliances.rightContent[j].Lookmore.price}</div>
                </div>
                <div>${home_classification_KitchenAppliances.rightContent[j].Lookmore.img}</div>
            </a>
            </div>
            `)
        }
    })
})

//厨房电器数据渲染 进入第一页默认显示
headsetDataSum = ''
$('.right_img').html()
for (let i = 0; i < home_classification_KitchenAppliances.rightContent[0].Data.length; i++) {
    headsetDataSum += `
    <a href="" class="box_sadhow_pubilc home_classification_goods_box">
    <div><img src="${home_classification_KitchenAppliances.rightContent[0].Data[i].img}" alt=""></div>
    <span>${home_classification_KitchenAppliances.rightContent[0].Data[i].Name}</span>
    <span>${home_classification_KitchenAppliances.rightContent[0].Data[i].introyduce}</span>
    <span>${home_classification_KitchenAppliances.rightContent[0].Data[i].price}元起</span>
    </a>
    `
}
$('.right_content').eq(4).html(headsetDataSum)
$('.right_content').eq(4).append(`
<div href="" class="Last_home_classification_goods_box">

<a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_KitchenAppliances.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_KitchenAppliances.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_KitchenAppliances.rightContent[0].endData.img} " alt="">
    </div>
</a>

<a  href=""
    class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
    <div>
        <div>${home_classification_KitchenAppliances.rightContent[0].Lookmore.Name}</div>
        <div class='more_text'>${home_classification_KitchenAppliances.rightContent[0].Lookmore.price}</div>
    </div>
    <div>${home_classification_KitchenAppliances.rightContent[0].Lookmore.img}</div>
</a>
</div>
`)

//智能家居数据渲染 
let home_classification_SmartHome = {
    rightContent: [
        {
            Title: '小爱音箱',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204191820_88e1f0fded3b4f05c5bdecf433a868cf.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi智能家庭屏 10',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204191820_88e1f0fded3b4f05c5bdecf433a868cf.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi智能家庭屏 10',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204191820_88e1f0fded3b4f05c5bdecf433a868cf.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi智能家庭屏 10',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204191820_88e1f0fded3b4f05c5bdecf433a868cf.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi智能家庭屏 10',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204191820_88e1f0fded3b4f05c5bdecf433a868cf.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi智能家庭屏 10',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204191820_88e1f0fded3b4f05c5bdecf433a868cf.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi智能家庭屏 10',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204191820_88e1f0fded3b4f05c5bdecf433a868cf.png?thumb=1&w=300&h=300&f=webp&q=90',
                Name: 'Xiaomi智能家庭屏 10',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 999
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e13900c094ae4ac4eb53b35f2d0c95b0.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米小爱音箱',
                price: 249
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '小爱音箱'
            }
        },
        {
            Title: '门锁门铃',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c7cb198d71ee962b38a45aa03515341.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米人脸识别智能门锁 X',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c7cb198d71ee962b38a45aa03515341.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米人脸识别智能门锁 X',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c7cb198d71ee962b38a45aa03515341.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米人脸识别智能门锁 X',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c7cb198d71ee962b38a45aa03515341.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米人脸识别智能门锁 X',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c7cb198d71ee962b38a45aa03515341.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米人脸识别智能门锁 X',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c7cb198d71ee962b38a45aa03515341.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米人脸识别智能门锁 X',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3299
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c7cb198d71ee962b38a45aa03515341.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米人脸识别智能门锁 X',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 3299
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47332a26f2d1ad4bd7c9718cf0a6d2df.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米智能猫眼1S',
                price: 699
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '门锁门铃'
            }
        },
        {
            Title: '路由器',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/314df4955a5f305de306155078bb103d.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米路由器AX3000',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 329
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/314df4955a5f305de306155078bb103d.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米路由器AX3000',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 329
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/314df4955a5f305de306155078bb103d.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米路由器AX3000',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 329
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/314df4955a5f305de306155078bb103d.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米路由器AX3000',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 329
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/314df4955a5f305de306155078bb103d.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米路由器AX3000',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 329
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/314df4955a5f305de306155078bb103d.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米路由器AX3000',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 329
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/314df4955a5f305de306155078bb103d.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米路由器AX3000',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 329
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11db80e3fcb3e186e5ea7078b0a1de5a.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米路由器AX6000',
                price: 549
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '路由器'
            }
        },
        {
            Title: '智能设备',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0130f299091fff0d471720d9a6d3319f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米天然气卫士',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0130f299091fff0d471720d9a6d3319f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米天然气卫士',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0130f299091fff0d471720d9a6d3319f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米天然气卫士',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0130f299091fff0d471720d9a6d3319f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米天然气卫士',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0130f299091fff0d471720d9a6d3319f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米天然气卫士',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0130f299091fff0d471720d9a6d3319f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米天然气卫士',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0130f299091fff0d471720d9a6d3319f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米天然气卫士',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205161530_acc36b04e6966fdf0143f8c6b7932a6c.png?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米智能门锁NFC卡 全球版',
                price: 49
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '智能设备'
            }
        }

    ],
    leftConten: {
        leftTile: '智能家居',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec383d223d9f38f442268df684c526f6.png?thumb=1&w=351&h=450&f=webp&q=90',
        img1: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9761c5b49e21b4d5aa03e7ddaf1a09.png?thumb=1&w=351&h=450&f=webp&q=90'
    }
}

//智能家居数据渲染 左边固定商品
$(".content").append(`
<div class="home_classification_box pubilcWidth ">
    <div class="box_hd">
        <span>${home_classification_SmartHome.leftConten.leftTile}</span>
        <div class="more SmartHome">
     
        </div>
    </div>
    <div class="box_bd">
    <div class="left_img_double ">
    <div class="box_sadhow_pubilc"><img src="${home_classification_SmartHome.leftConten.img}" alt=""></div>
    <div class="box_sadhow_pubilc"><img src="${home_classification_SmartHome.leftConten.img1}" alt=""></div>
    </div>
    <div class="right_content">
</div>
</div>
`)
let SmartHome = ''
for (let i = 0; i < home_classification_SmartHome.rightContent.length; i++) {
    SmartHome += `<span class='classificationTitle'>${home_classification_SmartHome.rightContent[i].Title}</span>
    `
}
$('.SmartHome').html(SmartHome)

//智能家居数据渲染  商品分类板块右上角分类词触发事件
$('.SmartHome>span').eq(0).css({
    borderBottom: '2px solid #ff6700'
})
$('.SmartHome>span').each(function (index, itme) {
    $('.SmartHome>span').eq(index).on({
        mouseenter: function () {
            $(this).css({
                borderBottom: '2px solid #ff6700'
            })
            $(this).siblings().css({
                borderBottom: '2px solid #ffffff00'
            })

            // 右上角分类名词触发渲染数据
            let j = $(this).index()
            console.log(j);
            headsetDataSum = ''
            $('.right_img').html()
            for (let i = 0; i < home_classification_SmartHome.rightContent[j].Data.length; i++) {
                headsetDataSum += `
                <a href="" class="box_sadhow_pubilc home_classification_goods_box">
                <div><img src="${home_classification_SmartHome.rightContent[j].Data[i].img}" alt=""></div>
                <span>${home_classification_SmartHome.rightContent[j].Data[i].Name}</span>
                <span>${home_classification_SmartHome.rightContent[j].Data[i].introyduce}</span>
                <span>${home_classification_SmartHome.rightContent[j].Data[i].price}元起</span>
                </a>
                `
            }
            $('.right_content').eq(5).html(headsetDataSum)
            $('.right_content').eq(5).append(`
            <div href="" class="Last_home_classification_goods_box">
            
            <a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
                <div>
                    <div class='goods_Name'>${home_classification_SmartHome.rightContent[j].endData.Name}</div>
                    <div class='goods_peice'>${home_classification_SmartHome.rightContent[j].endData.price}元起</div>
                </div>
                <div>
                    <img src="${home_classification_SmartHome.rightContent[j].endData.img} " alt="">
                </div>
            </a>
            
            <a  href=""
                class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
                <div>
                    <div>${home_classification_SmartHome.rightContent[j].Lookmore.Name}</div>
                    <div class='more_text'>${home_classification_SmartHome.rightContent[j].Lookmore.price}</div>
                </div>
                <div>${home_classification_SmartHome.rightContent[j].Lookmore.img}</div>
            </a>
            </div>
            `)
        }
    })
})

//智能家居数据渲染 进入第一页默认显示
headsetDataSum = ''
$('.right_img').html()
for (let i = 0; i < home_classification_SmartHome.rightContent[0].Data.length; i++) {
    headsetDataSum += `
    <a href="" class="box_sadhow_pubilc home_classification_goods_box">
    <div><img src="${home_classification_SmartHome.rightContent[0].Data[i].img}" alt=""></div>
    <span>${home_classification_SmartHome.rightContent[0].Data[i].Name}</span>
    <span>${home_classification_SmartHome.rightContent[0].Data[i].introyduce}</span>
    <span>${home_classification_SmartHome.rightContent[0].Data[i].price}元起</span>
    </a>
    `
}
$('.right_content').eq(5).html(headsetDataSum)
$('.right_content').eq(5).append(`
<div href="" class="Last_home_classification_goods_box">

<a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_SmartHome.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_SmartHome.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_SmartHome.rightContent[0].endData.img} " alt="">
    </div>
</a>

<a  href=""
    class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
    <div>
        <div>${home_classification_SmartHome.rightContent[0].Lookmore.Name}</div>
        <div class='more_text'>${home_classification_SmartHome.rightContent[0].Lookmore.price}</div>
    </div>
    <div>${home_classification_SmartHome.rightContent[0].Lookmore.img}</div>
</a>
</div>
`)

//运动出行数据渲染 
let home_classification_motion = {
    rightContent: [
        {
            Title: '平衡车/滑板车',
            Data: [{
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=300&h=300',
                Name: '九号平衡车',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/609d0a457c7f8ac27d76f953c8acb7fc.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '九号卡丁车Pro兰博基尼汽车定制版',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 9999
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/609d0a457c7f8ac27d76f953c8acb7fc.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '九号卡丁车Pro兰博基尼汽车定制版',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 9999
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=300&h=300',
                Name: '九号平衡车',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2199
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=300&h=300',
                Name: '九号平衡车',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2199
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=300&h=300',
                Name: '九号平衡车',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2199
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=300&h=300',
                Name: '九号平衡车',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2199
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f2099364403866dd2da71d43f2bc63c.png?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家电动滑板车 3 青春版',
                price: 1799
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '平衡车/滑板车'
            }
        },
        {
            Title: '运动健身',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e41e403312311dea21a9ebb1491292.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跑步机',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2399
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e41e403312311dea21a9ebb1491292.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跑步机',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2399
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e41e403312311dea21a9ebb1491292.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跑步机',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2399
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e41e403312311dea21a9ebb1491292.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跑步机',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2399
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e41e403312311dea21a9ebb1491292.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跑步机',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2399
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e41e403312311dea21a9ebb1491292.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跑步机',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2399
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e41e403312311dea21a9ebb1491292.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家跑步机',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 2399
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/729534e2ec0f3ace5cb1a8456e4a1211.png?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家走步机',
                price: 1399
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '运动健身'
            }
        },
        {
            Title: '箱包配饰',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b4304d0e62a9c874e83eba0649110ee.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米旅行箱 青春款 系列',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b4304d0e62a9c874e83eba0649110ee.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米旅行箱 青春款 系列',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b4304d0e62a9c874e83eba0649110ee.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米旅行箱 青春款 系列',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b4304d0e62a9c874e83eba0649110ee.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米旅行箱 青春款 系列',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b4304d0e62a9c874e83eba0649110ee.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米旅行箱 青春款 系列',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b4304d0e62a9c874e83eba0649110ee.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米旅行箱 青春款 系列',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b4304d0e62a9c874e83eba0649110ee.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米旅行箱 青春款 系列',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 199
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18ed368638a1d75431e36be0bf6d04f4.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米小背包',
                price: 39
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '箱包配饰'
            }
        },
        {
            Title: '出行工具',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27477a6b721dbff5758c295f68da318e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米后视镜记录仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27477a6b721dbff5758c295f68da318e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米后视镜记录仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27477a6b721dbff5758c295f68da318e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米后视镜记录仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27477a6b721dbff5758c295f68da318e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米后视镜记录仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27477a6b721dbff5758c295f68da318e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米后视镜记录仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27477a6b721dbff5758c295f68da318e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米后视镜记录仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27477a6b721dbff5758c295f68da318e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米后视镜记录仪',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 459
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/155d7ee69679d173a034576737577342.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家电动精修螺丝刀',
                price: 159
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '出行工具'
            }
        }

    ],
    leftConten: {
        leftTile: '运动出行',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84fef78042e4056ea589474196780d4e.jpg?thumb=1&w=351&h=450&f=webp&q=90',
        img1: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecce1c0d981037e58cfa281a06122249.jpg?thumb=1&w=351&h=450&f=webp&q=90'
    }
}
//运动出行数据渲染 左边固定商品
$(".content").append(`
<div class="home_classification_box pubilcWidth ">
    <div class="box_hd">
        <span>${home_classification_motion.leftConten.leftTile}</span>
        <div class="more motion">
     
        </div>
    </div>
    <div class="box_bd">
    <div class="left_img_double ">
    <div class="box_sadhow_pubilc"><img src="${home_classification_motion.leftConten.img}" alt=""></div>
    <div class="box_sadhow_pubilc"><img src="${home_classification_motion.leftConten.img1}" alt=""></div>
    </div>
    <div class="right_content">
</div>
</div>
`)
let motion = ''
for (let i = 0; i < home_classification_motion.rightContent.length; i++) {
    motion += `<span class='classificationTitle'>${home_classification_motion.rightContent[i].Title}</span>
    `
}
$('.motion').html(motion)

//运动出行数据渲染 商品分类板块右上角分类词触发事件
$('.motion>span').eq(0).css({
    borderBottom: '2px solid #ff6700'
})
$('.motion>span').each(function (index, itme) {
    $('.motion>span').eq(index).on({
        mouseenter: function () {
            $(this).css({
                borderBottom: '2px solid #ff6700'
            })
            $(this).siblings().css({
                borderBottom: '2px solid #ffffff00'
            })

            // 右上角分类名词触发渲染数据
            let j = $(this).index()
            console.log(j);
            headsetDataSum = ''
            $('.right_img').html()
            for (let i = 0; i < home_classification_motion.rightContent[j].Data.length; i++) {
                headsetDataSum += `
                <a href="" class="box_sadhow_pubilc home_classification_goods_box">
                <div><img src="${home_classification_motion.rightContent[j].Data[i].img}" alt=""></div>
                <span>${home_classification_motion.rightContent[j].Data[i].Name}</span>
                <span>${home_classification_motion.rightContent[j].Data[i].introyduce}</span>
                <span>${home_classification_motion.rightContent[j].Data[i].price}元起</span>
                </a>
                `
            }
            $('.right_content').eq(6).html(headsetDataSum)
            $('.right_content').eq(6).append(`
            <div href="" class="Last_home_classification_goods_box">
            
            <a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
                <div>
                    <div class='goods_Name'>${home_classification_motion.rightContent[j].endData.Name}</div>
                    <div class='goods_peice'>${home_classification_motion.rightContent[j].endData.price}元起</div>
                </div>
                <div>
                    <img src="${home_classification_motion.rightContent[j].endData.img} " alt="">
                </div>
            </a>
            
            <a  href=""
                class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
                <div>
                    <div>${home_classification_motion.rightContent[j].Lookmore.Name}</div>
                    <div class='more_text'>${home_classification_motion.rightContent[j].Lookmore.price}</div>
                </div>
                <div>${home_classification_motion.rightContent[j].Lookmore.img}</div>
            </a>
            </div>
            `)
        }
    })
})

//运动出行数据渲染 进入第一页默认显示
headsetDataSum = ''
$('.right_img').html()
for (let i = 0; i < home_classification_motion.rightContent[0].Data.length; i++) {
    headsetDataSum += `
    <a href="" class="box_sadhow_pubilc home_classification_goods_box">
    <div><img src="${home_classification_motion.rightContent[0].Data[i].img}" alt=""></div>
    <span>${home_classification_motion.rightContent[0].Data[i].Name}</span>
    <span>${home_classification_motion.rightContent[0].Data[i].introyduce}</span>
    <span>${home_classification_motion.rightContent[0].Data[i].price}元起</span>
    </a>
    `
}
$('.right_content').eq(6).html(headsetDataSum)
$('.right_content').eq(6).append(`
<div href="" class="Last_home_classification_goods_box">

<a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_motion.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_motion.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_motion.rightContent[0].endData.img} " alt="">
    </div>
</a>

<a  href=""
    class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
    <div>
        <div>${home_classification_motion.rightContent[0].Lookmore.Name}</div>
        <div class='more_text'>${home_classification_motion.rightContent[0].Lookmore.price}</div>
    </div>
    <div>${home_classification_motion.rightContent[0].Lookmore.img}</div>
</a>
</div>
`)


let home_classification_GeneralMerchandise = {
    rightContent: [
        {
            Title: '个护健康',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家声波电动牙刷T700',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 249
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家声波电动牙刷T700',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 249
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家声波电动牙刷T700',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 249
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家声波电动牙刷T700',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 249
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家声波电动牙刷T700',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 249
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家声波电动牙刷T700',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 249
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米家声波电动牙刷T700',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 249
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5afc0b5d19db30a62ed15b5435008033.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '米家自动香氛机套装',
                price: 89
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '个护健康'
            }
        },
        {
            Title: '电源/线材',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8831809c4acc20b1b9380522407fc49e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米充电宝10000mAh 33W口袋版Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 169
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8831809c4acc20b1b9380522407fc49e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米充电宝10000mAh 33W口袋版Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 169
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8831809c4acc20b1b9380522407fc49e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米充电宝10000mAh 33W口袋版Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 169
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8831809c4acc20b1b9380522407fc49e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米充电宝10000mAh 33W口袋版Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 169
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8831809c4acc20b1b9380522407fc49e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米充电宝10000mAh 33W口袋版Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 169
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8831809c4acc20b1b9380522407fc49e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米充电宝10000mAh 33W口袋版Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 169
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8831809c4acc20b1b9380522407fc49e.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '小米充电宝10000mAh 33W口袋版Pro',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 169
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fffc0a962387dff2f70aeb009ddf69ff.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米车载充电器快充版1A1C 100W',
                price: 99
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '电源/线材'
            }
        },
        {
            Title: '母婴玩具',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2562c4a892f018a979ff0cd8b992251f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米兔儿童电话手表5C',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 349
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2562c4a892f018a979ff0cd8b992251f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米兔儿童电话手表5C',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 349
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2562c4a892f018a979ff0cd8b992251f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米兔儿童电话手表5C',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 349
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2562c4a892f018a979ff0cd8b992251f.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '米兔儿童电话手表5C',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 349
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/1acf1167-8a6d-cefb-7805-628f78a6aa33.jpg?thumb=1&w=300&h=300',
                Name: '智能故事机',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }, {
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/1acf1167-8a6d-cefb-7805-628f78a6aa33.jpg?thumb=1&w=300&h=300',
                Name: '智能故事机',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43dd9cbdb7694d35bd1e44e25601b475.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '变形金刚 擎天柱',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 179
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18ed368638a1d75431e36be0bf6d04f4.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '小米小背包',
                price: 39
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '母婴玩具'
            }
        },
        {
            Title: '家居床品',
            Data: [{
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db0bdebf7a991abf8a307f289491a37.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '8H释压舒弹纤维枕 抗菌对装',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 99
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db0bdebf7a991abf8a307f289491a37.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '8H释压舒弹纤维枕 抗菌对装',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 99
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db0bdebf7a991abf8a307f289491a37.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '8H释压舒弹纤维枕 抗菌对装',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 99
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db0bdebf7a991abf8a307f289491a37.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '8H释压舒弹纤维枕 抗菌对装',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 99
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db0bdebf7a991abf8a307f289491a37.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '8H释压舒弹纤维枕 抗菌对装',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 99
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db0bdebf7a991abf8a307f289491a37.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '8H释压舒弹纤维枕 抗菌对装',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 99
            }, {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db0bdebf7a991abf8a307f289491a37.jpg?thumb=1&w=300&h=300&f=webp&q=90',
                Name: '8H释压舒弹纤维枕 抗菌对装',
                introyduce: '这里的简介 超过一行就会隐藏多余部分 骁龙8+ 旗舰处理器 | 徕卡影像',
                price: 99
            }],
            endData: {
                img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/62ce711a4c595c78dee5e647f1295240.jpg?thumb=1&w=150&h=150&f=webp&q=90',
                Name: '8H记忆绵多功能午睡枕',
                price: 69
            },
            Lookmore: {
                img: '<svg t="1670660511743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4955" width="48" height="48"><path d="M448 736c-8.19 0-16.38-3.12-22.62-9.38-12.5-12.5-12.5-32.75 0-45.25L594.75 512 425.38 342.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l180.69 180.69c18.72 18.72 18.72 49.16 0 67.88l-180.7 180.68c-6.24 6.26-14.43 9.38-22.62 9.38z m158.06-212.69h0.31-0.31z" p-id="4956"></path><path d="M512 128c211.74 0 384 172.26 384 384S723.74 896 512 896 128 723.74 128 512s172.26-384 384-384m0-64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z" p-id="4957"></path></svg>',
                Name: '浏览更多',
                price: '家居床品'
            }
        }
    ],
    leftConten: {
        leftTile: '日用百货',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5769bd53177a9301113f799fdc8511d.jpg?thumb=1&w=351&h=450&f=webp&q=90',
        img1: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65950f83f429f2a05125bea297d8df6b.jpg?thumb=1&w=351&h=450&f=webp&q=90'
    }
}


//运动出行数据渲染 左边固定商品
$(".content").append(`
<div class="home_classification_box pubilcWidth ">
    <div class="box_hd">
        <span>${home_classification_GeneralMerchandise.leftConten.leftTile}</span>
        <div class="more GeneralMerchandise">
     
        </div>
    </div>
    <div class="box_bd">
    <div class="left_img_double ">
    <div class="box_sadhow_pubilc"><img src="${home_classification_GeneralMerchandise.leftConten.img}" alt=""></div>
    <div class="box_sadhow_pubilc"><img src="${home_classification_GeneralMerchandise.leftConten.img1}" alt=""></div>
    </div>
    <div class="right_content">
</div>
</div>
`)
let GeneralMerchandise = ''
for (let i = 0; i < home_classification_GeneralMerchandise.rightContent.length; i++) {
    GeneralMerchandise += `<span class='classificationTitle'>${home_classification_GeneralMerchandise.rightContent[i].Title}</span>
    `
}
$('.GeneralMerchandise').html(GeneralMerchandise)

//运动出行数据渲染 商品分类板块右上角分类词触发事件
$('.GeneralMerchandise>span').eq(0).css({
    borderBottom: '2px solid #ff6700'
})
$('.GeneralMerchandise>span').each(function (index, itme) {
    $('.GeneralMerchandise>span').eq(index).on({
        mouseenter: function () {
            $(this).css({
                borderBottom: '2px solid #ff6700'
            })
            $(this).siblings().css({
                borderBottom: '2px solid #ffffff00'
            })

            // 右上角分类名词触发渲染数据
            let j = $(this).index()
            console.log(j);
            headsetDataSum = ''
            $('.right_img').html()
            for (let i = 0; i < home_classification_GeneralMerchandise.rightContent[j].Data.length; i++) {
                headsetDataSum += `
                <a href="" class="box_sadhow_pubilc home_classification_goods_box">
                <div><img src="${home_classification_GeneralMerchandise.rightContent[j].Data[i].img}" alt=""></div>
                <span>${home_classification_GeneralMerchandise.rightContent[j].Data[i].Name}</span>
                <span>${home_classification_GeneralMerchandise.rightContent[j].Data[i].introyduce}</span>
                <span>${home_classification_GeneralMerchandise.rightContent[j].Data[i].price}元起</span>
                </a>
                `
            }
            $('.right_content').eq(7).html(headsetDataSum)
            $('.right_content').eq(7).append(`
            <div href="" class="Last_home_classification_goods_box">
            
            <a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
                <div>
                    <div class='goods_Name'>${home_classification_GeneralMerchandise.rightContent[j].endData.Name}</div>
                    <div class='goods_peice'>${home_classification_GeneralMerchandise.rightContent[j].endData.price}元起</div>
                </div>
                <div>
                    <img src="${home_classification_GeneralMerchandise.rightContent[j].endData.img} " alt="">
                </div>
            </a>
            
            <a  href=""
                class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
                <div>
                    <div>${home_classification_GeneralMerchandise.rightContent[j].Lookmore.Name}</div>
                    <div class='more_text'>${home_classification_GeneralMerchandise.rightContent[j].Lookmore.price}</div>
                </div>
                <div>${home_classification_GeneralMerchandise.rightContent[j].Lookmore.img}</div>
            </a>
            </div>
            `)
        }
    })
})

//运动出行数据渲染 进入第一页默认显示
headsetDataSum = ''
$('.right_img').html()
for (let i = 0; i < home_classification_GeneralMerchandise.rightContent[0].Data.length; i++) {
    headsetDataSum += `
    <a href="" class="box_sadhow_pubilc home_classification_goods_box">
    <div><img src="${home_classification_GeneralMerchandise.rightContent[0].Data[i].img}" alt=""></div>
    <span>${home_classification_GeneralMerchandise.rightContent[0].Data[i].Name}</span>
    <span>${home_classification_GeneralMerchandise.rightContent[0].Data[i].introyduce}</span>
    <span>${home_classification_GeneralMerchandise.rightContent[0].Data[i].price}元起</span>
    </a>
    `
}
$('.right_content').eq(7).html(headsetDataSum)
$('.right_content').eq(7).append(`
<div href="" class="Last_home_classification_goods_box">

<a  href="" class="Last_home_classification_goods_boxTop box_sadhow_pubilc">
    <div>
        <div class='goods_Name'>${home_classification_GeneralMerchandise.rightContent[0].endData.Name}</div>
        <div class='goods_peice'>${home_classification_GeneralMerchandise.rightContent[0].endData.price}元起</div>
    </div>
    <div>
        <img src="${home_classification_GeneralMerchandise.rightContent[0].endData.img} " alt="">
    </div>
</a>

<a  href=""
    class="Last_home_classification_goods_boxBottm box_sadhow_pubilc                  vLast_home_classification_goods_boxTop">
    <div>
        <div>${home_classification_GeneralMerchandise.rightContent[0].Lookmore.Name}</div>
        <div class='more_text'>${home_classification_GeneralMerchandise.rightContent[0].Lookmore.price}</div>
    </div>
    <div>${home_classification_GeneralMerchandise.rightContent[0].Lookmore.img}</div>
</a>
</div>
`)

// 右侧固定的功能模块
$('.home_right_FlexdToolBox>a').each(function (index, itme) {
    $('.home_right_FlexdToolBox>a').eq(index).on({
        mouseenter: function () {
            $('.home_right_FlexdToolBox_title').eq(index).css({
                color: '#ff6700'
            })
            $('.home_right_FlexdToolBox>a>svg').eq(index).css({
                fill: '#ff6700'
            })
        }, mouseleave: function () {
            $('.home_right_FlexdToolBox_title').eq(index).css({
                color: '#757575'
            })
            $('.home_right_FlexdToolBox>a>svg').eq(index).css({
                fill: '#757575'
            })
        }
    })
})
$(".App_Popup").hide();
$(".number1").on({
    mouseenter: function () {
        $(".App_Popup").show();

    }, mouseleave: function () {
        $(".App_Popup").hide();


    }
})

//判断用户是否滑动滚动条
$('.backTop').hide();
window.onscroll = function () {
    let a=window.innerHeight
    if (window.pageYOffset > a) {
        $('.backTop').show();
        console.log(a);
    }
    if (window.pageYOffset < window.innerHeight) {
        $('.backTop').hide();
        console.log('b');

    }
    // console.log(window.pageYOffset);
}
// console.log(window.innerHeight);