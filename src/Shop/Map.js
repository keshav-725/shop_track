import React, { useEffect, useState } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap ,Marker} from 'react-google-maps'
import icon from "./res.svg"

const Map =()=> {
    const [shop, setshop] = useState([])
    useEffect(async () => {
        let data = JSON.stringify({ "success": true, "message": "Data Available", "data": { "business_data": [{ "id": "5", "owner_id": "5", "phone_no": "7874856912", "website": "https:\/\/devfitser.com\/Trendlie\/", "title": "Sharma Industries", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/2d94d0f786b93695e882781ed1574cec.jpg", "membership_type": "2", "coordinate": { "latitude": 22.5221369, "longitude": 88.3946314 }, "avrg_rating": "4.0", "is_offer": 1, "distance": "5.1", "description": "Lorem Ipsum is simply dummy text of the printing a...", "is_favorite": 0 }, { "id": "7", "owner_id": "3", "phone_no": "9123086184", "website": "https:\/\/www.google.com\/s", "title": "Aveda SPA & Salon", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/2d94d0f786b93695e882781ed1574cec.jpg", "membership_type": "1", "coordinate": { "latitude": 22.5746519, "longitude": 88.48223899999999 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "15.6", "description": "Lorem Ipsum is simply dummy text of the printing a...", "is_favorite": 0 }, { "id": "8", "owner_id": "3", "phone_no": "9123056984", "website": "https:\/\/devfitser.com\/Trendlie\/", "title": "Fitser", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/2d94d0f786b93695e882781ed1574cec.jpg", "membership_type": "2", "coordinate": { "latitude": 22.5866518, "longitude": 88.4906402 }, "avrg_rating": "5.0", "is_offer": 0, "distance": "17.1", "description": "egsggs...", "is_favorite": 0 }, { "id": "43", "owner_id": "28", "phone_no": "9836790665", "website": "https:\/\/m.youtube.com\/", "title": "Flight Feathers", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/610023af3b8981627399087.jpg", "membership_type": "1", "coordinate": { "latitude": 22.4854663, "longitude": 88.362889 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "0.3", "description": "Sa sdf...", "is_favorite": 0 }, { "id": "46", "owner_id": "32", "phone_no": "85548598900", "website": "Cbb", "title": "Chhxvdge", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/60fe51e33fd7e.jpg", "membership_type": "1", "coordinate": { "latitude": 22.4854663, "longitude": 88.362889 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "0.3", "description": "Hjj...", "is_favorite": 0 }, { "id": "86", "owner_id": "33", "phone_no": "8013694896", "website": "", "title": "Repair star", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/60ff274b55a401627334475.jpg", "membership_type": null, "coordinate": { "latitude": 22.5134483, "longitude": 88.3812984 }, "avrg_rating": "5.0", "is_offer": 0, "distance": "3.5", "description": "Loream ipsum...", "is_favorite": 0 }, { "id": "88", "owner_id": "39", "phone_no": "1414141414141", "website": "google.com", "title": "Baba ka dhaba", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/61041b8aa17111627659146.jpg", "membership_type": null, "coordinate": { "latitude": 22.5796534, "longitude": 88.459843 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "14.3", "description": "gsggdhdh...", "is_favorite": 0 }, { "id": "89", "owner_id": "32", "phone_no": "07485321553", "website": "B.com", "title": "Test dev", "business_image": "", "membership_type": "2", "coordinate": { "latitude": 22.6419632, "longitude": 88.43087419999999 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "18.7", "description": "Loream ipsum...", "is_favorite": 0 }, { "id": "90", "owner_id": "38", "phone_no": "8961765326", "website": "", "title": "Rest", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/6107fd5ebffe11627913566.jpg", "membership_type": null, "coordinate": { "latitude": 22.6217922, "longitude": 88.4179705 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "16.1", "description": "Test...", "is_favorite": 0 }, { "id": "91", "owner_id": "40", "phone_no": "121212121212", "website": "www.google.com", "title": "Business 1", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/610807dc783b11627916252.jpg", "membership_type": null, "coordinate": { "latitude": 22.5866518, "longitude": 88.4906402 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "17.1", "description": "Business sss...", "is_favorite": 0 }, { "id": "92", "owner_id": "40", "phone_no": "121212121212", "website": "www.google.com", "title": "Business 1", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/61080b4c8f0a11627917132.jpg", "membership_type": null, "coordinate": { "latitude": 22.5866518, "longitude": 88.4906402 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "17.1", "description": "Business sss...", "is_favorite": 0 }, { "id": "93", "owner_id": "42", "phone_no": "8961761876", "website": "", "title": "Salon Beautiful?", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/6109688d11e1b1628006541.jpg", "membership_type": null, "coordinate": { "latitude": 22.5944516, "longitude": 88.3835325 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "12.3", "description": "Test Business, ...", "is_favorite": 0 }, { "id": "94", "owner_id": "42", "phone_no": "8961761876", "website": "", "title": "Beautiful salon", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/610a7257b2bf01628074583.jpg", "membership_type": null, "coordinate": { "latitude": 22.6137645, "longitude": 88.4305721 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "15.8", "description": "Test, Business...", "is_favorite": 0 }, { "id": "95", "owner_id": "44", "phone_no": "896545689", "website": "www.devfitser.com", "title": "Test Now", "business_image": "", "membership_type": "1", "coordinate": { "latitude": 22.5753931, "longitude": 88.47979029999999 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "15.5", "description": "...", "is_favorite": 0 }, { "id": "96", "owner_id": "48", "phone_no": "15815815815", "website": "", "title": "bss", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/61152904345c01628776708.jpg", "membership_type": null, "coordinate": { "latitude": 22.5746519, "longitude": 88.482239 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "15.6", "description": "tell...", "is_favorite": 0 }, { "id": "98", "owner_id": "47", "phone_no": "025365236523665", "website": "", "title": "Greendream", "business_image": "https:\/\/devfitser.com\/Trendlie\/public\/uploads\/business_image\/611537a1def531628780449.jpg", "membership_type": null, "coordinate": { "latitude": 22.5753931, "longitude": 88.4797903 }, "avrg_rating": "0.0", "is_offer": 0, "distance": "15.5", "description": "...", "is_favorite": 0 }], "formatted_address": null } })
        data = JSON.parse(data)
        setshop(data.data.business_data);
    }, [])
    return (
      <div>
          <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 22.4851231, lng: 88.3653907 }}
        >
        {
            shop.map((eachshop)=>{
                return <Marker 
                    key={eachshop.id} 
                    position={{lat:eachshop.coordinate.latitude,lng:eachshop.coordinate.longitude}}
                    icon={icon}
                    />
            })
        }
      </GoogleMap>
      </div>
    )
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default () => (
  <MapComponent
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCeXnXGOCh4IKmCgjMnp-ln8BOp1RyQX3Q&v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100vh`, width: '100vw' }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)
