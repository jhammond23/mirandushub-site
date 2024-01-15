import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

 
/* Images */

import archStanImg from './NFTpics/buildings/archery/archStand.png';
import archImg from './NFTpics/buildings/archery/archery.png';
import largArchImg from './NFTpics/buildings/archery/largArch.png';
import armoStanImg from './NFTpics/buildings/armory/armoStand.png';
import armoImg from './NFTpics/buildings/armory/armo.png';
import largArmoImg from './NFTpics/buildings/armory/largArmo.png';
import granArmoImg from './NFTpics/buildings/armory/granArmo.png';
import majeArmoImg from './NFTpics/buildings/armory/majeArmo.png';
import bake from './NFTpics/buildings/bakery/bake.png';
import largBake from './NFTpics/buildings/bakery/largBake.png';
import breaStan from './NFTpics/buildings/Bread/breaStan.png';
import barn from './NFTpics/buildings/Barns/barn.png';
import largBarn from './NFTpics/buildings/Barns/largBarn.png';
import brew from './NFTpics/buildings/Brewery/brew.png';
import largBrew from './NFTpics/buildings/Brewery/largBrew.png';
import butc from './NFTpics/buildings/Butchery/butc.png';
import largButc from './NFTpics/buildings/Butchery/largButc.png';
import campImg from './NFTpics/buildings/camp.png';
import ceme from './NFTpics/buildings/Cemetery/ceme.png';
import largCeme from './NFTpics/buildings/Cemetery/largCeme.png';
import granCeme from './NFTpics/buildings/Cemetery/granCeme.png';
import dair from './NFTpics/buildings/Dairy/dair.png';
import largDair from './NFTpics/buildings/Dairy/largDair.png';
import simpForg from './NFTpics/buildings/Forge/simpForg.jpg';
import forg from './NFTpics/buildings/Forge/forg.png';
import largForg from './NFTpics/buildings/Forge/largForg.jpg';
import granForg from './NFTpics/buildings/Forge/granForg.jpg';
import majeForg from './NFTpics/buildings/Forge/majeForg.jpg';
import graiStan from './NFTpics/buildings/Grain/graiStan.jpg';
import tent from './NFTpics/buildings/Tent/tent.jpg';
import largInn from './NFTpics/buildings/Inn/largInn.jpg';
import granInn from './NFTpics/buildings/Inn/granInn.jpg';
import majeInn from './NFTpics/buildings/Inn/majeInn.jpg';
import jeweStan from './NFTpics/buildings/Jeweler/jeweStan.jpg';
import jewe from './NFTpics/buildings/Jeweler/jewe.jpg';
import largJewe from './NFTpics/buildings/Jeweler/largJewe.jpg';
import meatStan from './NFTpics/buildings/Meat/meatStan.jpg';
import milkStan from './NFTpics/buildings/Milk/milkStan.jpg';
import mill from './NFTpics/buildings/Mill/mill.jpg';
import largMill from './NFTpics/buildings/Mill/largMill.jpg';
import outf from './NFTpics/buildings/Outfitter/outf.png';
import largOutf from './NFTpics/buildings/Outfitter/largOutf.png';
import potiStan from './NFTpics/buildings/Potion/potiStan.jpg';
import potiShop from './NFTpics/buildings/Potion/potiShop.jpg';
import largPotiShop from './NFTpics/buildings/Potion/largPotiShop.jpg';
import hitc from './NFTpics/buildings/Hitch/hitc.jpg';
import stab from './NFTpics/buildings/Stable/stab.jpg';
import largStab from './NFTpics/buildings/Stable/largStab.jpg';
import granStab from './NFTpics/buildings/Stable/granStab.jpg';
import majeStab from './NFTpics/buildings/Stable/majeStab.jpg';
import stonShop from './NFTpics/buildings/Stonecraft/stonShop.png';
import largSton from './NFTpics/buildings/Stonecraft/largSton.png';
import simpSH from './NFTpics/buildings/StoreHouse/simpSH.jpg';
import SH from './NFTpics/buildings/StoreHouse/SH.jpg';
import largSH from './NFTpics/buildings/StoreHouse/largSH.jpg';
import granSH from './NFTpics/buildings/StoreHouse/granSH.jpg';
import simpTane from './NFTpics/buildings/Tannery/simpTane.png';
import tane from './NFTpics/buildings/Tannery/tane.png';
import largTane from './NFTpics/buildings/Tannery/largTane.png';
import tave from './NFTpics/buildings/Tavern/tave.jpg';
import largTave from './NFTpics/buildings/Tavern/largTave.jpg';
import granTave from './NFTpics/buildings/Tavern/granTave.jpg';
import temp from './NFTpics/buildings/Temple/temp.jpg';
import largTemp from './NFTpics/buildings/Temple/largTemp.jpg';
import granTemp from './NFTpics/buildings/Temple/granTemp.jpg';
import majeTemp from './NFTpics/buildings/Temple/majeTemp.jpg';
import weapStan from './NFTpics/buildings/Weapon/weapStan.jpg';
import weapShop from './NFTpics/buildings/Weapon/weapShop.jpg';
import largWeapShop from './NFTpics/buildings/Weapon/largWeapShop.jpg';
import granWeapShop from './NFTpics/buildings/Weapon/granWeapShop.jpg';
import majeWeapShop from './NFTpics/buildings/Weapon/majeWeapShop.jpg';
import woodStan from './NFTpics/buildings/Wood/woodStan.jpg';
import wood from './NFTpics/buildings/Wood/wood.jpg';
import largWood from './NFTpics/buildings/Wood/largWood.jpg';
import simpGran from './NFTpics/buildings/Granary/simpGran.jpg';
import clotStan from './NFTpics/buildings/Outfitter/clotStan.jpg';

