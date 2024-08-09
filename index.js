// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*') {
    return function shinyThings(shinyObject = 'special') {
        return `You are ${flair}${shinyObject}${flair}!`
    }
}
wrapAdjective('*')('a dedicated programmer')
wrapAdjective('ll')('a dedicated programmer')
