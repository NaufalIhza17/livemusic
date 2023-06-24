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

            <span className="text-red-700 font-medium">chorus: <span id='chords' style={{ display: isHidden ? 'none' : 'inline' }} className='font-bold text-neutral-700'>(D# Gm G# Fm-A#)</span></span><br />
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
            Bitterlove
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            There is bitter in everyday<br />
            But then I feel it<br />
            That you would be the only one<br />
            Sometimes it doesn&apos;t have to be so sure<br />
            The sweetest love can be so hard to find<br /><br />
            We&apos;ll be better in every way<br />
            But then I would go to be in other space<br />
            Sometimes, the bitter of love can be so good<br />
            It&apos;s like a coffee with a rainbow&apos;s mood<br /><br />

            <span className="text-red-700 font-medium">reff:</span><br />
            Sometimes you feel off but sometimes you feeling right<br />
            Is it to be, or it is not to be<br />
            To fall in love again, to be the one for me<br />
            Sometimes you fall, but there&apos;ll be time we&apos;d be together<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            We&apos;ll be mad in every way<br />
            Then I remember, the store we went last september<br />
            Sometimes, recalling things would be so good<br />
            It&apos;s like perfect cake, that my grandma&apos;s made<br /><br />

            <span className="text-green-700 font-medium">[reff]</span><br /><br />

            <span className="text-red-700 font-medium">verse3:</span><br />
            We&apos;ll be better, in every way<br />
            But then I would, go to be in other space<br />
            Sometimes, the bitter of love can be so good<br />
            It&apos;s like a coffee with a rainbow<br />
            It&apos;s like a coffee with a rainbow<br />
            It&apos;s like a coffee with a rainbow&apos;s mood<br /><br />

            With a rainbow&apos;s mood<br /><br />
          </p>
        </div>

        <div className='py-5' id='locationunknown'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Location Unknown
          </h1>
          <p>
            <span className="text-red-700 font-medium">intro:</span><br />
            Travelling places, I ain&apos;t seen you in ages<br />
            But I hope you come back to me<br />
            My mind&apos;s running wild with you far away<br />
            I still think of you a hundred times a day<br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            I still think of you too, if only you knew<br />
            When I&apos;m feeling a bit down and I wanna pull through<br />
            I look over your photograph<br />
            And I think how much I miss you, I miss you<br />
            I wish I knew where I was<br />
            Cause I don&apos;t have a clue<br />
            I just need to work out some way of getting me to you<br />
            Cause I will never find a love like ours out here<br />
            In a million years, a million years<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            My location unknown<br />
            Tryna find a way back home to you again<br />
            I gotta get back to you<br />
            Gotta, gotta, get back to you<br />
            My location unknown<br />
            Tryna find a way back home to you again<br />
            I gotta get back to you<br />
            Gotta, gotta, get back to you<br /><br />

            <span className="text-red-700 font-medium">post-chorus:</span><br />
            I just need to know that you&apos;re safe<br />
            Given that I&apos;m miles away<br />
            On the first flight, back to your side<br />
            I don&apos;t care how long it takes<br />
            I know you&apos;ll be worth the wait<br />
            On the first flight, back to your side<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            I still think of you too, if only you knew<br />
            I just need to work out some way of getting me to you<br />
            Cause I will never find a love like ours out here<br />
            In a million years, a million years<br /><br />

            <span className="text-green-700 font-medium">[chorus - post-chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            I don&apos;t want to be wasting time, without you<br />
            Don&apos;t want to throw away my life, I need you<br />
            Something tells me we&apos;ll be alright (yeah)<br />
            Something tells me we&apos;ll be alright, alright<br />
            I don&apos;t want to be wasting time, without you<br />
            Don&apos;t want to throw away my life, I need you<br />
            Something tells me we&apos;ll be alright<br />
            Something tells me we&apos;ll be alright, alright<br /><br />

            <span className="text-green-700 font-medium">[chorus - post-chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='bicara'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Bicara
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            Sudah berapa lama<br />
            Aku menunggu jawaban darimu<br />
            Sampaikah kepadamu<br />
            Kata-kata yang ku rangkaikan<br />
            Agar kau tahu perasaanku<br />
            Yang telah lama terpendam<br />
            Inilah yang ku rasakan<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Jangan hanya bicara<br />
            Ku tak perlu kata-kata<br />
            Tuk mengerti yang kau rasakan<br />
            Karena ku hanya butuh<br />
            Separuh hatimu<br />
            Di dalam hidupku<br />
            Tuk buatku bahagia<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Sebut yang kau inginkan<br />
            Apapun itu kan kuberikan untukmu<br />
            Andai kau bersamaku<br />
            Di tempat dan waktu yang sama<br />
            Kau akan tahu perasaanku<br />
            Yang telah lama terpendam<br />
            Inilah yang kurasakan<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Semenjak kau ada disini ku mengerti<br />
            Betapa ku membutuhkanmu<br />
            Bila kataku tak cukup tuk buatmu mengerti<br />
            Izinkan ku bertemu lagi denganmu<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='itsonlyme'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            It&apos;s Only Me
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            Selama ini ribuan hari<br />
            Ku dekat denganmu<br />
            Lewati berbagai hal, ku ada di sisi mu<br />
            Tanpa kau tahu perasaan ku padamu<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Sendiri ku berharap<br />
            Memberi kasih walau tak kembali<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            I maybe not yours and you&apos;re not mine<br />
            But I&apos;ll be there for you when you need me<br />
            It is only me<br />
            Believe me girl, it&apos;s only me<br />
            Yeah, it&apos;s only me<br />
            I will always be the one who pull you up<br />
            When everybody push you down<br />
            And it&apos;s only me<br />
            Believe me girl, it&apos;s only me<br />
            Yeah, it&apos;s only me<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Sekali pun, kau tak pernah perdulikan rasaku<br />
            Ku takkan acuhkan dirimu<br />
            Tapi kuharap, Suatu saat nanti kau tahu<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Aku memang bukan<br />
            Rasa yang kau mau<br />
            Namun ku kan slalu ada<br />
            Untukmu<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='hampirsempurna'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Hampir Sempurna
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            Sunyi malam tanpa suara<br />
            Hanya hati yang bicara<br />
            Kau disampingku diam membisu<br />
            Meski riuh dera jiwamu<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Mungkinkah ada satu kesempatan<br />
            Merangkum rasa yang kini ada<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Terbang bersamaku bila kau mau<br />
            Genggamlah hatiku<br />
            Meski tak sempurna separuh sayapku<br />
            Langit berbintang memelukku erat<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Andai ku bisa inginku mengerti<br />
            Betapa kini ku merindumu<br />
            Hanya namamu yang kini terus mengisi<br />
            Gema ruang-ruang jiwaku<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='shewasmine'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            She Was Mine
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            So I hopped on a train<br />
            Three in the afternoon<br />
            I don&apos;t know when I&apos;m coming back<br />
            But I hope that its soon<br />
            See I never thought, never thought<br />
            That I&apos;d have to leave your side<br />
            Your side<br />
            Its only physically<br />
            But know that you will be on my mind<br />
            Twenty four hours at a time<br />
            Cause in my eyes you were mine<br />
            You were mine<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            No matter where you go<br />
            I won&apos;t be very far<br />
            Cause in my head I&apos;ll be right there where you are<br />
            Cause love has no distance baby<br />
            Love, love has no distance baby<br />
            No, not when it comes to you and me<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            See she wrote me a letter<br />
            Said the weather wasn&apos;t better<br />
            But she said that she was doing fine<br />
            I wanna see you face to face<br />
            That&apos;s what she wrote to me that day<br />
            And I knew that it was all a sign<br />
            So I wrote back with this song<br />
            Promise it won&apos;t be too long<br />
            Make up for all our lost time<br />
            Cause in my eyes you were mine<br />
            You were mine<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            So I&apos;m lookin through these boxes<br />
            My life&apos;s gone off track<br />
            Cause its been three years<br />
            She hasn&apos;t written back<br />
            But in my eyes<br />
            She&apos;s still mine<br />
            And I know it sounds so stupid<br />
            To be waiting this long<br />
            But I&apos;m still in love and I know I&apos;m not wrong<br />
            Cause in my eyes<br />
            She was mine<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='himalaya'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Himalaya
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            Coba khayalkan sejenak sepuluh tahun nanti hidupmu<br />
            Coba bayangkan sejenak misalkan ada aku<br />
            Yang menemani hari demi hari yang tak terhitung<br />
            Misalkan itu aku yang terakhir untukmu<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Untuk itu kan kupersembahkan<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Himalaya bahkan akan aku taklukkan<br />
            Tanpa cahaya di kegelapan<br />
            Berbalutkan pelita hatimu<br />
            Di aku, di aku dan kamu<br />
            Pastikan kau melihat aku<br />
            Saat kugapai puncak tertinggi<br />
            Bersama tujuh warna pelangi<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Misalkan semua terjadi meski belum terjadi<br />
            Sekarang kita renungkan sejenak cara agar semua<br />
            Bisa terjadi walau kutahu tak semudah itu<br />
            Tapi coba sekali lagi bayangkan aku<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />
          </p>
        </div>

        <div className='py-5' id='celenganrindu'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Celengan Rindu
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            Aku kesal dengan jarak yang sering memisahkan kita<br />
            Hingga aku hanya bisa berbincang denganmu di Whatsapp<br />
            Aku kesal dengan waktu yang tak pernah berhenti bergerak<br />
            Barang sejenak agar aku bisa menikmati tawamu<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Inginku berdiri di sebelahmu menggenggam erat jari-jarimu<br />
            Mendengarkan lagu Sheila on 7 seperti waktu itu<br />
            Saat kau di sisiku<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Dan tunggulah aku di sana memecahkan celengan rinduku<br />
            Berboncengan denganmu mengelilingi kota<br />
            Menikmati surya perlahan menghilang<br />
            Hingga kejamnya waktu menarik paksa kau dari pelukku<br />
            Lalu kita kembali menabung rasa rindu<br />
            Saling mengirim doa, sampai nanti, Sayangku<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Jangan matikan HP-mu<br />
            Kau tahu aku benci khawatir saat kau tak mengabari<br />
            Aku tak suka bertanya-tanya<br /><br />

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
            Sumpah mati padamu ku jatuh hati<br />
            Sumpah mati padamu ku jatuh cinta<br />
            Namun sayang kutaksempat berkenalan denganmu<br />
            Dari hati kehati lalu bicara cinta berdua<br />
            Sampai kini daku masih terus harapkan<br />
            Agar suatu saat kita jumpa lagi<br />
            Semoga saja daku sempat berkenalan denganmu<br />
            Dari hati kehati lalu bicara cinta berdua ... berdua ...<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Ingin ku mengejar seribu bayangmu<br />
            Namun apa daya tangan tak sampai<br />
            Memang benar kata pepatah<br />
            Kalau jodoh tak lari kemana<br /><br />

            <span className="text-red-700 font-medium">post-chorus:</span><br />
            Duhai Kekasihku<br /><br />

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
            Maukah lagi kau mengulang ragu<br />
            Dan sendu yang lama<br />
            Dia yang dulu pernah bersamamu<br />
            Memahat kecewa<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Atau kau inginkan yang baru<br />
            Sungguh menyayangimu<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Aku ingin dirimu<br />
            Yang menjadi milikku<br />
            Bersamaku mulai hari ini<br />
            Hilang ruang untuk cinta yang lain<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Separuh jalan pernah dilewati<br />
            Meski ada kecewa<br />
            Aku yang dulu tak begitu lagi<br />
            Takkan kuulangi<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Jangan dulu engkau berpaling<br />
            Beriku kesempatan<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Lupakan dia pergi denganku<br />
            Lupakanlah ragu denganku<br />
            Aku<br />
            Aku<br />
            Aku<br /><br />

            <span className="text-green-700 font-medium">[chorus(2x)]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            Layak untuk cantikmu<br />
            Itu aku<br /><br />
          </p>
        </div>

        <div className='py-5' id='cahaya'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Cahaya
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse:</span><br />
            Ratusan hari ku mengenalmu<br />
            Ratusan alasan kamu berharga<br />
            Ratusan hari ku bersamamu<br />
            Ratusan alasan kamu cahaya<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Semampuku kau akrab dengan senyum dan tawa<br />
            Semampuku tak lagi perlu kau takut cinta<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Bila aku pegang kendali penuh pada cahaya<br />
            Aku pastikan jalanmu terang<br />
            Bila aku pegang kendali penuh pada cahaya<br />
            Aku pastikan jalanmu terang<br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Tak mudah lagi sendu mengganggu<br />
            Kau tahu cara buatku tertawa<br />
            Tak mudah kusut dalam kemelut<br />
            Kau tahu cara mengurai semua<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            Duhai cahaya terima aku<br />
            Aku ingin kau lihat yang kau punya<br />
            Aku ingin kau kembali bisa<br />
            Percaya pada diri dan mampumu<br /><br />
          </p>
        </div>

        <div className='py-5' id='monokrom'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Monokrom
          </h1>
          <p>
            <span className="text-red-700 font-medium">verse1:</span><br />
            Lembaran foto hitam putih<br />
            Aku coba ingat lagi warna bajumu kala itu<br />
            Kali pertama di hidupku<br />
            Manusia lain memelukku<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Lembaran foto hitam putih<br />
            Aku coba ingat lagi wangi rumah di sore itu<br />
            Kue cokelat balon warna-warni<br />
            Pesta hari ulang tahunku<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Dimanapun kalian berada<br />
            Kukirimkan terima kasih<br />
            Untuk warna dalam hidupku dan banyak kenangan indah<br />
            Kau melukis aku<br /><br />

            <span className="text-green-700 font-medium">[instrument]</span><br /><br />

            <span className="text-red-700 font-medium">verse3:</span><br />
            Lembaran foto hitam putih<br />
            Kembali teringat malam kuhitung-hitung bintang<br />
            Saat mataku sulit tidur<br />
            Suaramu buatku lelap<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Kita tak pernah tahu berapa lama kita<br />
            Diberi waktu<br />
            Jika aku pergi lebih dulu jangan lupakan aku<br />
            Ini lagu untukmu<br />
            Ungkapan terima kasihku<br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            Lembar monokrom hitam putih<br />
            Aku coba ingat warna demi warna di hidupku<br />
            Tak akan ku mengenal cinta<br />
            Bila bukan karena hati baikmu<br /><br />
          </p>
        </div>

        <div className='py-5' id='akhirtakbahagia'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Akhir Tak Bahagia
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span><br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            Malam ini<br />
            Bintang mengingatkanku padamu<br />
            Indah terang<br />
            Seperti matamu yang slalu kupandang<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Lembut tutur katamu, merdu tawamu<br />
            Parasmu yang menawan<br />
            Buat diriku tak bisa lupa<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Dari banyaknya insan di dunia<br />
            Mengapa dirimu yang aku sangka<br />
            Bisa temani hari-hariku yang tak selalu indah<br />
            Walau kita tak bisa bersama<br /><br />

            <span className="text-green-700 font-medium">[instrument (chord intro)]</span><br /><br />
            <span className="text-green-700 font-medium">[verse2 - chorus]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            Dipertemukan semesta<br />
            Walau berakhir tak bahagia<br /><br />
          </p>
        </div>

        <div className='py-5' id='kaurumahku'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Kau Rumahku
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span><br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            Bagaikan sungai yang tak punya malu<br />
            Mengalir meskipun terancam surut<br />
            Lalu (hmm), kakimu melangkah ke rumahku<br />
            Setengah melirik, mencoba rayu<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Apa yang kau inginkan<br />
            Dari senyumku, ya tuan?<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Gemar sekali kau lukiskan bintang untukku<br />
            Sungguh lihai tanganmu menata kembali hati<br />
            Yang hampir mati<br />
            Kan ku letakkan hangat di tengah dekap kita<br /><br />

            <span className="text-red-700 font-medium">post-chorus:</span><br />
            Jangan biarkan ku pulang<br />
            Ke rumah yang bukan engkau<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Bicarakan tentang seisi dunia<br />
            Perlahan mendekat, bisikkan cinta<br />
            Membuatku terlena<br />
            Ke dalam pesona sukma yang begitu indah<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus - post-chorus]</span><br /><br />
            
            <span className="text-red-700 font-medium">bridge:</span><br />
            Jika mampu ku menjelajahi langit<br />
            Kan ku petik pelangi tuk warnai harimu<br />
            Jangan khawatir, masih ada aku<br />
            Jangan khawatir, masih ada aku<br /><br />

            <span className="text-green-700 font-medium">[instrument (chord chorus)]</span><br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            Kan aku persilahkan kau menetap di sini<br /><br />
          </p>
        </div>

        <div className='py-5' id='always'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Always
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span><br /><br />
            <span className="text-red-700 font-medium">verse1:</span><br />
            Baby, baby<br />
            There will always be space for you and me<br />
            Right where you left it<br />
            And just maybe<br />
            Enough time will pass<br />
            We&apos;ll look back and laugh<br />
            Just don&apos;t forget it<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            And maybe I&apos;m wrong<br />
            For writing this song<br />
            Losing my head over you<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            And I&apos;ll be here
            Cause we both know how it goes<br />
            I don&apos;t want things to change<br />
            I pray they stay the same, always<br />
            And I don&apos;t care<br />
            If you&apos;re with somebody else<br />
            I&apos;ll give you time and space<br />
            Just know I&apos;m not a phase<br />
            I&apos;m always-ways-ways<br />
            Always-ways-ways<br />
            I&apos;m always-ways-ways<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Pretty lady, used to walk with me<br />
            Down Bloor street, oh, what a time<br />
            And I still remember the fussin, the fightin, the fuckin, the lyin<br />
            It&apos;s all fine, you&apos;ll always be mine<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus - chorus]</span><br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
            Always, can count on it sure as the stars in the sky<br />
            Always, you can count on it as sure as the sun will rise<br />
            Always, my love for you ain&apos;t goin nowhere<br />
            Always, I will be here<br /><br />
          </p>
        </div>

        <div className='py-5' id='photograph'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Photograph
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span><br /><br />
            <span className="text-red-700 font-medium">verse1:</span><br />
            Loving can hurt, loving can hurt sometimes<br />
            But it&apos;s the only thing that I know<br />
            When it gets hard, you know it can get hard sometimes<br />
            It is the only thing that makes us feel alive<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            We keep this love in a photograph<br />
            We made these memories for ourselves<br />
            Where our eyes are never closing<br />
            Hearts are never broken<br />
            And time&apos;s forever frozen, still<br /><br />

            <span className="text-red-700 font-medium">chorus1:</span><br />
            So you can keep me<br />
            Inside the pocket of your ripped jeans<br />
            Holding me closer till our eyes meet<br />
            You won&apos;t ever be alone, wait for me to come home<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Loving can heal, loving can mend your soul<br />
            And it&apos;s the only thing that I know, know<br />
            I swear it will get easier, remember that with every piece of ya<br />
            And it&apos;s the only thing we take with us when we die<br /><br />

            <span className="text-green-700 font-medium">[pre-chorus]</span><br /><br />

            <span className="text-red-700 font-medium">chorus2:</span><br />
            So you can keep me<br />
            Inside the pocket of your ripped jeans<br />
            Holding me closer till our eyes meet<br />
            You won&apos;t ever be alone<br />
            And if you hurt me, well, that&apos;s okay, baby<br />
            Only words bleed inside these pages<br />
            You just hold me<br />
            And I won&apos;t ever let you go<br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Wait for me to come home<br />
            Wait for me to come home<br />
            Wait for me to come home<br /><br />

            <span className="text-red-700 font-medium">chorus3:</span><br />
            Oh, you can fit me<br />
            Inside the necklace you got when you were 16<br />
            Next to your heartbeat where I should be<br />
            Keep it deep within your soul<br />
            And if you hurt me, well, that&apos;s okay, baby<br />
            Only words bleed inside these pages<br />
            You just hold me<br />
            And I won&apos;t ever let you go<br /><br />

            <span className="text-red-700 font-medium">outro:</span><br />
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
            <span className="text-green-700 font-medium">[intro]</span><br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            Kutrima suratmu, tlah kubaca, dan aku mengerti<br />
            Betapa merindunya dirimu akan hadirnya diriku<br />
            Di dalam hari-harimu, bersama lagi<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Kau tanyakan padaku<br />
            Kapan aku akan kembali lagi<br />
            Katamu kau tak kuasa melawan<br />
            Gejolak di dalam dada<br />
            Yang membara menahan rasa<br />
            Pertemuan kita nanti saat kau ada di sisiku<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Semua kata rindumu semakin membuatku tak berdaya<br />
            Menahan rasa ingin jumpa<br />
            Percayalah padaku akupun rindu kamu<br />
            Ku akan pulang<br />
            Melepas semua kerinduan yang terpendam<br /><br />

            <span className="text-red-700 font-medium">verse3:</span><br />
            Kau tuliskan padaku, kata cinta, yang manis dalam suratmu<br />
            Kau katakan padaku, saat ini, kuingin hangat pelukmu<br />
            Dan belai lembut kasihmu<br />
            Takkan kulupa slamanya saat bersama dirimu<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Jangan katakan cinta<br />
            Menambah beban rasa<br />
            Sudah simpan saja sedihmu itu<br />
            Ku akan datang<br /><br />

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
            <span className="text-red-700 font-medium">verse1:</span><br />
            Sunday night after a rainy day<br />
            I delete all your pictures<br />
            I walked away from you<br />
            Nights are the hardest<br />
            But I&apos;ll be okay<br />
            If we are meant to be<br />
            Yeah, we&apos;ll find our way<br />
            But now, let it be<br /><br />

            <span className="text-red-700 font-medium">pre-chorus:</span><br />
            Cause you know what they say<br />
            If you love somebody<br />
            Gotta set them free<br /><br />

            <span className="text-red-700 font-medium">chorus1:</span><br />
            I love you but I&apos;m letting go<br />
            I love you but I&apos;m letting go<br />
            I love you and I&apos;m letting go<br />
            I love you but I&apos;m letting go<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Little did I know love is easy<br />
            But why was it so hard?<br />
            It was like never enough<br />
            I gave you all still you want more<br />
            Can&apos;t you see? can&apos;t you see?<br />
            That you want someone that I&apos;m not<br />
            Yes, I love but I can&apos;t<br />
            So, I am letting you go now<br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            And baby one day<br />
            When you finally found what you want<br />
            And you&apos;re ready to open your heart to anyone<br />
            Don&apos;t push people away again<br />
            Easier, I know<br /><br />

            <span className="text-green-700 font-medium">[intro]</span><br /><br />

            <span className="text-red-700 font-medium">chorus2:</span><br />
            I love you but I&apos;m letting go<br />
            I love you but I&apos;m letting go<br />
            I love you and I&apos;m letting go<br />
            It is the only way, you know? oh<br />

            <span className="text-red-700 font-medium">outro:</span><br />
            And from now on<br />
            I will hold my own hand<br />
            Until one day you&apos;ll hold<br />
            My lonely hand<br />
            Ooh-ooh, ooh-ooh<br /><br />
          </p>
        </div>

        <div className='py-5' id='kangen'>
          <h1 className="text-lg font-mono font-semibold mb-2 border-b-2 border-y-pink-500 bg-pink-200 rounded-t-lg px-2 text-center">
            Kangen
          </h1>
          <p>
            <span className="text-green-700 font-medium">[intro]</span><br /><br />

            <span className="text-red-700 font-medium">verse1:</span><br />
            Ketika ku mendengar bahwa<br />
            Kini kau tak lagi dengannya<br />
            Dalam benakku timbul tanya<br /><br />
            Masihkah ada dia di hatimu bertahta?<br />
            Atau ini saat bagiku untuk singgah di hatimu?<br />
            Namun siapkah kau tuk jatuh cinta lagi?<br /><br />

            <span className="text-red-700 font-medium">chorus:</span><br />
            Meski bibir ini tak berkata<br />
            Bukan berarti ku tak merasa<br />
            Ada yang berbeda di antara kita<br />
            Dan tak mungkin ku melewatkanmu hanya karena<br />
            Diriku tak mampu untuk bicara<br />
            Bahwa aku inginkan kau ada di hidupku<br /><br />

            <span className="text-red-700 font-medium">verse2:</span><br />
            Kini ku tak lagi dengannya<br />
            Sudah tak ada lagi rasa<br />
            Antara aku dengan dia<br /><br />
            Siapkah kau bertahta di hatiku, adinda?<br />
            Karena ini saat yang tepat untuk singgah di hatiku<br />
            Namun siapkah kau tuk jatuh cinta lagi?<br /><br />

            <span className="text-green-700 font-medium">[chorus]</span><br /><br />

            <span className="text-red-700 font-medium">bridge:</span><br />
            Pikirlah saja dulu<br />
            Hingga tiada ragu<br />
            Agar mulus jalanku<br />
            Melangkah menuju ke hatimu<br /><br />
            Pikirlah saja dulu<br />
            Hingga tiada ragu<br />
            Agar mulus jalanku<br />
            Melangkah menuju ke hatimu<br /><br />
            Siapkah kau tuk jatuh cinta lagi?<br /><br />

            <span className="text-green-700 font-medium">[chorus(2x)]</span><br /><br />
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;