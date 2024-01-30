import { useEffect } from 'react'


export default function Home() {

  useEffect( () => {
    const swFunction = async () => {
      if('serviceWorker' in navigator ){
        const registration = await navigator.serviceWorker.register('sw.js'); // '/' means for entire website.
        console.log( 'installing',registration.installing,'waiting',registration.waiting,'active',registration.active);
        console.log('registration',registration);
      }
    }

    swFunction();
  },[])

  return (
    <>
    {/* every tab will share the same service worker */}
      <h1> Service Workers</h1>
    </>
  )
}
