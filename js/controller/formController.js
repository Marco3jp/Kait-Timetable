class FormController {
    constructor(){
        const that = this;
        this.tap = 0;

        document.querySelector(".editUi").addEventListener(mytap,function(){
            that.closeForm();
        });

        document.addEventListener('DOMContentLoaded', function() {
            that.form = document.forms.lectureInfo;
        });
    }
    get inputLectureInfo(){
        return {
            "name": this.form.lectureName.value,
            "displayName":this.form.lectureDisplayName.value,
            "classRoom": this.form.lectureRoom.value
        };
    }

    setLectureInfo(name,displayName,room){
        this.form.lectureName.value = name;
        this.form.lectureDisplayName.value = displayName;
        this.form.lectureRoom.value = room;
    }

    closeForm() {
        if (!this.tap) {
            ++this.tap;
            setTimeout(function (that) {
                that.tap = 0;
            }, 350, this);
        } else {
            this.tap = 0;
            displayEditLayer.close();
        }
    }
}

let formController = new FormController();