function flip(flips) {
    var heads = 0;
    var tails = 0;

    for (var i = 0; i < flips; i++) {
        var rand = Math.floor(Math.random() * 2);

        if (rand == 1) {
            console.log("The coin flip is heads");
            heads++;
        }
        else {
            console.log("The coin flip is tails");
            tails++;
        }
        var percent = heads / tails;
        console.log(heads + " / " + tails);
    }
}

flip(1000000);
