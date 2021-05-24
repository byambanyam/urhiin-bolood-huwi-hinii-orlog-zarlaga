//delgetstei hariltsah
var uiController=(function(){
var classuud = {
    type : ".add__type",
    tailbar : ".add__description",
    toonUtga : ".add__value",
    addbtn : ".add__btn",
};
return {
    utga: function(){
        return {
            type: document.querySelector(classuud.type).value , 
            description: document.querySelector(classuud.tailbar).value ,
            value: document.querySelector(classuud.toonUtga).value ,


        }
        

    },
    getclassuud: function(){
        return classuud;
    }
}

})();
//sanhuutei ajiilah kontroller
var financeController= (function(){var Income = function (id , description , value){
    this.id=id;
    this.description = description;
    this.value=value;
  
  }
  
  var Expense = function(id, description ,value){
    this.id=id;
    this.description=description;
    this.value=value;
  }
  var Incomes=[];
  var Expenses=[];
  var data = {
    allItems:{
      inc:[],
      exp:[]
    
    },
    totals:{
      inc: 0 ,
      exp: 0
    }
    }
 
  

})();
//programm holbogch kontroller
var appController = (function(uiController , financeController ){
    
    var controladditm = function(){
           // oruulah ugugdliig beldtsees olj awna

        //2 olj awsan ugugdluudiig sanhuugiin kontrollerd damjuulj tend hadgalan
        //3ugugluudiig tohiroh gazar ni bairshuulj gargana
        //4tusuwiig toootsoolon
        //5 etssiin uldaegdel tootsoog delgetsend  gargan
        console.log(uiController.utga());

    }
var addeventlistners = function(){
    var DOM = uiController.getclassuud();
    
    document.querySelector(DOM.addbtn).addEventListener("click", function(){
        controladditm();
         
    })
    document.addEventListener("keypress",function(event){
        if(event.keyCode===13 || event.which===13){
        controladditm();
        }
    }
    )
}
return {
    init: function(){
console.log('start application');
        addeventlistners();

    }
}
})(uiController, financeController);
appController.init();