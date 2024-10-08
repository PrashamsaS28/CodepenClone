import React from 'react'

const Footer = () => {
  return (
   
     <div className="card-footer" style={{marginTop:'36.8%', marginBottom:"0%",backgroundColor:"#2C303A"}}>
            <form className="form-inline my-1 my-lg-0">
      <button type="button" className="btn btn my-2 my-lg-0 mx-lg-1.5 text-light" style={{position:'relative', fontSize:'12px',margin:'0px 4px 0px 0px', padding:'3px 7px', backgroundColor:'#444857'}}>
                         Console
                            
                        </button>
                        <button type="button" className="btn btn my-2 my-lg-0 mx-lg-1.5 text-light" style={{position:'relative', fontSize:'12px', margin:'10px 4px 0px 0px', padding:'3px 7px', backgroundColor:'#444857'}}>
                            Assets
                            
                        </button>
                      
                       
                        <button type="button" className="btn btn my-2 my-lg-0 mx-lg-1.5 text-light" style={{position:'relative', fontSize:'12px', /* fontFamily:'"Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif', */ margin:'0px 4px 0px 0px', padding:'3px 7px', backgroundColor:'#444857' }}>
                        Shortcuts
                            
                        </button>


</form>
    
        </div>
    
  )
}

export default Footer
