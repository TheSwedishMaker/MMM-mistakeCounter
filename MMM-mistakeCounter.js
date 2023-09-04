Module.register("MMM-mistakeCounter", {
    defaults: {
        buttonTitle: "Oops!",  // Default button title
    },

    mistakeCount: 0,  // Initialize mistake count to 0
    countLabel: null,  // Initialize the count label to null

    // Override start method.
    start: function () {
        Log.info("Starting module: " + this.name);
        this.errorSound = new Audio("/modules/MMM-mistakeCounter/errorSound.wav");
        this.errorSound.volume = 1.0;
    },

    getDom: function () {
    const wrapper = document.createElement("div");

    const mistakeButton = document.createElement("button");
    mistakeButton.className = "mistake-button";
    mistakeButton.innerHTML = this.config.buttonTitle;
    mistakeButton.addEventListener("click", () => {
        this.mistakeCount++;
        this.countLabel.innerHTML = "F-UPS: " + this.mistakeCount;
        this.playErrorSound();
    });
    wrapper.appendChild(mistakeButton);

    // Always create a new counter label
    this.countLabel = document.createElement("div");
    this.countLabel.className = "mistakeCounter-count";
    this.countLabel.innerHTML = "F-UPS: " + this.mistakeCount;
    wrapper.appendChild(this.countLabel);

    return wrapper;
},


    getStyles: function () {
        return ["MMM-mistakeCounter.css"];
    },

    playErrorSound: function () {
        this.errorSound.play();
    },
});
