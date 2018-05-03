class Init {
    constructor() {
        document.addEventListener('DOMContentLoaded', function() {
            history.replaceState( "", "", "#action=info");
            displayLectureInfo.displayEditModeAllCell();
            if(document.cookie !== "first-boot=false" ){
                document.cookie = "first-boot=false;max-age=126144000";
                uiOperator.switchHelpMode(periodParser.id);
            }
        });
    }
}

let init = new Init();