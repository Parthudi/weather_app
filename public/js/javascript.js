
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-1') 
const messagetwo = document.querySelector('#message-2')
const messagethree = document.querySelector('#message-3')

                            //  submit is name of the event
weatherform.addEventListener('submit', (event) => {
  event.preventDefault()   //page will not get refreshed

  const location = search.value

  messageone.textContent = 'Loading...'
  
  if(!location)
    {
         return messageone.textContent ='please enter location'
        
    }
    
  fetch('/weather?address=' +location).then((response) => {

    response.json().then((data) => {

            if(data.error)
              {
                 return  messageone.textContent = 'Enable to find location try another location'
              }

                messageone.textContent = 'FORECAST: ' + data.forecast 
                messagetwo.textContent = 'LOCATION: ' + data.location
                messagethree.textContent = 'TEMPRATURE' + data.temp
    })
})
})