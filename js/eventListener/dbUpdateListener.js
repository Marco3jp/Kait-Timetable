class DbUpdateListener {
    constructor(){
        document.addEventListener('DOMContentLoaded', function() {
            let button = document.querySelector("#accept");
            button.addEventListener(mytap,function () {
                dbController.setLectureInfo();
                displayLectureInfo.displayEditModeOneCell(document.querySelector(".editUi").dataset.editingLectureId);
                displayEditLayer.close();
            });
        });
    }
}

let dbUpdateListener = new DbUpdateListener();