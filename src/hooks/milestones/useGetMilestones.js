import { useSelector } from 'react-redux'

const useGetMilestones = () => useSelector((store) => store.milestones)

export default useGetMilestones
