import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Checkbox } from '@material-ui/core';

export const App = () => {
	return (
		<Formik
			initialValues={{
				checked: true,
			}}
		>
			{() => (
				<Form>
					<Field component={Checkbox} type="checkbox" name="checked" />;
				</Form>
			)}
		</Formik>
	);
}
