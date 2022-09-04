import React,{useState,useEffect} from 'react'

function CollectionCards(props) {
  const [Data,setData] = useState([1,2,3,4,5]);
  return (
    <>
        <section>
      <div className='container mt-5'>
        <h1 className='font-weight-light'>Collections</h1>
        <div className='row'>
          <p className='col-12 col-md-9' style={{color:'white'}}>Some quick example text to build on the card title</p>
          <p className='col-3 d-md-block d-none' style={{color:'white'}}>Nothing</p>
        </div>
      </div>
    </section>

    <sectoin>
      <div className='container'>
        <div className='row'>

          

          {Data.map((i,item)=>(
            <div className='col-6 col-md-3 mb-4'>
            <div class="card sec_two_card">
              <div class="card-body" style={{position:"absolute",bottom:"0"}}>
                <h5 style={{color:'white'}}>Picturesque Cafes</h5>
                <h5 style={{color:'white'}}>17 places</h5>
              </div>
            </div>
          </div>
          ))

          }
          

        </div>

        <p className='d-block d-md-none'>Nothing</p>
      </div>
    </sectoin>
    </>
  )
}

export default CollectionCards;