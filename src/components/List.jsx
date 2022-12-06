import cx from 'classnames';

export function List(props) {
  console.log(props);

  return (
    <div className="">
      <ul className="list-disc list-inside flex flex-col gap-4">
        {props.items
          .slice(props.offset, props.offset + props.limit)
          .map((item, i) => (
            <li
              key={item.id}
              className={cx(
                'flex items-center gap-2 p-2 rounded-lg transition-all duration-700 hover:cursor-pointer hover:bg-black hover:text-white',
                props.selectedItem === item ? 'bg-slate-400' : 'bg-slate-200'
              )}
              onClick={(event) => props.onSelectItem(item)}
            >
              <img
                className="w-12 rounded-full bg-slate-400"
                src={item.image}
                alt="could not load"
              />
              {item.firstName} {item.lastName}
            </li>
          ))}
      </ul>
    </div>
  );
}
