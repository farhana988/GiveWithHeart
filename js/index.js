function fundCollection(id1, id2, id3) {
  const totalamount = parseFloat(document.getElementById(id1).innerText);
  const donating = parseFloat(document.getElementById(id2).value);
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

  // history

  function donationHis(id, donating) {
    const his = document.createElement("div");
   
    const date = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    const formattedDate = date.toLocaleString("en-US", options);
 
    his.innerHTML = `
        <div class="p-8 m-3 my-6 container mx-auto  border-gray-200 border-2 rounded-2xl">
            <h2 class="font-bold text-2xl text-black mb-3">
            ${donating} Taka is Donated for ${id}</h2>
              <p>Date ${formattedDate} (Bangladesh Standard Time)</p>
        </div>
    `;
    document.getElementById("transaction").appendChild(his);
  }

  if (id2 === "noakhali-donation-amount") {
    donationHis("Flood at Noakhali, Bangladesh", donating);

  } else if (id2 === "feni-donation-amount") {
    donationHis("Flood Relief in Feni,Bangladesh", donating);
  }
  else {
    donationHis("Aid for Injured in the Quota Movement, Bangladesh", donating);
  }

  return { total, remaining };
}

// Donate for Flood at Noakhali, Bangladesh
document
  .getElementById("noakhali-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const result = fundCollection(
      "noakhali-total",
      "noakhali-donation-amount",
      "total-balance"
    );
    console.log(result);
  });

// Donate for Flood Relief in Feni,Bangladesh
document
  .getElementById("feni-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const result = fundCollection(
      "feni-total",
      "feni-donation-amount",
      "total-balance"
    );
    console.log(result);
  });

// Aid for Injured in the Quota Movement

document
  .getElementById("quota-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const result = fundCollection(
      "quota-total",
      "quota-donation-amount",
      "total-balance"
    );
    console.log(result);
  });

//   toggle function

function toggle(id) {
  document.getElementById("donation-page").classList.add("hidden");
  document.getElementById("history-page").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");

  // btn color
  document.getElementById("donation-toggle").classList.remove("bg-primary");
  document.getElementById("history-toggle").classList.remove("bg-primary");

  if (id === "donation-page") {
    document.getElementById("donation-toggle").classList.add("bg-primary");
  } else {
    document.getElementById("history-toggle").classList.add("bg-primary");
  }
}

document
  .getElementById("donation-toggle")
  .addEventListener("click", function () {
    toggle("donation-page");
  });

document
  .getElementById("history-toggle")
  .addEventListener("click", function () {
    toggle("history-page");
  });

// history page

// const his = document.createElement('div');
// his.classList.add ('bg-yellow-300');
// his.innerHTML= `
// <h1 class="text-lg lg:text-2xl font-bold text-black">
// <p> ${total} money </p>

// `
// document.getElementById('transaction').appendChild(his)

// if(id2=='noakhali-donation-amount'){
//     const his = document.createElement('div');
//     his.classList.add ('bg-yellow-300');
//     his.innerHTML= `

//     <div class="p-12 m-3 container mx-auto border-yellow-600 border-solid border-2">
//       <h2 class="font-bold text-2xl text-black">rrrr</h2>
//       <p>  ${donating} for noakhali</p>
//     </div>

//     `
//     document.getElementById('transaction').appendChild(his)
// }
// else if(id2=='feni-donation-amount'){
//     const his = document.createElement('div');
//     his.classList.add ('bg-yellow-300');
//     his.innerHTML= `

//     <div class="p-12 m-3 container mx-auto border-yellow-600 border-solid border-2">
//       <h2 class="font-bold text-2xl text-black">rrrr</h2>
//       <p>  ${donating} for fffeni</p>
//     </div>

//     `
//     document.getElementById('transaction').appendChild(his)
// }
