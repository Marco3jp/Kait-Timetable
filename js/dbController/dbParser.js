class dbParser {
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
}
