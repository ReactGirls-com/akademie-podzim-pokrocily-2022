import cx from 'classnames';

export function List(props) {
  console.log(props);

  return (
    <div className="">
      <ul className="list-disc list-inside flex flex-col gap-4">
        {props.items.map((item, i) => (
          <li
            key={i}
            className={cx(
              'flex flex-col gap-2 p-4 rounded-lg transition-all duration-700 hover:cursor-pointer hover:bg-black hover:text-white',
              props.selectedItem === item ? 'bg-slate-400' : 'bg-slate-200'
            )}
            onClick={(event) => props.onSelectItem(item)}
          >
            <div className="font-bold">{item.name}</div>
            <div>{item.artist}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
