import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';

const MyAccount = () => {
    const { singInUsingGoogle } = useContext(AuthContext);

    const handleLoginGoogle = () => {
        singInUsingGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error.message);
            })
    }



    return (
        <div>
            {/* my account banner  */}
            <div className='bg-[#95b3e0] text-center'>
                <img src="/images/banner-top.webp" alt="" />
                <h2 className='text-7xl font-mono font-bold py-28'>My Account </h2>
            </div>


            {/* login and register */}
            <div className='lg:flex w-10/12 mx-auto justify-between items-start'>
                <div className=" py-20 px-8 border-1 my-8  rounded-lg lg:border-r-4 lg:pr-20">
                    <h2 className='text-5xl font-bold mb-4 mr-12 font-mono'>Login</h2>
                    <p className='mb-8 text-[#999]'>Welcome back! Please enter your username and password to login.</p>
                    <form className='space-y-5'>
                        <input type="email" placeholder='Enter Email' name='email' className="input input-bordered w-full" /><br />
                        <input type="password" name="password" id="password" placeholder='Enter Password' className="input input-bordered w-full" /><br />
                        <input type="submit" value="Login" className='btn btn-warning w-full bg-[#f379a7] border-0 hover:border-0  hover:bg-[#95b3e0] font-bold text-white' />
                    </form>
                    <div className="divider my-8">OR</div>
                    <button onClick={handleLoginGoogle} className='btn btn-outline w-full'><FcGoogle className='h-6 w-6 mr-2' />Sign In Using Google</button>

                </div>
                {/* Registration Form */}
                <div className="py-20 border-1 my-8 rounded-lg lg:pr-20 px-20">
                    <h2 className='text-5xl font-bold mb-4 mr-12 font-mono'>Register</h2>
                    <p className='text-[#999] mb-8 w-10/12'>Create new account today to reap the benefits of a personalized shopping experience.</p>
                    <form className='space-y-5 w-9/12'>
                        <input type="text" placeholder='Enter Name' name='name' className="input input-bordered w-full" /><br />
                        <input type="email" placeholder='Enter Email' name='email' className="input input-bordered w-full " /><br />
                        <input type="password" name="password" id="password" placeholder='Enter Password' className="input input-bordered w-full " /><br />
                        <input type="text" placeholder='Photo URL' name='photoUrl' className="input input-bordered w-full " /><br />
                        <input type="submit" value="Register" className='btn btn-warning w-full font-bold text-white bg-[#f379a7] border-0 hover:border-0  hover:bg-[#95b3e0]' />
                    </form>
                    <div className="divider my-8 w-2/3">OR</div>
                    <button onClick={handleLoginGoogle} className='btn btn-outline w-2/3'><FcGoogle className='h-6 w-6 mr-2' />Sign Up Using Google</button>

                </div>

            </div>
        </div>

    );
};

export default MyAccount;