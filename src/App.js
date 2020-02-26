import React, { useEffect, useCallback } from 'react';
import './App.css';
import { useDispatch } from 'react-redux'
import { updateMilestones } from './reducers/actions'
import RootRoutes from './pages/RootRoutes'

function App() {

  const config = {
    headers: {
      Authorization: 'Token token=09d23abf0c1d10e37592819dd8157ee06f22c0d308a8906d21e25c0de4f838859e0d5c1337aca40103b028ec81e948c6be382fce7c82d6ad273ad4fcd16e8f58',
    },
  }

  const dispatch = useDispatch()

  const getData = useCallback(async () => {
    const milestones1 = await fetch(`http://demo.kinedu.com/api/v3/skills/2/milestones/`, config)
    const milestones2 = await fetch(`http://demo.kinedu.com/api/v3/skills/23/milestones/`, config)

    const milestoneResponse = await milestones1.json()

    const milestone2Response = await milestones2.json()

    let milestonesData = {
      milestones: {
        0: {
          ...milestoneResponse.data
        },
        1: {
          ...milestone2Response.data
        }
      }
    }

    dispatch(updateMilestones(milestonesData))
  }, [dispatch, config])

  useEffect(() => {
    getData()
  }, [dispatch, getData])

  return (
    <RootRoutes />
  );
}

export default App;