/* land deeds */
import homesteadLayout from './NFTpics/landDeeds/homestead/homesteadLayout.png';
import outpostLayout from './NFTpics/landDeeds/outpost/outpostLayout.png';
import farmingHamletLayout from './NFTpics/landDeeds/hamlet/farmingHamletLayout.png';
import ranchingHamletLayout from './NFTpics/landDeeds/hamlet/ranchingHamletLayout.png';
import villageOfTheBaronLayout from './NFTpics/landDeeds/village/villageOfTheBaronLayout.png';
import villageOfTheEarlLayout from './NFTpics/landDeeds/village/villageOfTheEarlLayout.png';
import villageOfTheFarmerLayout from './NFTpics/landDeeds/village/villageOfTheFarmerLayout.png';
import villageOfTheViscountLayout from './NFTpics/landDeeds/village/villageOfTheViscountLayout.png';
import townOfTheArchDukeLayout from './NFTpics/landDeeds/town/townOfTheArchDukeLayout.png';
import townOfTheDukeLayout from './NFTpics/landDeeds/town/townOfTheDukeLayout.png';
import townOfTheMarquessLayout from './NFTpics/landDeeds/town/townOfTheMarquessLayout.png';
import townOfThePrinceLayout from './NFTpics/landDeeds/town/townOfThePrinceLayout.png';


const BuildingSpot = ({ position, size, onSelect }) => {
    return (
        <div 
            className="building-spot"
            style={{
                position: 'absolute',
                top: position.y,
                left: position.x,
                width: size.width,
                height: size.height,
                border: '1px solid transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease',
                padding: '5px',
                textAlign: 'center'
            }}
            onClick={() => onSelect(position)}
        >
            <style>
                {`
                    .building-spot:hover {
                        background: #11111190;
                    }

                    .building-spot span {
                        color: transparent;
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }

                    .building-spot:hover span {
                        color: white;
                    }
                `}
            </style>
            <span>?</span>
        </div>
    );
};

function ColorPalette({ onColorSelected }) {
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFFFFF", "#000000"];
    return (
        <div className="color-palette">
            {colors.map((color, index) => (
                <div 
                    key={index} 
                    className="color-swatch" 
                    style={{ backgroundColor: color }}
                    onClick={() => onColorSelected(color)}
                ></div>
            ))}
        </div>
    );
}


const BuildingDropdown = ({ position, buildings, size, onSelect }) => {
    const filteredBuildings = buildings.filter(building => building.size === size);

    return (
        <select 
            style={{
                position: 'absolute',
                top: position.y,
                left: position.x,
                zIndex: 10,
                padding: '8px 12px',
                border: '1px solid grey',
                borderRadius: '4px',
                fontSize: '14px',
                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
                appearance: 'none',
                cursor: 'pointer'
            }}
            onChange={(e) => onSelect(e.target.value)}
            onBlur={() => onSelect(null)} // Hide dropdown when it loses focus
        >
            <option value="">Select a building</option>
            {filteredBuildings.map(building => (
                <option key={building.id} value={building.id}>
                    {building.name}
                </option>
            ))}
        </select>
    );
};

const InteractiveDeedPage = () => {
    const { deedName } = useParams();
    const location = useLocation();
    const [selectedColor, setSelectedColor] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);  // New state for edit mode
    const [buildingColors, setBuildingColors] = useState({});


