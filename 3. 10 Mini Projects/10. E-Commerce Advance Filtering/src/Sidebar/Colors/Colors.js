import Input from '../../components/Input'
import './Colors.css'

const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title colors-title'>Colors</h2>

      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test2' />
          <span className='checkmark all'></span> All
        </label>

        <Input handleChange={handleChange} value="black" title="Black" name="test2" color="black" />
        <Input handleChange={handleChange} value="blue" title="Blue" name="test2" color="blue" />
        <Input handleChange={handleChange} value="red" title="Red" name="test2" color="red" />
        <Input handleChange={handleChange} value="green" title="Green" name="test2" color="green" />

        <label className='sidebar-label-container'>
          <input type='radio' onChange={handleChange} value="white" name="test1" />
          <span className='checkmark' style={{backgroundColor:"white", border:"2px solid black"}}></span> White
        </label>
    </div>
  )
}

export default Colors