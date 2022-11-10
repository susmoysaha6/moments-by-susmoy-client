import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MyWorks = () => {
    return (
        <div className='w-11/12 lg:w-3/4 mx-auto my-10'>
            <h3 className='text-center text-2xl font-semibold mb-5 text-slate-700'>Some Photographs By Me</h3>
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
                <PhotoProvider>
                    <PhotoView
                        src='https://i.ibb.co/Bg318fp/jeams.jpg'>
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/Bg318fp/jeams.jpg" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView
                        src="https://i.ibb.co/12wn7Bd/marek-piwnicki-ya-DBRB0-Ea4-E-unsplash.jpg">
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/12wn7Bd/marek-piwnicki-ya-DBRB0-Ea4-E-unsplash.jpg" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView
                        src="https://i.ibb.co/g9ZWqFz/diana-serbichenko-k-Oqx-Ed-AB0y-E-unsplash.jpg">
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/g9ZWqFz/diana-serbichenko-k-Oqx-Ed-AB0y-E-unsplash.jpg" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView
                        src="https://i.ibb.co/RQTj1VW/matias-north-WQUS-i6p-D2s-unsplash.jpg">
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/RQTj1VW/matias-north-WQUS-i6p-D2s-unsplash.jpg" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView
                        src="https://i.ibb.co/gS8ZQFK/kazuend-2-KXEb-8-G5vo-unsplash.jpg">
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/gS8ZQFK/kazuend-2-KXEb-8-G5vo-unsplash.jpg" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView
                        src="https://i.ibb.co/Qpj9VYB/greg-rakozy-o-Mp-Az-DN-9-I-unsplash.jpg">
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/Qpj9VYB/greg-rakozy-o-Mp-Az-DN-9-I-unsplash.jpg" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView
                        src="https://i.ibb.co/YchyDyL/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg">
                        <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/YchyDyL/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg" alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default MyWorks;