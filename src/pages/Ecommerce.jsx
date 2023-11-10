import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Header } from '../components';
import { Carousel } from 'react-responsive-carousel';
import { useStateContext } from '../contexts/ContextProvider';
const Ecommerce = () => {
  const {currentColor} = useStateContext()
  const backgroundColor = currentColor
    return (
      <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Dashboard' title='NAV-Dash'/>
        <Carousel showArrows={true} swipeable infiniteLoop autoPlay autoFocus>
            <div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb891517445119.562ba0fe19802.jpg" />
                <p className="legend cursor-pointer" style={{backgroundColor}} onClick={() => {
                  window.location.href = "/calendar"
                }}>Calendar app</p>
            </div>
            <div>
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/3ZjLCD2fANfXYSN3ar9WpE/dc84a408c6a3ee89bee4a646ff6d5966/Lists_2x.png" />
                <p className="legend cursor-pointer" style={{backgroundColor}} onClick={() => {
                  window.location.href = "/kanban"
                }}>KanBan app</p>
            </div>
            <div>
                <img src="https://owlhelp.uwo.ca/instructors/tools/rich_text_editor/img/Rich-Text-Editor-Toolbar.png" />
                <p className="legend cursor-pointer" style={{backgroundColor}} onClick={() => {
                  window.location.href = "/editor"
                }}>Text Editor</p>
            </div>
            <div>
                <img src="https://s3-alpha.figma.com/hub/file/767871236/9f42c6f5-eb93-498b-953c-31322c199a3c-cover.png" />
                <p className="legend cursor-pointer" style={{backgroundColor}} onClick={() => {
                  window.location.href = "/color-picker"
                }}>Color Picker</p>
            </div>
        </Carousel>
        <p className='text-center mt-30 text-slate-950 font-extrabold'>
                this is an rich dashboard containing four fully functional apps,which you can use for any purpose 
        </p>

        <p className='text-center bg-black rounded font-semibold w-full text-gray-100 mt-10' style={{backgroundColor}}>
                @All copyright reserved by MankBoard LLC. Just joking you have all rights to use this, Do Not Misuse
        </p>

      </div>
    )
  
}

export default Ecommerce