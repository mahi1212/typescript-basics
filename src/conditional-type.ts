// a type that depends on another type
type a1 = string; // a2 depends on a1
type a2 = a1 extends string ? string : null;

type Sheikh = {
    wife1: string,
    wife2: string,
}

type A = keyof Sheikh; // 'wife1' | 'wife2'

type CheckProperty<T, K> = K extends keyof Sheikh ? 'Ase' : 'Nai';

type Result = CheckProperty<Sheikh, 'wife2'>;

// lets remove one friend from the list
type Friend = 'Fabia' | 'Joyee' | 'Oishee';

type RemoveFriend<T, K> = T extends K ? never : T; // never means remove

// type NewFriend = RemoveFriend<Friend>; // joyee removed
type NewFriend = RemoveFriend<Friend, 'Oishee'>; // oishee removed