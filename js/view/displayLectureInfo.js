class DisplayLectureInfo {
    constructor(){
        this.period = document.querySelector(".period");
        this.name = document.querySelector(".name");
        this.classRoom = document.querySelector(".room");
    }

    displayQuickMode(id) {
        dbController.getLectureInfo(id).then(info =>{
            console.log(info);
            if(info.noData){
                this.name.textContent = "授業なし";
                this.classRoom.textContent = "";
            }else{
                this.name.textContent = infoErrHandler.isUndefined(info.displayName) ? "授業なし" : info.displayName;
                this.classRoom.textContent = infoErrHandler.isUndefined(info.classRoom) ? "" : classRoomParser.parse(info.classRoom);
                // undefined時、空文字列の挿入
            }

            switch (id % 10){
                case 0 : this.period.textContent = "一限目(9:30〜11:00)" ; break;
                case 1 : this.period.textContent = "二限目(11:10〜12:40)" ; break;
                case 2 : this.period.textContent = "三限目(13:20〜14:50)" ; break;
                case 3 : this.period.textContent = "四限目(15:00〜16:30)" ; break;
                case 4 : this.period.textContent = "五限目(16:40〜18:10)" ; break;
            }
        });
    }

    displayEditModeOneCell(id){
        let info = {};
        dbController.getLectureInfo(id).then(v => {
            info = v;
            this.displayCell(info);
        });
    }

    displayEditModeAllCell(){
        dbController.getAllLectureInfo().then(info => {
            console.log(info);
            for (let i = 0 ; i < info.length ; i++) {
                this.displayCell({id:info[i].id,displayName:info[i].displayName,classRoom:info[i].classRoom});
            }
        });
    }

    displayCell(oneLecture){
        console.log(oneLecture);
        const element = document.querySelector("th[data-id=\""+ oneLecture.id.toString() +"\"]");
        console.log(element);
        element.innerHTML = (infoErrHandler.isUndefined(oneLecture.displayName) ? "a" : oneLecture.displayName) +"<br><hr>" + (infoErrHandler.isUndefined(oneLecture.classRoom) ? "a" : classRoomParser.parse(oneLecture.classRoom) );
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayLectureInfo = new DisplayLectureInfo();
});
