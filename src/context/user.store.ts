import React from 'react';
import {makeObservable, action, observable} from 'mobx';

export interface User {
  name: string | 'No definido';
  gender: string | 'No definido';
  age: number | 'No definido';
  covidBefore: boolean | 'No definido';
  dosesVaccine: 1 | 2 | 'No definido';
  brandVaccine: 'PFIZER' | 'ASTRAZENECA' | 'SINOPHARM' | 'No definido';
}

export type Language = 'spanish' | 'english';

class UserStore {
  risk = 0;
  user: User = {
    age: 'No definido',
    name: 'No definido',
    gender: 'No definido',
    covidBefore: 'No definido',
    brandVaccine: 'No definido',
    dosesVaccine: 'No definido',
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
