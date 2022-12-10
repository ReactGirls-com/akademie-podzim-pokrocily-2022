import { useState } from 'react';
import { List } from './List';
import { SearchInput } from './SearchInput';
import { Detail } from './Detail';
import { Button } from './Button';
import classNames from 'classnames';
import { useGet } from '../hooks/useGet';

export function RomanCommandPalette() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSong, setSelectedSong] = useState(null);
  const [page, setPage] = useState(0);
  const [searchInLyrics, setSearchInLyrics] = useState(false);
  const songs = useGet(
    'http://3.64.60.235:8080/' +
      searchTerm +
      '?page=' +
      page +
      '&search_lyrics=' +
      searchInLyrics,
    []
  );

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white text-black rounded-xl w-4/5">
        <div className="p-4 pb-0 flex justify-between items-center">
          <SearchInput
            onSearch={(value) => setSearchTerm(value)}
            value={searchTerm}
          />
          <label>
            <input
              type="checkbox"
              value={searchInLyrics}
              onChange={(event) => setSearchInLyrics(event.target.checked)}
            />{' '}
            search in lyrics
          </label>
        </div>
        <div
          className={classNames(
            'grid p-4 gap-4 ',
            selectedSong ? 'grid-cols-2' : ' grid-cols-1'
          )}
        >
          <div>
            <List
              items={songs}
              onSelectItem={(item) => setSelectedSong(item)}
              selectedItem={selectedSong}
            />
            <div className="flex justify-between items-center gap-4 py-4">
              <Button
                onClick={() => {
                  if (page > 0) {
                    setPage(page - 1);
                  }
                }}
              >
                předchozí
              </Button>
              {page + 1}
              <Button
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                další
              </Button>
            </div>
          </div>
          {selectedSong !== null ? <Detail song={selectedSong} /> : null}
        </div>
      </div>
    </div>
  );
}
