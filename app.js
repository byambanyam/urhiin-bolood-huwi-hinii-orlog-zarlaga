//delgetstei hariltsah
var uiController=(function(){

})();
//sanhuutei ajiilah kontroller
var financeController= (function(){

})();
//programm holbogch kontroller
var appController = (function(uiController , financeController){
    var controladditm = function(){
           // oruulah ugugdliig beldtsees olj awna
        //2 olj awsan ugugdluudiig sanhuugiin kontrollerd damjuulj tend hadgalan
        //3ugugluudiig tohiroh gazar ni bairshuulj gargana
        //4tusuwiig toootsoolon
        //5 etssiin uldaegdel tootsoog delgetsend  gargan
        console.log(' mai shuu ' );

    }
document.querySelector(".add__btn").addEventListener("click", function(){
    controladditm();
     
})
document.addEventListener("keypress",function(event){
    if(event.keyCode===13 || event.which===13){
    controladditm();
    }
}
)
})(uiController, financeController);