// 查找box元素
var box = document.getElementById('box')
console.log(box)
// innerHTML  innerText

// box.innerHTML = '<div>我是div</div>'
// box.innerText = '<div>我是div</div>'

// box.innerHTML = '<div>'+1+'</div><div>'+2+'</div>'

// 购物车中的商品数据
var list = [
    {id:'gd1',name:'C#编程基础',price:88,num:1,check:false},
    {id:'gd2',name:'计算机基础',price:99,num:5,check:false},
    {id:'gd3',name:'photoshop',price:10,num:3,check:false},
    {id:'gd4',name:'web标准',price:20,num:1,check:false},
    {id:'gd5',name:'javascript',price:25,num:2,check:false},
    {id:'gd6',name:'h5+c3',price:26,num:1,check:false},
    {id:'gd7',name:'吃饭',price:999,num:3,check:false},
    {id:'gd8',name:'睡觉',price:999,num:10,check:false}
]
// 第二种字符串拼接的方法
// 定义一个空的字符串
var s = ''
// 循环
for(let i = 0;i < list.length; i ++){
    s += `<div class="goodsCard">
                <!-- 标题 -->
                <div class="gc-tit">
                    <label for="">
                        <input type="checkbox" class='ck' data=${list[i].id}>
                        ${list[i].name}
                    </label>
                </div>
                <!-- 详情 -->
                <div class="gc-detail flx">
                    <div class="gc-img"></div>
                    <div class="gc-ctt">
                        <div class="gc-txt">名称: ${list[i].name}</div>
                        <div class="gc-txt">编著: 爱谁谁</div>
                        <div class="gc-txt">出版: 某某出版社</div>
                        <div class="gc-txt">简介: 哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔</div>
                    </div>
                </div>
                <!-- 单价与删除 -->
                <div class="price flx">
                    <div class="pri">单价:${list[i].price}</div>
                    <div class="dele iconfont">&#xe619;</div>
                </div>
                <!-- 小计与数量修改 -->
                <div class="total flx">
                    <div class="tot">总价:${list[i].price*list[i].num}</div>
                    <div class="tot-btn flx">
                        <span class="reduce">-</span>
                        <span class="num">${list[i].num}</span>
                        <span class="add">+</span>
                    </div>
                </div>
            </div>`
}


// 将拼接好的字符串加载到页面中
box.innerHTML = s

// 定义一个值，判断全选按钮是否应该被勾选  true 被勾选   false 不被勾选
var flag = true 
// 给每个单选框绑定事件
// 获取单选框
var cks = document.getElementsByClassName('ck')
console.log(cks)
// 遍历获取的每个元素
for(let i=0;i<cks.length;i++){
    console.log(cks[i])
    // 给每个元素绑定change事件
    cks[i].addEventListener('change',function(){
        // 当前this指向事件绑定的元素
        console.log(this) 
        // 获取元素的data属性值
        console.log(this.attributes.data.value)   
        // 获取checkbox的选中状态   选中true / 未选中 false
        console.log(this.checked)
        // 判断，若该复选框被选中，则修改数据中的check字段

        // 遍历数据  
        // 为了改check属性
        for(let j = 0;j<list.length;j++){
            // 根据当前点击元素中绑定的data属性值，查找数组中对应的数据
            if(this.attributes.data.value == list[j].id){
                // 重置flag值
                flag = this.checked
                // 修改数据中的check值
                list[j].check = this.checked
            }
             // 根据check值来判断是否应该勾选全选按钮
             if(list[j].check == false){
                // 若有一个单选按钮对应的数据的check值为false 
                // 则说明至少有一个单选按钮没有被勾选
                // 则全选按钮应该取消勾选
                flag = false
            }
        } 
        console.log(list)
        // 若所有的单选按钮都为true 则所有的单选按钮都被选中了
        // 全选按钮应该被勾选
        if(flag==true){
            // 查找到全选按钮
            var cka = document.getElementById('cka')
            // 将全选按钮checked属性置为true
            cka.checked = true
        } 
    })   
}









































/* 
    // 第一种字符串拼接的方法
    // 定义一个空的字符串
    var s = ''
    // 循环
    for(let i = 0;i < list.length; i ++){
        // 字符串拼接
        s += '<div class="goodsCard">' + 
                '<!-- 标题 -->' +
                '<div class="gc-tit">' +
                    '<label for="">' +
                        '<input type="checkbox">' +
                        list[i].name +
                    '</label>'+
                '</div>'+
                '<!-- 详情 -->'+
                "<div class='gc-detail flx'>"+
                    '<div class="gc-img"></div>'+
                    '<div class="gc-ctt">' +
                        '<div class="gc-txt">名称: '+list[i].name+'</div>'+
                        '<div class="gc-txt">编著: 爱谁谁</div>'+
                        '<div class="gc-txt">出版: 某某出版社</div>'+
                        '<div class="gc-txt">简介: 哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔</div>'+
                ' </div>'+
                '</div>'+
                '<!-- 单价与删除 -->'+
                '<div class="price flx">'+
                    '<div class="pri">单价:'+list[i].price+'</div>'+
                    '<div class="dele iconfont">&#xe619;</div>'+
                '</div>'+
                '<!-- 小计与数量修改 -->'+
            ' <div class="total flx">'+
                    '<div class="tot">总价:'+(list[i].price*list[i].num)+'</div>'+
                    '<div class="tot-btn flx">'+
                        '<span class="reduce">-</span>'+
                        '<span class="num">'+list[i].num+'</span>'+
                        '<span class="add">+</span>'+
                ' </div>'+
                '</div>'+
        ' </div>'
    }
*/

