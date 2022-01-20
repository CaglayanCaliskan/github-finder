function About() {
  return (
    <div className='text-left text-6xl px-8 '>
      <h1 className='mb-6'>Github Finder</h1>
      <p className='text-lg'>
        A React app to search GitHub profiles and see profile details. Thanks
        for Brad Traversy for the couse
      </p>
      <p className='text-lg text-gray-400 '>
        Version:
        <span className='mx-2 text-cyan-400'>1.0.0</span>
      </p>
      <p className='text-lg  text-gray-400 '>
        Profile:
        <a
          href='https://github.com/fastnavy'
          target='_blank'
          className='text-purple-300 mx-2'
        >
          fastnavy
        </a>
      </p>
    </div>
  );
}

export default About;
