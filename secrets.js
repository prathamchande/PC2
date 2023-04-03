// const API_KEY = process.env.MY_SECRET_NAME;
const MY_SECRET_NAME = "pc9029144111";
const API_KEY = process.env.MY_SECRET_NAME;
  onload();

    function onload() {
         console.log("API_KEY", API_KEY);
fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/prathamapi1-vnxon/endpoint/triviaQA?secret=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
  setAllDataKey = data;

          console.log("apik", setAllDataKey);
  })
  .catch(error => {
   
          console.log("apinotwork");
  });
    }
