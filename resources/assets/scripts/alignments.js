import { addFilter } from '@wordpress/hooks'

addFilter(
	'blocks.getSaveElement',
	'alignments/addWideWrap',
	addWideWrap
)

addFilter(
	'blocks.getSaveElement',
	'alignments/addFullWrap',
	addFullWrap
)

function addWideWrap (element, blockType, attributes) {
  if (attributes.align !== 'wide') {
		return element
	}
	return (
		<div className='wp-block-wrap wp-block-wide-wrap'>
			{element}
		</div>
  )
}

function addFullWrap (element, blockType, attributes) {
  if (attributes.align !== 'full') {
		return element
	}

	return (
		<div className='wp-block-wrap wp-block-full-wrap'>
			{ element }
		</div>
  )
}

