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
        if(Math.floor(periodParser.id%10)){
            periodParser.id = periodParser.idCheck(periodParser.id - 1);
            displayLectureInfo.displayQuickMode(periodParser.id);
        }
    }

    switchAfterDay(){
        periodParser.id = periodParser.idCheck(periodParser.id + 1);
        displayLectureInfo.displayQuickMode(periodParser.id);
    }

    switchBeforeLecture(){
        periodParser.id = periodParser.idCheck(periodParser.id - 10);
        displayLectureInfo.displayQuickMode(periodParser.id);
    }

    switchAfterLecture(){
        periodParser.id = periodParser.idCheck(periodParser.id + 10);
        displayLectureInfo.displayQuickMode(periodParser.id);
    }
}
//LectureIdを操作して表示する感じのやつ書いて//

let switchQuickView = new SwitchQuickView();