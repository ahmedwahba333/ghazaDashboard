function showDropDays() {
  document
    .getElementById("dropdown-contentDays")
    .classList.toggle("dropdown-contentShow");
}
function showDropRate() {
  document
    .getElementById("dropdown-contentRate")
    .classList.toggle("dropdown-contentShow");
}

let officesArr = [];

function addOffice() {
  let offices = {};
  let officeNameDom = document.getElementById("officeName");
  let govermentDom = document.getElementById("goverment");
  let phoneNumberDom = document.getElementById("phoneNumber");
  let LongtiudDom = document.getElementById("Longtiud");
  let coverageKmDom = document.getElementById("coverageKm");
  let timeFromDom = document.getElementById("timeFrom");
  let timeToDom = document.getElementById("timeTo");
  let rateDom = document.querySelector('input[name="rate"]:checked');
  let LatuitdDom = document.getElementById("Latuitd");
  let carsNumberDom = document.getElementById("carsNumber");
  let coverDom = document.getElementById("cover");
  let daysFromDom = document.querySelector('input[name="daysFrom"]:checked');
  let daysToDom = document.querySelector('input[name="daysTo"]:checked');
  if (officeNameDom.value.length >= 1) {
    offices.officeName = officeNameDom.value;
    document.getElementById("officeNameError").innerText = "";
  } else {
    document.getElementById("officeNameError").innerText =
      "من فضلك ادخل اسم المكتب";
  }

  if (govermentDom.value.length >= 1) {
    offices.goverment = govermentDom.value;
    document.getElementById("govermentError").innerText = "";
  } else {
    document.getElementById("govermentError").innerText =
      "من فضلك ادخل اسم المحافظة";
  }

  if (phoneNumberDom.value.length >= 1) {
    offices.phoneNumber = phoneNumberDom.value;
    document.getElementById("phoneNumberError").innerText = "";
  } else {
    document.getElementById("phoneNumberError").innerText =
      "من فضلك ادخل رقم الهاتف";
  }

  if (LongtiudDom.value.length >= 1) {
    offices.Longtiud = LongtiudDom.value;
    document.getElementById("LongtiudError").innerText = "";
  } else {
    document.getElementById("LongtiudError").innerText =
      "من فضلك ادخل خطوط الطول";
  }

  if (coverageKmDom.value.length >= 1) {
    offices.coverageKm = coverageKmDom.value;
    document.getElementById("coverageKmError").innerText = "";
  } else {
    document.getElementById("coverageKmError").innerText =
      "من فضلك ادخل المساحة";
  }

  if (timeFrom.value.length >= 1 && timeTo.value.length >= 1) {
    offices.timeFrom = timeFromDom.value;
    offices.timeTo = timeToDom.value;
    document.getElementById("dropdown-contentTimeError").innerText = "";
  } else {
    document.getElementById("dropdown-contentTimeError").innerText =
      "من فضلك اختر ساعات العمل";
  }

  if (rateDom != null) {
    offices.rate = rateDom.value;
    document.getElementById("dropdown-contentRateError").innerText = "";
  } else {
    document.getElementById("dropdown-contentRateError").innerText =
      "من فضلك ادخل التقييم";
  }

  if (LatuitdDom.value.length >= 1) {
    offices.Latuitd = LatuitdDom.value;
    document.getElementById("LatuitdError").innerText = "";
  } else {
    document.getElementById("LatuitdError").innerText =
      "من فضلك ادخل خطوط العرض";
  }
  if (carsNumberDom.value.length >= 1) {
    offices.carsNumber = carsNumberDom.value;
    document.getElementById("carsNumberError").innerText = "";
  } else {
    document.getElementById("carsNumberError").innerText =
      "من فضلك ادخل عدد السيارات";
  }

  if (coverDom.value != "نوع التغطية") {
    offices.cover = coverDom.value;
    document.getElementById("coverError").innerText = "";
  } else {
    document.getElementById("coverError").innerText =
      "من فضلك اختر نوع التغطية";
  }

  if (daysFromDom != null && daysToDom != null) {
    offices.daysFrom = daysFromDom.value;
    offices.daysTo = daysToDom.value;
    document.getElementById("dropdown-contentDaysError").innerText = "";
  } else {
    document.getElementById("dropdown-contentDaysError").innerText =
      "من فضلك اختر ايام العمل";
  }

  if (
    officeNameDom.value.length >= 1 &&
    govermentDom.value.length >= 1 &&
    phoneNumberDom.value.length >= 1 &&
    LongtiudDom.value.length >= 1 &&
    coverageKmDom.value.length >= 1 &&
    timeFrom.value.length >= 1 &&
    timeTo.value.length >= 1 &&
    rateDom != null &&
    LatuitdDom.value.length >= 1 &&
    carsNumberDom.value.length >= 1 &&
    coverDom.value != "نوع التغطية" &&
    daysFromDom != null &&
    daysToDom != null
  ) {
      if (finalResultArr == null) {
        officesArr.push(offices); 
        localStorage.setItem("finalResult", JSON.stringify(officesArr));
      }else{
        for (let i = 0; i < finalResultArr; i++) {
          officesArr.push(offices); 
          
        }
      }
      localStorage.setItem("finalResult", JSON.stringify(officesArr));      
    alert("تم اضافة المكتب");
    location.reload();
  }
}


