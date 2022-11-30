import { useState } from 'react';
import { List } from './List';
import people from '../data/people.json';
import { SearchInput } from './SearchInput';

export function RomanCommandPalette() {
  const [hodnota, nastavNovouHodnotu] = useState('Terry');

  // let hodnota = 'Ahoj světe';
  function hleda(hodnotaInputu) {
    console.log('Uživatel hledá: ', hodnotaInputu);
    // hodnota = hodnotaInputu;
    nastavNovouHodnotu(hodnotaInputu);
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white text-black rounded-xl w-4/5">
        <div className="p-4 pb-0">
          <SearchInput onSearch={hleda} />
        </div>
        <div className="grid grid-cols-2 p-4 gap-4">
          <List
            items={people.filter((person) =>
              person.firstName.includes(hodnota)
            )}
            limit={5}
            offset={0}
          />
          <List items={people} limit={5} offset={7} />
        </div>
      </div>
    </div>
  );
}
