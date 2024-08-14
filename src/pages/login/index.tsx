import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../url";
import { toast } from "react-toastify";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";

interface LoginForm {
    username: string;
    password: string;
}

const initialState: LoginForm = {
    username: "",
    password: ""
};

const Login = () => {
    const [eye,setEye] = useState<boolean>(false);
    const [formData, setFormData] = useState<LoginForm>(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('/auth/login', formData);
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            toast.success("Logged In Successfully!");
            navigate('/admin'); // Redirect to dashboard or another page
        } catch (error) {
            console.error(error);
            toast.error("Invalid Username or Password!");
        } finally {
            setIsLoading(false);
            setFormData(initialState);
        }
    };

    return (
        <div className="flex justify-center items-center h-[100vh] flex-col">
            <div>
                <form onSubmit={handleSubmit} className="flex justify-center flex-col w-[350px] bg-slate-200 px-[20px] rounded-lg">
                    <h1 className="text-2xl py-[20px] text-center">Login Form</h1>
                    <label htmlFor="username" className="h-[40px]">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="border h-[40px] outline-none rounded px-[10px]"
                    />
                    <label htmlFor="password" className="py-[10px]">Password</label>
                    <div className="flex justify-between items-center h-[40px]  rounded bg-white  border relative">
                    <input
                        id="password"
                        type={
                            eye ? "text" : "password" 
                          }
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className=" outline-none w-full  h-full flex-1 px-[10px]"
                        
                    />
                      <div className="absolute right-2 top-[50%] -translate-y-[50%]"  onClick={() => setEye(p => !p)} >
                {
                  eye ?     <PiEyeSlashFill />
                  : <PiEyeFill  />
                }
               
                    </div>
                    
                                
                </div>

                    <div className="py-[20px]">
                        <button
                            type="submit"
                            className={`w-[100%] bg-blue-600 h-[40px] text-white text-xl rounded ${isLoading ? 'opacity-50' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                        <Link to={'/'}><p className="text-center mt-[10px]">Logout</p></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
