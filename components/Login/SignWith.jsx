import React from 'react';

export default function SignWith() {
	return (
		<>
			<div className="rounded-t mb-0 px-6 py-6">
				<div className="text-center mb-3">
					<h6 className="text-blueGray-500 text-sm font-bold">Sign in with</h6>
				</div>
				<div className="btn-wrapper text-center">
					<button
						className="bg-white active:bg-blueGray-50 text-blueGray-700 
                      font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
						type="button"
					>
						<img alt="..." className="w-5 mr-1" src="/img/github.svg" />
						Github
					</button>
					<button
						className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
						type="button"
					>
						<img alt="..." className="w-5 mr-1" src="/img/google.svg" />
						Google
					</button>
				</div>
				<hr className="mt-6 border-b-1 border-blueGray-300" />
			</div>
		</>
	);
}
