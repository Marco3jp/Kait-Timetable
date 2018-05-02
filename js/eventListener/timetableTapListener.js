class TimetableTapListener {
    constructor(){
        const tableCell = document.querySelectorAll(".detail-and-editmode > table > tbody th");
        const that = this;
        this.timeoutId=0;
        this.tapCount = new Array(100).fill(0);
        for (let i = 0; i < tableCell.length; i++) {
            tableCell[i].addEventListener( mytap ,function(){
                that.tapListener(this);
            });
        }
    }

    tapListener(self) {
        if( !this.tapCount[self.id] ) {
            ++this.tapCount[self.id];
            this.timeoutId = setTimeout( function(that) {
                that.tapCount[self.id]= 0;
                uiOperator.switchQuickMode(self.id);
            }, 350 ,this);
        } else {
            window.clearTimeout(this.timeoutId);
            displayEditLayer.open(self);
            this.tapCount[self.id] = 0 ;
        }
    }
}

let timetableTapListener = new TimetableTapListener();