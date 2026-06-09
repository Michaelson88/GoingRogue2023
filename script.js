const accountBalance= 299;
const daysLeft= 20;
const totalGoal= 800;

function dailyGoal(balance, goal, daysLeft) {
    //Check if the daily goal is already met
    if (accountBalance >= goal) {
        return "You have enough to make the car payment, keep up the great work.";
    }

    //Calculate and return the amount needed per day to make the goal
    const amountLeft = goal - balance;
    const dailyAmount = (amountLeft / daysLeft).toFixed(2);
    return `You need to make $${dailyAmount} per day for the remainder of the month.`
};

console.log(dailyGoal(accountBalance, totalGoal, daysLeft));