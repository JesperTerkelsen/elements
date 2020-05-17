import { html, select, storiesOf } from '@open-wc/demoing-storybook';
import { text, withKnobs } from '@storybook/addon-knobs';
import { helpers } from '@tradeshift/elements';

import '@tradeshift/elements.status';
import { STATUS_TYPE } from '../src/utils/constants';
import readme from '../README.md';

storiesOf('ts-status', module)
	.addDecorator(withKnobs)
	.add('default', () => {
			const status = select(
				'Status',
				{
					default: '',
					...helpers.objectKeysChangeCase(STATUS_TYPE)
				},
				''
			);
			const statusText = text('text', 'Ok Danger Note');
			const dir = select(
				'dir',
				{
					ltr: 'ltr',
					rtl: 'rtl'
				},
				'ltr'
			);
			return html`
				<ts-status status="${status}" text="${statusText}" dir="${dir}"> </ts-status>
			`;
		},
		{ notes: readme }
	);
