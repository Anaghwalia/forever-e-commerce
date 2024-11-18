import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever was born out of passion for innovation and a desire to revelutionize the way people shop online. Driven by a passion for creativity, Forever is your go-to destination for finding pieces that empower you to express yourself effortlessly. </p>
        <p>Forever combines the latest trends with timeless elegance, ensuring every product you find here is crafted with purpose and style. We believe shopping should be a delightful journey, which is why Forever brings you curated collections that reflect quality, affordability, and authenticity</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is simple: to bring joy to your shopping experience by connecting you with products that feel as special as you are.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p  className='text-gray-600'>At Forever, quality isn’t just a commitment—it’s a promise we make to every customer. We carefully source and rigorously inspect each product, ensuring it meets the highest standards before it reaches your doorstep. Our team of quality experts conducts detailed checks for durability, craftsmanship, and safety, so you can shop with confidence knowing that every item embodies the excellence you deserve.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Forever is designed with your convenience in mind. From intuitive browsing to a seamless checkout process, we make shopping easy, fast, and enjoyable. Our user-friendly platform allows you to find exactly what you're looking for with just a few clicks, while flexible payment options, swift order tracking, and dedicated customer support ensure a hassle-free experience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>At Forever, our relationship with you goes beyond a transaction—it’s a commitment to your satisfaction. Our dedicated customer service team is here to support you at every step, from answering questions to resolving issues quickly and professionally. We believe that great service is about listening, understanding, and always going the extra mile to ensure your experience with us is seamless and enjoyable.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About