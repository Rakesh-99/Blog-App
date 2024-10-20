import React, { useState } from 'react'
import { Link } from 'react-router-dom';





const RecentBlog = ({ blogs }) => {

    const [recentBlogs, setLimitBlogs] = useState(blogs);



    return (
        <>
            <div className="border w-80 rounded-md  flex justify-center items-center">
                <Link to={`/blog/${recentBlogs.slug}`}>
                    <img src={recentBlogs && recentBlogs.blogImgFile} className='hover:scale-[99%] w-80 h-48 object-cover  rounded-sm transition-all' />

                    <div className="flex flex-col gap-1 px-2 py-2">
                        <p className='md:text-xl '>{recentBlogs && recentBlogs.blogTitle}</p>
                        <span className='text-xs md:text-sm w-20 text-center border-2 rounded-full
                    '>{recentBlogs && recentBlogs.blogCategory}
                        </span>

                    </div>
                </Link>
            </div>
        </>
    )
}

export default RecentBlog;