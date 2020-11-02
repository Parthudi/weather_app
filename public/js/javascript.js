const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-1') 
const messagetwo = document.querySelector('#message-2')
const messagethree = document.querySelector('#message-3')
const messagefour = document.querySelector('#message-4')
const messagefive =  document.querySelector('#message-5')

                            //  submit is name of the event
weatherform.addEventListener('submit', (event) => {
  event.preventDefault()   //page will not get refreshed

  const location = search.value  //location which we write in input box

  messageone.textContent = 'Loading...'
  messagetwo.textContent = ' '
  messagethree.textContent = ' '
  messagefour.textContent = ' '
  messagefive.textContent = ' '

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

//below we are getting from app.js -> lalocode......
                messageone.textContent   = 'FORECAST: ' + data.forecast 
                messagetwo.textContent   = 'LOCATION: ' + data.location
                messagethree.textContent = 'TEMPRATURE: ' + data.temp+ 'degree'
                messagefour.textContent  =  'There is ' +data.precip+ '% chance of having rain '
                messagefive.textContent   = 'Humidity: ' +data.humidity
    })
})
})

