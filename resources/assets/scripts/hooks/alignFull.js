export const addFullWrap = (element, attributes) => {
  console.log('ping')
  return (attributes.align !== 'full') ?
    element : (
      <div className='wp-block-wrap wp-block-full-wrap'>
        {element}
      </div>
    )
}