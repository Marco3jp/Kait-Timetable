class PeriodParser {
    constructor(){
        this.date = new Date();
        this.id = this.calcId();
    }

    calcId(){
        //曜日-1*10+時間分類
        let id = (this.day-1)*10+this.period;
        return this.idCheck(id);
    }

    idCheck(id){
        if( (!saturdayFlag && id === 50) || (saturdayFlag && id === 60) ){
            return 0;
        }else if( (!fivePeriodFlag && id % 10 > 3) || (fivePeriodFlag && id % 10 > 4)){
            let value = Math.floor(id/10)*10+10;
            return this.idCheck(value);
        }else{
            return id;
        }
    }

    get day(){
        return this.date.getDay();
    }

    get period(){
        let tmp = this.date.getHours()*60+this.date.getMinutes();
        if(tmp<=10*60){
            return 0;
        }else if(tmp<=11*60+40){
            return 1;
        }else if(tmp<=13*60+50){
            return 2;
        }else if(tmp<=15*60+30){
            return 3;
        }else if(fivePeriodFlag && tmp<=17*60+10){
            return 4;
        }else{
            return 10;
        }
    }
}

 let periodParser = new PeriodParser();

/*
時間分類
~10:00 0
~11:40 1
~13:50 2
~15:30 3
~17:10 4
以降 翌日の0
 */