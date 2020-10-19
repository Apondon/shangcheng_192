// 查找box元素
var box = document.getElementById('box')
  // 查找到全选按钮
var cka = document.getElementById('cka')
// 找到结算按钮
var pay = document.getElementById('pay')
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
// 定义一个值，判断全选按钮是否应该被勾选  true 被勾选   false 不被勾选
var flag = true 
// 给每个单选框绑定事件
// 获取单选框
var cks = document.getElementsByClassName('ck')
// 找到加号按钮
var add = document.getElementsByClassName('add')
// 找到减号按钮
var rdu = document.getElementsByClassName('reduce')
// 获取删除按钮
var dele = document.getElementsByClassName('dele')

// 生成dom结构的函数
function createDom(arr){
    // 第二种字符串拼接的方法
    // 定义一个空的字符串
    var s = ''
    // 进行参数获取
    var lst = arr || list
    // 循环
    for(let i = 0;i < lst.length; i ++){
        s += `<div class="goodsCard">
                    <!-- 标题 -->
                    <div class="gc-tit">
                        <label for="">
                            <input type="checkbox" class='ck' data=${lst[i].id} ${lst[i].check?'checked':''}>
                            ${lst[i].name}
                        </label>
                    </div>
                    <!-- 详情 -->
                    <div class="gc-detail flx">
                        <div class="gc-img"></div>
                        <div class="gc-ctt">
                            <div class="gc-txt">名称: ${lst[i].name}</div>
                            <div class="gc-txt">编著: 爱谁谁</div>
                            <div class="gc-txt">出版: 某某出版社</div>
                            <div class="gc-txt">简介: 哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔哔</div>
                        </div>
                    </div>
                    <!-- 单价与删除 -->
                    <div class="price flx">
                        <div class="pri">单价:${lst[i].price}</div>
                        <div class="dele iconfont" data=${lst[i].id}>&#xe619;</div>
                    </div>
                    <!-- 小计与数量修改 -->
                    <div class="total flx">
                        <div class="tot">总价:${lst[i].price*lst[i].num}</div>
                        <div class="tot-btn flx">
                            <span class="reduce" data=${lst[i].id}>-</span>
                            <span class="num">${lst[i].num}</span>
                            <span class="add" data=${lst[i].id}>+</span>
                        </div>
                    </div>
                </div>`
    }
    // 将拼接好的字符串加载到页面中
    box.innerHTML = s
    // 将事件绑定到新创建的页面元素中
    bindEvents()
}
createDom()

// 全选按钮关联单选按钮
cka.addEventListener('change',function(){
    // this 指向全选按钮
    console.log(this)
    // 获取全选按钮选中状态
    console.log(this.checked)
    // 将单选按钮的选中状态和全选按钮设为一致
    for(let i = 0;i<cks.length;i++){
        cks[i].checked = this.checked
    }
    // console.log('未修改数据')
    // console.log(list)
    // 同时将数据进行修改
    for(let i=0;i<list.length;i++){
        list[i].check = this.checked
    }
    console.log('修改数据')
    console.log(list)
    // 计算总价
    countPrice()
})

// 总价计算
function countPrice(){
    // 定义一个值来保存总价
    var c = 0
    // 对数据进行遍历
    for(let i =0 ;i<list.length;i++){
        // 判断每条数据的check值 为true 则要计算总价 若为false 则不计算
        if(list[i].check){
            // 计算总价
            // 每条商品的总价相加等于支付的总价 
            // 每条商品总价 = 每条商品的单价 * 每条商品的数量
            c += list[i].price * list[i].num
        }
    }
    console.log(c)
    // 将总价显示在页面中
    // 找到显示总价的元素
    var tp = document.getElementById('totalPrice')
    // 修改显示的内容
    tp.innerText = '总价: ￥' + c
}

