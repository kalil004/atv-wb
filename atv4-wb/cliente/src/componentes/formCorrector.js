
export const FormCorrector = ({formCorrector}) =>
  <div className='formCorrector'>
    {Object.keys(formCorrector).map((fieldName, i) => {
      if(formCorrector[fieldName].length > 0){
        return (
          <p key={i}>{fieldName.toUpperCase()} {formCorrector[fieldName].toUpperCase()}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>