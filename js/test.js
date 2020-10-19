var flag = true 
var cks = document.getElementsByClassName('ck')
for(let i=0;i<cks.length;i++){
    cks[i].addEventListener('change',function(){
        for(let j = 0;j<list.length;j++){
            if(this.attributes.data.value == list[j].id){
                flag = this.checked
                list[j].check = this.checked
            }
            if(list[j].check == false) flag = false;
        } 
        var cka = document.getElementById('cka')
        if(flag==true) cka.checked = true;
         else cka.checked = false;    
    })   
}