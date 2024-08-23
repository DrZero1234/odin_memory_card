export const memeoryCardReducer = (state,action) => {
    switch(action.type) {
        case "correct_card": {
            return{
                ...state,
                currentScore: state.currentScore + 1,
                selectedCards: [...state.selectedCards, action.cardId]
            }
        }

        case "incorrect_card" : {
            return {
                ...state,
                isGameOver: true
            }
        }

        case "levelUp": {
            return {
                ...state,
                level: state.level + 1,
                selectedCards: [],
            }
        }

        case "highestScore" : {
            return {
                ...state,
                highestScore: state.currentScore
            }
        }
    }
    throw Error (`Unknown action ${action.type}`)
}