"use client"

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function Home() {

  const memberships = ["WMA", "SMBA", "AGD", "DA", "BA", "IB", "CST"];

  return (
    <>
      <header className='flex justify-between align-center p-4 items-center'>
        <img className='w-20' src="/aits.png" alt="logo" />
        <nav className='flex gap-[2rem]'>
          <a className='hover:text-blue-500' href=''>Home</a>
          <a className='hover:text-blue-500' href=''>About Us</a>
          <a className='hover:text-blue-500' href=''>More</a>
        </nav>
      </header>
      <section className='hero bg-gray-100 py-20'>
        <div className='container mx-auto text-center'>
          <h1 className='text-5xl font-bold mb-4'>Welcome to Our Membership System</h1>
          <p className='text-xl mb-8'>Join us and enjoy exclusive benefits and features.</p>
          <button className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700'>Get Started</button>
        </div>
      </section>
      <section className='memberships bg-white py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-8'>Our Memberships</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {memberships.map((membership, index) => (
              <div key={index} className='membership-item p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                <h3 className='text-2xl font-bold mb-2'>{membership}</h3>
                <p className='text-gray-600'>Description of {membership} membership.</p>
                <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700'>Select</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className='bg-gray-800 text-white py-6'>
        <div className='container mx-auto text-center'>
          <p>&copy; 2024 All rights reserved</p>
          <nav className='flex justify-center gap-4 mt-4'>
            <a className='hover:text-gray-400' href=''>Privacy Policy</a>
            <a className='hover:text-gray-400' href=''>Terms of Service</a>
            <a className='hover:text-gray-400' href=''>Contact Us</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
