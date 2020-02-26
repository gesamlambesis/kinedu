import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { answerMilestone } from '../../reducers/actions'

const useAnswerMilestone = () => {
    const dispatch = useDispatch()

    const answerMilestoneCallback = useCallback((milestoneSelected, id, answer) => {
        dispatch(answerMilestone({milestoneSelected, id, answer}))
    }, [dispatch])

    return answerMilestoneCallback
}

export default useAnswerMilestone