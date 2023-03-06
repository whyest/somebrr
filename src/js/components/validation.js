import { validateForms } from '../functions/validate-forms';

const rules = [
	{
		ruleSelector: '.input-name',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Complete the name field!',
			},
		],
	},
	{
		ruleSelector: '.input-tel',
		tel: true,
		telError: 'Введите корректный телефон',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Complete the phone field already!',
			},
		],
	},
];

const afterForm = () => {
	console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.form', rules, afterForm);
