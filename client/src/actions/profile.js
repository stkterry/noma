import axios from 'axios';

export const APICalls = {
  updateProfile: data => axios.post(`/api/users/profile`, data)
};

export const RECEIVE_PROFILE_DATA = "RECEIVE_PROFILE_DATA";

export const receiveProfileData = profileData => ({
  type: RECEIVE_PROFILE_DATA,
  profileData: profileData
});

export const updateProfile = profileData => 
  dispatch => APICalls.updateProfile(profileData)
    .then(profileData => dispatch(receiveProfileData(profileData)))
    .catch(err => console.log(err));