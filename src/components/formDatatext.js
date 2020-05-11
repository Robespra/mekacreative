
if (typeof window !== `undefined`) {
window.onload=function(){
  const sendButton = document.getElementById('send-button')
  const formDataToJson = formData => {
    const entries = formData.entries();
    const dataObj = Array.from(entries).reduce( (data, [key, value]) => {
      data[key] = value;
      if (key === 'email') {
        data._replyTo = value;
      }
      return data;
    }, {});
    return JSON.stringify(dataObj);
  };

  const postToFormspree = formData => fetch('https://formspree.io/mnbblykm', {
    method: 'POST',
    body: formDataToJson(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(r => r.json());


  var submit = document.getElementById('contactForm');
  if(submit)
  {
      submit.addEventListener('submit', function (e) {

        e.preventDefault();
    
        sendButton.value = 'Sending...';
    
        const formData = new FormData(this);
    
        postToFormspree(formData).then(response => {
            sendButton.value = 'Thank you!';
            this.reset();
    
        });
      });
  }
  

}
}
