const Section2=[
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
 
  {
    label: 'Region',
    type: 'text',
    value: 'region'
  },
  {
    label: 'City',
    type: 'text',
    value: 'city'
  },
  {
    label: 'State',
    type: 'text',
    value: 'state',
  },
  {
    label: 'Zone',
    type: 'select',
    value: 'zone',
    options: [ 'Zone 1', 'Zone 2']
  },
  {
    label: 'Woreda',
    type: 'text',
    value: 'woreda'
  },
  {
    label: 'Kebele',
    type: 'text',
    value: 'kebele'
  },
  {
    label: 'Street',
    type: 'text',
    value: 'street'
  },
  {
    label: 'House number',
    type: 'text',
    value: 'houseNumber'
  },
]




export const questions = [



  {
  
      section: 0,
      items:[
        {
          label: 'For Expired Passport Renewal | Information',
          type: 'heading'
        },
        {
          label: '',
          type: 'heading'
        },
        {
          label: '',
          type: 'heading'
        },
        {
          label: '',
          type: 'heading'
        },
        
        {
          label: 'In order to use this service you will need...',
          type: 'information4'
        },
        {
          label: '',
          type: 'heading'
        },
        {
          label: '',
          type: 'heading'
        },
        {
          label: '',
          type: 'heading'
        },
        {
          label: 'Are you sure? go back and Check once please',
          type: 'information3'
        },
      ]
    
     
    },
    {
    section: 1,
    items: [
      {
        label: 'For Expired Passport Renewal | Personal Details',
        type: 'heading',
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
      {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Gender',
        type: 'select',
        value: 'gender',
        options: [ 'Male', 'Female']
      },
      {
        label: 'place of birth',
        type: 'text',
        value: 'placeOfBirth'
      },
      {
        label: 'Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'Martial Status',
        type: 'select',
        value: 'martialStatus',
        options: [ 'Married','Single']
      },
      {
        label: 'Country Code',
        type: 'text',
        value: 'countryCode'
      }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'For Expired Passport Renewal | Address',
        type: 'heading'
      },
     ...Section2
     
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'For Expired Passport Renewal | Passport Information',
        type: 'heading',
        value: 'For Expired Passport Renewal | Passport Information'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'Passport page number',
        type: 'number',
        value: 'passportPageNumber'
      },
      {
        label: 'Old passport number',
        type: 'text',
        value: 'oldPassportNumber'
      },
      {
        label: 'Old passport issue date',
        type: 'date',
        value: 'oldPassportIssueDate',
      },
      {
        label: 'Old passport expiration date',
        type: 'date',
        value: 'oldPassportExpirationDate',
      },
      {
        label: 'Old passport photo',
        type: 'file',
        value: 'oldPassportPhoto'
      },
      {
        label: 'Recent passport size photo',
        type: 'file',
        value: 'recentPassportSizePhoto'
        
      }
    ]
  },
  {
    section: 4,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
 
]

