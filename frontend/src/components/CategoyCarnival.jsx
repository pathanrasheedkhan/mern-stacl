/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
const category = [
    "Frontend Development",
    "Backend Developer",
    "Mobile Developer",
    "Data Scientist",
    "UX/UI Designer",
    "Product Manager",
]
const CategoyCarnival = () => {
  return (
    <div>
        <Carousel className='w-full max-w-xl mx-auto my-20 '>
            <CarouselContent>
                {
                    category.map((cat, index) => (
                
                        <CarouselItem className='md:basis-1/2 lg-basis-1/3'>
                            <Button variant='outline' className='rounded-full'>{cat}</Button>

                        </CarouselItem>
                     ))
                }
               
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>

        </Carousel>
    </div>
  )
}

export default CategoyCarnival