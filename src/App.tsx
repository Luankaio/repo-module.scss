import React, { useEffect, useRef, useState } from 'react';
import styles from './App.module.scss';
import F1 from './flower.jpg';
import F2 from './Kojiro.png';

function App() {
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [F1, F2, F1]; // Adicione todas as suas imagens aqui
  
   const handleNextClick = (num:number) => {
    if(currentIndex+num<0){
      setCurrentIndex(currentIndex+1)
      console.log("primeiro if", currentIndex)
    }
     setCurrentIndex(currentIndex+num)
     if(currentIndex>=images.length-1){
       setCurrentIndex(0)
       console.log("Depois do if"+currentIndex)
      }
      if(currentIndex<0){
        setCurrentIndex(images.length)
      }
      if (containerRef.current) {
        containerRef.current.children[currentIndex].scrollIntoView({ behavior: 'smooth' });
      }
      console.log("fim fun", currentIndex)
    };
  const resetIndice=()=>{

      setCurrentIndex(currentIndex-1)

  }

    console.log("fim tudo", currentIndex)
  return (
    <div className={styles['App']}>
      <button onClick={()=>handleNextClick(-1)}>Anterior</button>
      <div className={styles['Carrossel']} ref={containerRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{ width: '300px' }}
            className={styles['Content']}
            alt={`Imagem ${index}`}
          />
        ))}
      </div>
      <button onClick={()=>handleNextClick(1)}>Próximo</button>
    </div>
  );
}

export default App;
