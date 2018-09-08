var myint;
function run_script(){
	chrome.storage.local.get('skip_add_refresh_time', function(data){
		// console.log("i am set as " + data.skip_add_refresh_time);
		if(data.skip_add_refresh_time){
			myint = setInterval(skip_add, data.skip_add_refresh_time);
			chrome.storage.local.set({'intervalId': myint});
		}else{
			console.log("undefined time");
		}
		
	});
};


var appendElem = '<button class="videoAdUiSkipButton videoAdUiAction videoAdUiFixedPaddingSkipButton"><div class="videoAdUiSkipButtonExperimentalText videoAdUiFixedPaddingSkipButtonText">Skip Ad</div><div class="videoAdUiExperimentalSkipIcon videoAdUiFixedPaddingSkipButtonIcon"></div></button>';
function skip_add(){
	var currentdate = new Date();
	console.log("running at "+ currentdate.getMinutes()+ ":" + currentdate.getSeconds());
	ele = document.getElementsByClassName("videoAdUiSkipButton");
	if(ele && ele[0]){
		console.log("skip button found");
		ele[0].click();
	}
};

function clear_interval(run){
	chrome.storage.local.get('intervalId', function(data){
		clearInterval(data.intervalId);
	});
	if(run){
		run_script();	
	}
	
}

chrome.storage.local.get('skip_add_active', function(data){
	if(data.skip_add_active){
		run_script();
	}
});
