import { client } from './';

const url = '/applications';

export function fetchApplications(){
  return dispatch => {
    dispatch({
      type: 'FETCH_APPLICATIONS',
      payload: client.get(url)
    })
  }
}

export function newApplication() {

  return dispatch => {
    dispatch({
      type: 'NEW_APPLICATION'
    })
  }
}

export function saveApplication(application) {
  console.log(application);
  return dispatch => {
    return dispatch({
      type: 'SAVE_APPLICATION',
      payload: client.post(url, application)
    })
  }
}

export function fetchApplication(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_APPLICATION',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updateApplication(application) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_APPLICATION',
      payload: client.put(`${url}/${application._id}`, application)
    })
  }
}

export function deleteApplication(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_APPLICATION',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
