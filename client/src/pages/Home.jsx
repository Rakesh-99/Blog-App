import { useSelector } from 'react-redux';
import heroImg from '../assests/homeImg.png'
import { motion } from 'framer-motion';
import GithubCard from '../components/GithubCard';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../assests/spinner/Spinner';










const Home = () => {
  // const { blogs } = useSelector((state) => state.blogSliceApp.blogs);

  const [recentBlogs, setRecentBlogs] = useState([]);

  const { theme } = useSelector((state) => state.themeSliceApp);

  const [loading, setLoading] = useState(false);




  useEffect(() => {

    const getAllBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/blog/get-all-blogs?limit=9`);

        if (response.status === 200) {
          setRecentBlogs(response.data.blogs)
          setLoading(false)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error.message);
      }
    }
    getAllBlogs();
  }, []);



  return (
    <>
      <div className="">

        <div className="mt-32 flex justify-around flex-wrap gap-4">


          {/* left content  */}
          <div className="flex flex-col gap-5 w-10/12 md:w-1/2">

            <motion.h1 className='md:text-4xl lg:text-4xl text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-300'

              initial={{ x: -50 }}
              animate={{ x: 10 }}
              transition={{
                duration: 1,
                delay: 0,
              }}
            >
              <p>Hello and welcome to my blog!</p>
              <p>I'm thrilled to have you here.</p>
            </motion.h1>



            <hr className='' />

            <motion.p className='text-sm text-justify  leading-8'

              initial={{ x: 50 }}
              animate={{ x: 10 }}
              transition={{
                duration: 1,
                delay: 0
              }}

            >
              Hello and welcome to my tech corner! 🖥️ I’m Rakesh, a passionate <span className='text-blue-400 font-semibold'>MERN Stack</span> developer. Explore my latest projects, tutorials, and insights into web development. Here you'll find a variety of articles topics such on web development,and programming languages
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <GithubCard />

        </div>

        <h1 className='text-2xl text-center my-5'>Recent Blogs</h1>

        {
          loading ?

            <span className='flex justify-center w-full my-5'>
              <Spinner />
            </span>

            :
            // <div className="flex md:items-start lg:items-start items-center flex-wrap gap-5  ">
            //   {
            //     recentBlogs && recentBlogs.map((value, index) => {
            //       return (
            //         <div key={index} className={`w-full pb-2 flex border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
            //           <Link to={`/blog/${value.slug}`}>
            //             <img src={value.blogImgFile} className='hover:scale-[99%] duration-300 object-cover  transition-all w-72  rounded-tl-md rounded-br-md' />

            //             <div className="px-3">
            //               <p className='text-lg md:text-xl'>{value.blogTitle}</p>
            //               <span className='text-xs md:text-sm w-20 text-center border px-4 rounded-full'>{value.blogCategory}</span>
            //             </div>
            //           </Link>
            //         </div>
            //       )
            //     })
            //   }
            // </div>


            <div className={`grid lg:grid-cols-3 xl:grid-cols-4  md:grid-cols-2 grid-cols-1  gap-4    ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} `}>
              {
                recentBlogs && recentBlogs.map((val, idx) => {
                  return (
                    <Link to={`/blog/${val.slug}`} className={`w-72 border pb-1 place-self-center  rounded-md   ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`} key={idx}>
                      <img src={val.blogImgFile} alt="blog image" className='w-full h-40 rounded-sm object-cover' />
                      <h1 className='md:text-base lg:text-lg text-sm mx-2 font-[500]'>{val.blogTitle}</h1>
                      <p className='text-sm border inline mx-2  px-3 rounded-full text-left '>{val.blogCategory}</p>
                    </Link>
                  )
                })
              }
            </div>

        }
      </div >
    </>
  )
}
export default Home;