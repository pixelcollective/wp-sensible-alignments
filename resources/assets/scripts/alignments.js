import { addFilter } from '@wordpress/hooks'
import { addWideWrap } from './hooks/alignWide'
import { addFullWrap } from './hooks/alignFull'

addFilter(
	'blocks.getSaveElement',
	'sensible/addWideWrap',
	addWideWrap,
)

addFilter(
	'blocks.getSaveElement',
	'sensible/addFullWrap',
	addFullWrap,
)