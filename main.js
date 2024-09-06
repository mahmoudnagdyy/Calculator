$(document).ready(function () { 
    
    
    $("button").not(".equal, .rev").click(function(){
        if($(this).text().match(/[0-9%+/*-]/)){
            $("input").val($("input").val() + $(this).text())
        }
    })
    
    
    $(".equal").click(function(){
        
        let op, flag = 0;
        
        let dotIndex = $("input").val().indexOf(".");
        $("input").val($("input").val().replace(".",""))
        
        
        if($("input").val()[0] == "-"){
            
            if($("input").val().match(/\D/g)[0] == '-' && $("input").val().match(/\D/g)[1] == '-'){
                flag = 1;
            }
            
            op = $("input").val().match(/\D/g)[1]
        }
        else if($("input").val()[0] != "-"){
            op = $("input").val().match(/\D/g)[0];
        }
        
        
        let numbers = $("input").val().split(op);
        
        if(flag == 1){
            var num1 = -numbers[1];
            var num2 = +numbers[2];   
        }
        else{
            var num1 = +numbers[0];
            var num2 = +numbers[1];
        }
        
        var fraction = numbers[0].slice(dotIndex)
        
        var real = numbers[0].slice(0,dotIndex);
        
        if(dotIndex >= 0){
            numbers[0] = `${real}.${fraction}`;
            numbers[dotIndex] = "."
            num1 = +numbers[0];
        }
        
        
        
        var result;
        
        switch(op){
            
            case '+':
                result = num1 + num2;
                break;
            
            case '-':
                result = num1 - num2;
                break; 
                
            case '*':
                result = num1 * num2;
                break; 
                
            case '/':
                result = num2 === 0? "Div By Zero" : num1 / num2;
                break; 
                
            case '%':
                result = num1 % num2;
                break; 
            
        }
        
        $("input").val(result)
        
        
    })
    
    flag = 0;
    
});



$(".clear").click(function(){
    $("input").val("")
})

$($("button")[0]).click(function(){
    var num = +$("input").val();
    $("input").val(1/num)
})

$($("button")[1]).click(function(){
    var num = +$("input").val();
    $("input").val(num*num)
})


$($("button")[2]).click(function(){
    var num = +$("input").val();
    $("input").val(Math. sqrt(num))
})