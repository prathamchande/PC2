const API_KEY = process.env.MY_SECRET_NAME;

fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/prathamapi1-vnxon/endpoint/triviaQA?secret=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
  setAllDataKey = data;

          console.log("apik", setAllDataKey);
  })
  .catch(error => {
   
          console.log("apinotwork");
  });
