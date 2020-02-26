import {
    UPDATE_MILESTONES,
    ANSWER_MILESTONE
} from '../constants'

const defaultState = {
    milestones: {},
}

export default (state = defaultState, action) => {

    switch (action.type) {
    
        case UPDATE_MILESTONES:
            return {
                ...state,
                milestones: {...action.payload.milestones}
            }
        case ANSWER_MILESTONE: 
      
            let updateMilestones = state.milestones[action.payload.milestoneSelected].skill.milestones

            updateMilestones[action.payload.id] = {
                ...updateMilestones[action.payload.id],
                answer: action.payload.answer
            }
                
            return {
                ...state,
                milestones: {
                    ...state.milestones,
                    [action.payload.milestoneSelected]: {
                        skill: {
                            ...state.milestones[action.payload.milestoneSelected].skill,
                            milestones: updateMilestones
                        }
                    }
                }
            }
 
    default:
        return state
    }
}
