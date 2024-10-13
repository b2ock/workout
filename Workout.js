class Workout {
    constructor(name, muscle_group, sets, reps_lower, reps_upper, weight=0, equipment, description, per_hand=false){        
        this.name = name;
        this.muscleGroup = muscle_group;
        this.sets = sets;
        this.repsLower = reps_lower;
        this.repsUpper = reps_upper;
        this.weight = weight;
        this.equipment = equipment;
        this.description = description;
        this.perHand = per_hand;
        this.currentSet = 0;

        for (let key in this) {
            if (this[key] == undefined) {
                // console.log(`unable to set property ${key} on ${this.name}`)
            }
        }
    }

    changeWeight(changeWeight) {
        if (this.weight === null) {
            
        } else {
            this.weight += changeWeight;
            localStorage.setItem('week', JSON.stringify(week));
        }
        display();
    }
}