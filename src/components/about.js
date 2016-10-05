import React from 'react';

export default () => {
  return (
    <div>

      <h5>What?</h5>
      <p>
        A simple web application to help photographers pick a memory card for their cameras.
      </p>

      <h5>Why?</h5>
      <p>
        I picked up photography as a hobby in August 2016 - I wasn't sure what type of SD card to get and the only relevant website I could find was awful.<br /> It was also an opportunity to make something in <a href="https://facebook.github.io/react/">React</a> & <a href="https://github.com/reactjs/redux">Redux</a> for a bit of practise.
      </p>

      <p>
        Calculation based on <a href="http://kb.sandisk.com/app/answers/detail/a_id/69/~/number-of-pictures-that-can-be-stored-on-a-memory-device">Sandisk memory card information</a>.
        <small><br></br>* Camera brands have different settings and average file-sizes - results cannot be 100% accurate.</small>
      </p>


    </div>
  )
}
