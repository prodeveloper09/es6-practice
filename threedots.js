 const ages = [12, 31, 72, 18, 19, 20,21];
 const ages2 = [25, 51, 54, 56, 54, 12];
 const ages3 = [50, 51, 54, 56, 54, 120];

//  const allAges = ages.concat(ages2).concat(600).concat(ages3);
 const allAges = [...ages, ...ages2, 600, ...ages3];
//  console.log(allAges);

 const business = 650;
 const minister = 450;
 const sochib = 250;

// const maximum = Math.max(business, minister, sochib);

 const takaPoisa = [650, 450, 250,682];
 const maximum = Math.max(...takaPoisa)
console.log(maximum);