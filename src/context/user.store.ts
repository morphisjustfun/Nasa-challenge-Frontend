import React from 'react';
import {makeObservable, action, observable} from 'mobx';

export interface User {
  name: string | 'No definido';
  covidBefore: boolean | 'No definido';
  dosesVaccine: 0 | 1 | 2 | 'No definido';
  brandVaccine: 'PFIZER' | 'ASTRAZENECA' | 'SINOPHARM' | 'No definido';
  location: string | 'No definido'
}

export type Language = 'spanish' | 'english';

class UserStore {
  risk = 0;
  user: User = {
    name: 'No definido',
    covidBefore: 'No definido',
    brandVaccine: 'No definido',
    dosesVaccine: 'No definido',
    location: 'No definido'
  };
  language: Language = 'spanish';

  constructor() {
    makeObservable(this, {
      setUser: action.bound,
      setRisk: action.bound,
      setLanguage: action.bound
    });
  }

  setUser(user: User) {
    this.user = user;
  }

  setRisk(risk: number) {
    this.risk = risk;
  }

  setLanguage(language: Language){
     this.language = language;
  }
}

const userStore = new UserStore();
export const UserStoreContext = React.createContext(userStore);
export const useUserStore = () => React.useContext(UserStoreContext);
