import './App.css';

function App() {
  return (
    <>
      <div className='min-h-screen py-10' style={{ backgroundImage: 'linear-gradient(115deg, #004777, #fee2fe)' }}>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
          <div className='flex flex-col items-center w-full lg:w-1/2 px-10 justify-center text-justify bg-no-repeat bg-cover' style={{ backgroundImage: 'url(src/assets/backgrounddd.jpg)' }}>
              <h2 className='text-white text-3xl mb-3'>Welcome</h2>
              <div>
                <p className='text-white shadow-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea facere quibusdam dolores optio, veniam sint, velit, tenetur repellendus minus distinctio deserunt tempore sequi? <a href="#" className='text-purple-700 font-bold'>Learn More...</a> </p>
              </div>
            </div>

            <div className='w-full lg:w-1/2 py-16 px-12'>
              <h2 className='text-2xl mb-4'>Register</h2>
              <p>
                Create your account. It&apos;s free and only take few seconds 
              </p>

              <form action="">
                <div className='grid grid-cols-2 gap-6'>
                  <input className='border border-gray-400 py-1 px-2 rounded-md outline-none' type="text" placeholder='First Name' />
                  <input className='border border-gray-400 py-1 px-2 rounded-md outline-none' type="text" placeholder='Last Name' />
                </div>

                <div className='mt-5'>
                <input className='border w-full border-gray-400 py-1 px-2 rounded-md outline-none' type="email" placeholder='Email' />
                </div>

                <div className='mt-5'>
                <input className='border w-full border-gray-400 py-1 px-2 rounded-md outline-none' type="password" placeholder='Password' />
                </div>

                <div className='mt-5'>
                <input className='border w-full border-gray-400 py-1 px-2 rounded-md outline-none' type="password" placeholder='Confirm Password' />
                </div>

                <div className='mt-5'>
                  <input type="checkbox" className='border border-gray-400' />
                  <span className='mx-1'>
                    I accept the <a href="#" className='text-orange-500 font-semibold'>Terms of use</a> & <a href="#" className='text-orange-500 font-semibold'>Privacy Policy</a>
                  </span>
                </div>

                <div className='mt-5'>
                  <button className='w-full bg-orange-600 px-4 py-2 rounded-xl text-center text-white'>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
