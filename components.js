const clock=document.getElementById('index_clock')
const battery=document.getElementById('index_battery')
const charge=document.getElementById('index_chargeNeeded')
const message_count=document.getElementById('nav_new_msg')
const individual_msg_count=document.getElementById('chat_msg_count')
const individual_msg_time=document.getElementById('chat_msg_time')
const KEY_HIDDEN="hidden"
const KEY_LOW="low_battery"

function newMsgCount(){
	const new_num=Math.floor(Math.random()*10)
	if(new_num>0){
		message_count.innerText=new_num
		individual_msg_count.innerText=new_num
		individual_msg_time.innerText=clock.innerText
	}else{
		message_count.classList.add(KEY_HIDDEN)
		individual_msg_time.classList.add(KEY_HIDDEN)
		individual_msg_count.classList.add(KEY_HIDDEN)
	}
}
function OneMinTimer() {
	const date=new Date()
	const currentHr=String(date.getHours()).padStart(2,'0')
	const currentMin=String(date.getMinutes()).padStart(2,'0')	
	clock.innerText=`${currentHr}:${currentMin}`
	updateBatteryPercentage()
}
function resetBatteryDisplay(){
	charge.classList.add(KEY_HIDDEN)
	battery.classList.remove(KEY_LOW)	
}
function updateBatteryPercentage(){
	var currentPercentage=parseInt(battery.innerText.replace('%',""))
	if (currentPercentage===1) {
		currentPercentage=100
		resetBatteryDisplay()
	}else{
		currentPercentage=currentPercentage-1
		if(currentPercentage<50){
			charge.classList.remove(KEY_HIDDEN)
			battery.classList.add(KEY_LOW)
		}else{
			resetBatteryDisplay()
		}
	}
	battery.innerText=`${currentPercentage}%`
}
OneMinTimer()
setInterval(OneMinTimer,60000)

newMsgCount()