// 将单选框，加号按纽，减号按钮的功能代码放到一个函数中
function bindEvents(){
    // 单选按钮的功能代码
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
                // 将全选按钮checked属性置为true
                cka.checked = true
            } else{
                // 若flag为false 则说明至少有一个按钮没有被选中
                // 将全选按钮checked属性置为false
                cka.checked = false
            }

            // 计算总价
            countPrice()
        })   
    }

    // 加号按钮的功能代码
    // 给每个加号按钮绑定事件
    for(let i=0;i<add.length;i++){
        add[i].addEventListener('click',function(){
            // this 指向当前事件绑定的按钮
            console.log(this)
            // 获取当前按钮绑定的data属性的值
            console.log(this.attributes.data.value)
            // 修改数据
            // 找出要修改的数据
            for(let i=0;i<list.length;i++){
                // data属性值和数据id相同，则将该条数据进行修改
                if(list[i].id == this.attributes.data.value){
                    console.log(list[i])
                    // 修改数据
                    list[i].num += 1
                    // 重新创建页面结构
                    createDom()
                    // 重新计算总价
                    countPrice()
                }
            }
            console.log(list)
        })
    }

    // 减号按钮的功能代码
    // 给每个减号按钮绑定事件
    for(let i=0;i<rdu.length;i++){
        rdu[i].addEventListener('click',function(){
            // this 指向当前事件绑定的按钮
            console.log(this)
            // 获取当前按钮绑定的data属性的值
            console.log(this.attributes.data.value)
            // 修改数据
            // 找出要修改的数据
            for(let i=0;i<list.length;i++){
                // data属性值和数据id相同，则将该条数据进行修改
                if(list[i].id == this.attributes.data.value){
                    console.log(list[i])
                    // 若件数等于1 则不允许再减少
                    if(list[i].num > 1){
                        // 修改数据
                        list[i].num -= 1
                        // 重新创建页面结构
                        createDom()
                        // 重新计算总价
                        countPrice()
                    }
                }
            }
            console.log(list)
        })
    }

    // 删除按钮的功能代码
    for(let i=0;i<dele.length;i++){
        dele[i].addEventListener('click',function(){
            // this 指向当前事件绑定的按钮
            console.log(this)
            // 获取当前按钮绑定的data属性的值
            console.log(this.attributes.data.value)
            // 修改数据
            // 找出要修改的数据
            for(let i=0;i<list.length;i++){
                // data属性值和数据id相同，则将该条数据进行修改
                if(list[i].id == this.attributes.data.value){ 
                    // 将选中的元素数据删除
                    list.splice(i,1)
                    // 重新创建页面结构
                    createDom()
                    // 重新计算总价
                    countPrice()
                }
            }
            console.log(list)
            // 判断全选按钮是否应该勾选
            flag = true
            // 遍历数据
            for(let i=0;i<list.length;i++){
                // 若某条数据的check值为false 说明至少有一条数据未被选中，则不勾选全选按钮，否则将勾选全选按钮
                //  list[i].check -> true   !list[i].check -> false
                //  list[i].check -> false   !list[i].check -> true
                if(!list[i].check) flag = false
            }
            // 判断flag
            // 若flag为true 则全选按钮选中 否则不选中
            if(flag){
                // 将全选按钮checked属性置为true
                cka.checked = true
            } else{
                // 若flag为false 则说明至少有一个按钮没有被选中
                // 将全选按钮checked属性置为false
                cka.checked = false
            }

        })
    }

}

// 结算按钮绑定功能
pay.addEventListener('click',function(){
    console.log('pay')
    // 进行数据筛选，保存未被结算的数据
    var arr = []
    // 将选中的商品删除
    for(let i=0 ; i<list.length;i++){
        console.log(list[i].check)
        // 将未被选中的元素进行筛选
        if(!list[i].check) arr.push(list[i]);
    }
    console.log(arr)
    list = arr
    // 重新创建页面结构
    createDom(arr)
    // 重新计算总价
    countPrice()
    // 重置全选按钮
    cka.checked = false
    alert('结算成功')
})






































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

