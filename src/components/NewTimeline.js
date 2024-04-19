import React from 'react'
import './NewTimeline.css'



const NewTimeline = () => {
  return (
    <div>
      <body>
      <h1 class="sponsor-heading text-center p-3 " style={{fontFamily:"Syne Mono"}}>Timeline</h1>
    <div class="timelinex">
    
        <div class="containerx leftx">
            <div class="contentx">
                <h2 className='font-bold '>
              Akshay Saini
                          </h2>
                          <h4>  Speaker Session 1</h4>
                <p>
                1:20 pm to 2:00 pm
                </p>
            </div>
        </div>
        <div class="containerx rightx">
                      <div class="contentx">
                          <h2 className='font-bold '>Keerti Purswani</h2>
                <h4>
                Speaker Session 2
                </h4>
                <p>
                2:10 pm to 2:50 pm
                </p>
            </div>
        </div>
        <div class="containerx leftx">
                      <div class="contentx">
                          <h2 className='font-bold '>Supriya Purohit</h2>
                <h4>
                Speaker Session 3
                </h4>
                <p>
                3:00 pm to 3:40 pm
                </p>
            </div>

        </div>
        
       
        <div class="containerx rightx">
            <div class="contentx">
                <h2 className='font-bold '>Goodies Distribution</h2>
                <p>
                3:40 pm to 4:00 pm
                </p>
            </div>
        </div>
    </div>
</body>
    </div>
  )
}

export default NewTimeline
