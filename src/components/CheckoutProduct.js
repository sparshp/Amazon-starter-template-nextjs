import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'


function CheckoutProduct({
    id,
    title,
    description,
    price,
    image,
    rating,
    hasPrime,
    category
}) {
    const dispatch=useDispatch()
    
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            description,
            price,
            image,
            rating,
            hasPrime,
            category
        };
        
        dispatch(addToBasket(product));
    }
    const removeItemFromBasket = () => {
        //remove Item From Redux
        dispatch(removeFromBasket({id}))
    }
    
    return (
        <div className="sm:grid grid-cols-5 flex-col">
            <Image src={image} height={200} width={200} objectFit='contain'/>
            
            <div className="col-span-3 mx-3">
                <p>
                {title}  
                </p>
                <div className='flex'>{Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500 '/>
                ))}
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency='INR' />
                {hasPrime && (
                    <div className='flex items-center space-x-2 my-2'>
                        <img src="/images/prime.png"
                            alt=""
                            className='w-12'
                            loading='lazy'
                        />
                        <p className='text-xs text-gray-500'>Free Next-day delivery</p>
                    </div>
                )}

            </div>
         <div className='flex flex-col space-y-2 my-auto justify-self-end '>
                <button className='button' onClick={addItemToBasket}>Add to Basket</button>
                <button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
         </div>
        </div>
    )
}

export default CheckoutProduct
