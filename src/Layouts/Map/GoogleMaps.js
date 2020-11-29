import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
import ButtonAppBar from "../../Components/AppBar/ButtonAppBar";
import useFirestore from "../../Hooks/useFirestore";
import useDatabase from  "../../Hooks/useDatabase";
import  projectAuth from "../../firebaseConfig";
import FooterPage from "../../Components/Footer/footerPage";
import useFire from "../../Hooks/usefire";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 7.0840,
    lng: 80.0098,
};

export default function GoogleMaps() {



    const {docs} = useFirestore('Bins');
    const {mins} = useDatabase('DriverLocation');
    const {eagle} = useFire('Drivers');






    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey:'AIzaSyBjxXtPc46-r1RsHkkbVQcx2uegFaRKIAc',
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>

            <ButtonAppBar/>
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {
                    docs.map((doc) => (
                    <Marker
                        key={`${doc.BinLocation.latitude}-${doc.BinLocation.longitude}`}
                        position={{ lat:doc.BinLocation.latitude, lng:doc.BinLocation.longitude}}
                        onClick={() => {
                            setSelected(doc);
                        }}
                        icon={{
                            url: `/recycle.png`,
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                            scaledSize: new window.google.maps.Size(30, 30),
                        }}
                    />
                ))}



                {

                    eagle.map((doc) =>(

                        doc.login == true ?

                            mins.map((min) => (
                                <Marker
                                    key={`${min.latitude}-${min.longitude}`}
                                    position={{ lat:min.latitude, lng:min.longitude}}
                                    onClick={() => {
                                        setSelected(min);
                                    }}
                                    icon={{
                                        url: `/vehicle.png`,
                                        origin: new window.google.maps.Point(0, 0),
                                        anchor: new window.google.maps.Point(15, 15),
                                        scaledSize: new window.google.maps.Size(45, 45),
                                    }}
                                />
                            ))
                            :null))















                        }










                }


            </GoogleMap>
        </div>
    );
}

function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        >
            <img src="/compass.svg" alt="compass" />
        </button>
    );
}

function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 7.0840, lng: () => 80.0098 },
            radius: 100 * 1000,
        },
    });


    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    return (
        <div className="search">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Search your location"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" &&
                        data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>

    );
    <FooterPage/>
}
