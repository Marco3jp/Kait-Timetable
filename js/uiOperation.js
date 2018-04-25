"use strict";

var mytap = window.ontouchstart===null?"touchstart":"click";

class Ui {
    constructor(){
        let that = this;
        let detailMode = document.querySelector(".switch-detail-and-editmode");
        let quickMode = document.querySelector(".switch-quickmode");
        let helpMode = document.querySelector(".switch-helpmode");

        this.detailModeUi = document.querySelector(".detail-and-editmode");
        this.quickModeUi = document.querySelector(".quickmode");
        this.helpModeUi = document.querySelector(".helpmode");

        this.helpModeUiDisplayFlag = false;
        this.helpModeUiTouchFlag = false;

        detailMode.addEventListener(mytap,function(){
            that.switchDetailMode();
        });
        quickMode.addEventListener(mytap,function(){
            that.switchQuickMode();
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
    switchQuickMode() {
        this.detailModeUi.classList.add("hide");
        this.quickModeUi.classList.remove("hide");
    }

    switchDetailMode() {
        this.quickModeUi.classList.add("hide");
        this.detailModeUi.classList.remove("hide");
    }

    switchHelpMode(){
        if(this.helpModeUiFlag){
            this.helpModeUiFlag=false;
            this.helpModeUi.classList.add("hide");
        }else{
            this.helpModeUiFlag=true;
            this.helpModeUi.classList.remove("hide");
        }
    }
}

var ui = new Ui();
