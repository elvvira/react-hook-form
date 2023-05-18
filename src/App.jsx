import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from './constants/validations';

const App = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					{...register('name', {
						required: FORM_VALIDATIONS['name'].require,
						pattern: {
							value: FORM_VALIDATIONS['name'].pattern,
							message: FORM_VALIDATIONS['name'].message
						}
					})}
				/>
				<p>{errors?.name?.message}</p>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					name='email'
					id='email'
					{...register('email', {
						required: FORM_VALIDATIONS['email'].require,
						pattern: {
							value: FORM_VALIDATIONS['email'].pattern,
							message: FORM_VALIDATIONS['email'].message
						}
					})}
				/>
				{errors.email && <p>{errors.email.message}</p>}
			</div>
			<button>ok</button>
		</form>
	);
};
const onSubmit = data => {
	console.log(data);
};
export default App;