const defaultDeedImages = {
    "Homestead": homesteadLayout,
    "Outpost": outpostLayout,
    "Farming Hamlet": farmingHamletLayout,
    "Ranching Hamlet": ranchingHamletLayout,
    "Village of the Baron": villageOfTheBaronLayout,
    "Village of the Earl": villageOfTheEarlLayout,
    "Village of the Farmer": villageOfTheFarmerLayout,
    "Village of the Viscount": villageOfTheViscountLayout,
    "Town of the Arch Duke": townOfTheArchDukeLayout,
    "Town of the Duke": townOfTheDukeLayout,
    "Town of the Marquess": townOfTheMarquessLayout,
    "Town of the Prince": townOfThePrinceLayout,
};

    const flatImg = location.state && location.state.flatImg ? location.state.flatImg : defaultDeedImages[deedName];

    const [selectedSpot, setSelectedSpot] = useState(null);
    const [placedBuildings, setPlacedBuildings] = useState([]);

    const buildings = [
        { id: 8, name: 'Archery', size: '10x10', Img: archImg },
        { id: 9, name: 'Large Archery', size: '10x20', Img: largArchImg },
        { id: 2, name: 'Archery Stand', size: '5x5', Img: archStanImg },
        { id: 10, name: 'Armory Stand', size: '5x5', Img: armoStanImg },
        { id: 11, name: 'Armory', size: '10x10', Img: armoImg },
        { id: 13, name: 'Grand Armory', size: '20x20', Img: granArmoImg },
        { id: 12, name: 'Large Armory', size: '10x20', Img: largArmoImg },
        { id: 14, name: 'Majestic Armory', size: '20x40', Img: majeArmoImg },
        { id: 15, name: 'Bakery', size: '10x10', Img: bake },
        { id: 16, name: 'Large Bakery', size: '10x20', Img: largBake },
        { id: 18, name: 'Barn', size: '10x10', Img: barn },
        { id: 19, name: 'Large Barn', size: '10x20', Img: largBarn },
        { id: 17, name: 'Bread Stand', size: '5x5', Img: breaStan },
        { id: 20, name: 'Brewery', size: '10x10', Img: brew },
        { id: 21, name: 'Large Brewery', size: '10x20', Img: largBrew },
        { id: 22, name: 'Butchery', size: '10x10', Img: butc },
        { id: 23, name: 'Large Butchery', size: '10x20', Img: largButc },
        { id: 24, name: 'Camp', size: '10x10', Img: campImg },
        { id: 25, name: 'Cemetery', size: '10x10', Img: ceme },
        { id: 27, name: 'Grand Cemetery', size: '20x20', Img: granCeme },
        { id: 26, name: 'Large Cemetery', size: '10x20', Img: largCeme },
        { id: 74, name: 'Clothing Stand', size: '5x5', Img: clotStan }, 
        { id: 28, name: 'Dairy', size: '10x10', Img: dair },
        { id: 29, name: 'Large Dairy', size: '10x20', Img: largDair },
        { id: 3, name: 'Forge', size: '10x10', Img: forg },
        { id: 6, name: 'Grand Forge', size: '20x20', Img: granForg },
        { id: 5, name: 'Large Forge', size: '10x20', Img: largForg },
        { id: 7, name: 'Majestic Forge', size: '20x40', Img: majeForg },
        { id: 4, name: 'Simple Forge', size: '5x5', Img: simpForg },
        { id: 30, name: 'Grain Stand', size: '5x5', Img: graiStan },
        { id: 33, name: 'Grand Inn', size: '20x20', Img: granInn },
        { id: 49, name: 'Grand Stable', size: '20x20', Img: granStab },
        { id: 56, name: 'Grand StoreHouse', size: '20x20', Img: granSH },
        { id: 62, name: 'Grand Tavern', size: '20x20', Img: granTave },
        { id: 65, name: 'Grand Temple', size: '20x20', Img: granTemp },
        { id: 70, name: 'Grand Weapon Shop', size: '20x20', Img: granWeapShop },
        { id: 75, name: 'Simple Granary', size: '5x5', Img: simpGran }, 
        { id: 1, name: 'Hitching Post', size: '5x5', Img: hitc },
        { id: 32, name: 'Large Inn', size: '10x20', Img: largInn },
        { id: 37, name: 'Large Jeweler', size: '10x20', Img: largJewe },
        { id: 41, name: 'Large Mill', size: '10x20', Img: largMill },
        { id: 43, name: 'Large Outfitter', size: '10x20', Img: largOutf },
        { id: 46, name: 'Large Potion Shop', size: '10x20', Img: largPotiShop },
        { id: 48, name: 'Large Stable', size: '10x20', Img: largStab },
        { id: 55, name: 'Large StoreHouse', size: '10x20', Img: largSH },
        { id: 61, name: 'Large Tavern', size: '10x20', Img: largTave },
        { id: 64, name: 'Large Temple', size: '10x20', Img: largTemp },
        { id: 69, name: 'Large Weapon Shop', size: '10x20', Img: largWeapShop },
        { id: 74, name: 'Large Wood', size: '10x20', Img: largWood },
        { id: 36, name: 'Jeweler', size: '10x10', Img: jewe },
        { id: 35, name: 'Jeweler Stand', size: '5x5', Img: jeweStan },
        { id: 34, name: 'Majestic Inn', size: '20x40', Img: majeInn },
        { id: 50, name: 'Majestic Stable', size: '20x40', Img: majeStab },
        { id: 66, name: 'Majestic Temple', size: '20x40', Img: majeTemp },
        { id: 71, name: 'Majestic Weapon Shop', size: '20x40', Img: majeWeapShop },
        { id: 38, name: 'Meat Stand', size: '5x5', Img: meatStan },
        { id: 39, name: 'Milk Stand', size: '5x5', Img: milkStan },
        { id: 40, name: 'Mill', size: '10x10', Img: mill },
        { id: 42, name: 'Outfitter', size: '10x10', Img: outf },
        { id: 44, name: 'Potion Stand', size: '5x5', Img: potiStan },
        { id: 45, name: 'Potion Shop', size: '10x10', Img: potiShop },
        { id: 47, name: 'Stable', size: '10x10', Img: stab },
        { id: 53, name: 'Simple StoreHouse', size: '5x5', Img: simpSH },
        { id: 57, name: 'Simple Tannery', size: '5x5', Img: simpTane },
        { id: 54, name: 'StoreHouse', size: '10x10', Img: SH },
        { id: 52, name: 'Large Stonecraft', size: '10x20', Img: largSton },
        { id: 51, name: 'Stonecraft Shop', size: '10x10', Img: stonShop },
        { id: 59, name: 'Large Tannery', size: '10x20', Img: largTane },
        { id: 58, name: 'Tannery', size: '10x10', Img: tane },
        { id: 60, name: 'Tavern', size: '10x10', Img: tave },
        { id: 63, name: 'Temple', size: '10x10', Img: temp },
        { id: 31, name: 'Tent', size: '5x5', Img: tent },
        { id: 68, name: 'Weapon Shop', size: '10x10', Img: weapShop },
        { id: 67, name: 'Weapon Stand', size: '5x5', Img: weapStan },
        { id: 73, name: 'Wood', size: '10x10', Img: wood },
        { id: 72, name: 'Wood Stand', size: '5x5', Img: woodStan },
    ];    

    const deedBuildingSpots = {
        'Homestead': [
            { x: '60%', y: '43%', size: '5x5' },
        ],
        'Outpost': [
            { x: '38%', y: '71%', size: '5x5'},
            { x: '56%', y: '50%', size: '5x5'},
            { x: '58.3%', y: '60.5%', size: '5x5'},
            { x: '56%', y: '71%', size: '5x5'},
            { x: '32%', y: '50%', size: '10x10'},
            
        ],
        'Farming Hamlet': [
            { x: '46%', y: '39.2%', size: '5x5'},
            { x: '46%', y: '53.3%', size: '5x5'},
            { x: '54%', y: '53.5%', size: '5x5'},
            { x: '54%', y: '60.2%', size: '5x5'},
            { x: '41.9%', y: '60.5%', size: '10x10'},
            { x: '37.8%', y: '32.4%', size: '10x10'},
            { x: '57.9%', y: '53.5%', size: '10x10'},
        ],
        'Ranching Hamlet': [
            { x: '25.8%', y: '49.8%', size: '5x5'},
            { x: '25.8%', y: '68%', size: '5x5'},
            { x: '29%', y: '77%', size: '5x5'},
            { x: '36.2%', y: '77%', size: '5x5'},
            { x: '39.4%', y: '68%', size: '5x5'},
            { x: '58.3%', y: '40.7%', size: '10x10'},
            { x: '58.3%', y: '68%', size: '10x10'},
            { x: '44.7%', y: '68%', size: '10x10'},
        ],
        'Village of the Baron': [
            { x: '58.5%', y: '49.8%', size: '5x5'},
            { x: '62.7%', y: '49.8%', size: '5x5'},
            { x: '62.7%', y: '57%', size: '5x5'},
            { x: '62.7%', y: '64.3%', size: '5x5'},
            { x: '58.5%', y: '71.9%', size: '5x5'},
            { x: '54.1%', y: '71.9%', size: '5x5'},
            { x: '49.8%', y: '71.9%', size: '5x5'},
            { x: '49.8%', y: '64.3%', size: '5x5'},
            { x: '28.5%', y: '49.8%', size: '10x10'},
            { x: '37%', y: '49.8%', size: '10x10'},
            { x: '37%', y: '72%', size: '10x10'},
            { x: '28.5%', y: '72%', size: '10x10'},
            { x: '49.8%', y: '12.6%', size: '10x10'},
            { x: '49.8%', y: '27.5%', size: '10x10'},
            { x: '62.7%', y: '12.6%', size: '10x10'},
            { x: '62.7%', y: '27.5%', size: '10x10'},
        ],
        'Village of the Earl': [
            { x: '18%', y: '25%', size: '5x5'},
            { x: '18%', y: '68.1%', size: '5x5'},
            { x: '49.9%', y: '18.9%', size: '5x5'},
            { x: '53.5%', y: '18.9%', size: '5x5'},
            { x: '64.1%', y: '18.9%', size: '5x5'},
            { x: '67.8%', y: '18.9%', size: '5x5'},
            { x: '60.6%', y: '18.9%', size: '5x5'},
            { x: '71.3%', y: '18.9%', size: '5x5'},
            { x: '78.4%', y: '18.9%', size: '5x5'},
            { x: '49.9%', y: '74.3%', size: '5x5'},
            { x: '53.5%', y: '74.3%', size: '5x5'},
            { x: '64.1%', y: '74.3%', size: '5x5'},
            { x: '67.8%', y: '74.3%', size: '5x5'},
            { x: '60.6%', y: '74.3%', size: '5x5'},
            { x: '71.3%', y: '74.3%', size: '5x5'},
            { x: '78.4%', y: '74.3%', size: '5x5'},
            { x: '32.2%', y: '19%', size: '10x10'},
            { x: '39.3%', y: '19%', size: '10x10'},
            { x: '42.9%', y: '31.2%', size: '10x10'},
            { x: '50%', y: '31.2%', size: '10x10'},
            { x: '60.6%', y: '31.2%', size: '10x10'},
            { x: '67.8%', y: '31.2%', size: '10x10'},
            { x: '78.4%', y: '31.2%', size: '10x10'},
            { x: '50%', y: '55.8%', size: '10x10'},
            { x: '60.6%', y: '55.8%', size: '10x10'},
            { x: '67.8%', y: '55.8%', size: '10x10'},
            { x: '78.4%', y: '55.8%', size: '10x10'},
            { x: '42.9%', y: '55.8%', size: '10x10'},
            { x: '32.2%', y: '68.3%', size: '10x20'},
        ],
        'Village of the Farmer': [
            { x: '39.7%', y: '37%', size: '5x5'},
            { x: '54.3%', y: '37%', size: '5x5'},
            { x: '36.8%', y: '52.4%', size: '5x5'},
            { x: '36.8%', y: '62.2%', size: '5x5'},
            { x: '31%', y: '72.3%', size: '5x5'},
            { x: '42.6%', y: '72.3%', size: '5x5'},
            { x: '42.6%', y: '77.8%', size: '5x5'},
            { x: '57.2%', y: '52.3%', size: '5x5'},
            { x: '57.2%', y: '62.5%', size: '5x5'},
            { x: '51.3%', y: '72.3%', size: '5x5'},
            { x: '51.3%', y: '77.8%', size: '5x5'},
            { x: '63%', y: '72.3%', size: '5x5'},
            { x: '39.7%', y: '47.3%', size: '10x10'},
            { x: '39.7%', y: '62.4%', size: '10x10'},
            { x: '51.3%', y: '47.3%', size: '10x10'},
            { x: '51.3%', y: '62.4%', size: '10x10'},
        ],
        'Village of the Viscount': [
            { x: '32.1%', y: '34.5%', size: '5x5'},
            { x: '28.5%', y: '77.9%', size: '5x5'},
            { x: '46.3%', y: '84%', size: '5x5'},
            { x: '49.8%', y: '84%', size: '5x5'},
            { x: '60.5%', y: '84%', size: '5x5'},
            { x: '57%', y: '84%', size: '5x5'},
            { x: '71.2%', y: '65.4%', size: '5x5'},
            { x: '71.2%', y: '59%', size: '5x5'},
            { x: '71.2%', y: '46.8%', size: '5x5'},
            { x: '71.2%', y: '40.5%', size: '5x5'},
            { x: '67.6%', y: '9.5%', size: '5x5'},
            { x: '42.8%', y: '15.9%', size: '5x5'},
            { x: '28.5%', y: '59%', size: '10x10'},
            { x: '35.7%', y: '59%', size: '10x10'},
            { x: '35.7%', y: '71.5%', size: '10x10'},
            { x: '46.3%', y: '59%', size: '10x10'},
            { x: '46.3%', y: '71.5%', size: '10x10'},
            { x: '56.9%', y: '71.5%', size: '10x10'},
            { x: '64%', y: '59.2%', size: '10x10'},
            { x: '56.9%', y: '9.7%', size: '10x10'},
            { x: '56.9%', y: '22%', size: '10x10'},
            { x: '64%', y: '22%', size: '10x10'},
            { x: '56.9%', y: '40.5%', size: '10x20'},

        ],
        'Town of the Arch Duke': [
            { x: '47.1%', y: '8.7%', size: '5x5'},
            { x: '47.1%', y: '13.2%', size: '5x5'},
            { x: '47.1%', y: '15.9%', size: '5x5'},
            { x: '47.1%', y: '18.5%', size: '5x5'},
            { x: '47.1%', y: '20.7%', size: '5x5'},
            { x: '47.1%', y: '28%', size: '5x5'},
            { x: '47.1%', y: '25.6%', size: '5x5'},
            { x: '47.1%', y: '32.9%', size: '5x5'},
            { x: '47.1%', y: '35.5%', size: '5x5'},
            { x: '51.2%', y: '8.7%', size: '5x5'},
            { x: '51.2%', y: '13.2%', size: '5x5'},
            { x: '51.2%', y: '15.9%', size: '5x5'},
            { x: '51.2%', y: '18.5%', size: '5x5'},
            { x: '51.2%', y: '20.7%', size: '5x5'},
            { x: '51.2%', y: '28%', size: '5x5'},
            { x: '51.2%', y: '25.6%', size: '5x5'},
            { x: '51.2%', y: '32.9%', size: '5x5'},
            { x: '51.2%', y: '35.5%', size: '5x5'},
            { x: '40.2%', y: '20.7%', size: '5x5'},
            { x: '38.7%', y: '20.7%', size: '5x5'},
            { x: '59.7%', y: '20.7%', size: '5x5'},
            { x: '58.2%', y: '20.7%', size: '5x5'},
            { x: '29%', y: '50%', size: '20x20'},
            { x: '34.7%', y: '50%', size: '20x20'},
            { x: '59.5%', y: '50%', size: '20x20'},
            { x: '42.9%', y: '25.6%', size: '10x10'},
            { x: '42.9%', y: '32.8%', size: '10x10'},
            { x: '42.9%', y: '37.8%', size: '10x10'},
            { x: '40.1%', y: '37.8%', size: '10x10'},
            { x: '40.1%', y: '32.8%', size: '10x10'},
            { x: '54%', y: '25.6%', size: '10x10'},
            { x: '54%', y: '32.8%', size: '10x10'},
            { x: '54%', y: '37.8%', size: '10x10'},
            { x: '56.8%', y: '32.8%', size: '10x10'},
            { x: '56.8%', y: '37.8%', size: '10x10'},
            { x: '42.9%', y: '73.9%', size: '10x10'},
            { x: '42.9%', y: '81.3%', size: '10x10'},
            { x: '45.8%', y: '73.9%', size: '10x10'},
            { x: '45.8%', y: '81.3%', size: '10x10'},
            { x: '54%', y: '73.9%', size: '10x10'},
            { x: '54%', y: '81.3%', size: '10x10'},
            { x: '51.3%', y: '73.9%', size: '10x10'},
            { x: '51.3%', y: '81.3%', size: '10x10'},
            { x: '65.2%', y: '50%', size: '10x20'},
            { x: '65.2%', y: '54.9%', size: '10x20'},
            { x: '40.1%', y: '66.9%', size: '10x20'},
            { x: '54.1%', y: '66.9%', size: '10x20'},
        ],
        'Town of the Duke': [
            { x: '38.3%', y: '11.6%', size: '5x5'},
            { x: '38.3%', y: '15.5%', size: '5x5'},
            { x: '42.9%', y: '11.6%', size: '5x5'},
            { x: '42.9%', y: '15.5%', size: '5x5'},
            { x: '54.6%', y: '11.6%', size: '5x5'},
            { x: '54.6%', y: '15.5%', size: '5x5'},
            { x: '59.2%', y: '11.6%', size: '5x5'},
            { x: '59.2%', y: '15.5%', size: '5x5'},
            { x: '59.2%', y: '23.6%', size: '5x5'},
            { x: '59.2%', y: '27.8%', size: '5x5'},
            { x: '59.2%', y: '35.7%', size: '5x5'},
            { x: '61.5%', y: '35.7%', size: '5x5'},
            { x: '63.9%', y: '35.7%', size: '5x5'},
            { x: '66.2%', y: '35.7%', size: '5x5'},
            { x: '45.3%', y: '76%', size: '5x5'},
            { x: '45.3%', y: '80.3%', size: '5x5'},
            { x: '45.3%', y: '84.6%', size: '5x5'},
            { x: '52.3%', y: '76%', size: '5x5'},
            { x: '52.3%', y: '80.3%', size: '5x5'},
            { x: '52.3%', y: '84.6%', size: '5x5'},
            { x: '45.3%', y: '23.8%', size: '10x10'},
            { x: '45.3%', y: '31.8%', size: '10x10'},
            { x: '50%', y: '23.8%', size: '10x10'},
            { x: '50%', y: '31.8%', size: '10x10'},
            { x: '31.4%', y: '31.8%', size: '10x10'},
            { x: '36%', y: '31.8%', size: '10x10'},
            { x: '31.4%', y: '47.8%', size: '10x10'},
            { x: '31.4%', y: '55.9%', size: '10x10'},
            { x: '31.4%', y: '72.2%', size: '10x10'},
            { x: '31.4%', y: '80.2%', size: '10x10'},
            { x: '36%', y: '47.8%', size: '10x10'},
            { x: '36%', y: '55.9%', size: '10x10'},
            { x: '36%', y: '72.2%', size: '10x10'},
            { x: '36%', y: '80.2%', size: '10x10'},
            { x: '59.2%', y: '80.2%', size: '10x10'},
            { x: '64%', y: '80.2%', size: '10x10'},
            { x: '59.2%', y: '72.2%', size: '10x20'},
            { x: '59.2%', y: '55.9%', size: '10x20'},
            { x: '59.2%', y: '47.8%', size: '10x20'},
        ],
        'Town of the Marquess': [
            { x: '44.6%', y: '8.2%', size: '5x5'},
            { x: '44.6%', y: '12.9%', size: '5x5'},
            { x: '52.6%', y: '12.9%', size: '5x5'},
            { x: '52.6%', y: '8.2%', size: '5x5'},
            { x: '26%', y: '36%', size: '5x5'},
            { x: '26%', y: '45.2%', size: '5x5'},
            { x: '71.2%', y: '36%', size: '5x5'},
            { x: '71.2%', y: '45.2%', size: '5x5'},
            { x: '31.4%', y: '59%', size: '5x5'},
            { x: '31.4%', y: '63.6%', size: '5x5'},
            { x: '31.4%', y: '73%', size: '5x5'},
            { x: '31.4%', y: '77.5%', size: '5x5'},
            { x: '34%', y: '82%', size: '5x5'},
            { x: '36.6%', y: '82%', size: '5x5'},
            { x: '44.6%', y: '86.5%', size: '5x5'},
            { x: '52.6%', y: '86.5%', size: '5x5'},
            { x: '65.8%', y: '63.6%', size: '5x5'},
            { x: '65.8%', y: '59%', size: '5x5'},
            { x: '36.6%', y: '17.6%', size: '10x10'},
            { x: '36.6%', y: '31.6%', size: '10x10'},
            { x: '36.6%', y: '45.2%', size: '10x10'},
            { x: '31.4%', y: '31.6%', size: '10x10'},
            { x: '31.4%', y: '45.2%', size: '10x10'},
            { x: '58%', y: '17.6%', size: '10x10'},
            { x: '58%', y: '31.6%', size: '10x10'},
            { x: '58%', y: '45.2%', size: '10x10'},
            { x: '63.2%', y: '45.2%', size: '10x10'},
            { x: '63.2%', y: '31.6%', size: '10x10'},
            { x: '63.2%', y: '72.8%', size: '10x10'},
            { x: '58%', y: '72.8%', size: '10x10'},
            { x: '52.6%', y: '72.8%', size: '10x10'},
            { x: '42%', y: '72.8%', size: '10x10'},
            { x: '36.6%', y: '59%', size: '10x20'},
            { x: '52.6%', y: '59%', size: '10x20'},

        ],
        'Town of the Prince': [
            { x: '48.2%', y: '8.9%', size: '5x5'},
            { x: '50%', y: '8.9%', size: '5x5'},
            { x: '50%', y: '12%', size: '5x5'},
            { x: '48.2%', y: '12%', size: '5x5'},
            { x: '43%', y: '69.6%', size: '5x5'},
            { x: '43%', y: '72.5%', size: '5x5'},
            { x: '43%', y: '75.5%', size: '5x5'},
            { x: '46.5%', y: '69.6%', size: '5x5'},
            { x: '46.5%', y: '72.5%', size: '5x5'},
            { x: '46.5%', y: '75.5%', size: '5x5'},
            { x: '51.7%', y: '69.6%', size: '5x5'},
            { x: '51.7%', y: '72.5%', size: '5x5'},
            { x: '51.7%', y: '75.5%', size: '5x5'},
            { x: '55.2%', y: '69.6%', size: '5x5'},
            { x: '55.2%', y: '72.5%', size: '5x5'},
            { x: '55.2%', y: '75.5%', size: '5x5'},
            { x: '32.5%', y: '45.4%', size: '10x10'},
            { x: '36%', y: '45.4%', size: '10x10'},
            { x: '36%', y: '63.5%', size: '10x10'},
            { x: '36%', y: '69.8%', size: '10x10'},
            { x: '32.5%', y: '63.5%', size: '10x10'},
            { x: '32.5%', y: '69.8%', size: '10x10'},
            { x: '60.5%', y: '45.4%', size: '10x10'},
            { x: '64%', y: '45.4%', size: '10x10'},
            { x: '64%', y: '63.5%', size: '10x10'},
            { x: '64%', y: '69.8%', size: '10x10'},
            { x: '60.5%', y: '63.5%', size: '10x10'},
            { x: '60.5%', y: '69.8%', size: '10x10'},
            { x: '32.5%', y: '57.6%', size: '10x20'},
            { x: '41.3%', y: '57.6%', size: '10x20'},
            { x: '51.7%', y: '57.6%', size: '10x20'},
            { x: '60.5%', y: '57.6%', size: '10x20'},
            { x: '32.5%', y: '27.1%', size: '20x20'},
            { x: '60.5%', y: '27.1%', size: '20x20'},

        ],
    };
    

    const buildingSizesConfig = {
            'Homestead': {
                '5x5': { width: '21%', height: '37%' },
            },
            'Outpost': {
                '5x5': { width: '6%', height: '11%' },
                '10x10': { width: '12%', height: '21%' },
            },
            'Farming Hamlet': {
                '5x5': { width: '4%', height: '7%' },
                '10x10': { width: '8.2%', height: '14.1%' },
            },
            'Ranching Hamlet': {
                '5x5': { width: '5.3%', height: '9.1%' },
                '10x10': { width: '10.4%', height: '18%' },
            },
            'Village of the Baron': {
                '5x5': { width: '4.4%', height: '7.8%' },
                '10x10': { width: '8.7%', height: '15%' },
            },
            'Village of the Earl': {
                '5x5': { width: '3.7%', height: '6.8%' },
                '10x10': { width: '7.2%', height: '12.5%' },
                '10x20': { width: '14.4%', height: '12.9%' },
            },
            'Village of the Farmer': {
                '5x5': { width: '3%', height: '5.6%' },
                '10x10': { width: '6%', height: '10.5%' },
            },
            'Village of the Viscount': {
                '5x5': { width: '3.8%', height: '6.3%' },
                '10x10': { width: '7.4%', height: '12.6%' },
                '10x20': { width: '14.4%', height: '12.9%' },
            },
            'Town of the Arch Duke': {
                '5x5': { width: '1.6%', height: '2.8%' },
                '10x10': { width: '3%', height: '5.3%' },
                '10x20': { width: '5.8%', height: '5%' },
                '20x20': { width: '5.8%', height: '9.8%' },
            },
            'Town of the Duke': {
                '5x5': { width: '2.5%', height: '4.2%' },
                '10x10': { width: '4.8%', height: '8.3%' },
                '10x20': { width: '9.6%', height: '8.3%' },
            },
            'Town of the Marquess': {
                '5x5': { width: '2.8%', height: '4.9%' },
                '10x10': { width: '5.4%', height: '9.4%' },
                '10x20': { width: '10.8%', height: '9.6%' },
            },
            'Town of the Prince': {
                '5x5': { width: '1.8%', height: '3.2%' },
                '10x10': { width: '3.6%', height: '6%' },
                '10x20': { width: '7%', height: '6%' },
                '20x20': { width: '7%', height: '12.2%' },
            }      
        // ... other deeds
    };

    const buildingSpots = deedBuildingSpots[deedName] || [];
    
    const handleSpotSelect = (spot) => {
        setSelectedSpot(spot);
    };

    const handleBuildingSelect = (buildingId) => {
        const selectedBuilding = buildings.find(b => b.id === parseInt(buildingId));
        if (selectedBuilding) {
            setPlacedBuildings([...placedBuildings, {
                spot: selectedSpot,
                building: selectedBuilding
            }]);
        }
        setSelectedSpot(null);
    };
    return (
        <div className='r-background'>
            <h2 className='r-deedsBG r-deedInteractiveTitle'>Interactive Deed Mode: <span>{deedName}</span></h2>
            
            {isEditMode && <ColorPalette onColorSelected={(color) => setSelectedColor(color)} />}
    
            <div className='interactivePannel'>

            <Link to="/deeds">
                    <button>Back</button>
                </Link>

                <select onChange={(e) => {
                    if (e.target.value) {
                        window.location.href = e.target.value;
                    }
                }}>
                     <option value="">Select a Deed Type...</option>
        <optgroup label="Homestead">
            <option value="/deeds/Homestead/interactive">Homestead</option>
        </optgroup>
        <optgroup label="Outpost">
            <option value="/deeds/Outpost/interactive">Outpost</option>
        </optgroup>
        <optgroup label="Hamlets">
            <option value="/deeds/Farming%20Hamlet/interactive">Farming Hamlet</option>
            <option value="/deeds/Ranching%20Hamlet/interactive">Ranching Hamlet</option>
        </optgroup>
        <optgroup label="Villages">
            <option value="/deeds/Village%20of%20the%20Baron/interactive">Village of the Baron</option>
            <option value="/deeds/Village%20of%20the%20Earl/interactive">Village of the Earl</option>
            <option value="/deeds/Village%20of%20the%20Farmer/interactive">Village of the Farmer</option>
            <option value="/deeds/Village%20of%20the%20Viscount/interactive">Village of the Viscount</option>
        </optgroup>
        <optgroup label="Towns">
            <option value="/deeds/Town%20of%20the%20Arch%20Duke/interactive">Town of the Arch Duke</option>
            <option value="/deeds/Town%20of%20the%20Duke/interactive">Town of the Duke</option>
            <option value="/deeds/Town%20of%20the%20Marquess/interactive">Town of the Marquess</option>
            <option value="/deeds/Town%20of%20the%20Prince/interactive">Town of the Prince</option>
        </optgroup>
                </select>
                <button onClick={() => setIsEditMode(!isEditMode)}>
                    {isEditMode ? "Hide Highlighter" : "Show Highlighter"}
                </button>
            </div>
    
            <div 
                style={{ 
                    position: 'relative', 
                    width: '100%', 
                    paddingBottom: '56.25%',  // 16:9 aspect ratio
                    border: '0px solid black', 
                    backgroundImage: `url(${flatImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transform: 'scale(80%)',
                    border: '20px solid #291f0e',
                    borderRadius: '25px',
                }}
            >
                {buildingSpots.map((spot, index) => (
                    <BuildingSpot 
                        key={index} 
                        position={spot} 
                        size={buildingSizesConfig[deedName][spot.size]}
                        onSelect={handleSpotSelect}
                    />
                ))}
    
                {selectedSpot && (
                    <BuildingDropdown 
                        position={selectedSpot}
                        buildings={buildings} 
                        size={selectedSpot.size}  // Pass the size of the selected spot
                        onSelect={handleBuildingSelect} 
                    />
                )}
                
                {placedBuildings.map((item, index) => {
                    const building = item.building;
                    const currentBuildingSize = buildingSizesConfig[deedName][building.size];
                    const currentWidthPercentage = parseFloat(currentBuildingSize.width.replace('%', ''));
                    const fontSize = currentWidthPercentage < 5 ? '12px' : '14px';

                    if (isEditMode) {
                        return (
                            <div 
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: item.spot.y,
                                    left: item.spot.x,
                                    width: currentBuildingSize.width,
                                    height: currentBuildingSize.height,
                                    backgroundImage: `url(${building.Img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    cursor: 'pointer',
                                    borderRadius: '5px',
                                    filter: 'brightness(150%)',
                                    color: 'white',
                                    borderColor: buildingColors[index] || 'black',  // Use the stored color if available, else default to black
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    fontSize: fontSize,

                                }}
                                onClick={() => {
                                    if (isEditMode) {
                                        // Update the color for the clicked building
                                        setBuildingColors(prevColors => ({
                                            ...prevColors,
                                            [index]: selectedColor
                                        }));
                                    } else {
                                        setSelectedSpot(item.spot);  // Your existing logic
                                    }
                                }}
                                
                            >
        {currentWidthPercentage >= 2.5 && building.name}
                            </div>
                        );
                    } else {
                        return (
                            <div 
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: item.spot.y,
                                    left: item.spot.x,
                                    width: currentBuildingSize.width,
                                    height: currentBuildingSize.height,
                                    backgroundImage: `url(${building.Img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    cursor: 'pointer',
                                    borderRadius: '5px',
                                    filter: 'brightness(150%)',
                                    color: 'white',
                                    borderColor: buildingColors[index] || 'black',  // Use the stored color if available, else default to black
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    fontSize: fontSize,

                                }}
                                onClick={() => {
                                    if (isEditMode) {
                                        // Update the color for the clicked building
                                        setBuildingColors(prevColors => ({
                                            ...prevColors,
                                            [index]: selectedColor
                                        }));
                                    } else {
                                        setSelectedSpot(item.spot);  // Your existing logic
                                    }
                                }}
                                                            >
        {currentWidthPercentage >= 2.5 && building.name}
                            </div>
                        );
                    }
                })}
            </div>
            <div className='interactiveAfterThought'>
                As most of these deeds are small, please use a computer for best visual results.
            </div>

        </div>
    );
            }

export default InteractiveDeedPage;
