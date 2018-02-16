var displayStage = 0;
function changeStage(displayStage) {
    switch(displayStage){
        case 1:
            $('.primaryDisplay' + displayStage).addClass("show");
        case 2:
            $('.primaryDisplay' + displayStage -1).removeClass("hidden");
            $('.primaryDisplay' + displayStage).addClass("show");
        case 3:
            $('.primaryDisplay' + displayStage -1).removeClass("hidden");
            $('.primaryDisplay' + displayStage).addClass("show");
        case 4:
            $('.primaryDisplay' + displayStage -1).removeClass("hidden");
            $('.primaryDisplay' + displayStage).addClass("show");
        case 5:
            $('.primaryDisplay' + displayStage -1).removeClass("hidden");
            $('.primaryDisplay' + displayStage).addClass("show");
    }
    // $('.primaryDisplay' + displayStage).addClass("hidden");
    // $('.primaryDisplay' + displayStage + 1).removeClass("none");

}
