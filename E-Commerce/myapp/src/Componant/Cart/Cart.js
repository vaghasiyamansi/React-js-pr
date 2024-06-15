import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE, UPDATE_QUANTITY } from "../../Redux/Action/Action";
import Breadcrumb01 from "../../Asset/breadcrumb01.jpg";
import Data from '../Populer-Product/Data'

function Cart() {
  const data = useSelector((state) => state.cartreducer.carts)
  console.log(data);

  //   const increment_Qut = (item) => {
  //        dispatch(INCREASE_VALUE(item))
  //   }
  //   const decrease_Qut = (item) => {
  //     dispatch(DECREASE_VALUE(item))
  // }

  const quantities = useSelector((state) => state.cartreducer.quantities);

  const changeQuantity = (event, id) => {
    const quantity = parseInt(event.target.value);
    dispatch(UPDATE_QUANTITY(id, quantity));
  };

  let Subtotal = 0;
  data.forEach((item) => {
    const quantity = quantities[item.id] || 1;
    Subtotal += item.price * quantity;
  });


  const Taxes = 9.00;

  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(REMOVE(id));
  }


  return (
    <div>
      <div className="text-left relative">
        <img src={Breadcrumb01} alt="Error Image" className="h-[40vh] pt-8" />

        <div className="absolute top-[20%] px-10 ">
          <h4 className="my-4 hover:text-red-600 cursor-pointer">
            Home
            <span className="text-gray-600">
              ----Cart
            </span>
          </h4>
          <h2 className="text-3xl font-bold">
            Cart
          </h2>
        </div>

        <div>
          <div className='p-20'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='border p-2'>Images</th>
                  <th className='border'>Courses</th>
                  <th className='border'>Unit Price</th>
                  <th className='border'>Quantity</th>
                  <th className='border'>Total</th>
                  <th className='border'>Remove</th>
                </tr>
              </thead>
              <tbody>
                {data.length ?
                  data.map((product, index) => {
                    const { FirstImg, price, name, id } = product;
                    const quantity = quantities[id] || 1;
                    const totalPrice = quantity * price;
                    return (

                      <tr key={id}>
                        <td className='border'>
                          <div className='flex justify-center'>
                            <img src={FirstImg} className='w-[150px] h-[180px]' />
                          </div>
                        </td>
                        <td className='border'><a href='#' className='hover:text-rose-600 font-semibold'>{name}</a></td>
                        <td className='border'>{price}</td>
                        <td className='border items-center w-[12rem]'>
                          <div className='border py-4 mx-[4rem] flex justify-center rounded'>
                            <input
                              onChange={(event) => changeQuantity(event, id)}
                              type="number"
                              name="number"
                              defaultValue={1}
                              className='outline-none input-number border-none focus:border-none mx-2'
                              min="1"
                            />
                          </div>
                        </td>
                        <td className='border'>${totalPrice.toFixed(2)}</td>
                        <td className='border'><button className='bg-rose-600 rounded-lg text-white text-sm font-bold pt-3 pb-3 ps-5 pe-5' onClick={() => remove(id)}>Remove</button></td>
                      </tr>

                    )
                  })
                  : <tr><td colSpan="7" className='text-center text-2xl font-bold'>Cart is empty...</td></tr>}

              </tbody>
            </table>
            <div className='grid grid-rows-1 '>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  <input type="text" placeholder='Coupon Code' className='border p-2 rounded-lg' />
                  <button className='bg-rose-600 rounded-lg text-white text-sm font-bold pt-3 pb-3 ps-5 pe-5'>Apply Coupon</button>
                </div>
                <button className='bg-rose-600 rounded-lg text-white block text-sm font-bold pt-3 pb-3 ps-7 pe-7'>Update Cart</button>
              </div>
            </div>
            <div className='grid-cols-1 grid-rows-1 grid '>
              <div className=' flex justify-end'>
                <div className='w-[50%]'>
                  <h1 className='text-2xl font-semibold'>Cart Totals</h1>
                  <div className='border flex justify-between p-3 mt-3 text-sm'>
                    <span>Subtotal</span>
                    <span>${Subtotal.toFixed(2)}</span>
                  </div>
                  {/* <div className='text-[0.9rem] text-gray-500'>Taxes</div>
                        <div className='text-[0.9rem] text-gray-500'>${(Subtotal * Taxes / 100).toFixed(2)}</div>
                    </div> */}
                  <div className='border flex justify-between p-3 text-sm'>
                    <span>Taxes</span>
                    <span>${(Subtotal * Taxes / 100).toFixed(2)}</span>
                  </div>

                  <div className='border flex justify-between p-3 text-sm'>
                    <span>Total</span>
                    <span>${(Subtotal + (Subtotal * Taxes / 100)).toFixed(2)}</span>
                  </div>
                  <div className='mt-5'>
                    <button className='bg-rose-600 rounded-lg text-white p-4 text-sm font-bold'>Proceed to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              // </div>

  );
}

export default Cart
