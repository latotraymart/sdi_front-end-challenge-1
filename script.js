const authorsData = [
    {
      "id": 1,
      "name": "Darwin Tumaneng",
      "role": "Logistics Digitalization Services Unit Representative",
      "place": "Metro Manila, Philippines",
      "avatar_url": "tmsph-logo.jpg"
    },
    {
      "id": 2,
      "name": "Miguel Tianzon",
      "role": "Car Rental Business Representative",
      "place": "Metro Manila, Philippines",
      "avatar_url": "tmsph-logo.jpg"
    }
  ];
  
  const newsData = [
    {
      "id": 1,
      "author_id": 1,
      "title": "Toyota Mobility Solutions PH empowers seafood wholesaler Mida Food with digital logistics platform",
      "body": "Logistics Platform addresses limitations in Mida Food's delivery operations",
      "image_url": "tmsph-ls-midafood.jpeg",
      "created_at": "2023-01-13 12:30:00"
    },
    {
      "id": 2,
      "author_id": 2,
      "title": "TMSPH launches Toyota RentαCar",
      "body": "Toyota Mobility Solutions Philippines, Inc. (TMSPH) marked another milestone in its first year of operations with the introduction of its new and exciting car rental service, the Toyota RentαCar. This service provides affordable and secure transportation through its convenient and flexible car rental options – both for short-term and long-term use.",
      "image_url": "tmsph-launches-toyota-rentacar.webp",
      "created_at": "2023-05-17 22:29:10"
    },
    {
      "id": 3,
      "author_id": 1,
      "title": "Toyota Motor Philippines partners with Lalamove Automotive",
      "body": "Leading mobility company Toyota Motor Philippines (TMP) has partnered with leading logistics provider Lalamove through its auto brand, Lalamove Automotive, with the introduction of the commercial vehicle Toyota Lite Ace as a transport partner. Aspiring and existing Lalamove operators are now able to purchase the Lite Ace Panel Van variant through this partnership, under Lalamove Automotive's Vehicle Ownership Program.",
      "image_url": "tmp-lalamove-partnership.webp",
      "created_at": "2023-07-05 02:15:01"
    }
  ];

  function displayAuthors() {
    const jsonOutput = document.getElementById('json-output');
    jsonOutput.textContent = JSON.stringify(authorsData, null, 2); 
  }
  
  function displayNews() {
    const jsonOutput = document.getElementById('json-output1');
    jsonOutput.textContent = JSON.stringify(newsData, null, 2); 
  }
  
  
  document.getElementById('authors-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    displayAuthors(); 
  });
  
  
  document.getElementById('news-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    displayNews(); 
  });

  function downloadResources() {
    const zipFileUrl = 'Downloads/resources.zip'; 
    
    const link = document.createElement('a');
    link.href = zipFileUrl;
    link.download = 'resources.zip';
    link.click();
}
document.getElementById('resources-link').addEventListener('click', function(event) {
    event.preventDefault();
    downloadResources();
});


  
  