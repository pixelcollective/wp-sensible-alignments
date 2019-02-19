export const addWideWrap = (element, attributes) => {
  return (attributes.align !== 'wide') ?
    element : (
      <div className="wp-block-wrap wp-block-wide-wrap">
        {element}
      </div>
    )
}