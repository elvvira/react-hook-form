const messages = {
	name: 'El formato introducido no es el correcto',
	requireName: 'El nombre es obligatorio',
	email: 'Debes introducir una dirección correcta',
	requireEmail: 'El email es obligatorio'
};

const patterns = {
	name: /^[A-Za-zñÑáéíóú]*$/,
	email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
};

export const FORM_VALIDATIONS = {
	name: {
		require: messages.requireName,
		pattern: patterns.name,
		message: messages.name
	},
	email: {
		require: messages.requireEmail,
		pattern: patterns.email,
		message: messages.email
	}
};