export const lostorstolen = [
  {
  
    section: 0,
    items:[
      {
        label: 'Renew Passport - Lost or Stolen I Don’t Have The Photo | Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'you must have a certified police report from your local police station that contains your lost/ stolen passport number',
        type: 'information3'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'You also must upload court authorization',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'Renew Passport - Lost or Stolen I Don’t Have The Photo | Personal Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      {
        label: 'ስም',
        type: 'text',
        value: 'firstNameAmharic'
      },
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      {
        label: "የአባት ስም",
        type: 'text',
        value: 'middleNameAmharic'
      },
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
      {
        label: "የአያት ስም",
        type: 'text',
        value: 'lastNameAmharic'
      },
      {
        label: 'Email',
        type: 'email',
        value: 'email'
      },
      {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Gender',
        type: 'select',
        value: 'gender',
        options: [ 'Male', 'Female']
      },
      {
        label: 'place of birth',
        type: 'text',
        value: 'placeOfBirth'
      },
      {
        label: 'Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'Occupation',
        type: 'text',
        value: 'occupation'
      },
  
      {
        label: 'Martial Status',
        type: 'select',
        value: 'martialStatus',
        options: [ 'Married','Single','Divorced']
      },
      {
        label: 'Hair Color',
        type: 'text',
        value: 'hairColor'
      },
      {
        label: 'Eye Color',
        type: 'text',
        value: 'eyeColor'
      },
      {
        label: 'Birth Certificate Unique ID',
        type: 'text',
        value: 'birthCertificateUniqueID'
      },
      {
        label: 'Height (cm)',
        type: 'number',
        value: 'height'
      },
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Renew Passport - Lost or Stolen I Don’t Have The Photo | Address',
        type: 'heading'
      },
      ...Section2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'Renew Passport - Lost or Stolen I Don’t Have The Photo | Passport Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'Passport page number',
        type: 'number',
        value: 'passportPageNumber'
      },
      {
        label: 'Old passport number',
        type: 'text',
        value: 'oldPassportNumber'
      },
      {
        label: 'Old passport issue date',
        type: 'date',
        value: 'oldPassportIssueDate',
      },
      {
        label: 'Old passport expiration date',
        type: 'date',
        value: 'oldPassportExpirationDate',
      },
      {
        label: 'Old passport photo',
        type: 'file',
        value: 'oldPassportPhoto'
      },
      {
        label: 'Recent passport size photo',
        type: 'file',
        value: 'recentPassportSizePhoto'
      }
    ]
  },
  {
    section: 4,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
 
]
export const lostorstolenwithphoto = [
  {
  
    section: 0,
    items:[
      {
        label: 'Renew Passport - Lost or Stolen I Have The Photo | Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'you must have a certified police report from your local police station that contains your lost/ stolen passport number',
        type: 'information3'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'You also must upload court authorization',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'Renew Passport - Lost or Stolen I Have The Photo | Personal Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      {
        label: 'ስም',
        type: 'text',
        value: 'firstNameAmharic'
      },
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      {
        label: "የአባት ስም",
        type: 'text',
        value: 'middleNameAmharic'
      },
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
      {
        label: "የአያት ስም",
        type: 'text',
        value: 'lastNameAmharic'
      },
      {
        label: 'Email',
        type: 'email',
        value: 'email'
      },
      {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Gender',
        type: 'select',
        value: 'gender',
        options: [ 'Male', 'Female']
      },
      {
        label: 'place of birth',
        type: 'text',
        value: 'placeOfBirth'
      },
      {
        label: 'Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'Occupation',
        type: 'text',
        value: 'occupation'
      },
  
      {
        label: 'Martial Status',
        type: 'select',
        value: 'martialStatus',
        options: [ 'Married','Single','Divorced']
      },
      {
        label: 'Hair Color',
        type: 'text',
        value: 'hairColor'
      },
      {
        label: 'Eye Color',
        type: 'text',
        value: 'eyeColor'
      },
      {
        label: 'Birth Certificate Unique ID',
        type: 'text',
        value: 'birthCertificateUniqueID'
      },
      {
        label: 'Height (cm)',
        type: 'number',
        value: 'height'
      },
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Renew Passport - Lost or Stolen I Have The Photo | Address',
        type: 'heading'
      },
      ...Section2 
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'Renew Passport - Lost or Stolen I  Have The Photo | Passport Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'Passport page number',
        type: 'number',
        value: 'passportPageNumber'
      },
      {
        label: 'Old passport number',
        type: 'text',
        value: 'oldPassportNumber'
      },
      {
        label: 'Old passport issue date',
        type: 'date',
        value: 'oldPassportIssueDate',
      },
      {
        label: 'Old passport expiration date',
        type: 'date',
        value: 'oldPassportExpirationDate',
      },
      {
        label: 'Old passport photo',
        type: 'file',
        value: 'oldPassportPhoto'
      },
      {
        label: 'Recent passport size photo',
        type: 'file',
        value: 'recentPassportSizePhoto'
      }
    ]
  },
  {
    section: 4,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
 
]


