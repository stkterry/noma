import axios from 'axios';

export const APICalls = {
  updateProfile: data => axios.post(`/api/users/profile`, data),
  getUserProfile: userId => axios.get(`/api/users/profile/${userId}`)
};

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile: profile
});

export const updateProfile = profile => 
  dispatch => APICalls.updateProfile(profile)
    .then(profile => dispatch(receiveProfile(profile)))
    .catch(err => console.log(err));

export const getProfile = userId => dispatch => APICalls.getUserProfile(userId)
  .then(profile => dispatch(receiveProfile(profile)))
  .catch(err => console.log(err));