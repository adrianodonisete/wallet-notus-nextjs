import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SignWith from 'components/Login/SignWith';

import Auth from 'layouts/Auth';

export default function Login() {
	const router = useRouter();

	const [isEntering, setIsEntering] = useState(false);

	const emailRef = useRef();
	const passRef = useRef();

	function loginHandler(event) {
		event.preventDefault();

		const email = emailRef.current.value.trim();
		const password = passRef.current.value.trim();
		finishEnteringHandler();

		if (email === 'adrianodonisete@gmail.com' && password !== '') {
			router.push('/admin/dashboard?ok=pass');
		} else {
			// TODO: return msg error pass
			router.push('/admin/dashboard?error=pass');
		}
	}

	const finishEnteringHandler = () => {
		setIsEntering(false);
	};

	const formFocusedHandler = () => {
		setIsEntering(true);
	};

	return (
		<>
			<div className="container mx-auto px-4 h-full">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-4/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
							<SignWith />

							<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								<div className="text-blueGray-400 text-center mb-3 font-bold">
									<small>sign in with credentials</small>
								</div>

								<form onFocus={formFocusedHandler}>
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Email
										</label>
										<input
											type="email"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white 
                        rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear 
                        transition-all duration-150"
											placeholder="Email"
											ref={emailRef}
										/>
									</div>

									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Password
										</label>
										<input
											type="password"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white 
                        rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear 
                        transition-all duration-150"
											placeholder="Password"
											ref={passRef}
										/>
									</div>
									<div>
										<label className="inline-flex items-center cursor-pointer">
											<input
												id="customCheckLogin"
												type="checkbox"
												className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 
                          ease-linear transition-all duration-150"
											/>
											<span className="ml-2 text-sm font-semibold text-blueGray-600">
												Remember me
											</span>
										</label>
									</div>

									<div className="text-center mt-6">
										<button
											className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold 
                        uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none
                        mr-1 mb-1 w-full ease-linear transition-all duration-150"
											type="button"
											onClick={loginHandler}
										>
											Sign In
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className="flex flex-wrap mt-6 relative">
							<div className="w-1/2">
								<a href="#pablo" onClick={e => e.preventDefault()} className="text-blueGray-200">
									<small>Forgot password?</small>
								</a>
							</div>
							<div className="w-1/2 text-right">
								<Link href="/auth/register">
									<a href="#pablo" className="text-blueGray-200">
										<small>Create new account</small>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Login.layout = Auth;
