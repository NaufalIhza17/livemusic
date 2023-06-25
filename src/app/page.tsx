"use client";

import Image from 'next/image';
import { useEffect ,useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaGuitar} from 'react-icons/fa';


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  const handleSearch = () => {
    const formattedSearchTerm = searchTerm.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s/g, '');
    const element = document.getElementById(formattedSearchTerm);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }; 

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const chord = () => {

  }

  return (
    <main className='bg-white h-fit text-black max-w-full'>
      <div className='sticky top-1 py-2 px-3 w-fit mx-auto flex'>
        <input
          type='text'
          placeholder='cari judul lagu'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border border-gray-500 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40'
        />
        <button onClick={handleSearch} className='ml-2 bg-slate-600 hover:bg-blue-600 text-white font-medium px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <AiOutlineSearch />
        </button>
        <button onClick={toggleVisibility} className='ml-2 bg-slate-600 hover:bg-blue-600 text-white font-medium px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <FaGuitar/>
        </button>
      </div>

      <section className='py-5 px-3 w-fit mx-auto'>
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
            <span className="text-green-700 font-medium">[intro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F# F#m E)</span><br />
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E)</span> You&apos;re just too good to be true<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Emaj7)</span> Can&apos;t take my eyes off of you<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E7)</span> You&apos;d be like heaven to touch<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A)</span> Oh, I want to hold you so much<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am)</span> At long last love has arrived<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E)</span> And I thank God I&apos;m alive<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#)</span> You&apos;re just too good to be true<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m)</span> I can&apos;t take my <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E)</span> eyes off of you<br /><br />
            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E)</span> Pardon the way that I stare<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Emaj7)</span> There&apos;s nothin&apos; else to compare<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E7)</span> The thought of you leaves me weak<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A)</span> There&apos;re no words left to speak<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am)</span> But if you feel like I feel<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E)</span> Please, let me know that it&apos;s real<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#)</span>You&apos;re just too good to be true<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m)</span> Can&apos;t take my <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E)</span> eyes off of you <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E7)</span> <br /><br />
            <span className="text-red-700 font-medium">chorus:</span><br />
            I love you <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m7)</span> baby<br />
            And if it&apos;s <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B)</span> quite all right<br />
            I need you <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E)</span> baby<br />
            To warm the <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C#m7)</span> lonely night<br />
            I love you <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m7)</span> baby<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B)</span> Trust in me when I say <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E-E7)</span><br />
            Oh, pretty <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m7)</span> baby<br />
            Don&apos;t bring me <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B)</span> down, I pray<br />
            Oh, pretty <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E)</span> baby<br />
            Now that I <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C#m7)</span> found you, stay<br />
            And let me <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m7)</span> love you, baby<br />
            Let me <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B)</span> love you<br /><br />
            <span className="text-green-700 font-medium">[verse2 - chorus(2x)]</span>
          </p>
        </div>

        <div className='py-5' id='isittheanswer'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Is It The Answer
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Original start fret 10)</span><br />
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> I make you <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G7)</span> break<br />
            You move I <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span> take<br />
            Love is the <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C7)</span> answer so they <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> say<br />
            But if I went <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G7)</span> away<br />
            What would you <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span> say<br />
            Would it be <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C7)</span> enough to make you <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> stay<br />
            As you <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G7)</span> look to the exit<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span> I don&apos;t even know why I&apos;d <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C7)</span> do this anymore<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> I know there&apos;s <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G7)</span> things I should know <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7-C7)</span><br /><br />

            <span className="text-green-700 font-medium">[instrument]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Original start fret 10)</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> And I know <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G7)</span> you can&apos;t accept <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span><br />
            She&apos;s the <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C7)</span> love that I kept <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span><br />
            Scared I&apos;ll <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G7)</span> push you away <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span><br />
            But I love <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C7)</span> you everyday <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span><br />
            I know <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A#maj7-G7)</span> there&apos;s things you should know <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7-C7)</span><br /><br />

            <span className="text-red-700 font-medium">chorus: <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7 G7 Cmaj7 C7)</span></span><br />
            I&apos;m in love not because I want to<br />
            She&apos;s become something that I got to see<br />
            Won&apos;t you just stick around with me<br />
            Oh and darling<br />
            I mistake intent for better days<br />
            While you mislead me in different ways<br />
            I don&apos;t think this is how it&apos;s to end<br /><br />
            <span className="text-green-700 font-medium">[instrument - chorus(2x)]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='inikahcinta'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Inikah Cinta
          </h1>
          <p>
          <span className="text-green-700 font-medium">[intro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Gm Fm A#)</span><br />
            <span className="text-red-700 font-medium">verse1: <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Gm Fm A#)</span></span><br />
            Saat kujumpa dirinya<br />
            Di suatu suasana<br />
            Terasa getaran dalam dada<br />
            Kucoba mendekatinya<br />
            Kutatap dirinya<br />
            Oh dia sungguh mempesona<br /><br />

            <span className="text-red-700 font-medium">pre-chorus: <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G# Gm Fm A# | G# Gm Fm-Gm A#)</span></span><br />
            Ingin aku menyapanya<br />
            Menyapa dirinya<br />
            Bercanda tawa dengan dirinya<br />
            Namun apa yang kurasa<br />
            Aku tak kuasa<br />
            Aku tak tau harus berkata apa<br /><br />

            <span className="text-red-700 font-medium">chorus: <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Gm G#-Fm-A#)</span></span><br />
            Inikah namanya cinta?<br />
            Oh inikah cinta?<br />
            Cinta pada jumpa pertama<br />
            Inikah rasanya cinta?<br />
            Oh inikah cinta?<br />
            Terasa bahagia saat jumpa<br />
            Dengan dirinya<br /><br />

            <span className="text-green-700 font-medium">[instrument] <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Gm Fm A#)</span></span><br /><br />

            <span className="text-red-700 font-medium">verse2: <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Gm Fm A#)</span></span><br />
            Kujumpa dia berikutnya<br />
            Suasana berbeda<br />
            Getaran itu masih ada<br />
            Aku dekati dirinya<br />
            Kutatap wajahnya<br />
            Oh dia tetap mempesona<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge: <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G# Gm Fm A# | G# Gm Fm-Gm A#)</span></span><br />
            Rindu terasa<br />
            Di kala diri ini ingin jumpa<br />
            Ingin selalu bersama<br />
            Bersama dalam segala suasana<br /><br />
            <span className="text-green-700 font-medium">[chorus(2x)]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='bitterlove'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Bitterlove <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>- Capo 2</span>
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            There is <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> bitter in everyday <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span><br />
            But then I <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C7)</span> feel it<br />
            That you would be the <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> only one<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm7)</span> Sometimes it doesn&apos;t have to <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em7)</span> be so sure <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A7)</span><br />
            The <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> sweetest love can be so hard to <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G-G7)</span> find<br /><br />
            We&apos;ll be <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> better in every way <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span><br />
            But then I <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C7)</span> would go to be in <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> other space<br />
            Sometimes <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm7)</span> , the bitter of love can <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em7)</span> be so good <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A7)</span><br />
            It&apos;s like <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> a coffee <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span> with a rainbow&apos;s <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C-C7)</span> mood<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm7)</span> Sometimes you feel off <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> but sometimes you feeling <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> right<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm)</span> Is it to be, or it is not to be <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span>To fall in love <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span> again, to <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em7)</span> be the one for me <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A7)</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> Sometimes you fall, but there&apos;ll be <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span> time we&apos;d be together <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G7)</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            We&apos;ll be <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> mad in every <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span> way<br />
            Then I <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C7)</span> remember, the store we went last <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> september<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm7)</span> Sometimes, recalling things would <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em7)</span> be so good <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A7)</span><br />
            It&apos;s like <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> perfect cake, <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span> that my grandma&apos;s made <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G7)</span><br /><br />

            <span className="text-green-700 font-medium">[instrument] <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(same as chorus)</span></span><br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">verse3:</span><br />
            We&apos;ll be <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> better, in every <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span> way<br />
            But then I <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C7)</span> would, go to be in <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> other space<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm7)</span> Sometimes, the bitter of love can <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em7)</span> be so good <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A)</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> It&apos;s like a coffee <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span> with a rainbow<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em)</span>It&apos;s like a coffee <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A7)</span> with a rainbow<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span>It&apos;s like a coffee <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span> with a rainbow&apos;s <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> mood<br /><br />

            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm7-G)</span>With a rainbow&apos;s <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7)</span> mood<br /><br />
          </p>
        </div>

        <div className='py-5' id='locationunknown'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Location Unknown
          </h1>
          <p>
            <span className="text-red-700 font-medium">intro:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> Travelling places, I ain&apos;t seen you in ages<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> But I hope you come back to me<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> My mind&apos;s running wild with you far away<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> I still think of you a hundred times a day<br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> I still think of you too, if only you knew<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> When I&apos;m feeling a bit down and I wanna pull through<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> I look over your photograph<br />
            And I think how much I miss you, <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> I miss you<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> I wish I knew where I was, Cause I don&apos;t have a clue<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> I just need to work out some way of getting me to you<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> Cause I will never find a love like ours out here<br />
            In a <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> million years, a million years<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> My location unknown, Tryna find a way back home to you again<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> I gotta get back to you, Gotta, gotta, get back to you<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> My location unknown, Tryna find a way back home to you again<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> I gotta get back to you, Gotta, gotta, get back to you<br /><br />

            <span className="text-red-700 font-medium">post-chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> I just need to know that you&apos;re safe, Given that I&apos;m miles away<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> On the first flight, back to <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> your side<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> I don&apos;t care how long it takes, I know you&apos;ll be worth the wait<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> On the first flight, back to your side<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> I still think of you too, if only you knew<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> I just need to work out some way of getting me to you<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7)</span> Cause I will never find a love like ours out here<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7)</span> In a million years, a million years<br /><br />

            <span className="text-green-700 font-medium">[chorus - post-chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge: (2x)</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm7)</span> I don&apos;t want to be wasting time, <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> without you<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> Don&apos;t want to throw away my life, I <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C/E)</span> need you<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm7)</span> Something tells me we&apos;ll be alright <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7)</span> Something tells me we&apos;ll be alright, <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C/E)</span> alright<br /><br />
            

            <span className="text-green-700 font-medium">[chorus - post-chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='bicara'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Bicara <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>- Capo 2</span>
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro] <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Bb (2x))</span></span><br /><br />
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> Sudah berapa <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> lama<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm C)</span> Aku menunggu jawaban <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb C)</span> darimu <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F - Bb - C)</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> Sampaikah <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> kepadamu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm C)</span> Kata-kata yang ku <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb)</span> rangkaikan<br />
            Agar kau <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G C)</span> tahu perasaanku<br />
            Yang telah lama <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> terpendam<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C C7)</span> Inilah yang ku rasakan<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F A/Db Dm)</span> Jangan hanya bicara<br />
            Ku tak <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Bb)</span> perlu kata-kata<br />
            Tuk <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbm)</span> mengerti yang kau <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F C)</span> rasakan<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F A/Db Dm)</span> Karena ku hanya butuh<br />
            Separuh <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Bb)</span> hatimu<br />
            Di dalam <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> hidupku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm C F)</span> Tuk buatku bahagia<br /><br />

            <span className="text-green-700 font-medium">[instrument] <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Bb (2x))</span></span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> Sebut yang kau <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> inginkan<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm C-F Bb)</span> Apapun itu kan kuberikan <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F-Bb-C)</span> untukmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span>Andai kau <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> bersamaku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm C Bb)</span>Di tempat dan waktu yang sama<br />
            Kau akan <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span> tahu perasaanku <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span><br />
            Yang telah lama <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> terpendam<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C C7)</span>Inilah yang kurasakan<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm)</span>Semenjak kau <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span> ada disini ku mengerti <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb)</span><br />
            Betapa ku <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm C)</span> membutuhkanmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm)</span> Bila kataku <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span> tak cukup tuk <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb)</span> buatmu mengerti<br />
            Izinkan ku <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> bertemu lagi denganmu<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='itsonlyme'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            It&apos;s Only Me
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro] <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G#)</span></span><br /><br />
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G#)</span> Selama ini ribuan hari<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> Ku dekat denganmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G# A#)</span> Lewati berbagai hal, ku ada di sisi mu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm G# Fm A#)</span> Tanpa kau tahu perasaan ku padamu<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G# Gm Fm)</span> Sendiri ku berharap<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G# Gm C# A# D#)</span> Memberi kasih walau tak kembali<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            I maybe not <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cm)</span> yours and you&apos;re not <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> mine<br />
            But I&apos;ll be <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm-G-Cm)</span> there for you when you need me<br />
            It is only <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> me<br />
            Believe me <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm)</span> girl, it&apos;s only me<br />
            Yeah, it&apos;s <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cm-A#/D)</span> only me<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G#)</span> I will always be the one who pull you up<br />
            When <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm-G-Cm)</span> everybody push you down<br />
            And it&apos;s <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> only me<br />
            Believe me <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm)</span> girl, it&apos;s only me<br />
            Yeah, it&apos;s <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A#)</span> only me<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cm A# Fm A#)</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G# A#)</span> Sekali pun, kau tak pernah perdulikan rasaku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G# A#)</span> Ku takkan acuhkan dirimu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm G# Fm A#)</span> Tapi kuharap, Suatu saat nanti kau tahu<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B F#)</span> Aku memang bukan<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A G#m)</span> Rasa yang kau mau<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B F#)</span> Namun ku kan slalu ada<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F# G#7)</span> Untukmu<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(main chorus)</span><br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='hampirsempurna'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Hampir Sempurna <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>- capo 4</span>
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F)</span> Sunyi malam tanpa suara<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F)</span> Hanya hati yang bicara<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F)</span> Kau disampingku diam membisu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am Em F)</span> Meski riuh dera jiwamu<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm Em F)</span> Mungkinkah ada satu kesempatan<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm Em F G)</span> Merangkum rasa yang kini ada<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F)</span> Terbang bersamaku bila kau mau<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F)</span> Genggamlah hatiku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F)</span> Meski tak sempurna separuh sayapku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am Em D-G)</span> Langit berbintang memelukku erat <br /><br />

            <span className="text-green-700 font-medium">[instrument]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F (2x))</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F)</span> Andai ku bisa inginku mengerti<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F)</span> Betapa kini ku merindumu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm F)</span> Hanya namamu yang kini terus mengisi<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am Em D)</span> Gema ruang-ruang jiwaku<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='shewasmine'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            She Was Mine
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm)</span> So I hopped on a train three in the afternoon<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb Bbm)</span> I don&apos;t know when I&apos;m coming back, but I hope that its soon<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span>  See I never thought, never thought<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cm Bb Bbm)</span> That I&apos;d have to leave your side your side<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm)</span> Its only physically, but know that you will be on my mind<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb Bbm)</span> Twenty four hours at a time<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm Bb Bbm)</span> Cause in my eyes you were mine, you were mine<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm C7)</span> No matter where you go, i won&apos;t be very far<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am D7)</span> Cause in my head I&apos;ll be right there where you are<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm C7)</span> Cause love has no distance baby<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am D7)</span> Love, love has no distance baby<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm C7)</span> No, not when it comes to you and me<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(same as verse)</span> <br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm)</span> See she wrote me a letter, said the weather wasn&apos;t better<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb Bbm)</span> But she said that she was doing fine<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm)</span> I wanna see you face to face, that&apos;s what she wrote to me that day<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb Bbm)</span> And I knew that it was all a sign<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm)</span> So I wrote back with this song, promise it won&apos;t be too long<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb Bbm)</span> Wanna make up for all our lost time<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm Bb Bbm)</span> Cause in my eyes you were mine, you were mine<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm)</span> So I&apos;m lookin through these boxes, my life&apos;s gone off track<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb Bbm)</span> Cause its been three years, she hasn&apos;t written back<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm Bb Bbm)</span> But in my eyes, she&apos;s still mine<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm)</span> And I know it sounds so stupid, to be waiting this long<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bb Bbm)</span> But I&apos;m still in love and I know I&apos;m not wrong<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Cm Bb Bbm)</span> Cause in my eyes, she was mine<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='himalaya'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Himalaya
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B A#dim D# G#m E/F#)</span><br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B A#dim D# G#m D# G#m Asus2 E/F#)</span> Coba khayalkan sejenak sepuluh tahun nanti hidupmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B A#dim D# G#m D# G#m Asus2 A/D Asus2 A/D)</span> Coba bayangkan sejenak misalkan ada aku<br />
            Yang menemani hari demi hari yang tak terhitung<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#m C# F#m E B/D#)</span> Misalkan itu aku yang terakhir untukmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D C D/E F#m/D#)</span> Untuk itu kan kupersembahkan<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dmaj7 E/D C#m)</span> Himalaya bahkan akan aku taklukkan<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m Bm)</span> Tanpa cahaya di kegelapan<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C#m F#m)</span> Berbalutkan pelita hatimu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m/D# Dmaj7)</span> Di aku, di aku dan kamu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E/D C#m)</span> Pastikan kau melihat aku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m Bm)</span> Saat kugapai puncak tertinggi<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C#m D/G)</span> Bersama tujuh warna pelangi<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B A#dim D# G#m D# G#m Asus2 E/F#)</span> Misalkan semua terjadi meski belum terjadi<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B A#dim D# G#m D# G#m Asus2 A/D Asus2 A/D)</span> Sekarang kita renungkan sejenak cara agar semua<br />
            Bisa terjadi walau kutahu tak semudah itu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#m C# F#m E B/D#)</span> Tapi coba sekali lagi bayangkan aku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D C D/E F#m/D#)</span> Untuk itu kan kupersembahkan<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />

            <span className="text-green-700 font-medium">[outro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A D)</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='celenganrindu'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Celengan Rindu <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>- capo 2</span> 
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G D/F# Em D-G)</span> Aku kesal dengan jarak, yang sering memisahkan kita<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G/B Am D)</span> Hingga aku hanya bisa berbincang denganmu di Whatsapp<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G D/F# Em D-G)</span> Aku kesal dengan waktu yang tak pernah berhenti bergerak<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G/B Am D)</span> Barang sejenak agar aku bisa menikmati tawamu<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em C Em C)</span> Inginku berdiri di sebelahmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em C Em C)</span> Menggenggam erat jari-jarimu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em C)</span> Mendengarkan lagu Sheila on 7<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am .. D)</span> Seperti waktu itu, saat kau di sisiku<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G D/F# Em F-G)</span> Dan tunggulah aku di sana memecahkan celengan rinduku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G/B)</span> Berboncengan denganmu mengelilingi kota<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am D)</span> Menikmati surya perlahan menghilang<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G D/F# Em F-G)</span>  Hingga kejamnya waktu menarik paksa kau dari pelukku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G/B)</span> Lalu kita kembali menabung rasa rindu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am D .. G)</span> Saling mengirim doa, sampai nanti, Sayangku<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G D/F# Em D-G)</span> Jangan matikan HP-mu, kau tahu aku benci khawatir <br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G/B Am D)</span> Saat kau tak mengabari, aku tak suka bertanya-tanya<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            Hingga kita bertemu<br /><br />
          </p>
        </div>

        <div className='py-5' id='sayyouwontletgo'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Say You Won&apos;t Let Go
          </h1>
          <p>
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>FULL CHORD : (G D Em C)</span> <br />
            <span className="text-red-700 font-medium">verse1:</span><br />
            I met you in the dark, you lit me up<br />
            You made me feel as though I was enough<br />
            We danced the night away, we drank too much<br />
            I held your hair back when you were throwin up<br /><br />

            <span className="text-red-700 font-medium">pre-chorus1:</span><br />
            Then, you smiled over your shoulder<br />
            For a minute, I was stone-cold sober<br />
            I pulled you closer to my chest<br />
            And you asked me to stay over<br />
            I said, I already told ya<br />
            I think that you should get some rest<br /><br />

            <span className="text-red-700 font-medium">chorus1:</span><br />
            I knew I loved you then, but you&apos;d never know<br />
            Cause I played it cool when I was scared of letting go<br />
            I knew I needed you, but I never showed<br />
            But I wanna stay with you until we&apos;re grey and old<br />
            Just say you won&apos;t let go<br />
            Just say you won&apos;t let go<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            I&apos;ll wake you up with some breakfast in bed<br />
            I&apos;ll bring you coffee with a kiss on your head<br />
            And I&apos;ll take the kids to school, wave them goodbye<br />
            And I&apos;ll thank my lucky stars for that night<br /><br />

            <span className="text-red-700 font-medium">pre-chorus2:</span><br />
            When you looked over your shoulder<br />
            For a minute, I forget that I&apos;m older<br />
            I wanna dance with you right now, woah<br />
            And you look as beautiful as ever<br />
            And I swear that every day, you&apos;ll get better<br />
            You make me feel this way somehow<br /><br />

            <span className="text-red-700 font-medium">chorus2:</span><br />
            I&apos;m so in love with you and I hope you know<br />
            Darlin, your love is more than worth its weight in gold<br />
            We&apos;ve come so far, my dear, look how we&apos;ve grown<br />
            And I wanna stay with you until we&apos;re grey and old<br />
            Just say you won&apos;t let go<br />
            Just say you won&apos;t let go<br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            I wanna live with you even when we&apos;re ghosts<br />
            Cause you were always there for me when I needed you most<br /><br />

            <span className="text-red-700 font-medium">chorus3:</span><br />
            I&apos;m gonna love you till my lungs give out<br />
            I promise till death we part, like in our vows<br />
            So, I wrote this song for you, now everybody knows<br />
            That it&apos;s just you and me till we&apos;re grey and old<br />
            Just say you won&apos;t let go<br />
            Just say you won&apos;t let go<br />
            Just say you won&apos;t let go<br />
            Oh, just say you won&apos;t let go<br /><br />
          </p>
        </div>

        <div className='py-5' id='cukuptau'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Cukup Tau
          </h1>
          <p>
          <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>FULL CHORD : (Dmaj7 C#m7 Bm7 Amaj7 / E)</span> <br />
            <span className="text-red-700 font-medium">verse1:</span><br />
            Sungguh percuma saja<br />
            Ku mencintainya tapi tak dicintai<br />
            Gerak tubuhnya seolah berkata<br />
            Tak cinta padaku dan tak suka padaku<br />
            Aku pun mulai berpikir<br />
            Ku sakit hati dan mulai ku merasa<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Cukup tau, tanam dalam diri<br />
            Tak usah ku dekatimu lagi<br />
            Ku tak mau lagi, tak mau lagi<br />
            Bersamamu kasih<br />
            Cukup tau, tanam dalam diri<br />
            Tak usah ku ganggu kamu lagi<br />
            Ku tak mau lagi, tak mau lagi, sayang<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Gerak tubuhnya seolah berkata<br />
            Tak cinta padaku dan tak suka padaku<br />
            Aku pun mulai berpikir<br />
            Ku sakit hati dan mulai ku merasa<br /><br />

            <span className="text-green-700 font-medium">[chorus(2x)]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='ohya'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Oh Ya
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Am F G)</span> Sumpah mati padamu ku jatuh hati<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Am F G)</span> Sumpah mati padamu ku jatuh cinta<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C E Am G)</span> Namun sayang kutaksempat berkenalan denganmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Fm Em .. G)</span> Dari hati kehati lalu bicara cinta berdua<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Am F G)</span> Sampai kini daku masih terus harapkan<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Am F G)</span> Agar suatu saat kita jumpa lagi<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Am F G)</span> Semoga saja daku sempat berkenalan denganmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F Fm Em .. G .. G7)</span> Dari hati kehati lalu bicara cinta berdua ... berdua ...<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Em7-D#m7-Dm7)</span> Ingin ku mengejar seribu bayangmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G .. C)</span> Namun apa daya tangan tak sampai<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Em7-D#m7-Dm7)</span> Memang benar kata pepatah<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G .. F Fm)</span> Kalau jodoh tak lari kemana<br /><br />

            <span className="text-red-700 font-medium">post-chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span> Duhai Kekasihku<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-green-700 font-medium">[verse - chorus(2x) - post-chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='adurayu'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Adu Rayu
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C E Am G-C-)</span> Maukah lagi kau mengulang ragu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(-F Em Dm G)</span> Dan sendu yang lama<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C E Am G-C-)</span> Dia yang dulu pernah bersamamu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(-F Em Dm G)</span> Memahat kecewa<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Atau <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am F Em)</span> kau inginkan yang baru<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm G)</span> Sungguh menyayangimu<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C E Am)</span> Aku ingin dirimu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm .. G)</span> Yang menjadi milikku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em E Am D)</span> Bersamaku mulai hari ini<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A# G C)</span> Hilang ruang untuk cinta yang lain<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G Am F-Fm G)</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C E Am G-C-)</span> Separuh jalan pernah dilewati<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(-F Em Dm G)</span> Meski ada kecewa<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C E Am G-C-)</span> Aku yang dulu tak begitu lagi<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(-F Em Dm G)</span> Takkan kuulangi<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Jangan <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am F Em)</span> dulu engkau berpaling<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm G)</span> Beriku kesempatan<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A# A)</span> Lupakan dia pergi denganku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G# G)</span> Lupakanlah ragu denganku<br /><br />

            <span className="text-green-700 font-medium">[chorus(2x)]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm7 G)</span> Layak untuk cantikmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span> Itu aku<br /><br />
          </p>
        </div>

        <div className='py-5' id='cahaya'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Cahaya
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m Em)</span> Ratusan hari ku mengenalmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em A-D)</span> Ratusan alasan kamu berharga<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m Em)</span> Ratusan hari ku bersamamu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em A-D)</span> Ratusan alasan kamu cahaya<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m Em .. D)</span> Semampuku kau akrab dengan senyum dan tawa<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m Em .. A)</span> Semampuku tak lagi perlu kau takut cinta<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m Em Em7/A)</span> Bila aku pegang kendali penuh pada cahaya<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m A)</span> Aku pastikan jalanmu terang<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m Em Em7/A)</span>Bila aku pegang kendali penuh pada cahaya<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m A)</span>Aku pastikan jalanmu terang<br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em A Bm7 F#m)</span> Tak mudah lagi sendu mengganggu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em F#m Bm7 A)</span> Kau tahu cara buatku tertawa<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em A Bm7 F#m)</span> Tak mudah kusut dalam kemelut<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em F#m A D)</span>Kau tahu cara mengurai semua<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m Em)</span> Duhai cahaya terima aku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em A-D)</span> Aku ingin kau lihat yang kau punya<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D F#m Em)</span> Aku ingin kau kembali bisa<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em A-D)</span> Percaya pada diri dan mampumu<br /><br />
          </p>
        </div>

        <div className='py-5' id='monokrom'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Monokrom <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>- capo 2</span> 
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C .. F)</span> Lembaran foto hitam putih<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm Am F G C)</span> Aku coba ingat lagi warna bajumu kala itu<br />
            Kali pertama di <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> hidupku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm G C)</span> Manusia lain memelukku<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C .. F)</span> Lembaran foto hitam putih<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm Am F G C)</span> Aku coba ingat lagi wangi rumah di sore itu<br />
            Kue cokelat balon <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> warna-warni<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm G C)</span> Pesta hari ulang tahunku<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am Em F C-G)</span> Dimanapun kalian berada<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am Em F G)</span> Kukirimkan terima kasih<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am Em F C Dm)</span> Untuk warna dalam hidupku dan banyak kenangan indah<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G C)</span> Kau melukis aku<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse3:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C .. F)</span> Lembaran foto hitam putih<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm Am F G C)</span> Kembali teringat malam kuhitung-hitung bintang<br />
            Saat mataku <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> sulit tidur<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm G C)</span> Suaramu buatku lelap<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C-G Am Em F)</span> Kita tak pernah tahu berapa lama <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C-G)</span> kita<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am Em F)</span> Diberi waktu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C-G Am Em F)</span> Jika aku pergi lebih dulu jangan <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Dm)</span> lupakan aku<br />
            Ini lagu untukmu <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em)</span> <br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm G C)</span> Ungkapan terima kasihku<br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span> Lembar monokrom hitam putih<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm Am F G C)</span> Aku coba ingat warna demi warna di hidupku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> Tak akan ku mengenal cinta<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(-Em-Dm)</span> Bila bukan karena <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G C)</span> hati baikmu<br /><br />
          </p>
        </div>

        <div className='py-5' id='akhirtakbahagia'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Akhir Tak Bahagia <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>- capo 1</span>
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span><br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> Malam ini<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G Em Am)</span> Bintang mengingatkanku padamu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> Indah terang<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G Em Am)</span> Seperti matamu yang slalu kupandang<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F G)</span> Lembut tutur katamu, merdu tawamu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am C-Em)</span> Parasmu yang menawan<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F G A#)</span> Buat diriku tak bisa lupa<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F G Am C-Em)</span> Dari banyaknya insan di dunia<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F G Am C-Em)</span> Mengapa dirimu yang aku sangka<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F G-G#m)</span> Bisa temani hari-hariku <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am-G-D)</span> yang tak selalu indah<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm Fm)</span> Walau kita tak bisa bersama<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span><br /><br />
            <span className="text-green-700 font-medium">[verse2 - chorus]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Dm C)</span> Dipertemukan semesta<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F G C)</span> Walau berakhir tak bahagia<br /><br />
          </p>
        </div>

        <div className='py-5' id='kaurumahku'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Kau Rumahku <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>- capo 1</span>
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span><br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span> Bagaikan sungai yang tak punya malu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Em-F)</span> Mengalir meskipun terancam surut<br />
            Lalu (hmm), <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span> kakimu melangkah ke rumahku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span> Setengah melirik, mencoba rayu<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F-Em-Dm)</span> Apa yang kau inginkan<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F-Em-G)</span> Dari senyumku, ya tuan?<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Em-F)</span> Gemar sekali kau lukiskan bintang untukku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Em-F)</span> Sungguh lihai tanganmu menata kembali hati<br />
            Yang hampir mati <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am G Em-F)</span> Kan ku letakkan hangat di tengah dekap kita<br /><br />

            <span className="text-red-700 font-medium">post-chorus:</span><br />
            Jangan biar..<span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'> (Am-G-F) </span>kan ku pulang<br />
            Ke rumah <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am-G-F)</span> yang bukan engkau<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span> Bicarakan tentang seisi dunia<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Em-F)</span> Perlahan mendekat, bisikkan cinta<br />
            Membuatku terlena<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F)</span> Ke dalam pesona sukma yang begitu indah<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus - post-chorus]</span><br /><br />
            
            <span className="text-red-700 font-medium">bridge:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> Jika.. <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G-Am)</span>mampu ku menjelajahi langit <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G-Em)</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(-F)</span> Kan ku.. <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G Am)</span> petik pelangi tuk warnai harimu <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em)</span><br />
            Jangan <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span> khawatir, masih <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em-Dm)</span> ada aku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em-F)</span> Jangan khawatir, masih <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em Dm)</span> ada aku<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C F .. F G Am C .. F Am G)</span><br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am G F)</span> Kan aku persilahkan kau menetap di sini<br /><br />
          </p>
        </div>

        <div className='py-5' id='always'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Always
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span><br /><br />
            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D .. A/C#)</span> Baby, baby<br />
            There will always be <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bm7)</span> space for you and me<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span> Right where you left <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G/A-A)</span> it<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D .. A/C#)</span> And just maybe<br />
            Enough time will pass <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bm7)</span> <br />
            We&apos;ll look back and laugh<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G A)</span> Just don&apos;t forget it<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m G)</span> And maybe I&apos;m wrong<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m Gm)</span> For writing this song<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#m G A)</span> Losing my head over you<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D A/C#)</span> And I&apos;ll be here
            Cause we both <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am7)</span> know how it goes<br />
            I <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B7 G)</span> don&apos;t want things to change<br />
            I <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm F#m A)</span> pray they stay the same, always<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D A/C#)</span> And I don&apos;t care<br />
            If you&apos;re with <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am7)</span> somebody else<br />
            I&apos;ll <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B7 G)</span> give you time and space<br />
            Just <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm F#m)</span> know I&apos;m not a phase<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G F#m)</span> I&apos;m always-ways-ways<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm F#m)</span>Always-ways-ways<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G A)</span> I&apos;m always-ways-ways<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D .. A/C#)</span> Pretty lady, used to walk with me<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bm7 G A)</span> Down Bloor street, oh, what a time<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D A/C# (jam))</span> And I still remember the fussin, the fightin, the fuckin, the lyin<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G A)</span> It&apos;s all fine, you&apos;ll always be mine<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G D Bm)</span> Always, can count on it sure as the stars in the sky<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G D Bm)</span> Always, you can count on it as sure as the sun will rise<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G D Bm)</span> Always, my love for you ain&apos;t goin nowhere<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G D)</span> Always, I will be here<br /><br />
          </p>
        </div>

        <div className='py-5' id='photograph'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Photograph <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>- capo 1</span> 
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Am G F)</span> <br /><br />
            <span className="text-red-700 font-medium">verse1:</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Am G F)</span><br />
            Loving can hurt, loving can hurt sometimes<br />
            But it&apos;s the only thing that I know<br />
            When it gets hard, you know it can get hard sometimes<br />
            It is the only thing that makes us feel alive<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am F C G)</span><br />
            We keep this love in a photograph<br />
            We made these memories for ourselves<br />
            Where our eyes are never closing<br />
            Hearts are never broken<br />
            And time&apos;s forever frozen, still<br /><br />

            <span className="text-red-700 font-medium">chorus1:</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G Am F C)</span><br />
            So you can keep me<br />
            Inside the pocket of your ripped jeans<br />
            Holding me closer till our eyes meet<br />
            You won&apos;t ever be alone, wait for me to come home<br /><br />

            <span className="text-red-700 font-medium">verse2:</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C Am G F)</span><br />
            Loving can heal, loving can mend your soul<br />
            And it&apos;s the only thing that I know, know<br />
            I swear it will get easier, remember that with every piece of ya<br />
            And it&apos;s the only thing we take with us when we die<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus]</span><br /><br />

            <span className="text-red-700 font-medium">chorus2:</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G Am F)</span><br />
            So you can keep me<br />
            Inside the pocket of your ripped jeans<br />
            Holding me closer till our eyes meet<br />
            You won&apos;t ever be alone<br />
            And if you hurt me, well, that&apos;s okay, baby<br />
            Only words bleed inside these pages<br />
            You just hold me<br />
            And I won&apos;t ever let you go<br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Wait for me to come home <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am)</span><br />
            Wait for me to come home <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F)</span><br />
            Wait for me to come home <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C)</span><br />
            Wait for me to come home <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G)</span><br /><br />

            <span className="text-red-700 font-medium">chorus3:</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G Am F)</span><br />
            Oh, you can fit me<br />
            Inside the necklace you got when you were 16<br />
            Next to your heartbeat where I should be<br />
            Keep it deep within your soul<br />
            And if you hurt me, well, that&apos;s okay, baby<br />
            Only words bleed inside these pages<br />
            You just hold me<br />
            And I won&apos;t ever let you go<br /><br />

            <span className="text-red-700 font-medium">outro:</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C G Am F-G)</span><br />
            When I&apos;m away, I will remember how you kissed me<br />
            Under the lamppost back on 6th Street<br />
            Hearing you whisper through the phone<br />
            Wait for me to come home<br /><br />
          </p>
        </div>

        <div className='py-5' id='kangen'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Kangen
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G# A# D#)</span><br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G# A# D#)</span> Kutrima suratmu, tlah kubaca, dan aku mengerti<br />
            Betapa <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cm G# C# Cm)</span> merindunya dirimu akan hadirnya diriku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm-G#-Cm C#)</span> Di dalam hari-harimu, bersama lagi<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G# A# D#)</span> Kau tanyakan padaku, kapan aku akan kembali lagi<br />
            Katamu kau <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cm G# C# Cm)</span> tak kuasa melawan, gejolak di dalam dada<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm-G#-Cm)</span> Yang membara menahan rasa<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm-G#-Fm A#)</span> Pertemuan kita nanti saat kau ada di sisiku<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Gm G# A# Cm)</span> Semua kata rindumu semakin membuatku tak berdaya<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm-G#-Cm A#)</span> Menahan rasa ingin jumpa<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Gm G# A# Cm)</span> Percayalah padaku akupun rindu kamu, ku akan pulang<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm Fm .. A#)</span> Melepas semua kerinduan yang terpendam<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G# A# D#)</span><br /><br />

            <span className="text-red-700 font-medium">verse3:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Cm G# A# D#)</span> Kau tuliskan padaku, kata cinta, yang manis dalam suratmu<br />
            Kau katakan <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cm G# C# Cm)</span> padaku, saat ini, kuingin hangat pelukmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm-G#-Cm)</span> Dan belai lembut kasihmu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm-G#-Fm A#)</span> Takkan kulupa slamanya saat bersama dirimu<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm Cm-A#-Fm)</span> Jangan katakan cinta<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(.. Cm-A#-Fm)</span> Menambah beban rasa<br />
            Sudah<span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gm G#)</span>  simpan saja sedihmu itu<br />
            Ku <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A#)</span> akan datang<br /><br />

            <span className="text-green-700 font-medium">[instrument (chord chorus)]</span><br /><br />
            <span className="text-green-700 font-medium">[chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='iloveyoubutimlettinggo'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            I Love You But I&apos;m Letting Go
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span><br /><br />
            <span className="text-red-700 font-medium">verse1: <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C# F#)</span></span><br />
            Sunday night after a rainy day<br />
            I delete all your pictures<br />
            I walked away from you<br />
            Nights are the hardest<br />
            But I&apos;ll be okay<br />
            If we are meant to be<br />
            Yeah, we&apos;ll find our way<br />
            But now, let it be<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D#m)</span> Cause you know what they say<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#)</span>  If you love somebody<br />
            Gotta set them free <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G# G#7)</span> <br /><br />

            <span className="text-red-700 font-medium">chorus1:</span><br />
            I love you but I&apos;m letting <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C#)</span> go<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B)</span> I love you but I&apos;m letting <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A#m)</span> go<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> I love you and I&apos;m letting <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#)</span> go<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> I love you but I&apos;m letting <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C# F#)</span> go<br /><br />

            <span className="text-red-700 font-medium">verse2:</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C# F#)</span><br />
            Little did I know love is easy<br />
            But why was it so hard?<br />
            It was like never enough<br />
            I gave you all still you want more<br />
            Can&apos;t you see? can&apos;t you see?<br />
            That you want someone that I&apos;m not<br />
            Yes, I love but I can&apos;t<br />
            So, I am letting you go now<br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            And baby <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D#m)</span> one day<br />
            When you finally found what <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fm)</span> you want<br />
            And you&apos;re ready to open your heart to <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#)</span> anyone<br />
            Don&apos;t push people away again<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> Easier, I know but its also very lonely<br /><br />

            <span className="text-green-700 font-medium">[langsung ke chorus2 / jeda bentar (gaada instrument kayak ori)]</span><br /><br />

            <span className="text-red-700 font-medium">chorus2:</span><br />
            I love you but I&apos;m letting <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C#)</span> go<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B)</span> I love you but I&apos;m letting <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A#m)</span> go<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> I love you and I&apos;m letting <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#)</span> go<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> It is the only way, you <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#)</span> know? oh <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C#)</span> And from now <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(B)</span> on<br />
            I will <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(A#m)</span> hold my own <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> hand<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#)</span> Until one <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> day you&apos;ll hold<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(F#)</span> My lonely <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#)</span> hand <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(C# F#)</span><br />
            Ooh-ooh, ooh-ooh<br /><br />
          </p>
        </div>

        <div className='py-5' id='siapkahkautukjatuhcintalagi'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Siapkah Kau Tuk Jatuh Cinta Lagi
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span> <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(ytta)</span><br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gmaj7 Em7 Am7 D9)</span> Ketika ku mendengar bahwa, kini kau tak lagi dengannya<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gmaj7 Em7 Am7 D9)</span> Dalam benakku timbul tanya<br /><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gmaj7 Em7 Am7 D9)</span> Masihkah ada dia di hatimu bertahta?<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bm7 Em7 Am D9 Cmaj7)</span> Atau ini saat bagiku untuk singgah di hatimu?<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bm7 Em7 A7-Am7 D9)</span> Namun siapkah kau tuk jatuh cinta lagi?<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7 Cm7)</span> Meski bibir ini tak berkata<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bm7 Em7)</span> Bukan berarti ku tak merasa<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Am D9 Gmaj7 Dm7-F/G)</span> Ada yang berbeda di antara kita<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Cmaj7 F9 Bm7)</span> Dan tak mungkin ku melewatkanmu hanya karena<br />
            Diriku tak <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(E7 Am7)</span> mampu untuk bicara<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bm7 Cm7 D9)</span> Bahwa aku inginkan kau ada di hidupku<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gmaj7 Em7 Am7 D9)</span> Kini ku tak lagi dengannya, sudah tak ada lagi rasa<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gmaj7 Em7 Am7 D9)</span> Antara aku dengan dia<br /><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Gmaj7 Em7 Am7 D9)</span> Siapkah kau bertahta di hatiku, adinda?<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bm7 Em7 Am D9 Cmaj7)</span> Karena ini saat yang tepat untuk singgah di hatiku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bm7 Em7 A7-Am7 D9)</span> Namun siapkah kau tuk jatuh cinta lagi?<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7 Am7)</span> Pikirlah saja dulu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#maj7 Gm7)</span> Hingga tiada ragu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Bbmaj7 Am7)</span> Agar mulus jalanku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(G#maj7 Gm7)</span> Melangkah menuju ke hatimu<br /><br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7 Em7)</span> Pikirlah saja dulu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D#maj7 Dm7)</span> Hingga tiada ragu<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Fmaj7 Em7)</span> Agar mulus jalanku<br />
            <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D#maj7 Dm7 Cmaj7 Bm7)</span> Melangkah menuju ke hatimu<br /><br />
            Siapkah kau <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(Em7 A7-Am7 D9)</span> tuk jatuh cinta lagi?<br /><br />

            <span className="text-green-700 font-medium">[chorus(2x)]</span><br /><br />
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;