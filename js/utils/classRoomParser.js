class ClassRoomParser {
    parse(a) {

        if (a === "string" && (a.slice(0,1)==="B" || a.slice(0,1)==="b")){
            return "K1-"+a;
        }

        let intValue = parseInt(a,10);

        if(isNaN(intValue)){
            return "Invalid Room(ErrorNum:01)"
        }else if(Math.floor(intValue/1000) === 2){
            return "B5-"+a;
        }else if(intValue <= 1201){
            return "K1-"+a;
        }else if(Math.floor(intValue/1000) === 3){
            return "K3-"+a;
        }else if(Math.floor(intValue/1000) === 1 && intValue>=1300){
            return "K2-"+a;
        }else{
            return "Void Room(ErrorNum:00)"
        }
    }
}

let classRoomParser = new ClassRoomParser();