let finalResultArr = JSON.parse(localStorage.getItem("finalResult"));
let resultShow = document.getElementById("myResult");

if (finalResultArr != null) {
  inResult();
  outResult();
  inOutResult();
  coverAvg();
  rateAvg();
  daysAvg();
  carsSum();
  coverOffices();
  officeQuality();
  officeNum();
}

function showDropTime() {
  document
    .getElementById("dropdown-contentTime")
    .classList.toggle("dropdown-contentShow");
}



var map = L.map("map").setView([31.772237034523194, 35.212629171606544], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// L.marker([31.772237034523194, 35.212629171606544]).addTo(map);

function inResult() {
  if (finalResultArr != null) {
    let inCount = 0;
    for (let i = 0; i < finalResultArr.length; i++) {
      if (finalResultArr[i].cover == "in") {
        inCount++;
      }
    }

    return (document.getElementById(
      "inResult"
    ).innerHTML = `<h3>${inCount}</h3>`);
  }
}

function outResult() {
  if (finalResultArr != null) {
    let inCount = 0;
    for (let i = 0; i < finalResultArr.length; i++) {
      if (finalResultArr[i].cover == "out") {
        inCount++;
      }
    }
    return (document.getElementById(
      "outResult"
    ).innerHTML = `<h3>${inCount}</h3>`);
  }
}

function inOutResult() {
  if (finalResultArr != null) {
    let inCount = 0;
    for (let i = 0; i < finalResultArr.length; i++) {
      if (finalResultArr[i].cover == "out") {
        inCount++;
      }
    }
    return (document.getElementById(
      "inOutResult"
    ).innerHTML = `<h3>${inCount}</h3>`);
  }
}

function coverAvg() {
  if (finalResultArr != null) {
    let coverageKmArr = [];
    for (let i = 0; i < finalResultArr.length; i++) {
      coverageKmArr.push(finalResultArr[i].coverageKm);
    }
    let sum = 0;
    for (let x = 0; x < coverageKmArr.length; x++) {
      sum = eval(sum + parseFloat(coverageKmArr[x]));
    }
    let avg = eval(sum / coverageKmArr.length).toFixed(2);
    return (document.getElementById(
      "coverAvg"
    ).innerHTML = `<h3>${avg} كيلومتر</h3>`);
  }
}

function rateAvg() {
  if (finalResultArr != null) {
    let rateArr = [];
    for (let i = 0; i < finalResultArr.length; i++) {
      rateArr.push(finalResultArr[i].rate);
    }
    let sum = 0;
    for (let x = 0; x < rateArr.length; x++) {
      sum = eval(sum + parseFloat(rateArr[x]));
    }
    let avg = eval(sum / rateArr.length).toFixed(2);
    return (document.getElementById("rateAvg").innerHTML = `<h3>${avg}</h3>`);
  }
}

function daysAvg() {
  if (finalResultArr != null) {
    let daysArr = [];
    for (let i = 0; i < finalResultArr.length; i++) {
      if (finalResultArr[i].daysFrom >= finalResultArr[i].daysTo) {
        daysArr.push(finalResultArr[i].daysTo + 7 - finalResultArr[i].daysFrom);
      } else {
        daysArr.push(finalResultArr[i].daysTo - finalResultArr[i].daysFrom);
      }
    }
    let sum = 0;
    for (let x = 0; x < daysArr.length; x++) {
      sum = eval(sum + parseFloat(daysArr[x]));
    }
    let avg = eval(sum / finalResultArr.length).toFixed(2);
    return (document.getElementById("daysAvg").innerHTML = `<h3>${avg}</h3>`);
  }
}

function carsSum() {
  if (finalResultArr != null) {
    let carsCount = 0;
    for (let i = 0; i < finalResultArr.length; i++) {
      carsCount += parseInt(finalResultArr[i].carsNumber);
    }
    return (document.getElementById(
      "carsSum"
    ).innerHTML = `<h3>${carsCount} سيارة</h3>`);
  }
}

function coverOffices() {
  if (finalResultArr != null) {
    let longArr = [];
    let latArr = [];
    let resultlonglat = [];
    for (let z = 0; z < finalResultArr.length; z++) {
      longArr.push(finalResultArr[z].Longtiud);
      latArr.push(finalResultArr[z].Latuitd);
    }

    for (let i = 0; i < finalResultArr.length - 1; i++) {
      for (let x = i + 1; x < finalResultArr.length; x++) {
        lon1 = (longArr[x] * Math.PI) / 180;
        lon2 = (longArr[i] * Math.PI) / 180;
        lat1 = (latArr[x] * Math.PI) / 180;
        lat2 = (latArr[i] * Math.PI) / 180;
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a =
          Math.pow(Math.sin(dlat / 2), 2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

        let c = 2 * Math.asin(Math.sqrt(a));
        let r = 6371;
        resultlonglat.push(c * r);
      }
    }
    let sum = 0;
    for (let x = 0; x < resultlonglat.length; x++) {
      sum = eval(sum + parseFloat(resultlonglat[x]));
    }
    let avg = eval(sum / resultlonglat.length).toFixed(2);
    if (avg == "NaN") {
      return (document.getElementById(
        "coverOffices"
      ).innerHTML = `<h3>0 كيلومتر</h3>`);
    } else {
      return (document.getElementById(
        "coverOffices"
      ).innerHTML = `<h3>${avg} كيلومتر</h3>`);
    }
  }
}

function officeQuality() {
  if (finalResultArr != null) {
    let rateArr = [];
    for (let i = 0; i < finalResultArr.length; i++) {
      rateArr.push(finalResultArr[i].rate);
    }
    let sum = 0;

    for (let x = 0; x < rateArr.length; x++) {
      sum = eval(sum + parseFloat(rateArr[x]));
    }
    let avg = eval(sum / rateArr.length).toFixed(2);
    let sumAll = finalResultArr.length * 5;
    let finalResult = eval(
      ((avg * finalResultArr.length) / sumAll) * 100
    ).toFixed(2);
    return (document.getElementById(
      "officeQuality"
    ).innerHTML = `<h3>${finalResult} %</h3>`);
  }
}

function officeNum() {
  if (finalResultArr != null) {
    let officesName = [];
    for (let z = 0; z < finalResultArr.length; z++) {
      officesName.push(finalResultArr[z].goverment);
    }
    let myuniqArr = eliminateDuplicates(officesName);
    resultShow.innerHTML = "";
    for (let i = 0; i < Object.values(myuniqArr).length; i++) {
      document.getElementById("officeNum").innerHTML += `<h3>محافظة ${
        Object.keys(myuniqArr)[i]
      } بها ${Object.values(myuniqArr)[i]}</h3>`;
    }
  }
}
function eliminateDuplicates(myArray) {
  const elementCounts = {};
  myArray.forEach((element) => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  });
  return elementCounts;
}



function inResultShow() {
  if (finalResultArr != null) {
    for (
      let x = 0;
      x < document.getElementsByClassName("leaflet-marker-icon").length;
      x++
    ) {
      if (document.getElementsByClassName("leaflet-popup") != undefined) {
        document.getElementsByClassName("leaflet-popup")[0].style.display =
          "none";
      }
      document.getElementsByClassName("leaflet-marker-icon")[x].style.display =
        "none";
    }
    for (let i = 0; i < finalResultArr.length; i++) {
      if (finalResultArr[i].cover == "in") {
        L.marker([finalResultArr[i].Longtiud, finalResultArr[i].Latuitd])
          .addTo(map)
          .bindPopup(finalResultArr[i].officeName)
          .openPopup();
      }
    }
  }
  // document.getElementById("inResult").classList.toggle("dispNone");
}

function outResultShow() {
  if (finalResultArr != null) {
    for (
      let x = 0;
      x < document.getElementsByClassName("leaflet-marker-icon").length;
      x++
    ) {
      if (document.getElementsByClassName("leaflet-popup") != undefined) {
        document.getElementsByClassName("leaflet-popup")[0].style.display =
          "none";
      }
      document.getElementsByClassName("leaflet-marker-icon")[x].style.display =
        "none";
    }
    for (let i = 0; i < finalResultArr.length; i++) {
      if (finalResultArr[i].cover == "out") {
        L.marker([finalResultArr[i].Longtiud, finalResultArr[i].Latuitd])
          .addTo(map)
          .bindPopup(finalResultArr[i].officeName)
          .openPopup();
      }
    }
  }
  // document.getElementById("outResult").classList.toggle("dispNone");
}
function inOutResultShow() {
  if (finalResultArr != null) {
    for (
      let x = 0;
      x < document.getElementsByClassName("leaflet-marker-icon").length;
      x++
    ) {
      if (document.getElementsByClassName("leaflet-popup") != undefined) {
        document.getElementsByClassName("leaflet-popup")[0].style.display =
          "none";
      }
      document.getElementsByClassName("leaflet-marker-icon")[x].style.display =
        "none";
    }
    for (let i = 0; i < finalResultArr.length; i++) {
      if (finalResultArr[i].cover == "inOut") {
        L.marker([finalResultArr[i].Longtiud, finalResultArr[i].Latuitd])
          .addTo(map)
          .bindPopup(finalResultArr[i].officeName)
          .openPopup();
      }
    }
  }
  // document.getElementById("inOutResult").classList.toggle("dispNone");
}
function coverAvgShow() {
  document.getElementById("coverAvg").classList.toggle("dispNone");
}
function rateAvgShow() {
  document.getElementById("rateAvg").classList.toggle("dispNone");
}
function daysAvgShow() {
  document.getElementById("daysAvg").classList.toggle("dispNone");
}
function carsSumShow() {
  document.getElementById("carsSum").classList.toggle("dispNone");
}
function coverOfficesShow() {
  document.getElementById("coverOffices").classList.toggle("dispNone");
}
function officeQualityShow() {
  document.getElementById("officeQuality").classList.toggle("dispNone");
}
function officeNumShow() {
  document.getElementById("officeNum").classList.toggle("dispNone");
}

function removeOffice() {
  if (finalResultArr != null) {
    localStorage.clear();
    location.reload();
  }
}
