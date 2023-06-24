"use client";

import Image from 'next/image';
import { useEffect ,useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const formattedSearchTerm = searchTerm.toLowerCase().replace(/\s/g, '');
    const element = document.getElementById(formattedSearchTerm);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <main className='bg-white h-fit text-black max-w-full'>
      <div className='sticky top-1 py-2 px-3 w-fit mx-auto flex'>
        <input
          type='text'
          placeholder='Search title'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border border-gray-500 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-fit  '
        />
        <button onClick={handleSearch} className='ml-2 bg-slate-600 hover:bg-blue-600 text-white font-medium px-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <AiOutlineSearch />
        </button>
      </div>

      <section className='py-10 px-3'>
        <div className='font-bold w-full text-center mx-auto px-5 py-3 rounded-xl shadow-lg bg-gradient-to-r from-red-400 via-orange-600 to-red-500'>
          Live Music
        </div>  
      </section>
      
      <section className='px-3 w-fit mx-auto'>
        <div className='py-5' id='canttakemyeyesoffyou'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Cant Take My Eyes Off You
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            You&apos;re just too good to be true<br />
            Can&apos;t take my eyes off of you<br />
            You&apos;d be like heaven to touch<br />
            Oh, I want to hold you so much<br />
            At long last love has arrived<br />
            And I thank God I&apos;m alive<br />
            You&apos;re just too good to be true<br />
            I can&apos;t take my eyes off of you<br /><br />
            <span className="text-red-700 font-medium">verse2:</span><br />
            Pardon the way that I stare<br />
            There&apos;s nothin&apos; else to compare<br />
            The thought of you leaves me weak<br />
            There&apos;re no words left to speak<br />
            But if you feel like I feel<br />
            Please, let me know that it&apos;s real<br />
            You&apos;re just too good to be true<br />
            Can&apos;t take my eyes off of you<br /><br />
            <span className="text-red-700 font-medium">reff:</span><br />
            I love you baby<br />
            And if it&apos;s quite all right<br />
            I need you baby<br />
            To warm a lonely night<br />
            I love you baby<br />
            Trust in me when I say<br />
            Oh, pretty baby<br />
            Don&apos;t bring me down, I pray<br />
            Oh, pretty baby<br />
            Now that I found you, stay<br />
            And let me love you, baby<br />
            Let me love you<br /><br />
            <span className="text-green-700 font-medium">[verse2 - reff(2x)]</span>
          </p>
        </div>

        <div className='py-5' id='isittheanswer'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Is It The Answer
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            I make you break<br />
            You move I take<br />
            Love is the answer so they say<br />
            But if I went away<br />
            What would you say<br />
            Would it be enough to make you stay<br />
            As you look to the exit<br />
            I don't even know why I'd do this anymore<br />
            I know there's things I should know<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            And I know you can't accept<br />
            She's the love that I kept<br />
            Scared I'll push you away<br />
            But I love you everyday<br />
            I know there's things you should know<br /><br />

            <span className="text-red-700 font-medium">reff:</span><br />
            I'm in love not because I want to<br />
            She's become something that I got to see
            Won't you just stick around with me<br />
            Oh and darling<br />
            I mistake intent for better days<br />
            While you mislead me in different ways<br />
            I don't think this is how it's to end<br /><br />
            <span className="text-green-700 font-medium">[instrument - reff(2x)]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='inikahcinta'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Inikah Cinta
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            Saat kujumpa dirinya<br />
            Di suatu suasana<br />
            Terasa getaran dalam dada<br />
            Kucoba mendekatinya<br />
            Kutatap dirinya<br />
            Oh dia sungguh mempesona<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Ingin aku menyapanya<br />
            Menyapa dirinya<br />
            Bercanda tawa dengan dirinya<br />
            Namun apa yang kurasa<br />
            Aku tak kuasa<br />
            Aku tak tau harus berkata apa<br /><br />

            <span className="text-red-700 font-medium">reff:</span><br />
            Inikah namanya cinta?<br />
            Oh inikah cinta?<br />
            Cinta pada jumpa pertama<br />
            Inikah rasanya cinta?<br />
            Oh inikah cinta?<br />
            Terasa bahagia saat jumpa<br />
            Dengan dirinya<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Kujumpa dia berikutnya<br />
            Suasana berbeda<br />
            Getaran itu masih ada<br />
            Aku dekati dirinya<br />
            Kutatap wajahnya<br />
            Oh dia tetap mempesona<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - reff]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Rindu terasa<br />
            Di kala diri ini ingin jumpa<br />
            Ingin selalu bersama<br />
            Bersama dalam segala suasana<br /><br />
            <span className="text-green-700 font-medium">[pre-chorus - reff(2x)]</span><br /><br />
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;