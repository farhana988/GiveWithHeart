
function fundCollection(id1, id2, id3) {
  const totalamount = parseFloat(document.getElementById(id1).innerText);
  const donating = parseFloat(document.getElementById(id2).value.trim());
  const balance = parseFloat(document.getElementById(id3).innerText);
 
  if (isNaN(donating) || donating <= 0) {
    alert("Please enter a valid donation amount.");
    document.getElementById(id2).value = "";
    return;
  }
  let total = totalamount + donating;
  if (balance < donating) {
    alert("eto tk nai");
    document.getElementById(id2).value = "";
    return;
  }

  let remaining = balance - donating;

  document.getElementById(id1).innerText = total;
  document.getElementById(id3).innerText = remaining;
  document.getElementById(id2).value = "";
  return { total, remaining };
}


// Donate for Flood at Noakhali, Bangladesh
document.getElementById("noakhali-donate").addEventListener("click", function (event) {
  event.preventDefault();

  const result = fundCollection("noakhali-total", "noakhali-donation-amount", "total-balance");
  console.log(result); 
});

// Donate for Flood Relief in Feni,Bangladesh
document.getElementById("feni-donate").addEventListener("click", function (event) {
    event.preventDefault();
  
    const result = fundCollection("feni-total", "feni-donation-amount", "total-balance");
    console.log(result); 
  });


  
// Aid for Injured in the Quota Movement

  document.getElementById("quota-donate").addEventListener("click", function (event) {
    event.preventDefault();
  
    const result = fundCollection("quota-total", "quota-donation-amount", "total-balance");
    console.log(result); 
  });