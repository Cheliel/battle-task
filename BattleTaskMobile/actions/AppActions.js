import Axios from 'axios'
import {AsyncStorage} from 'react-native';

const storeJWT = async (jwt) => {
    try {
      await AsyncStorage.setItem('jwt', jwt);
      console.log('JWT stocké avec succès.');
    } catch (error) {
      console.log('Erreur lors du stockage du JWT:', error);
    }
  };
  

export const postNote = async (titre,lieu, id) => {
  var data = JSON.stringify({
    "Texte": titre,
    "Lieu": lieu,
    "Difficulte": 1,
    "Checked": false,
    "estNotifie": false
  });
  
  var config = {
    method: 'post',
    url: 'http://192.168.1.188:5000/AddNote?todolistId=' + id,
    headers: { 
      'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  Axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const postCollection = async (titre) => {
    var data = JSON.stringify({
      "titre": titre,
      "color": "ffff",
      "IsNotif": false
    });
    
    var config = {
      method: 'post',
      url: 'http://192.168.1.188:5000/AddCollection',
      headers: { 
        'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    Axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const authentification = (username, password) => {
  let data = JSON.stringify({
    "Email": username,
    "Password": password
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.1.188:5000/Connexion',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  Axios.request(config)
  .then((response) => {
    storeJWT(response.data);
  })
  .catch((error) => {
    console.log("fuckyou");
  });
  
};

export const postToDoList = async (titre, id) => {
  console.log("fesse");
  var data = JSON.stringify({
    "titre": titre,
  });
  
  var config = {
    method: 'post',
    url: 'http://192.168.1.188:5000/Addtodolist?collectionId=' + id,
    headers: { 
      'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  Axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const delTodolist = async (id) => {
  var config = {
    method: 'post',
    url: 'http://192.168.1.188:5000/DelTodolist?idTodolist=' + id,
    headers: { 
      'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`, 
      'Content-Type': 'application/json'
    },
  };
  
  Axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
};
export const delCollection = async (id) => {
  var config = {
    method: 'post',
    url: 'http://192.168.1.188:5000/DelCollection?idCollection=' + id,
    headers: { 
      'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`, 
      'Content-Type': 'application/json'
    },
  };
  
  Axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
};
export const delNote = async (id) => {
  var config = {
    method: 'post',
    url: 'http://192.168.1.188:5000/Delnote?idNote=' + id,
    headers: { 
      'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`, 
      'Content-Type': 'application/json'
    },
  };
  
  Axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
};


export const getUserTudus = async (username, thenWithDataAction)=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://192.168.1.188:5000/GetCollection',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`
        },
      };
      Axios.request(config)
        .then((response) => {
            const respdata = response.data;
            let newArray = response.data.map((item) => {
              return {key: item.id, value: item.titre, facile: item.facile, moyen: item.moyen, dificile: item.dificile, tresdificile: item.tresdificile}
            })
            thenWithDataAction(newArray);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getToDoList = async (username, thenWithDataAction)=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://192.168.1.188:5000/GetToDoList',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`
        },
      };
      Axios.request(config)
        .then((response) => {
            const respdata = response.data;
            thenWithDataAction(respdata);
        })
        .catch((error) => {
            thenWithDataAction([]);
        });
}

export const getToDoSelectList = async (username, thenWithDataAction)=>{
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://192.168.1.188:5000/GetToDoList',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`
      },
    };
    Axios.request(config)
      .then((response) => {
          let newArray = response.data.map((item) => {
            return {key: item.idTodolist, value: item.nameToDoList}
          })
          thenWithDataAction(newArray);
      })
      .catch((error) => {
          thenWithDataAction([]);
      });
}

export const getNote = async (username, thenWithDataAction)=>{
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://192.168.1.188:5000/GetNotes?idToDoList=' + username,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`
      },
    };
    Axios.request(config)
      .then((response) => {
          const respdata = response.data;
          console.log(respdata);
          thenWithDataAction(respdata);
      })
      .catch((error) => {
          thenWithDataAction([]);
      });
}

export const getNoteDays = async (username, thenWithDataAction)=>{
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://192.168.1.188:5000/GetNotesbydate',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${await AsyncStorage.getItem('jwt')}`
      },
    };
    Axios.request(config)
      .then((response) => {
          const respdata = response.data;
          thenWithDataAction(respdata);
      })
      .catch((error) => {
          thenWithDataAction([]);
      });
}

export const updateTudu = (newTuduName, tuduId, thenAction)=>{
    Axios.put('http://192.168.1.188:5000/', {
        newTuduName: newTuduName,
        tuduId: tuduId
    }).then(()=>{
        thenAction();
    });
}

export const toggleTudu = (newCompleteStatus, tuduId, thenAction)=>{
    Axios.put('http://192.168.1.188:5000/', {
        newCompleteStatus: newCompleteStatus,
        tuduId: tuduId
    }).then(()=>{
        thenAction();
    });
}

export const deleteTudu = (tuduId, thenAction)=>{
    Axios.delete('http://192.168.1.188:5000/').then(()=>{
        thenAction();
    })
}