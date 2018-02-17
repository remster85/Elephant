import { client } from './';

const url = '/applications';

export function fetchApplications(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: client.get(url)
    })
  }
}

export function newApplication() {
  return dispatch => {
    dispatch({
      type: 'NEW_CONTACT'
    })
  }
}

export function saveApplication(application) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CONTACT',
      payload: client.post(url, application)
    })
  }
}

export function fetchApplication(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_CONTACT',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updateApplication(application) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_CONTACT',
      payload: client.put(`${url}/${application._id}`, application)
    })
  }
}

export function deleteApplication(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_CONTACT',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
