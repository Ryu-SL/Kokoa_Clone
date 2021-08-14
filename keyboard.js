const chat_inputbox=document.getElementById('conversation_text_input')
const chat_keyboard=document.getElementById('keyboard')
//const KEY_HIDDEN="hidden"


function eventSubmint(event){
	event.preventDefault()
	chat_keyboard.classList.add(KEY_HIDDEN)
}
function eventClick(event){
	chat_keyboard.classList.remove(KEY_HIDDEN)
}

chat_inputbox.addEventListener('click',eventClick)
chat_inputbox.addEventListener('submit',eventSubmint)