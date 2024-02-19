import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='app mb-5'>
      
<h1 className='text-center text-danger mt-3 mb-5 text-capitalize'>Welcome</h1>
<div className="container text-center">
  <div className="row gy-5">
    <div className="col d-flex justify-content-center ">
      <div className="card" style={{width: "18rem"}}>
  <img src="https://www.cnet.com/a/img/resize/43eef4bde1d0426edbe9fcb90db8cd3c3854340b/hub/2022/08/09/20e7a538-a33c-41d2-bb75-e2609c0baea8/samsung-galaxy-foldable-9804.jpg?auto=webp&fit=crop&height=1200&width=1200" className="card-img-top biganimation" alt="..." height={250}/>
  <div className="card-body">
    <h5 className="card-title">Samsung Flip 1</h5>
    <p className="card-text">Samsung Galaxy Flip phones bend on a clever horizontal hinge to create a compact device measuring</p>
    <div className='d-flex justify-content-between align-items-center pt-3'>
      <div className='d-flex align-items-center pt-3'>
      <p className='pointer fs-5 fw-bold '>$ 40.00</p>
      </div>
    
    <Link to='/cart' className="btn btn-primary">Buy now</Link>
    </div>
  </div>
</div>
    </div>
    <div className="col d-flex justify-content-center">
      <div className="card" style={{width: "18rem"}}>
  <img src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg" className="card-img-top biganimation" alt="..." height={250}/>
  <div className="card-body">
    <h5 className="card-title">i phone 14 pro</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='d-flex justify-content-between align-items-center pt-3'>
      <div className='pt-3'>
      <p className='pointer fs-5 fw-bold'>$ 60.00</p>
      </div>
    
      <Link to='/cart' className="btn btn-primary">Buy now</Link>
    </div>
  </div>
</div>
    </div>
    <div className="col d-flex justify-content-center">
      <div className="card" style={{width: "18rem"}}>
  <img src="https://www.digitaltrends.com/wp-content/uploads/2022/08/Galaxy-Z-Fold-4-Open-on-Table.jpg?p=1" className="card-img-top biganimation " alt="..." height={250}/>
  <div className="card-body">
    <h5 className="card-title">Samsung Flip 2</h5>
    <p className="card-text">Meet the new face of iPhone. Introducing Dynamic Island, a truly Apple innovation</p>
    <div className='d-flex justify-content-between align-items-center pt-3'>
     <div className='pt-3'>
     <p className='pointer fs-5 fw-bold'>$ 50.00</p>
     </div>
    
     <Link to='/cart' className="btn btn-primary">Buy now</Link>
    </div>
    
  </div>
</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Products