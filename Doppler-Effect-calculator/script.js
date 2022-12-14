// calculate using f = f0(v + vr)/(v + vs)
function GetObserverFrequency () {
  let f0, v, vs, vr;
  f0 = document.querySelector("#input-f₀").value;
  v = document.querySelector("#input-v").value;
  vs = document.querySelector("#input-vs").value;
  vr = document.querySelector("#input-vr").value;

  let ObservedFrequency = ((v + vr) / (v + vs)) * f0;

  document.querySelector("#outputFrequency").textContent = ObservedFrequency;
};


document.querySelector("#buttonGo").addEventListener("click", GetObserverFrequency);