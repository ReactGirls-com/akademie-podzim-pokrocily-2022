import { useState } from 'react';
import { List } from './List';
import { SearchInput } from './SearchInput';
import { Detail } from './Detail';
import people from '../data/people.json';

export function RomanCommandPalette() {
  const [hodnota, nastavNovouHodnotu] = useState('Terry');
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white text-black rounded-xl w-4/5">
        <div className="p-4 pb-0">
          <SearchInput
            onSearch={(value) => nastavNovouHodnotu(value)}
            value={hodnota}
          />
        </div>
        <div className="grid grid-cols-2 p-4 gap-4">
          <List
            items={people.filter((person) =>
              // "Quigley Sheldon" includes "Sheldon Quigley"
              hodnota
                .split(' ') // ['Quigley', 'Sheldon']
                .every((h) =>
                  (person.firstName + ' ' + person.lastName)
                    .toLowerCase()
                    .includes(h.toLowerCase())
                )
            )}
            onSelectItem={(item) => setSelectedPerson(item)}
            selectedItem={selectedPerson}
            limit={5}
            offset={0}
          />
          {selectedPerson !== null ? <Detail person={selectedPerson} /> : null}
        </div>
      </div>
    </div>
  );
}
