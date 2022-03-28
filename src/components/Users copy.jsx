import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {usersList} from '../services/actions/usersAction'

const Users = () => {

  const loading = useSelector(state => state.usersReducer.loading);
  const users = useSelector(state => state.usersReducer.users);
  const error = useSelector(state => state.usersReducer.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersList());
  }, [])

  return (
    <div>
        {
            loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> : <div>
                {
                    users.map((user, index) => {
                        return <h4 key={index}>{user.title}</h4>
                    })
                }
            </div>
        }
    </div>
  )
}

export default Users