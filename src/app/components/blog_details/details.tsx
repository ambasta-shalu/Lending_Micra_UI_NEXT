import React from 'react'
import Image from 'next/image'

const Details = () => {
  return (
    <>
    <div className='ml-40 mr-40 border-2 shadow -mt-24'>
        <Image src="/blog/Newblog.png" alt='blog' width={1163} height={505} />

        <div className="flex items-center mb-2 mt-4 pl-4">

            <Image
              src="/blog/author01.jpg"
              alt="Author"
              height="50"
              width="50"
              className="w-8 h-8 rounded-full mr-2"
            />

            <span className="text-gray-700  text-base font-bold">
              Larry Broker
            </span>

          </div>

        <p className='font-bold text-3xl pl-4 '>A new tool to give even more directly</p>
        <div className="flex mt-2 pl-4">

            <svg

              xmlns="http://www.w3.org/2000/svg"

              fill="none"

              viewBox="0 0 24 24"

              strokeWidth={1.5}

              stroke="currentColor"

              className="w-6 h-6"

              style={{ width: 13.5, height: 13.5, color: "#009DC4" }}

            >

              <path

                strokeLinecap="round"

                strokeLinejoin="round"

                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"

              />

            </svg>

            <p className="text-blue-500 text-xs mb-4 ml-1  font-normal">

              22 Dec, 2022

            </p>
            </div>

            <p className=' pl-4 pr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente aspernatur illo quia blanditiis repellendus quis est, ipsam veritatis voluptatem maxime voluptates libero accusamus, tenetur eius nesciunt aperiam. Amet rem impedit in voluptatum similique, quaerat dolorem, eos aliquid esse facilis voluptas debitis? Laboriosam praesentium deserunt, impedit numquam quo vero eveniet aliquid quasi consequatur quaerat voluptatibus itaque amet excepturi sunt, fugit fuga asperiores ipsam. Excepturi saepe optio expedita illum perspiciatis nam ipsum culpa labore tempora exercitationem? Pariatur quo voluptates maxime ab facere. Culpa omnis mollitia asperiores. Distinctio quo dolorum, autem aut nisi perspiciatis in beatae molestias ab delectus quibusdam dolorem non.</p>

            <p className='mt-2 pl-4 pr-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, in! Illum laudantium temporibus labore dolores pariatur facere ut deserunt nam sunt, adipisci eligendi blanditiis numquam illo quisquam quasi debitis praesentium nisi, excepturi atque alias? Commodi inventore sunt natus dolorem eligendi, ipsa perferendis. Placeat laboriosam repudiandae sequi doloremque reprehenderit necessitatibus totam? Provident quas dolorem labore suscipit quibusdam facere blanditiis dolorum, adipisci, nisi excepturi neque repudiandae corrupti minus temporibus totam! Sed ea rem id, numquam suscipit, voluptatum sunt dolor dolore dignissimos perferendis repellendus molestias nihil error voluptatibus ex distinctio modi illo iure vitae quae maxime! Repudiandae, laudantium! Eligendi quas, ad iste ullam natus accusantium illum labore earum, aspernatur reprehenderit doloribus! Maxime veritatis aliquam reprehenderit, iste animi aperiam, quos, libero voluptas consequuntur beatae dolore numquam magni odit cumque quaerat natus recusandae. Nam soluta eligendi minima quasi deserunt recusandae eaque voluptatibus quae reprehenderit aperiam. Perspiciatis qui doloremque iure vero numquam vitae laborum iusto tenetur magni impedit explicabo repellat dolorum, ut labore est architecto reprehenderit vel placeat! Incidunt odio reprehenderit quia nulla velit beatae est architecto sint et corrupti harum, nobis voluptatibus repellat, quisquam excepturi dignissimos ex. Cupiditate earum alias odit maxime nam quidem? Recusandae rem unde quasi error laborum, sunt ducimus odio fugit eos accusamus iusto inventore tempora quas ipsa molestias, qui necessitatibus, ut ad veniam nam hic dolorem? Fuga quos harum itaque quidem eius quae nihil pariatur saepe tempore dicta veritatis, nobis ducimus repellendus numquam et velit, deserunt omnis ea debitis cupiditate. Labore laboriosam ipsum corrupti voluptate officia illo fugiat fugit sequi perferendis.</p>
    </div>
    </>
  )
}

export default Details