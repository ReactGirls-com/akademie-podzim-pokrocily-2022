import { useState } from 'react';

export function Detail(props) {
  const { person } = props;

  return (
    <div className="p-10 text-center">
      <img
        src={person.image}
        alt="profile"
        className="rounded-full bg-slate-200"
      />
      <div className="my-4 text-2xl font-bold">
        {person.firstName} {person.lastName}
      </div>
      <div>{person.company.title}</div>
    </div>
  );
}
