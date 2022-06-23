import React from "react";
import { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
  import "../style/Search.css";

function Search() {
    const[address, setAddress] = useState("");
    const [coordinates, setCoordinates ] = useState({
      lat:null,
      lng:null
    })

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const ll = await getLatLng(results[0]);
        console.log(ll);
        setAddress(value)
        setCoordinates(ll)
    }

    return(
        <form className="d-flex search-container" role="search">
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="search-container">
                        <input {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'location-search-input search-bar form-control me-2',
                        })} type="search" aria-label="Search"/>
                        <div className="autocomplete-dropdown-container">
                            {loading && <p>Loading...</p>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                                const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            <button className="search-btn" type="submit"><FiSearch size="25"/></button>
        </form>
    );
}

export default Search;