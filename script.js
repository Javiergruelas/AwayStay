function filterByCity(targetCity, listingCityArray) {
    // blank array to retain index values 
    const cities = [];
    //for loop to loop through the listings to check for matching cities.
   for (let i = 0; i < listingCityArray.length ; i++) {
     //conditional using toUpperCase to allow for searches that arent case sensitive  
      if (listingCityArray[i].toUpperCase() == targetCity.toUpperCase()){
      // push the index to the empty array 
       cities.push(i);
      }
     }
    return cities;
  }
  filterByCityTest();
  
  function filterByPrice(minPrice, maxPrice, listingPriceArray) {
    let price = [];
    for(let i = 0; i < listingPriceArray.length ; i++){
      if(listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice){
        price.push(i);
      }
    }
     return price;
    }
  
  filterByPriceTest();
  function filterByTypes(targetTypes, listingTypeArray) {
    // This code is here to show you what the UI 
    // looks like and will put every listing onto 
    // the page no matter what you search for. 
    // Remove/comment out this code and replace 
    // it with your filtering code.
    return [...listingTypeArray.keys()];
  }
  // filterByTypesTest();
  