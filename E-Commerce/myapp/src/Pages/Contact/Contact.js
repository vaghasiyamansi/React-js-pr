import React from 'react'

function Contact() {
  return (
    <div className="">
    <div className="px-10 my-16">
      <div className="grid grid-cols-3 gap-10">
        <div className="">
          <div className="border rounded-lg px-9 py-10 mb-6">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="flex text-gray-500 mb-2">
              <p>24/26 Strait Bargate, Boston, PE21, United Kingdom</p>
            </div>
            <div className="flex text-gray-500 mb-2">
              <p>
                <span>+098 (905) 786 897 8</span><br/>
                <span>6 - 146 - 389 - 5748</span>
              </p>
            </div>
            <div className="flex text-gray-500 mb-2">
              <p>
                <span>Store Hours:</span>
                <br />
                <span>10 am - 10 pm EST, 7 days a week</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center py-4 mb-14  ">
            <div className="flex items-center">
            <button className="border p-4 rounded-md mt-0 w-[450px] hover:bg-rose-600 hover:text-white font-bold">
               Get Support On Call<i className="fa-solid fa-headphones ps-3 hover:text-white"></i>
            </button>
            </div>
          </div>
          <div className=" flex justify-center py-4">
            <div className="flex items-center">
            <button className="border p-4 rounded-md mt-[-50px] w-[450px] hover:bg-rose-600 hover:text-white font-bold">
               Get Direction<i className="fa-solid fa-location-dot ps-3 hover:text-white"></i>
           </button>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-2">
          <h2 className="text-2xl font-bold mb-2">Make Custom Request</h2>
          <p className="text-sm text-gray-500">Must-have pieces selected every month want style Ideas and Treats?</p>
          <form action="https://formspree.io/f/myyroqop" method="post" className="mt-8">
            <div className="grid grid-cols-2 gap-6 mb-4">
              <input type="text" name='name' placeholder="Full name" className="border rounded-lg px-4 py-3 text-lg focus:border-red-600 focus:outline-none"/>
              <input type="text" name='email' placeholder="Email address" className="border rounded-lg px-4 py-3 text-lg focus:border-red-600 focus:outline-none"/>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <input type="text" name='tel' placeholder="Phone number" className="border rounded-lg px-4 py-3 text-lg focus:border-red-600 focus:outline-none"/>
              <input type="text" name='subject' placeholder="Subject" className="border rounded-lg px-4 py-3 text-lg focus:border-red-600 focus:outline-none"/>
            </div>
            <div className="grid grid-cols-1 mb-6">
              <textarea name="message" id="" cols="30" rows="9" placeholder="Enter message" className="border rounded-lg px-4 py-3  focus:border-red-600 focus:outline-none"></textarea>
            </div>
            <button className='bg-rose-600 pt-2 pb-2 ps-2 pe-2 text-white rounded-md'>Get A Quote</button>
          </form>
        </div>
      </div>
    </div>
    <span><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765978.00238801!2d61.00083698256397!3d19.729113061269324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714536411839!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></span>
  </div>
  )
}

export default Contact
            









