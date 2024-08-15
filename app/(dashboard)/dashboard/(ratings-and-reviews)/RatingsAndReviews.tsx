import React from 'react'
import RatingDisplay from '../../../../components/RatingDisplay';
import Image from 'next/image';

const ratingsData = [
    { userImg: '/image-man.svg', userName: 'Cora Marlowe', rating: 2.3, heading: 'Very good, I liked a lot ', comment: 'The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way', time: 'Jul 24, 2024' },
    { userImg: '/image-man.svg', userName: 'Cora Marlowe', rating: 2.3, heading: 'Very good, I liked a lot ', comment: 'The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way', time: 'Jul 24, 2024' },
    { userImg: '/image-man.svg', userName: 'Cora Marlowe', rating: 2.3, heading: 'Very good, I liked a lot ', comment: 'The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way', time: 'Jul 24, 2024' },
    { userImg: '/image-man.svg', userName: 'Cora Marlowe', rating: 2.3, heading: 'Very good, I liked a lot ', comment: 'The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way', time: 'Jul 24, 2024' },
    { userImg: '/image-man.svg', userName: 'Cora Marlowe', rating: 2.3, heading: 'Very good, I liked a lot ', comment: 'The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way The best part of this trip is how much you learn along the way', time: 'Jul 24, 2024' },
]
const RatingsAndReviews = () => {

    const ratings = [
        { rating: 5, count: 20 },
        { rating: 4, count: 15 },
        { rating: 3, count: 10 },
        { rating: 2, count: 99 },
        { rating: 1, count: 20 }
    ];

    const totalRatings = ratings.reduce((total, rating) => total + rating.count, 0)
    const totalScore = ratings.reduce((sum, rating) => sum + (rating.rating * rating.count), 0);
    const averageRating = totalScore / totalRatings;
    const getPercentage = (count: number) => {
        return (count / totalRatings) * 100
    }
    return (
        <section className='w-2/5 h-screen mx-auto mt-28 overflow-y-scroll overflow-x-hidden'>
            <h1 className='text-center font-bold text-lg text-primary'>Ratings & Reviews</h1>
            <div className='bg-[#014C461A] p-6 rounded-lg shadow-md'>
                <div className='mb-2'>
                    <div className='flex items-center justify-center bg-white p-1 rounded-full w-[191px] mx-auto gap-2'>
                        <RatingDisplay rating={averageRating} />
                        <span className='text-sm font-semibold'>{(averageRating).toFixed(1)} out of 5</span>
                    </div>
                    <p className='text-center font-bold text-sm my-2'>{totalRatings} customers ratings</p>
                </div>
                <div className="flex items-center space-x-4 ">
                    <div className="flex flex-col items-center space-y-2">
                        {ratings.map(rating => (
                            <div key={rating.rating} className="flex items-center space-x-1">
                                <span className="ml-2 text-[#2F2B3D] font-semibold">{rating.rating} Star</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        {ratings.map(rating => (
                            <div key={rating.rating} className="flex items-center mb-2 justify-between">
                                <div className="flex-1 mr-2">
                                    <div
                                        className="relative h-3 bg-[#014C4633] rounded-full"
                                        style={{ width: '100%' }}
                                    >
                                        <div
                                            className="absolute top-0 left-0 h-full bg-primary rounded-full"
                                            style={{ width: `${getPercentage(rating.count)}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-[#2F2B3D] font-semibold">{Math.floor(getPercentage(rating.count))}%</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className=''>
                {
                    ratingsData.map((rating) => (
                        <div className='border p-6 my-2 shadow-sm rounded-md' key={rating.rating}>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between mb-3'>
                                    <div className='flex items-center gap-x-2'>
                                        <Image src={rating.userImg} alt='logo' height={35} width={35} />
                                        <h2 className='font-semibold text-primary'>{rating.userName}</h2>
                                    </div>
                                    <RatingDisplay rating={2.4} />
                                </div>
                                <div className='flex flex-col '>
                                    <h1 className='font-semibold mb-2'>{rating.heading}</h1>
                                    <p className='text-sm'>{rating.comment}</p>
                                </div>
                            </div>
                            <div className='flex justify-end mt-2 text-[#494949]'>
                                <span className='text-sm'>{rating.time}</span>
                            </div>
                        </div>
                    ))
                }
                <div className='flex justify-end'>
                    <button className='text-xs font-bold pt-1'>See All</button>
                </div>
            </div>

        </section>
    )
}

export default RatingsAndReviews