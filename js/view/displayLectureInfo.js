class DisplayLectureInfo {
    constructor(){
        this.period = document.querySelector(".period");
        this.name = document.querySelector(".name");
        this.classRoom = document.querySelector(".room");
    }

    displayQuickMode(id) {
        dbController.getLectureInfo(id).then(info =>{
            if(info.noData){
                this.name.textContent = "授業なし";
                this.classRoom.textContent = "";
            }else{
                this.name.textContent = infoErrHandler.isUndefined(info.displayName) ? "授業なし" : info.displayName;
                this.classRoom.textContent = infoErrHandler.isUndefined(info.classRoom) ? "" : classRoomParser.parse(info.classRoom);
                // undefined時、空文字列の挿入
            }
            
            let periodText = "";

            switch (id % 10){
                case 0 : periodText = "月 : " ; break;
                case 1 : periodText = "火 : " ; break;
                case 2 : periodText = "水 : " ; break;
                case 3 : periodText = "木 : " ; break;
                case 4 : periodText = "金 : " ; break;
                case 5 : periodText = "土 : " ; break;
            }

            switch ( Math.floor(id / 10) ){
                case 0 : periodText += "一限目(9:30〜11:00)" ; break;
                case 1 : periodText += "二限目(11:10〜12:40)" ; break;
                case 2 : periodText += "三限目(13:20〜14:50)" ; break;
                case 3 : periodText += "四限目(15:00〜16:30)" ; break;
                case 4 : periodText += "五限目(16:40〜18:10)" ; break;
            }

            this.period.textContent = periodText;
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
            for (let i = 0 ; i < info.length ; i++) {
                this.displayCell({id:info[i].id,displayName:info[i].displayName,classRoom:info[i].classRoom});
            }
        });
    }

    displayCell(oneLecture){
        const element = document.querySelector("th[data-id=\""+ oneLecture.id.toString() +"\"]");
        element.innerHTML = (infoErrHandler.isUndefined(oneLecture.displayName) ? "a" : oneLecture.displayName) +"<br><hr>" + (infoErrHandler.isUndefined(oneLecture.classRoom) ? "a" : classRoomParser.parse(oneLecture.classRoom) );
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayLectureInfo = new DisplayLectureInfo();
});
