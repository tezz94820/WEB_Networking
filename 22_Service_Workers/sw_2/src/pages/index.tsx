import { useEffect, useState } from "react"

export default function Home() {
  const [url,seturl] = useState('');

  useEffect( () => {
    const setcaching = async () => {
      const cache = await caches.open('test');
      const res = await cache.add('/image.png');
    }
    const getcaching = async () => {
      const cache = await caches.open('test');
      const res = await cache.match('/image.png');
      if(res){
        const blob = await res.blob();
        seturl(URL.createObjectURL(blob));
      }
    } 
    setcaching();
    getcaching();
  },[])
  return (
    <div className="p-4">
      <h1 className="text-3xl text-green-300">Cache Browser API</h1>
      <img src={url} />

    </div>
  )
}