export const passportcorrection = [
  {
  
    section: 0,
    items:[
      {
        label: 'Passport Correction | Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'you must be able to have judge jurisdiction paper',
        type: 'information3'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'Copy of exisiting passport',
        type: 'information3'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'You also must upload court authorization',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'Renew Passport - Existing Passport Information| In English',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'place of birth',
        type: 'text',
        value: 'placeOfBirth'
      },
      {
        label: 'Martial Status',
        type: 'select',
        value: 'martialStatus',
        options: [ 'Married','Single','Divorced']
      },
      {
        label: 'Gender',
        type: 'select',
        value: 'gender',
        options: [ 'Male', 'Female']
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'የበፊት መረጃ | በአማርኛ',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      

      {
        label: 'ስም',
        type: 'text',
        value: 'firstNameAmharic'
      },
      {
        label: "የአባት ስም",
        type: 'text',
        value: 'middleNameAmharic'
      },
      {
        label: "የአያት ስም",
        type: 'text',
        value: 'lastNameAmharic'
      },
      {
        label: 'የትውልድ ቀን',
        type: 'date',
        value: 'dateOfBirtAmharic'
      },
      {
        label: 'የትውልድ ቦታ',
        type: 'text',
        value: 'placeOfBirthAmharic'
      },
      
     
      
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Renew Passport - Passport Correction | Address',
        type: 'heading'
      },
      ...Section2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'Renew Passport - Passport Correction | passport info',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'Passport page number',
        type: 'number',
        value: 'passportPageNumber'
      },
      {
        label: 'Old passport number',
        type: 'text',
        value: 'oldPassportNumber'
      },
      {
        label: 'Old passport issue date',
        type: 'date',
        value: 'oldPassportIssueDate',
      },
      {
        label: 'Old passport expiration date',
        type: 'date',
        value: 'oldPassportExpirationDate',
      },
      {
        label: 'Old passport photo',
        type: 'file',
        value: 'oldPassportPhoto'
      },
      {
        label: 'Recent passport size photo',
        type: 'file',
        value: 'recentPassportSizePhoto'
      }
    ]
  },
 
]


export const willExpireQuestions = [
  {
  
    section: 0,
    items:[
      {
        label: 'Renew Passport - Will Expire | Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'It must expire in less than 6 months or less',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'Renew Passport - Will Expire | Personal Details',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
      {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Gender',
        type: 'select',
        value: 'gender',
        options: [ 'Male', 'Female']
      },
      {
        label: 'place of birth',
        type: 'text',
        value: 'placeOfBirth'
      },
      {
        label: 'Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'Martial Status',
        type: 'select',
        value: 'martialStatus',
        options: [ 'Married','Single']
      },
      {
        label: 'Country Code',
        type: 'text',
        value: 'countryCode'
      }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Renew Passport - Will Expire | Address',
        type: 'heading'
      },
      ...Section2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'Renew Passport - Will Expire | Passport Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'Passport page number',
        type: 'number',
        value: 'passportPageNumber'
      },
      {
        label: 'Old passport number',
        type: 'text',
        value: 'oldPassportNumber'
      },
      {
        label: 'Old passport issue date',
        type: 'date',
        value: 'oldPassportIssueDate',
      },
      {
        label: 'Old passport expiration date',
        type: 'date',
        value: 'oldPassportExpirationDate',
      },
      {
        label: 'Old passport photo',
        type: 'file',
        value: 'oldPassportPhoto'
      },
      {
        label: 'Recent passport size photo',
        type: 'file',
        value: 'recentPassportSizePhoto'
      }
    ]
  },
 
]

