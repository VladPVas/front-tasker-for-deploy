import { useState } from 'react';
import { SignInRequestDTO } from '../../shared/types/interfaces/DTO/SignInRequestDTO';
import { AuthorizationRequest } from '../../shared/api/requests/auth/AuthorizationRequest';
import { SignUpRequestDTO } from '../../shared/types/interfaces/DTO/SignUpRequestDTO';
import { ReqistrationRequest } from '../../shared/api/requests/auth/ReqistrationRequest';
import { setAuth } from '../../shared/api/utils/localStorage/auth';
import { AuthResponseDTO } from '../../shared/types/interfaces/DTO/AuthResponseDTO';

const AuthPage = () => {
	const [authLogin, setAuthLogin] = useState<string>('')
	const [authPassword, setAuthPassword] = useState<string>('')
	const [registrationLogin, setRegistrationLogin] = useState<string>('')
	const [registrationPassword, setRegistrationPassword] = useState<string>('')

	async function AutorizationHandle() {
		if (authLogin && authPassword) {
			const request_body: SignInRequestDTO = {
				username: authLogin,
				password: authPassword
			}

			const response: AuthResponseDTO | undefined = await AuthorizationRequest(request_body)
			if (response) {
				const typeToken = response.tokenType
				const accessToken = response.accessToken
				setAuth(`${typeToken} ${accessToken}`)
			}
		}
	}

	async function RegistrationHandle() {
		if (registrationLogin && registrationPassword) {
			const request_body: SignUpRequestDTO = {
				username: registrationLogin,
				password: registrationPassword
			}

			await ReqistrationRequest(request_body)
		}
	}

	return (
		<div>
			<div>
				<label>
					Login
					<input type="text" onChange={e => setAuthLogin(e.target.value)}/>
				</label>
				<label>
					Password
					<input type="text" onChange={e => setAuthPassword(e.target.value)}/>
				</label>
				<button onClick={AutorizationHandle}>Authorization</button>
			</div>
			<div>
				<label>
					Login
					<input type="text" onChange={e => setRegistrationLogin(e.target.value)}/>
				</label>
				<label>
					Password
					<input type="text" onChange={e => setRegistrationPassword(e.target.value)}/>
				</label>
				<button onClick={RegistrationHandle}>Registration</button>
			</div>
		</div>
	)
}

export default AuthPage