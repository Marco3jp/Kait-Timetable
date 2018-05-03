class InfoErrHandler {
    isErrInfo(info){
        if( typeof info === "undefined" || ( (info.name === undefined || info.name === "undefined") && (info.displayName === undefined || info.displayName === "undefined") && (info.classRoom === undefined || info.classRoom === "undefined") ) ){
            return true;
        }else{
            return false;
        }
    }

    isUndefined(info){
        return ( info==="undefined" || info===undefined || typeof info === "undefined" );
    }
}


let infoErrHandler = new InfoErrHandler();