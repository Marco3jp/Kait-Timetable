class DbController {
    constructor() {
        this.db = new Dexie('lectureDB');
        this.db.version(1).stores({
            lectureInfo:"id"
        })
    }

    async getLectureInfo(id){
        if (typeof id === "number"){
            id = id.toString();
        }

        return await this.db.lectureInfo.get(id, info => {
            let value = {};
            if(infoErrHandler.isErrInfo(info)){
                value = {"noData":true};
            }else{
                value = {
                    "noData" : false,
                    "id" : info.id,
                    "name" : info.name,
                    "displayName" : info.displayName,
                    "classRoom" : info.classRoom,
                }
            }
            return value;
        });
    }

    async getAllLectureInfo(){
        return await this.db.lectureInfo.toArray().then(value => {
            return value;
        });
    }

    setLectureInfo() {
        const info = formController.inputLectureInfo;
        const id = document.querySelector(".editUi").dataset.editingLectureId;
        this.db.lectureInfo.put({
            id:id,
            name: info.name,
            displayName:info.displayName,
            classRoom:info.classRoom
        })
        //console.log(this.getLectureInfo(id));
    }
}

let dbController = new DbController();
