class SwitchQuickView {
    constructor(){
        const that = this;

        document.addEventListener('DOMContentLoaded', function() {
            const beforeDay = document.querySelector(".before-day");
            const afterDay = document.querySelector(".after-day");
            const beforeLecture = document.querySelector(".before-lecture");
            const AfterLecture = document.querySelector(".after-lecture");
            beforeDay.addEventListener(mytap,function () {
                that.switchBeforeDay();
            });
            afterDay.addEventListener(mytap,function () {
                that.switchAfterDay();
            });
            beforeLecture.addEventListener(mytap,function () {
                that.switchBeforeLecture();
            });
            AfterLecture.addEventListener(mytap,function () {
                that.switchAfterLecture();
            });
        });
    }

    switchBeforeDay(){
        let id = (Math.floor(periodParser.id/10)*10)-10;
        if(id < 0){
            id = saturdayFlag ? 50 : 40 ;
        }
        periodParser.id = periodParser.idCheck(id);
        displayLectureInfo.displayQuickMode(periodParser.id);
    }

    switchAfterDay(){
        const id = (Math.floor(periodParser.id/10)*10)+10;
        periodParser.id = periodParser.idCheck(id);
        displayLectureInfo.displayQuickMode(periodParser.id);
    }

    switchBeforeLecture(){
        if(periodParser.id%10){
            const id = periodParser.id-1;
            periodParser.id = periodParser.idCheck(id);
            displayLectureInfo.displayQuickMode(periodParser.id);
        }
    }

    switchAfterLecture(){
        const id = periodParser.id+1;
        periodParser.id = periodParser.idCheck(id);
        displayLectureInfo.displayQuickMode(periodParser.id);
    }
}
//LectureIdを操作して表示する感じのやつ書いて//

let switchQuickView = new SwitchQuickView();