export const pageRunOut = [
  {
  
    section: 0,
    items:[
      {
        label: 'Renew Passport - For Passports That Ran Out Of Pages | Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'You must have 6 blank pages or less',
        type: 'information3'
      },
    ]
  
   
  },
  
  {
    section: 1,
    items: [
      {
        label: 'Renew Passport - For Passports That Ran Out Of Pages | Personal Details',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
      {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Gender',
        type: 'select',
        value: 'gender',
        options: [ 'Male', 'Female']
      },
      {
        label: 'place of birth',
        type: 'text',
        value: 'placeOfBirth'
      },
      {
        label: 'Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'Martial Status',
        type: 'select',
        value: 'martialStatus',
        options: [ 'Married','Single']
      },
      {
        label: 'Country Code',
        type: 'text',
        value: 'countryCode'
      }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Renew Passport - For Passports That Ran Out Of Pages | Address',
        type: 'heading'
      },
      ...Section2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'Renew Passport - For Passports That Ran Out Of Pages | Passport Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'Passport page number',
        type: 'number',
        value: 'passportPageNumber'
      },
      {
        label: 'Old passport number',
        type: 'text',
        value: 'oldPassportNumber'
      },
      {
        label: 'Old passport issue date',
        type: 'date',
        value: 'oldPassportIssueDate',
      },
      {
        label: 'Old passport expiration date',
        type: 'date',
        value: 'oldPassportExpirationDate',
      },
      {
        label: 'Old passport photo',
        type: 'file',
        value: 'oldPassportPhoto'
      },
      {
        label: 'Recent passport size photo',
        type: 'file',
        value: 'recentPassportSizePhoto'
      }
    ]
  },
 
]

export const damagedQuestions = [
  {
  
    section: 0,
    items:[
      {
        label: 'Renew Passport - For Passports That Got Damaged | Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'upload a picture of the worn out or damaged passport',
        type: 'information3'
      },
      
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'Renew Passport - For Passports That Got Damaged | Personal Details',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
      {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Gender',
        type: 'select',
        value: 'gender',
        options: [ 'Male', 'Female']
      },
      {
        label: 'place of birth',
        type: 'text',
        value: 'placeOfBirth'
      },
      {
        label: 'Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'Martial Status',
        type: 'select',
        value: 'martialStatus',
        options: [ 'Married','Single']
      },
      {
        label: 'Country Code',
        type: 'text',
        value: 'countryCode'
        }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Renew Passport - For Passports That Got Damaged | Address',
        type: 'heading'
      },
      ...Section2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'Renew Passport - For Passports That Got Damaged | Passport Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'Passport page number',
        type: 'number',
        value: 'passportPageNumber'
      },
      {
        label: 'Old passport number',
        type: 'text',
        value: 'oldPassportNumber'
      },
      {
        label: 'Old passport issue date',
        type: 'date',
        value: 'oldPassportIssueDate',
      },
      {
        label: 'Old passport expiration date',
        type: 'date',
        value: 'oldPassportExpirationDate',
      },
      {
        label: 'Old passport photo',
        type: 'file',
        value: 'oldPassportPhoto'
      },
      {
        label: 'Recent passport size photo',
        type: 'file',
        value: 'recentPassportSizePhoto'
      }
    ]
  },
 
]







