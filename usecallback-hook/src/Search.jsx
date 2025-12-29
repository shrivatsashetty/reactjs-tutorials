import { memo } from 'react';


function Search({ onChange }) {
  console.log('Search rendered!');

  return (
    <input
      type='text'
      placeholder='Search users...'
      onChange={(e) => onChange(e.target.value)}
      className='border-2 border-solid rounded-2xl p-2'
    />
  );
}

/* we export the component by wrapping it in a memo() hook
 * the memo hook will re-render the component if & only if
 * any of the props have changed since the last render */
export default memo(Search);