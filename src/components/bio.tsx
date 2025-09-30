import profileImage from '../assets/images/profile.jpg'

export default function Bio(){
    return(
        <div className="grid grid-cols-3 items-center  py-7">
            <div className="col-span-2">
                <h1 className='text-8xl font-black mb-6'>Katlego Mositi</h1>
                <div className="mt-5 p-8">
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur modi, obcaecati vel sit tempore est voluptatem adipisci sed porro dolore atque officia laboriosam, deleniti iste quasi ipsum nobis explicabo praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem dolorum ipsam deserunt est optio, laudantium dignissimos asperiores obcaecati esse explicabo quis veritatis exercitationem perspiciatis ea voluptatem nihil magni! Minima.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, fuga. Voluptatum ipsam possimus tempora! Eius rerum quibusdam vero dignissimos perferendis, facere eveniet mollitia in consectetur iusto. Magnam voluptate tenetur accusamus.
                    </h4>
                </div>
            </div>
            <div className='flex justify-center' >
                <img className='h-80 w-80 rounded-t-xl object-cover' src={profileImage} alt="profile image" />
            </div>
        </div>
    )
}