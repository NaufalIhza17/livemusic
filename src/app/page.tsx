import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-white h-fit text-black max-w-full'>
      <section className='py-10'>
        <div className='font-bold w-fit mx-auto px-5 py-3 rounded-lg shadow-lg bg-gradient-to-r from-red-400 via-orange-600 to-slate-800'>
          Live Music
        </div>  
      </section>
      <section className='px-3 w-fit mx-auto'>
        <div>
          <h1 className='text-lg font-mono font-semibold mb-2'>Cant Take My Eyes Off You</h1>
          <p>
            <span className='text-red-700 font-medium'>verse1:</span><br/>
            You&apos;re just too good to be true<br/>
            Can&apos;t take my eyes off of you<br/>
            You&apos;d be like heaven to touch<br/>
            Oh, I want to hold you so much<br/>
            At long last love has arrived<br/>
            And I thank God I&apos;m alive<br/>
            You&apos;re just too good to be true<br/>
            I can&apos;t take my eyes off of you<br/><br/>

            <span className='text-red-700 font-medium'>verse2:</span><br/>
            Pardon the way that I stare<br/>
            There&apos;s nothin&apos; else to compare<br/>
            The thought of you leaves me weak<br/>
            There&apos;re no words left to speak<br/>
            But if you feel like I feel<br/>
            Please, let me know that it&apos;s real<br/>
            You&apos;re just too good to be true<br/>
            Can&apos;t take my eyes off of you<br/><br/>

            <span className='text-red-700 font-medium'>reff:</span><br/>
            I love you baby<br/>
            And if it&apos;s quite all right<br/>
            I need you baby<br/>
            To warm a lonely night<br/>
            I love you baby<br/>
            Trust in me when I say<br/>
            Oh, pretty baby<br/>
            Don&apos;t bring me down, I pray<br/>
            Oh, pretty baby<br/>
            Now that I found you, stay<br/>
            And let me love you, baby<br/>
            Let me love you<br/><br/>

            (back to verse2 - reff (2x))
          </p>
        </div>
      </section>
    </main>
  )
}
