class UiOperator {
    constructor(){
        const that = this;
        const detailMode = document.querySelector(".switch-detail-and-editmode");
        const quickMode = document.querySelector(".switch-quickmode");
        const helpMode = document.querySelector(".switch-helpmode");

        this.detailModeUi = document.querySelector(".detail-and-editmode");
        this.quickModeUi = document.querySelector(".quickmode");
        this.helpModeUi = document.querySelector(".helpmode");

        //this.helpModeUiDisplayFlag = false;
        this.helpModeUiTouchFlag = false;
        this.keepUrl = "";

        detailMode.addEventListener(mytap,function(){
            that.switchDetailMode();
        });
        quickMode.addEventListener(mytap,function(){
            that.switchQuickMode(periodParser.id);
        });
        helpMode.addEventListener(mytap,function(){
            that.switchHelpMode();
        });

        this.helpModeUi.addEventListener("touchstart",function(){
            that.helpModeUiTouchFlag=true;
        });
        this.helpModeUi.addEventListener("touchmove",function(){
            that.helpModeUiTouchFlag=false;
        });
        this.helpModeUi.addEventListener("touchend",function(){
            if(that.helpModeUiTouchFlag){
                that.switchHelpMode();
            }
        });

    }

    switchQuickMode(id) {
        displayLectureInfo.displayQuickMode(id);
        history.pushState( "", "", "#action=info");
        this.detailModeUi.classList.add("hide");
        this.quickModeUi.classList.remove("hide");
    }

    switchDetailMode() {
        history.pushState( "", "", "#action=edit");
        this.quickModeUi.classList.add("hide");
        this.detailModeUi.classList.remove("hide");
    }

    switchHelpMode(){
        if(this.helpModeUiFlag){
            history.pushState( "", "", this.keepUrl);
            this.helpModeUiFlag=false;
            this.helpModeUi.classList.add("hide");
        }else{
            this.keepUrl = location.hash;
            history.pushState( "", "", "#action=help");
            this.helpModeUiFlag=true;
            this.helpModeUi.classList.remove("hide");
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    uiOperator = new UiOperator();
});


//なんか頭悪いので実装できない。それっぽい動きしかしない//
window.onhashchange = function(event){
    console.log(event);
    const hash=location.hash;
    if(uiOperator.helpModeUiFlag){
        uiOperator.switchHelpMode();
    }else if(hash==="#action=info"){
        uiOperator.switchQuickMode();
    }else if(hash==="#action=edit"){
        uiOperator.switchDetailMode();
    }else if(hash==="#action=help"){
        uiOperator.switchHelpMode();
    }
};
