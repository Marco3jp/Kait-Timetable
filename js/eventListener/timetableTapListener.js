class TimetableTapListener {
    constructor(){
        const that = this;
        this.timeoutId=0;
        this.tapCount = new Array(100).fill(0);
        document.addEventListener('DOMContentLoaded', function() {
            const tableCell = document.querySelectorAll(".detail-and-editmode > table > tbody th");
            for (let i = 0; i < tableCell.length; i++) {
                tableCell[i].addEventListener( mytap ,function(){
                    that.tapListener(this);
                });
            }
        });
    }

    tapListener(self) {
        if( !this.tapCount[self.dataset.id] ) {
            ++this.tapCount[self.dataset.id];
            this.timeoutId = setTimeout( function(that) {
                that.tapCount[self.dataset.id]= 0;
                uiOperator.switchQuickMode(self.dataset.id);
            }, 350 ,this);
        } else {
            window.clearTimeout(this.timeoutId);
            displayEditLayer.open(self);
            this.tapCount[self.dataset.id] = 0 ;
        }
    }
}

let timetableTapListener = new TimetableTapListener();