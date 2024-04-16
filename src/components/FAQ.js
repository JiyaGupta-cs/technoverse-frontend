import React from 'react'
import './FAQ.css'

const FAQ = () => {
  return (
    <div className='fq'>
        
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
	<link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet"/>
	<link rel="stylesheet" type="text/css" href="style.css"/>

      <div class="page__wrapper">
		<h1 class="faq-heading">Frequently Asked Questions</h1>
		<div class="accordion">
			<details>
			  <summary>Where is the event?</summary>
			  <p>The event is at KIET, auditourium </p>
			</details>
			<details>
			  <summary>Till how many days event will go on?</summary>
			  <p>Its a one day event. </p>
			</details>
			<details>
			  <summary>Is there any registration cost ?</summary>
			  <p>Yes! If you are from other college then there will be a registration fee.</p>
			</details>
			<details>
			  <summary>Who are the speakers ?</summary>
			  <p>Speakers are tech industry professionals who will share with y'all their experinces and will tell you about the upcoming trends </p>
			</details>
		</div>
	</div>
    </div>
  )
}

export default FAQ
