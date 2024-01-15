import React, { useState } from 'react';

const ActionSequence = () => {
  const [checked, setChecked] = useState(Array(21).fill(false)); 

  const steps = [
    'Collect 150 x Pine',
    'Collect 72 x Flax',
    'Craft Club',
    'Craft Short Bow',
    'Craft Padded Armor',
    'Collect 28 x Deer Skin',
    'Collect 10 x Deer Parts',
    'Craft Leather Armor Set',
    'Collect 40 x Ash',
    'Craft Champion Bow',
    'Collect 80 x Coal',
    'Collect 40 x Iron Ore',
    'Craft Champion Sword',
    'Collect 18 x Wolf Skin',
    'Craft Champion Spear',
    'Collect 3 x Onyx',
    'Craft Brigandine Gloves',
    'Collect 6 x Onyx',
    'Craft Brigandine Boots',
    'Collect 12 x Onyx',
    'Craft Brigandine Chest',
  ];

  const getTotals = () => {
    const resourceCounts = {
      pine: 150,
      flax: 72,
      ash: 40,
      'iron ore': 40,
      'wolf skin': 18,
      onyx: 21,
      'deer skin': 28,
      'deer parts': 10,
    };

    steps.forEach(step => {
      if (step.startsWith('Collect')) {
        const [amount, resource] = step.split(' ')[1].split('x');
        if (resource in resourceCounts) {
          resourceCounts[resource] += parseInt(amount, 10);
        }
      }
    });

    return resourceCounts;
  };

  const handleCheck = (index) => {
    setChecked([...checked.slice(0, index), !checked[index], ...checked.slice(index + 1)]);
  }

  return (
    <div className='as-bg'>
      <h1 className='as-title'>Action Sequence Until Boss Fight</h1>

      <div className='resource-totals'>
        {Object.entries(getTotals()).map(([resource, total]) => (
          <p key={resource}>
            <span className='resource'>{resource}</span>: {total}
          </p>
        ))}
      </div>

      <ol className='display-window'>
        {steps.map((step, index) => (
          <li key={index} className='step-container'>
            <input 
              type="checkbox" 
              checked={checked[index]} 
              onChange={() => handleCheck(index)}
              className='checkbox'
            />
            <div 
              className={
                step.startsWith('Craft') 
                  ? 'step craft-color' 
                  : 'step collect-color'
              }
            >
              {index + 1}. {step}
            </div>
          </li>
        ))}
      </ol>

    </div>
  );
};

export default ActionSequence;
