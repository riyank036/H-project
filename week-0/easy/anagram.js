function isAnagram (str){
  const normalValue = str.toLowerCase();
   if (normalValue === normalValue.split('').reverse('').join('') && normalValue !== '') {
    return true;
   } else {
    return false;
   }  
  }
  
  console.log(isAnagram("Riyankknayirs"));
  console.log(isAnagram("Riyanyir"));
  console.log(isAnagram(""));