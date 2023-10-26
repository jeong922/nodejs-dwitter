import React from 'react';

export default function Header() {
  return (
    <header className='w-full flex justify-between p-2 items-center sticky top-0 border-b'>
      <h1 className='text-3xl font-semibold'>Dwitter</h1>
      <nav>
        <ul className='flex gap-x-3 font-semibold'>
          <li>All Tweets</li>
          <li>My Tweets</li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
}
