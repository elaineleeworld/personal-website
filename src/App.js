import React, { Component } from 'react';

import './App.css';
import ReactPlayer from 'react-player';
import video from './assets/ElaineLee_Portfolio_aminated_works.mov'
import myPhoto from './assets/myPhoto2026.jpg'
import ParticlesContainer from './components/Particles'
import Portfolio from './components/Portfolio'
import Button from './components/Button'
import ThreeScene from './components/ThreeScene'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import classNames from 'classnames'
// var classNames = require('classnames');

// import ReactDOM from 'react-dom';
// import Media from 'react-media';





class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      width: window.innerWidth,
      addClass: false,
      isHidden: true,
      clicked: false
    }
    this.buttonClick = this.buttonClick.bind(this)
    this.hamburgerToggle = this.hamburgerToggle.bind(this)
  }

    buttonClick(e){
        console.log('BUTTON CLICKED')
        // this.setState({
        //     addClass: true,
        //     isHidden: false,
        //     clicked:true
        // }) 
        document.querySelector(".button-container").style.display = 'none';    
    }

        hamburgerToggle(event){  
          event.target.classList.toggle('is-active');
        
          let openMenu = document.querySelector(".nav-menu");
            if (openMenu.style.display === "block") {
                 openMenu.style.display = "none";
                 document.documentElement.style.overflow = 'scroll';
                 document.body.scroll = "yes";
            } else {
                openMenu.style.display = "block";
                document.documentElement.style.overflow = 'hidden';
                document.body.scroll = "no";
            }
        }
    closeOverlay = () =>{
        console.log('Home')
        let openMenu = document.querySelector(".nav-menu");
        openMenu.style.display = "none";
         let hamburgerMenu = document.querySelector('.hamburger--3dxy');
        hamburgerMenu.classList.remove('is-active')
        window.scrollTo(0,document.body.scrollTop);
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
        let portfolioMenu = document.querySelector('#portfolio-flex-container')
        portfolioMenu.style.display = 'none'
        let videoMenu = document.querySelector('#portfolio-video-container')
        videoMenu.style.display = 'none'
        let aboutMenu = document.querySelector('#about-container')
        aboutMenu.style.display = 'none'
        document.querySelector(".button-container").style.display = 'block';  
  }

  showPortfolioOverlay=() =>{
        console.log('Portfolio')
        let openMenu = document.querySelector(".nav-menu");
        openMenu.style.display = "none";
        let hamburgerMenu = document.querySelector('.hamburger--3dxy');
        hamburgerMenu.classList.remove('is-active')
        let portfolioMenu = document.querySelector('#portfolio-flex-container')
        portfolioMenu.style.display = 'flex'
        let videoMenu = document.querySelector('#portfolio-video-container')
        videoMenu.style.display = 'none'
        let aboutMenu = document.querySelector('#about-container')
        aboutMenu.style.display = 'none'
        document.querySelector(".button-container").style.display = 'none'; 
         document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
  }
   showAboutOverlay = () =>{
        console.log('About')
        let openMenu = document.querySelector(".nav-menu");
        openMenu.style.display = "none";
        let hamburgerMenu = document.querySelector('.hamburger--3dxy');
        hamburgerMenu.classList.remove('is-active')
        let portfolioMenu = document.querySelector('#portfolio-flex-container')
        portfolioMenu.style.display = 'none'
        let videoMenu = document.querySelector('#portfolio-video-container')
        videoMenu.style.display = 'none'
        let aboutMenu = document.querySelector('#about-container')
        aboutMenu.style.display = 'block'
        document.querySelector(".button-container").style.display = 'none'; 
        // window.scrollTo({
        //   top: window.innerHeight - 200,
        //   behavior: 'smooth'
        // }); 
        window.scrollTo(0, document.body.scrollTop);
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
  }

  showSectionOverlay = () =>{
    console.log('Section clicked show overlay')
    this.setState=({
        addClass: true
    })
  }
  openLinkedIn= () =>{
    window.open('https://www.linkedin.com/in/elainelee999/', '_blank')
  }
   
    

  render() {
    const {width} = this.state;
    const isMobile = width < 600;
    const className = this.state.clicked ? 'anim' : null;
    
    return (
    

      <div className="App">
      <ThreeScene id='rotating-cube'/>

      <header>
       <button type="button" className="hamburger-menu hamburger--3dxy" onClick= {this.hamburgerToggle}>
             <span className="hamburger-box" >
            <span className="hamburger-inner" ></span>
            </span>
            
       </button>
       <nav className="nav-menu" >
               <li onClick={this.closeOverlay}>home</li>
               <li onClick={this.showPortfolioOverlay}>portfolio</li>
               <li onClick={this.showAboutOverlay}>about</li>
               <li onClick={this.openLinkedIn}>contact me</li>
             </nav>
       
       
        <div className='header__info__container'>
        <h1>ELAINE LEE</h1>
        <p className='job-title'>Technology Leader, Engineer, Product Manager, AI Integrator, Change Manager</p>

        </div>
       
        </header> 
           
    <ParticlesContainer/>
         <Button text='Click To Enter' onClick={this.buttonClick} style={{margin: '0 auto'}}/>

       
     <div id='portfolio-flex-container' className='anim' > 

      <section className='work-000' className={classNames(
            this.state.addClass ? "overlay" : "work-000" 
          )}
          onClick={e => this.showSectionOverlay(e)}>
      {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://elaineleeworld.github.io/itunes-project/')}>
        <h1 style={{color: 'white'}}>VueJS Nuxt App</h1>
         <Portfolio   title={'Built for:\n side project'} text={'Technologies used:\nVueJS, Nuxt, Vuex, Stylus, Axios, iTunes API'}/>
         
         <p><a href='https://elaineleeworld.github.io/itunes-project/' target='_blank'>View Demo</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://elaineleeworld.github.io/itunes-project/', '_blank')}>
        <h1 style={{color: 'white'}}>VueJS Nuxt App</h1>
         <Portfolio   title={'Built for:\nside project'} text={'Technologies used:\nVueJS, Nuxt, Vuex, Stylus, Axios, iTunes API'}/>
        
         <p><a href='https://elaineleeworld.github.io/itunes-project/' target='_blank'>View Demo</a></p>
         </div> }
        </section>
      <section className='work-00' className={classNames(
            this.state.addClass ? "overlay" : "work-00" 
          )}
          onClick={e => this.showSectionOverlay(e)}>
      {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://elaineleeworld.github.io/quiz/')}>
        <h1 style={{color: 'white'}}>VueJS Lodash App</h1>
         <Portfolio   title={'Built for:\n side project'} text={'Technologies used:\nVueJS, Bootstrap Vue, VueCLI, Lodash'}/>
         
         <p><a href='https://elaineleeworld.github.io/quiz/' target='_blank'>View Demo</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://elaineleeworld.github.io/quiz/', '_blank')}>
        <h1 style={{color: 'white'}}>VueJS Lodash App</h1>
         <Portfolio   title={'Built for:\nside project'} text={'Technologies used:\nVueJS, Bootstrap Vue, VueCLI, Lodash'}/>
        
         <p><a href='https://elaineleeworld.github.io/quiz/' target='_blank'>View Demo</a></p>
         </div> }
        </section>
      <section className='work-0' className={classNames(
            this.state.addClass ? "overlay" : "work-0" 
          )}
          onClick={e => this.showSectionOverlay(e)}>
      {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://shrouded-citadel-11065.herokuapp.com/', '_blank')}>
        <h1 style={{color: 'white'}}>React Apollo GraphQL App</h1>
         <Portfolio   title={'Built for:\n side project'} text={'Technologies used:\nReactJS, Apollo, GraphQL, React Router, NodeJS, MomentJS, Heroku Deploy, Bootstrap 4'}/>
         
         <p><a href='https://shrouded-citadel-11065.herokuapp.com/' target='_blank'>View Demo</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://shrouded-citadel-11065.herokuapp.com/', '_blank')}>
        <h1 style={{color: 'white'}}>React Apollo GraphQL App</h1>
         <Portfolio   title={'Built for:\nside project'} text={'Technologies used:\nReactJS, Apollo, GraphQL, React Router, NodeJS, MomentJS, Heroku Deploy, Bootstrap 4'}/>
        
         <p><a href='https://shrouded-citadel-11065.herokuapp.com/' target='_blank'>View Demo</a></p>
         </div> }
        </section>
      <section className='work-1' className={classNames(
            this.state.addClass ? "overlay" : "work-1" 
          )}
          onClick={e => this.showSectionOverlay(e)}>
      {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://tech.wearered.com', '_blank')}>
        <h1 style={{color: 'white'}}>React Node Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nReactJS, React Router, NodeJS. WebPack'}/>
         
         {/* <p><a href='https://tech.wearered.com' target='_blank'>View Demo</a></p> */}
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://tech.wearered.com', '_blank')}>
        <h1 style={{color: 'white'}}>React Node Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nReactJS, React Router, NodeJS. WebPack'}/>
        
         {/* <p><a href='https://tech.wearered.com' target='_blank'>View Demo</a></p> */}
         </div> }
        </section>
         <section className='work-2'>
          {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://prod.wearered.com', '_blank')}>
        <h1 style={{color: 'white'}}>Preact Node Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nPreactJS, React alias, NodeJS. WebPack, Mobile Responsive, Git'}/>
        
         {/* <p><a href='https://prod.wearered.com' target='_blank'>View Demo</a></p> */}
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://prod.wearered.com', '_blank')}>
        <h1 style={{color: 'white'}}>Preact Node Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nPreactJS, React alias, NodeJS. WebPack, Mobile Responsive, Git'}/>
         
         {/* <p><a href='https://prod.wearered.com' target='_blank'>View Demo</a></p> */}
         </div> }
        </section>
         <section className='work-3'>
           {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qmdbGm', '_blank')}>
        <h1 style={{color: 'white'}}>VueJS Bulma Website</h1>
          <Portfolio   title={'Built for:\npersonal website'} text={'Technologies used:\nVueJS, Bulma, Font Awesome, API, Axios, HTML5, CSS3, Sass, Mixins, GitHub Pages'}/>
         <p><a href='https://elaineleeworld.github.io/compare-vue/dist/#/' target='_blank'>View Demo</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://elaineleeworld.github.io/compare-vue/dist/#/', '_blank')}>
        <h1 style={{color: 'white'}}>VueJS Bulma Website</h1>
         <Portfolio   title={'Built for:\npersonal website'} text={'Technologies used:\nVueJS, Bulma, Font Awesome, API, Axios, HTML5, CSS3, Sass, Mixins, GitHub Pages'}/>
        
         <p><a href='https://elaineleeworld.github.io/compare-vue/dist/#/' target='_blank'>View Demo</a></p>
         </div> }
    
        </section> 
        <section className='work-4'>
           {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qmdbGm', '_blank')}>
        <h1 style={{color: 'white'}}>jQuery HTML Sass Feature</h1>
          <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
         {/* <p><a href='https://codepen.io/elaineleeworld/pen/qmdbGm' target='_blank'>View Demo</a></p> */}
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qmdbGm', '_blank')}>
        <h1 style={{color: 'white'}}>jQuery HTML Sass Feature</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
        
         {/* <p><a href='https://codepen.io/elaineleeworld/pen/qmdbGm' target='_blank'>View Demo</a></p> */}
         </div> }
    
        </section>
          <section className='work-5'>
           {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} >
        <h1 style={{color: 'white'}}>jQuery, Sass, Javascript</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nJavascript, jQuery, Sass, Media Queries, Mobile Responsive, Git'}/>
         <p>View Demo</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} >
        <h1 style={{color: 'white'}}>jQuery, Sass, Javascript</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nJS, jQuery, Mobile Responsive, Git, on CodePen and Beachbody website'}/>
         
         {/* <p><a href='https://codepen.io/elaineleeworld/pen/pPjewO' target='_blank'>View Demo</a></p> */}
         {/* <p style={{zIndex: '10000'}}><a href='https://www.beachbody.com/product/fitness_programs/3-week-yoga-retreat-beginners-dvds.do' target='_blank'>View at Beachbody</a></p> */}
         </div> }

        </section>
        <section className='work-6'>
         {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/jBoEyw', '_blank')}>
        <h1 style={{color: 'white'}}>Vanilla Javascript alarm clock</h1>
         <Portfolio   title={'Built for:\nInterview Project'} text={'Technologies used:\n Vanilla Javascript, HTML5, CSS3, hosted on CodePen'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/jBoEyw' target='_blank'>View Demo</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/jBoEyw', '_blank')}>
        <h1 style={{color: 'white'}}>Vanilla Javascript alarm clock</h1>
         <Portfolio   title={'Built for:\nInterview Project'} text={'Technologies used:\n Vanilla Javascript, HTML5, CSS3, hosted on CodePen'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/jBoEyw' target='_blank'>View Demo</a></p>
         </div> }
         
        </section>
         <section className='work-7'>
          {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/RVRGrO', '_blank')}>
        <h1 style={{color: 'white'}} >Javascript HTML CSS, Sass</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
         
         {/* <p><a href='https://codepen.io/elaineleeworld/pen/RVRGrO' target='_blank'>View Demo</a></p> */}
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/RVRGrO', '_blank')}>
        <h1 style={{color: 'white'}}>Javascript HTML CSS, Sass</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
         
         {/* <p><a href='https://codepen.io/elaineleeworld/pen/RVRGrO' target='_blank'>View Demo</a></p> */}
         </div> }
        
        </section>  
        <section className='work-8'>
          {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qryjGx', '_blank')}>
        <h1 style={{color: 'white'}}>Sticky Notes jQuery HTML CSS</h1>
         <Portfolio   title={'Built for:\nInterview Question'} text={'Technologies used:\nJavascript, jQuery, Sass'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/qryjGx' target='_blank'>View Demo</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qryjGx', '_blank')}>
        <h1 style={{color: 'white'}}>Sticky Notes jQuery HTML CSS</h1>
         <Portfolio   title={'Built for:\nInterview Question'} text={'Technologies used:\nJavascript, jQuery, HTML5, CSS3'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/qryjGx' target='_blank'>View Demo</a></p>
         </div> }
        
        </section>  
        <section className='work-9'>
         {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('http://portfolio.ff0000.com/ua_willtrips_2018/', '_blank')}>
        <h1 style={{color: 'white'}}>React Node Webpack</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nReactJS, CSS3, ES6, NodeJS, Webpack, GitHub Pages'}/>
         
         {/* <p><a href='http://portfolio.ff0000.com/ua_willtrips_2018/' target='_blank'>Click to view website</a></p> */}
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('http://portfolio.ff0000.com/ua_willtrips_2018/', '_blank')}>
        <h1 style={{color: 'white'}}>React Node Webpack</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency for UA'} text={'Technologies used:\nJS, CSS3, Mobile Responsive, Media Queries'}/>
        
         {/* <p><a href='http://portfolio.ff0000.com/ua_willtrips_2018/' target='_blank'>View Demo</a></p> */}
         </div> }
        </section> 
        
        </div>
        <div id='portfolio-video-container' style={{display: 'none'}}>

        <h3 className='text-portfolio-video' >This is a video compilation of some ad agency work I have done for clients such as Disney, Lego, Nike, Pixar. The technologies used for these HTML5 banner ads are Javascript and Greensock for animation.  Some are Flashtalking, Sizmek, DoubleClick Studio, and RED's open-source, homegrown framework.  You can find more information <a href='htttps://tech.wearered.com' target='_blank' style={{color: 'lightblue'}}> by clicking here</a> to visit the website I built for RED Ad Tech.  </h3>
       <ReactPlayer 
            playing
            url={video}
            className='react-player'
            controls
            width='400px'
            height='400px'
          />
      
      </div>
      <div id='about-container' style={{display: 'none'}}>
      <img src={myPhoto}/>
      <h1>ABOUT</h1>
         <div className='left-about-text'>
         Elaine began her programming career as an undergraduate student at Cornell University. Since graduation she has worked in Finance, Pharma, Ad Tech, Fitness, News Media, and Management Consulting.  Elaine is a hands-on technology leader with 15+ years of experience spanning software engineering, product and project management with cross-functional delivery from ideation through execution to production in an everchanging global environment.
         
         Elaine currently works for a large global biotechnology company leading global teams to develop technology capabilities that ultimately help to drive our company's mission: to serve patients.
         </div>
         <div className='right-about-text'>  
         
         </div>
       </div>
       <div id='about-container' style={{display: 'none'}}>
      {/* <h1>CONTACT</h1>
      <p>click to email me:{'\n'}<a href='mailto:echilee@gmail.com'>{'\n'}echilee@gmail.com</a></p> */}

      </div>
     </div>
     
     
     
    );
  }
}



export default App;
