import {
    UPDATE_MILESTONES,
    ANSWER_MILESTONE
} from './constants'

export const updateMilestones = (data) => ({
    type: UPDATE_MILESTONES,
    payload: data,
})

export const answerMilestone = (data) => ({
    type: ANSWER_MILESTONE,
    payload: data,  
})