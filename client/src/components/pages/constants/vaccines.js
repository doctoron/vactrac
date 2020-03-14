import React from 'react'

const listedVaccines = (props) => {

  const list = [
    {
      name: 'Influenza inactivate (IIV) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '1 dose annually',
    },
    {
      name: 'Influenza recombinant (RIV) ',
      needed: true, age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '1 dose annually',
    },
    {
      name: 'Tetanus, diptheria, pertussis (TDAP) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '1 dose Tdap, the Td booster every 10yrs',
    },
    {
      name: 'Measles, mumps, rubella (MMR) ',
      needed: true,
      age: 65,
      pregnancy: true,
      cd4below200: true,
      dose: '1 or 2 doses depending on indication (if born in 1957 or later)',
    },
    {
      name: 'Varicella (VAR) ',
      needed: true,
      age: 40,
      pregnancy: true,
      cd4below200: true,
      dose: '2 doses (if born in 1980 or later',
    },
    {
      name: 'Zoster (RZV (preferred) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
    },
    {
      name: 'Zoster live (ZVL)',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
    },
    {
      name: 'Human papillomavirus (HPV) ',
      needed: true,
      age: 21,
      pregnancy: true,
      cd4below200: true,
      dose: '2-3 doses depending on age at initial vaccination',
    },
    {
      name: 'Human papillomavirus (HPV) ',
      needed: true,
      age: 30,
      pregnancy: true,
      cd4below200: true,
      dose: '2-3 doses depending on age at initial vaccination',
    },
    {
      name: 'Pneumococcal conjugte (PCV13) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '1 dose',
    },
    {
      name: 'Pneumococcal polysaccharide (PPSV23) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '1 dose',
    },
    {
      name: 'Hepatitis A (HepA) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '2 or 3 doses depending on vaccine',
    },
    {
      name: 'Hepatitis B (HepB) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '2 or 3 doses depending on vaccine',
    },
    {
      name: 'Meningococcal A, C, W, Y (MenACWY) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '1 or 2 doses depending on indication',
    },
    {
      name: 'Meningococcal B (MenB) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '2 or 3 doses depending on indication',
    },
    {
      name: 'Haemophilus influenzae type b (Hib) ',
      needed: true,
      age: 125,
      pregnancy: true,
      cd4below200: true,
      dose: '1 or 3 doses depending on indication',
      riskfactors: true,
    }
  ];

  // { vaccinename: 'zosterLive', gender: 'both', hiv: 'true', date: 50 }

  return (
    <div>
      <h5>List of Vaccines</h5>
    </div>
  )
}

export default ListedVaccines;