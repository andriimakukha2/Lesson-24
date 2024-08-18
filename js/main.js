// #1

function sumArray(numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
}

// #2

function doubleArrayElements(numbers) {
    return numbers.map(number => number * 2);
}

// #3

class SkillsManager {
    constructor() {
        this.skills = [];
    }

    addSkill(skill) {
        if (typeof skill === 'string' && skill.length >= 2) {
            this.skills.push(skill);
            return skill;
        }
        return null;
    }

    getAllSkills() {
        return this.skills;
    }
}

// #4

function DateCalculator(initialDate) {
    this.addDays = function(days) {
        this.currentDate = new Date(initialDate);
        this.currentDate.setDate(this.currentDate.getDate() + days);
    }

    this.subtractDays = function(days) {
        this.currentDate.setDate(this.currentDate.getDate() - days);
    }

    this.getResult = function() {
        const year = this.currentDate.getFullYear();
        const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(this.currentDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}

export { sumArray, doubleArrayElements, SkillsManager, DateCalculator }