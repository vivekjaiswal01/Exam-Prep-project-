import React from 'react'

const Session = () => {
  return (
    <div className='outer1'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-5">
            <div class="mb-3 ">

              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
            </div>
            <div class="mb-3">

              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter Description' rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-danger">Submit</button>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div><br></br>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 shadow-lg p-4  bg-body-tertiary rounded ">
            <h3>Sessions</h3>
            <div className="container">
              <div className="row">
                <div className="col-sm-2 border">S.no</div>
                <div className="col-sm-2 border">Name</div>
                <div className="col-sm-4 border">Description</div>
                <div className="col-sm-2 border">Date</div>
                <div className="col-sm-2 border">Action</div>
              </div>
            </div>

          </div>
          <div className="col-sm-2"></div>

        </div>


      </div>
    </div>

  )
}

export default Session