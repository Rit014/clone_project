import React from 'react'
import Loader from './Loader'
import Saved from './Saved';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = ({ images, loader, setSave, save }) => {

    const saveImage = (img) => {
        let flag = true;

        if (save !== null && save.length > 0) {
            for (let i = 0; i < save.length; i++) {
                if (save[i].id === img.id) {
                    flag = false;
                    // console.log("Image is already saved");
                    toast.info('Image alreay saved!', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    break;
                }
            }
        }
        if (flag) {
            setSave([...save, img]);
            // console.log("saved Image");
            toast.success('Image Saved!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        };
    }
    return (
        <>
            <ToastContainer />
            {/* <Loader /> */}
            <div className="container-fluid text-center" id='top'>
                {/* <div className="flex"> */}
                {loader ? (
                    <Loader />
                ) : (
                    <>
                        <div className="flex">
                            {images.map((image) => (
                                <div key={image.id} className="items" onClick={() => saveImage(image)}>
                                    <img src={image.src.medium} alt={image.photographer} />
                                </div>
                            ))}
                        </div>
                    </>
                )}
                {images.length != 0 && (
                    <a href='#top' className="btn btn-warning my-5">Back To Top </a>
                )}

            </div>
        </>
    )
}

export default Home
