class FormController {
    constructor(){
        this.form = document.forms.lectureInfo;
    }
    get inputLectureInfo(){
        return {
            "name": this.form.lectureName.value,
            "displayName":this.form.lectureDisplayName.value,
            "classRoom": this.form.lectureRoom.value
        };
    }

    setLectureInfo(name,displayname,room){
        this.form.lectureName.value = name;
        this.form.lectureDisplayName.value = displayname;
        this.form.lectureRoom.value = room;
    }
}

let formController = new FormController();