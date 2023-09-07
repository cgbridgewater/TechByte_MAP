import { useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';


export default function TableRow({ nasaObj }) {
  
  const Google_API = process.env.REACT_APP_GOOGLE_API;
  const [modal, setModal] = useState(false);
  

  
  return (
    <tbody>
      <tr className='border-b border-slate-700'>
        <td className='px-4 py-2'>
          <a href="#" id="myBtn" onClick={() => setModal(true)}>{nasaObj.name}</a>
        </td>
        <td className='px-4 py-2'>
          {nasaObj.year ? new Date(nasaObj.year).getFullYear() : 'N/A'}
        </td>
        <td className='px-4 py-4'>{nasaObj.recclass}</td>
        <td className='px-4 py-4'>{nasaObj.mass ? nasaObj.mass : 'N/A'}</td>
        <td className='px-4 py-4'>
          {nasaObj.locationInfo?.country ? nasaObj.locationInfo.country : 'N/A'}
        </td>
      </tr>
          <PureModal
            width="380px"
            height="380px"
            className='PureModal'
            isOpen={modal}
            onClose={() => {
              setModal(false);
              return true;
            }}
          >

            <iframe
              className="GoogleMap2"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=`+ Google_API +
              `&q=` + `${nasaObj.reclat}` + "," + `${nasaObj.reclong} &zoom=5` }
              >
            </iframe> 

          </PureModal>
    </tbody>
    );
  }