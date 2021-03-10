import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Checkbox } from 'formik-material-ui';

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
