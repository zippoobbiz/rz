import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Developing Secure Software',
      description: '',
      iconClass: 'fa-code',
    },
    {
      heading: 'React: Testing and Debugging',
      description: '',
      iconClass: 'fa-lock',
    },
    {
      heading: 'Scrum Master Certified',
      description: 'SCRUMstudy - Accreditation Body for Scrum and Agile;Download Free Scrum Body of Knowledge(381 pages). Issued date and, if applicable, expiration date of the certification or license. Issued Nov 2018. Credential ID 743580',
      iconClass: 'fa-cog',
    },
    {
      heading: 'Scrum Fundamentals Certified',
      description: 'SCRUMstudy - Accreditation Body for Scrum and Agile;Download Free Scrum Body of Knowledge(381 pages) Issued date and, if applicable, expiration date of the certification or license. Credential ID 741584',
      iconClass: 'fa-desktop',
    },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
