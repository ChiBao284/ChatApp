import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyCe3uoY2FePJOTa82H1Gw9DN8S4in-bYAI',
  authDomain: 'chatapp-7b2a4.firebaseapp.com',
  databaseURL: 'https://chatapp-7b2a4.firebaseio.com',
  projectId: 'chatapp-7b2a4',
  storageBucket: 'chatapp-7b2a4.appspot.com',
  messagingSenderId: '1026119777351',
  appId: '1:1026119777351:web:ad27e3399b65e8259b0562',
  measurementId: 'G-TP6RYR0CWQ',
};
class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  };
  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };
  send = messages => {
    messages.map(item => {
      const message = {
        text: item.text,
        // timestamp: new Date(item),
        user: item.user.name._id,
      };

      this.db.push(item.text);
      this.db.push(item.user.name._id);
    });
  };
  parse = message => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    //const createdAt = new Date(timestamp);

    return {
      _id,
      // createdAt,
      text,
      user,
    };
  };

  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
