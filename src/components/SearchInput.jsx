import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export function SearchInput(props) {
  return (
    <div className="flex gap-2">
      <MagnifyingGlassIcon width={30} />
      <input
        className="flex-1 p-2"
        placeholder="Search"
        value={props.value}
        onChange={(event) => props.onSearch(event.target.value)}
      />
    </div>
  );
}
