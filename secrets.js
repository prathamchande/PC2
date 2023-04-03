 const MY_SECRET_NAME = process.env.MY_SECRET_NAME;

  onload();

    function onload() {
     console.log(window.mySecret);

         console.log("MY_SECRET_NAME", MY_SECRET_NAME);
fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/prathamapi1-vnxon/endpoint/triviaQA?secret=${MY_SECRET_NAME}`)
  .then(response => response.json())
  .then(data => {
  setAllDataKey = data;

          console.log("apik", setAllDataKey);
  })
  .catch(error => {
   
          console.log("apinotwork");
  });
    }
