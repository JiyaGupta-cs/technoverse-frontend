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
                <h2>
                Speaker Session 1
                </h2>
                <p>
                1:00 pm to 2:00 pm
                </p>
            </div>
        </div>
        <div class="containerx rightx">
        <div class="contentx">
                <h2>
                Speaker Session 2
                </h2>
                <p>
                2:00 pm to 3:00 pm
                </p>
            </div>
        </div>
        <div class="containerx leftx">
        <div class="contentx">
                <h2>
                Speaker Session 3
                </h2>
                <p>
                3:00 pm to 4:00 pm
                </p>
            </div>

        </div>
        
       
        <div class="containerx rightx">
            <div class="contentx">
                <h2>Goodies Distribution</h2>
                <p>
                4:00 pm to 5:00 pm
                </p>
            </div>
        </div>
    </div>
</body>
    </div>
  )
}

export default NewTimeline
