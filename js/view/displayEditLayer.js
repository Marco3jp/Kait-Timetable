class DisplayEditLayer {
    constructor(){
        //const that = this;
        this.editLayer = document.querySelector(".editUi");
    }

    open(self){
        this.insertDataToForm(self.dataset.id);
        this.setDataElement(self.dataset.id);
        this.editLayer.classList.remove("hide");
    }

    close(){
        this.editLayer.dataset.editingLectureId = "";
        this.editLayer.classList.add("hide");
    }

    setDataElement(id){
        this.editLayer.dataset.editingLectureId = id.toString();
    }

    insertDataToForm(id){
        let info = {};
        dbController.getLectureInfo(id).then(v =>{
            info = v;
            console.log(info);
            if(info.noData){
                formController.setLectureInfo("","","");
            }else{
                let name = infoErrHandler.isUndefined(info.name) ? "" : info.name;
                let displayName = infoErrHandler.isUndefined(info.displayName) ? "" : info.displayName;
                let classRoom = infoErrHandler.isUndefined(info.classRoom) ? "" : info.classRoom;
                formController.setLectureInfo(name,displayName,classRoom);
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    displayEditLayer = new DisplayEditLayer();
});
