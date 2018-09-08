chrome.storage.local.get('skip_add_refresh_time', function(data){
  document.getElementById("refreshInterval").value=(data.skip_add_refresh_time)/1000;
});

chrome.storage.local.get('skip_add_active', function(data){
  document.getElementById("active").checked=(data.skip_add_active);
});


let updateButton = document.getElementById('updateButton');

updateButton.onclick = function(element){
  let timeInSecond = document.getElementById("refreshInterval").value;
  let is_active = document.getElementById("active").checked ? true : false;
  if(timeInSecond){
    let timeInMilli = parseInt(timeInSecond)*1000;
    chrome.storage.local.set({skip_add_refresh_time: timeInMilli});
  }

  chrome.storage.local.set({skip_add_active: is_active});


}