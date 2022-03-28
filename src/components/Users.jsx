import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { usersList } from '../services/actions/userAction'

const Users = ({usersList, loading, users, error}) => {

    useEffect(() => {
        usersList();
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

const mapStateToProps = (state) => ({
    loading: state.userReducer.loading,
    users: state.userReducer.users,
    error: state.userReducer.error
})

export default connect(mapStateToProps, {usersList})(Users)