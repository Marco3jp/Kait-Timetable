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

    idCheck(id){ // 縦 +- 10 , 横 +- 1
        if( (!saturdayFlag && (id % 10) >= 5) || (saturdayFlag && (id % 10) >= 6) ) { // 土曜日の有無に合わせて、idがそれ以上の値になっている場合
            return 0;
        }else if(id === -10) { // 月曜日一限(id 0)のとき、スイッチを使って前の講義を参照した場合
            return saturdayFlag
                ? fivePeriodFlag
                    ? 45
                    : 35
                : fivePeriodFlag
                    ? 44
                    : 34;
        }else if(id < 0){ // 月曜日以外の一限のとき、スイッチを使って前の講義を参照した場合
            return fivePeriodFlag
                ? (id+49)
                : (id+39);
        }else if( (!fivePeriodFlag && Math.floor(id / 10) > 3) || (fivePeriodFlag && Math.floor(id / 10) > 4)){ //四限と五限以上の値になっている場合
            return this.idCheck(id%10+1);
        }else{ // 通常時
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