import React from 'react'

const Cart = () => {
  return (
    <div className='container-fluid '>
    <div className='row row-cols-md-2 row-cols-1'>
        <div className='right-side col'>
          <div className='p-5 d-flex justify-content-center align-content-center '>
        <img src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg" className="card-img-top" alt="product"/>
        </div>
        </div>
        <div className='left-side col'>
          <div className='p-5'>
          <h1 className='fs-1 fw-bold '>i phone 15</h1>
          <p className='fs-4 mt-4'>$150</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, mollitia eius! Nesciunt nulla consectetur ipsa at dignissimos deleniti excepturi tempore sunt suscipit ullam labore eos tempora praesentium, rerum impedit molestiae.</p>
          <div className='btnn d-flex gap-5 mt-5 '>
          <button className='btn btn-primary'>Buy now</button>
          <button className='btn btn-warning'>Add to cart</button>
          </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Cart