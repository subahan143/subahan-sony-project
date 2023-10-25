import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
   <>
  
<nav className='w-full h-[80px] flex border-b-2 shadow-lg fixed z-10 bg-white phone:w-full '>
  <div className='w-[50%] h-[80px] items-center justify-center  flex gap-5 phone:w-[40%] phone:flex phone:items-center phone:justify-center'>
  <img className='w-[250px] h-[30px] phone:w-[130px] phone:h-[60px] ' src="https://workspace.google.com/static/img/google-workspace-logo.svg?cache=1d66531" alt="" />
<img className='w-[200px] phone:hidden' src="https://workspace.google.com/static/img/logo-workspace-apps.svg?cache=b2e2a65" alt="" />

  </div>
  <div className='w-[50%] h-[80px] flex items-center justify-end gap-5 phone:w-[60%]  phone:gap-3'>
    <button className=' w-28 h-[35px] border-2 rounded-md phone:text-[13px] phone:w-[100px] phone:h-[30px] '>Contact sales</button>
    <button className=' w-36 h-[35px] border-2 rounded-md bg-[#1a73e8] text-white phone:text-sm phone:w-[100px] phone:h-[30px] '>Start Free Trial</button>
  </div>
</nav>
<div className='w-full h-[90vh] flex items-center justify-center flex-col gap-4 phone:w-full phone:h-[75vh] phone:gap-2 phone:text-center'>
  <img className='w-[200px] h-[30px] phone:w-[90px]' src="https://workspace.google.com/static/img/logo-workspace-apps.svg?cache=b2e2a65" alt="" />
  <h1 className='text-6xl phone:text-2xl'>Grow and run your</h1>
  <h1 className='text-6xl phone:text-2xl'>business more efficiently</h1>
  <p className='w-[65%] text-center'>Google Workspace business solutions seamlessly integrate everything that you and your team need to get anything done, all-in-one place, including professional @yourcompany email.</p>
<span className='gap-7 flex'>  <button className=' phone:w-[110px] rounded-xl w-[150px] h-[40px] bg-[#1a73e8]'>Start Free Trial</button>
  <button className='phone:w-[140px] w-[150px] h-[40px] border-2 rounded-xl'>Find the right plan</button></span>
</div>
<div className='w-full h-[85vh] flex items-center justify-center phone:w-full phone:h-[31vh]'>
  <img className='w-[80%] h-[80vh] phone:w-full phone:h-[30vh]' src="https://workspace.google.com/static/img/business_hero.svg?cache=dd5d454" alt="" />
</div>
<div className='w-full h-[50vh] text-5xl text-center flex items-stretch justify-center phone:w-full phone:h-[25vh] '>
<p className='w-[80%] font-bold flex items-center justify-center phone:text-xl'>Flexible, helpful business collaboration solutions for all the ways that work is changing.</p>
</div>
<div className='w-full h-[65vh] flex items-center justify-center phone:flex-col phone:w-full phone:h-[100vh] '>
  <div className='w-[50%] h-[60vh] phone:w-full phone:h-[50vh] phone:items-center phone:justify-center phone:flex '>
    <img className='w-full h-[60vh] phone:w-[80%] phone:h-[40vh]' src="https://lh3.googleusercontent.com/i-SBVCH6hzemto0hbgcZliTGaJHgmzAgVByoXd1xUqcbJAXzgltkgYE8StvqYs_oAdx82dZY2GlAJAi0SraAjvsjg3iSbmwPxbcLNc4=w1400-rw" alt="" />
  </div>
  <div className='w-[50%] h-[60vh] flex items-start justify-center flex-col pl-11 gap-3 phone:w-full '>
    <h1 className='text-4xl phone:text-2xl '>Sites</h1>
    <p className='text-2xl phone:text-xl'>Effortlessly create impactful team sites</p>
    <p className='text-sm w-[70%]'>Collaboratively create engaging, high-quality sites for your team, project or event. The sites look great on all screens, from desktop to smartphone. All without learning design or programming.</p>
    <button className='phone:w-[100px] w-[130px] h-[35px] border-2 text-white bg-[#1a73e8] rounded-xl phone:text-xs phone:font-bold'>Start Free Trial</button>
  </div>
</div>
<div className='w-full h-[45vh]  flex gap-3 flex-col phone:w-full phone:h-[80vh] '>
  <div className='w-full h-[20vh] flex items-center justify-center flex-col text-3xl phone:text-xl phone:h-[15vh] '>
  <h1>And a bunch of happy</h1>
  <h1>customers</h1>
  </div>
  <div className='flex items-center justify-center gap-5 flex-wrap phone:w-full phone:h-[60vh]  phone:flex  phone:flex-wrap  '>
  <img className='w-[200px] h-[100px] border-2 rounded-xl phone:w-[40%] phone:h-[100px] ' src="https://www.urbanvault.in/images/AccorHotelsLogo.jpg" alt="" /> 
  <img className='w-[200px] h-[100px] border-2 rounded-xl phone:w-[40%] phone:h-[100px]' src="https://www.urbanvault.in/images/KhataBook-Logo.jpg" alt="" /> 
  <img className='w-[200px] h-[100px] border-2 rounded-xl phone:w-[40%] phone:h-[100px]' src="	https://www.urbanvault.in/images/Zetwork-Logo.jpg" alt="" /> 
  <img className='w-[200px] h-[100px] border-2 rounded-xl phone:w-[40%] phone:h-[100px]' src="https://www.urbanvault.in/images/CaratLane-Logo.jpg" alt="" /> 
  <img className='w-[200px] h-[100px] border-2 rounded-xl phone:w-[40%] phone:h-[100px]' src="	https://www.urbanvault.in/images/Bright-Logo.jpg" alt="" />
</div>
</div>
<div className="w-full h-screen flex phone:w-full phone:h-[60vh] phone:flex phone:items-center phone:justify-center ">
<div className='w-full h-[80vh]  phone:w-[80%] phone:h-[55vh] phone:items-center phone:justify-center phone:flex  '>

<Carousel showThumbs={false}>
    <div>
        <img className='w-full rounded-3xl h-[80vh] phone:w-[50%] phone:h-[50vh]' src="https://images.unsplash.com/photo-1697487957555-5f8df6a965f6?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img className='w-full rounded-3xl h-[80vh] object-cover phone:w-[70%] phone:h-[50vh]' src="https://images.unsplash.com/photo-1696964257725-2b375f681cd9?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img className='w-full rounded-3xl h-[80vh] phone:w-[70%] phone:h-[50vh]' src="https://images.unsplash.com/photo-1697402637560-1afd5d2a0b7e?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img className='w-full rounded-3xl h-[80vh] phone:w-[70%] phone:h-[50vh]'src="https://images.unsplash.com/photo-1686894670451-1944cfd0f67f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img className='w-full rounded-3xl h-[80vh] object-center phone:w-[70%] phone:h-[50vh]' src="https://images.unsplash.com/photo-1688534484011-d3917b607626?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <p className="legend">Legend 4</p>
    </div>
    
</Carousel>

</div>
</div>
<div className='w-fuul h-[60vh] phone:w-full phone:h-[90vh] '>

<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Brand Center</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
        </div>
      </div>
    </div>
</footer>


</div>
<div className='w-full h-[30vh] phone:w-full phone:h-[150px] phone:flex phone:items-center phone:justify-center phone:object-cover'>
  <img className='w-full h-[30vh] phone:w-[95%] phone:h-[130px]' src="https://www.urbanvault.in/images/FooterBottomImage-min-1.png" alt="" />
</div>


   
   
   
   </>
  )
}

export default Home