/////////////////////////////////////////////////////////////ORIGIN id/////////////////////////////////////////////////
export const NewOriginId = [
  {
    section: 1,
    items: [
      {
        label: 'New Origin Id | Personal Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
      {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Gender',
        type: 'select',
        value: 'gender',
        options: [ 'Male', 'Female']
      },
      {
        label: 'Email',
        type: 'email',
        value: 'email'
      },
      
      {
        label: 'Former Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'Present Nationality',
        type: 'text',
        value: 'Present Nationality'
         }
    ]
  },
    
    {
      section: 2,
    items: [
      {
        label: 'New Origin ID | Parental Details For Your Mother',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
       {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'place of birth',
        type: 'text',
        value: 'placeOfBirth'
      },
      {
        label: 'State/Zone/Region',
        type: 'text',
        value: 'state'
      },
      {
        label: 'Country',
        type: 'text',
        value: 'Country'
      },
     
      
     
      // {
      //   label: 'D',
      //   type: 'heading'
      // },
      // {
      //   label: 'D',
      //   type: 'heading'
      // },
      // {
      //   label: 'D',
      //   type: 'heading'
      // },
      //   {
      //   label: 'D',
      //   type: 'heading'
      // },
      
     
          {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
       {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'place of birth',
        type: 'text',
        value: 'placeOfBirth'
      },
      {
        label: 'State/Zone/Region',
        type: 'text',
        value: 'state'
      },
      {
        label: 'Country',
        type: 'text',
        value: 'Country'
      }
     
      
    ]
  },
   
  {
    section: 3,
    items: [
      {
        label: 'New Origin ID | Address',
        type: 'heading'
      },
      ...Section2
    ]
  },
  {
    section: 4,
    items: [
      {
        label: 'New Origin ID | Passport Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'passport number',
        type: 'text',
        value: 'PassportNumber'
      },
      
      {
        label: 'passport issue date',
        type: 'date',
        value: 'PassportIssueDate',
      },
      {
        label: 'passport expiration date',
        type: 'date',
        value: 'PassportExpirationDate',
      },
      
    ]
  },
  {
    section: 5,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
 
]


export const ReNewOriginId = [
  {
    section: 1,
    items: [
      {
        label: 'Renew Origin Id | Personal Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'First Name/ Given name',
        type: 'text',
        value: 'firstName'
      },
      
      {
        label: "Middle Name/ Father’s name",
        type: 'text',
        value: 'middleName'
      },
      
      {
        label: "Last Name/ Grandfather's name",
        type: 'text',
        value: 'lastName'
      },
      {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone'
      },
      
      {
        label: 'Date of birth',
        type: 'date',
        value: 'dateOfBirth'
      },
      {
        label: 'Gender',
        type: 'select',
        value: 'gender',
        options: [ 'Male', 'Female']
      },
      {
        label: 'Email',
        type: 'email',
        value: 'email'
      },
      
      {
        label: 'Former Nationality',
        type: 'text',
        value: 'Nationality'
      },
      {
        label: 'Present Nationality',
        type: 'text',
        value: 'Present Nationality'
         }
    ]
  },
    
    
  {
    section: 2,
    items: [
      {
        label: 'Renew Origin ID | Address',
        type: 'heading'
      },
      ...Section2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'Renew Origin ID | Passport Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'passport number',
        type: 'text',
        value: 'PassportNumber'
      },
      
      {
        label: 'passport issue date',
        type: 'date',
        value: 'PassportIssueDate',
      },
      {
        label: 'passport expiration date',
        type: 'date',
        value: 'PassportExpirationDate',
      },
       {
        label: '',
        type: 'heading'
      },
       {
        label: '',
        type: 'heading'
      },
       {
        label: '',
        type: 'heading'
      },
       {
        label: '',
        type: 'heading'
      },
        {
        label: '',
        type: 'heading'
      },
      
      
      {
        label: 'passport number',
        type: 'text',
        value: 'PassportNumber'
      },
      
      {
        label: 'passport issue date',
        type: 'date',
        value: 'PassportIssueDate',
      },
      {
        label: 'passport expiration date',
        type: 'date',
        value: 'PassportExpirationDate',
      },
      
    ]
  },
  {
   section: 4,
    items: [
      {
        label: 'Renew Origin ID | Attachments',
        type: 'heading'
      },
        {
        label: '',
        type: 'heading'
      },
       {
        label: '',
        type: 'heading'
      },
       {
        label: '',
        type: 'heading'
      },
      {
        label: 'Expired Origin Id Image',
        type: 'file',
        value: 'expimage',
      },
      {
        label: 'Recent passport size photo',
        type: 'file',
        value: 'photo',
      },
      {
        label: 'Any Other document',
        type: 'file',
        value: 'other',
      },
    ]
    },  
    {
    section: 5,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
  
]


/////////////////////////////////////////////////////////////Visa///////////////////////////////////////////////////////////

const VisaSection0=[
  
  {
    label: 'Arrival Date',
    type: 'date',
    value: 'arrivalDate'
  },
  {
    label: 'Departure Country',
    type: 'select',
    value: 'departureCountry',
    options: [ 'USA', 'UK']

  },
  {
    label: 'Departure City',
    type: 'text',
    value: 'departureCity',
  },
  {
    label: 'Airline',
    type: 'text',
    value: 'airline'
  },
  {
    label: 'Flight Number',
    type: 'text',
    value: 'flightNo'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
 ////////title///////////////////
 
]
const VisaSection1=[
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
 
  {
    label: 'Accommodation Type',
    type: 'select',
    value: 'accType',
    options: [ 'type 2', 'type 1']
  },
  {
    label: 'Accommodation Name',
    type: 'text',
    value: 'accName'
  },
  {
    label: 'Accommodation City',
    type: 'text',
    value: 'accCity'
  },
  {
    label: 'Accommodation Street Address',
    type: 'text',
    value: 'accStreetAddress'
  },
  {
    label: 'Accommodation Phone Number',
    type: 'phone',
    value: 'accPhone'
  },
]

const VisaSection2=[
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: '',
    type: 'heading'
  },
  {
    label: 'First Name/ Given name',
    type: 'text',
    value: 'firstName'
  },
  {
    label: 'ስም',
    type: 'text',
    value: 'firstNameAmharic'
  },
  {
    label: "Middle Name/ Father’s name",
    type: 'text',
    value: 'middleName'
  },
  {
    label: "የአባት ስም",
    type: 'text',
    value: 'middleNameAmharic'
  },
  {
    label: "Last Name/ Grandfather's name",
    type: 'text',
    value: 'lastName'
  },
  {
    label: "የአያት ስም",
    type: 'text',
    value: 'lastNameAmharic'
  },
  {
    label: 'Date of birth',
    type: 'date',
    value: 'dateOfBirth'
  },
 
  {
    label: 'Gender',
    type: 'select',
    value: 'gender',
    options: [ 'Male', 'Female']
  },
  {
    label: 'Occupation',
    type: 'text',
    value: 'occupation'
  },
  {
    label: 'Email Address',
    type: 'email',
    value: 'email'
  },
  {
    label: 'Phone Number',
    type: 'phone',
    value: 'phone'
  },
  {
    label: 'Citzenship',
    type: 'text',
    value: 'citzenship'
  },
  {
    label: 'Address City',
    type: 'text',
    value: 'addressCity'
  },
  {
    label: 'Steet Address',
    type: 'text',
    value: 'streetAddress'
  },
  {
    label: 'Place Of Birth',
    type: 'text',
    value: 'placeOfBirth'
  },
  {
    label: 'Country Of Birth',
    type: 'text',
    value: 'countryOfBirth'
  },
 ]

const VisaSection3=[
  {
    label: '',
    type: 'heading',
    value: ''
  },  
  {
    label: '',
    type: 'heading',
    value: ''
  },
  {
    label: '',
    type: 'heading',
    value: ''
  },
  {
    label: 'Passport Type',
    type: 'text',
    value: 'passType'
  },
  {
    label: 'Passport Number',
    type: 'text',
    value: 'passNum'
  },
  {
    label: 'Passport Issue Date',
    type: 'date',
    value: 'passIssDate'
  },
  {
    label: 'Passport Expire Date',
    type: 'date',
    value: 'passExpDate'
  },
  {
    label: 'Passport Issuing Country',
    type: 'date',
    value: 'passIssCountry'
  },
  {
    label: 'Passport Issuing Authority',
    type: 'date',
    value: 'passIssAuth'
  },
]


export const TouristVisaQuestions = [
  {
  
    section: 0,
    items:[
      {
        label: 'Tourist Visa -| Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'It must expire in less than 6 months or less',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'For Tourist Visa -| Personal Details',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      ...VisaSection0,
      {
        label: 'For Tourist Visa -| Personal Details',
        type: 'heading'
      },
      ...VisaSection1
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'For Tourist Visa | Address',
        type: 'heading'
      },
      ...VisaSection2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'For Tourist Visa | Passport Information',
        type: 'heading'
      },
      ...VisaSection3
    ]
  },
  {
    section: 4,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
  
]
export const JournalistVisaQuestions = [
  {
  
    section: 0,
    items:[
      {
        label: 'Journalist Visa -| Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'It must expire in less than 6 months or less',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'For Journalist Visa -| Personal Details',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      ...VisaSection0,
      {
        label: 'For Journalist Visa -| Personal Details',
        type: 'heading'
      },
      ...VisaSection1
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'For Journalist Visa | Address',
        type: 'heading'
      },
      ...VisaSection2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'For Journalist Visa | Passport Information',
        type: 'heading'
      },
      ...VisaSection3
    ]
  },
  {
    section: 4,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
 
]
export const InvestmentVisaQuestions = [
  {
  
    section: 0,
    items:[
      {
        label: 'Investment Visa -| Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'It must expire in less than 6 months or less',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'For Investment Visa -| Personal Details',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      ...VisaSection0,
      {
        label: 'For Investment Visa -| Personal Details',
        type: 'heading'
      },
      ...VisaSection1
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'For Investment Visa | Address',
        type: 'heading'
      },
      ...VisaSection2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'For Investment Visa | Passport Information',
        type: 'heading'
      },
      ...VisaSection3
    ]
  },
  {
    section: 4,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },

]
export const GIVQuestions = [
  {
  
    section: 0,
    items:[
      {
        label: 'GIV -| Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'It must expire in less than 6 months or less',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'GIV -| Personal Details',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      ...VisaSection0,
      {
        label: 'GIV -| Personal Details',
        type: 'heading'
      },
      ...VisaSection1
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'GIV | Address',
        type: 'heading'
      },
      ...VisaSection2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'GIV | Passport Information',
        type: 'heading'
      },
      ...VisaSection3
    ]
  },
  {
    section: 4,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
  
]
export const NGOWorkVisaQuestions = [
  {
  
    section: 0,
    items:[
      {
        label: 'NGO Work Visa -| Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'It must expire in less than 6 months or less',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'For NGO Work Visa -| Personal Details',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      ...VisaSection0,
      {
        label: 'For NGO Work Visa -| Personal Details',
        type: 'heading'
      },
      ...VisaSection1    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'For NGO Work Visa | Address',
        type: 'heading'
      },
      ...VisaSection2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'For NGO Work Visa | Passport Information',
        type: 'heading'
      },
      ...VisaSection3
    ]
  },
  {
    section: 4,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
 
]
export const ConferenceVisaQuestions = [
  {
  
    section: 0,
    items:[
      {
        label: 'Conference Visa -| Information',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      
      {
        label: 'In order to use this service you will need...',
        type: 'information4'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: 'It must expire in less than 6 months or less',
        type: 'information3'
      },
    ]
  
   
  },
  {
    section: 1,
    items: [
      {
        label: 'For Conference Visa -| Personal Details',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      {
        label: '',
        type: 'heading'
      },
      ...VisaSection0,
      {
        label: 'For Conference Visa -| Personal Details',
        type: 'heading'
      },
      ...VisaSection1
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'For Conference Visa | Address',
        type: 'heading'
      },
      ...VisaSection2
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'For Conference Visa | Passport Information',
        type: 'heading'
      },
      ...VisaSection3
    ]
  },
  {
    section: 4,
    items:[
      
      {
  label: "Record Video",
  type: "video",
  value: "video"
}
    ]
  
   
  },
]
