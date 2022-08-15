import axios from 'axios';
const CANDİDAT_API_BASE_URL = "http://localhost:8080/api/v1/candidates";



class CandidatService {

    getCandidats(){

        return axios.get(CANDİDAT_API_BASE_URL);
    }  
      
    createCandidat(candidat){
        return axios.post(CANDİDAT_API_BASE_URL , candidat);
    }
    getCandidatById(candidatId){
        return axios.get(CANDİDAT_API_BASE_URL + '/' + candidatId);
    }
    updateCandidat(candidat,candidatId){
        return axios.put(CANDİDAT_API_BASE_URL + '/' + candidatId, candidat);
    }
    deleteCandidat(candidatId){
        return axios.delete(CANDİDAT_API_BASE_URL + '/' + candidatId);
    }

}

export default new CandidatService()