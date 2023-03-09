import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { useRef } from 'react';
import { Camp } from '../buildings/Camp';
import { Archery } from '../buildings/Archery';
import { Armory } from '../buildings/Armory';
import { Bakery } from '../buildings/Bakery';
import { Barn } from '../buildings/Barn';
import { Bread } from '../buildings/Bread';
import { Brewery } from '../buildings/Brewery';
import { Butchery } from '../buildings/Butchery';
import { Cemetery } from '../buildings/Cemetery';
import { Dairy } from '../buildings/Dairy';
import { Forge } from '../buildings/Forge';
import { Grain } from '../buildings/Grain';
import { Granary } from '../buildings/Granary';
import { Inn } from '../buildings/Inn';
import { Stable } from '../buildings/Stable';
import { StoreHouse } from '../buildings/Storehouse';
import { Tavern } from '../buildings/Tavern';
import { Temple } from '../buildings/Temple';
import { Weapon } from '../buildings/Weapon';
import { Hitch } from '../buildings/Hitch';
import { Jeweler } from '../buildings/Jeweler';
import { Mill } from '../buildings/Mill';
import { Potion } from '../buildings/Potion';
import { Wood } from '../buildings/Wood';
import { Meat } from '../buildings/Meat';
import { Milk } from '../buildings/Milk';
import { Tent } from '../buildings/Tent';
import { Outfitter } from '../buildings/Outfitter';
import { Stonecraft } from '../buildings/Stonecraft';
import { Tannery } from '../buildings/Tannery';



const DisplayBuildings = () => {

    const [myBuilding, setmyBuilding] = useState('');
    const buildings = ['Archery', 'Armory', 'Bakery', 'Barn', 'Brewery', 'Butchery', 'Cemetery', 'Dairy', 'Forge', 'Granary', 'Inn', 'Jeweler', 'Mill', 'Outfitter', 'Potion','Stable', 'Stonecraft', 'Storehouse', 'Tannery', 'Tavern', 'Temple', 'Weapon', 'Wood']
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    return (
        <div className='r-background'>
            <div className='r-buildingsBG'>
                <header className='r-buildingSelectorTitle'>UILDING</header>


                <br />

                <div className='r-buildingSelectorContainer'>
                    <div className='r-buildingSelector' ref={ref}>
                        <button className='r-scrollBtnTL' onClick={() => scroll(-900)}></button>

                        {buildings.map((Building) => (
                            <Tilt>
                                <button className={`card deed r-${Building}`}
                                    onClick={() => setmyBuilding(Building)}
                                    key={Building}
                                >
                                    <div className='r-buildingNames'>{Building} <span>Structure Type</span></div>
                                </button>
                            </Tilt>

                        ))}
                        <button className='r-scrollBtnTR' onClick={() => scroll(900)}></button>

                    </div>
                </div>
                <div className='r-background'>
                    {myBuilding === 'Archery' && <Archery />}
                    {myBuilding === 'Armory' && <Armory />}
                    {myBuilding === 'Bakery' && <Bakery />}
                    {myBuilding === 'Barn' && <Barn />}
                    {myBuilding === 'Bread' && <Bread />}
                    {myBuilding === 'Brewery' && <Brewery />}
                    {myBuilding === 'Butchery' && <Butchery />}
                    {myBuilding === 'Camp' && <Camp />}
                    {myBuilding === 'Cemetery' && <Cemetery />}
                    {myBuilding === 'Dairy' && <Dairy />}
                    {myBuilding === 'Forge' && <Forge />}
                    {myBuilding === 'Grain' && <Grain />}
                    {myBuilding === 'Granary' && <Granary />}
                    {myBuilding === 'Inn' && <Inn />}
                    {myBuilding === 'Meat' && <Meat />}
                    {myBuilding === 'Milk' && <Milk />}
                    {myBuilding === 'Mill' && <Mill />}
                    {myBuilding === 'Outfitter' && <Outfitter />}
                    {myBuilding === 'Stable' && <Stable />}
                    {myBuilding === 'Storehouse' && <StoreHouse />}
                    {myBuilding === 'Stonecraft' && <Stonecraft />}
                    {myBuilding === 'Tannery' && <Tannery />}
                    {myBuilding === 'Tavern' && <Tavern />}
                    {myBuilding === 'Temple' && <Temple />}
                    {myBuilding === 'Weapon' && <Weapon />}
                    {myBuilding === 'Hitch' && <Hitch />}
                    {myBuilding === 'Jeweler' && <Jeweler />}
                    {myBuilding === 'Potion' && <Potion />}
                    {myBuilding === 'Wood' && <Wood />}
                    {myBuilding === 'Tent' && <Tent />}
                </div>
            </div>
        </div>
    )
}

export default DisplayBuildings