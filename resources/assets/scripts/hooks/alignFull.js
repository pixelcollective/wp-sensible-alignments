export const addFullWrap = (element, attributes) => {
  return (attributes.align !== 'full') ?
    element : (
      <div className="wp-block-wrap wp-block-full-wrap">
        {element}
      </div>
    )
}