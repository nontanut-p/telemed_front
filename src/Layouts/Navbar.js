import React from 'react';
import { Link } from 'react-router-dom'
import { IoArrowDown, IoArrowUp } from "react-icons/io5" //FaStethoscope
import { FaStethoscope} from "react-icons/fa"
export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-1 bg-blue-800 mb-3 border-2 border-blue-800'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between '>
					
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start '>
					
						<Link
							className='text-3xl font-bold leading-relaxed inline-block mr-4 py-0 whitespace-nowrap uppercase text-white hover: transform hover:-translate-y-1 hover:scale-110'
							to='/'
						>
							<div><i className='fas fa-robot'> Telemed </i> </div>
						</Link>
						<button
							className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							{navbarOpen ? <IoArrowUp className='animate-bounce' /> : <IoArrowDown className='animate-bounce'/>}
							
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item '>
								<div
									className='hover: transform hover:-translate-y-1 hover:scale-110 px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75'
								
								>
									<i className='far fa-share-square text-md leading-lg text-white opacity-75 '></i>
									<Link to='/main'>
									<span className='ml-2'>หน้าหลัก</span>
									</Link>
									
								</div>
							</li>
							<li className='nav-item'>
								<div
									className=' hover: transform hover:-translate-y-1 hover:scale-110 px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75'
								
								>
									<i className='fas fa-download text-md leading-lg text-white opacity-75'></i>
									<Link to='/docs'>
									<span className='ml-2'>คู่มือการใช้งาน</span>
									</Link>
									
								</div>
							</li>
							<li className='nav-item'>
								<div
									className='hover: transform hover:-translate-y-1 hover:scale-110 px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75'
									
								>
									<i className='fas fa-print text-md leading-lg text-white opacity-75'></i>
									<Link to='/contact'>
									<span className='ml-2'>ติดต่อ</span>
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
