import React, { useState } from 'react'
import './AboutFlipCard.css'


export default function AboutFlipCard() {

    const [isFlipped, setIsFlipped] = useState(false);

    const toggleCard = () => {
  setIsFlipped(!isFlipped);
};




  return (
    <section className="py-14 bg-white h-screen md:h-auto">
        <div className='className="max-w-6xl mx-auto px-4"'>
            <div className="flip-card-container" onClick={toggleCard}>
                <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                    {/* Front Side */}
                    <div className="flip-card-front">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <img src="/images/factory-workshop-interior-machines-glass-production-background.jpg" alt="Factory-image" className="rounded-lg lg:h-96" />
                            <div>
                                <h2 className="text-4xl font-bold mb-4">کارخانه ی گل ظرف</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugiat, officia temporibus repellendus consequuntur dignissimos error deleniti, fuga quos veniam! Libero adipisci voluptas velit aspernatur, optio necessitatibus explicabo tempore!</p>
                            </div>
                        </div>
                    </div>
                    {/* Back Side */}
                    <div className="flip-card-back">
                        <h2 className="text-4xl font-bold mb-8 text-center">چرا گل ظرف؟</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos impedit nihil quidem quos optio vel, recusandae id ipsa laboriosam nostrum aspernatur alias quis maxime numquam est ad distinctio, iusto magni.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis vero doloribus iure voluptas. Possimus earum adipisci nesciunt. Nam molestias earum error ut, tempore ducimus adipisci quod nihil libero nobis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga exercitationem inventore laudantium commodi labore adipisci doloremque, veniam, harum sapiente voluptatem molestias nobis obcaecati vero aut. Tempore minus animi quas natus.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}





