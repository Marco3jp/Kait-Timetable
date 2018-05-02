class ClassRoomParser {
    parse(a) {
        if (typeof(a)==="string"){
            return "K1-"+a;
        }else if(Math.floor(a/1000) === 2){
            return "B5-"+a.toString();
        }else if(a <= 1201){
            return "K1-"+a.toString();
        }else if(Math.floor(a/1000) === 3){
            return "K3-"+a.toString();
        }else if(Math.floor(a/1000) === 1 && a>=1300){
            return "K2-"+a.toString();
        }else{
            return "Void Room(ErrorNum:00)"
        }
    }
}

let classRoomParser = new ClassRoomParser();