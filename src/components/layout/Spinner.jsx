import spinner from './assets/spinner.gif';
function Spinner() {
  return (
    <div className=' text-center'>
      <img
        width={60}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  );
}

export default Spinner;
