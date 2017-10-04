import { set } from 'cerebral/operators'
import {state, props} from 'cerebral/tags'
import Promise from 'bluebird';
import axios from 'axios';
import {fpadDomain} from '../../../config.js';
import _ from 'lodash';

function loadCertifications({state, path}) {
  //Get the certifications list
  let certifications = {};
  return axios({
      method: 'GET',
      url: fpadDomain+'/bookmarks/fpad/certifications',
      headers: {Authorization: 'Bearer '+ state.get('UserProfile.user.token')}
    }).then((res) => {
      //Extract only list of certification ids
      let certKeys = _.filter(Object.keys(res.data), key=>(_.startsWith(key, '_')==false));
      return Promise.map(certKeys, (key) => {
        //Load the certifications
        return axios({
            method: 'GET',
            url: fpadDomain+'/bookmarks/fpad/certifications/'+key,
            headers: {Authorization: 'Bearer '+ state.get('UserProfile.user.token')}
          }).then((res) => {
            certifications[key] = res.data;
          });
      }, {concurrency: 5});
    }).then(() => {
      return path.success({certifications});
    }).catch((error) => {
      return path.error({error});
    });
}

export default [
	loadCertifications, {
		success: [
      set(state`App.model.certifications`, props`certifications`),
    ],
		error: [],
	},
]
