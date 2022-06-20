import React from 'react'


function Home() {
return (
  <main className='main'>
  {/*=============== MAIN CONTENT ===============*/}
    <section className="hero" id="hero">
      <div className="shape-bg"></div>
      <div className="container-mouse"><i className="gg-mouse"></i></div>
      <div className="container-content h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-xl-6 col-md-6 col-sm-12">
            <img src="assets/img/Hero3.png" alt="" />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12">
            <h1>Your It<br />Outsourcing Partner</h1>
            <h5>Semartech is a Top Software House Agency in Indoneisa.<br />
              We deliver best design and development solutions to grow your company.</h5>
            <a href="#about" className="btn btn-primary shadow shadow-xl mt-5">Bajingan &nbsp;<i
                className="gg-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
    {/*=============== END OF MAIN CONTENT ===============*/}
</main>
)
}

export default Home;