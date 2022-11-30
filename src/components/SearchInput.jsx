import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export function SearchInput(props) {
  function zmena(event) {
    // console.log(event.target.value, props);
    props.onSearch(event.target.value);
  }

  return (
    <div className="flex gap-2">
      <MagnifyingGlassIcon width={30} />
      <input className="flex-1 p-2" placeholder="Search" onChange={zmena} />
    </div>
  );
}
