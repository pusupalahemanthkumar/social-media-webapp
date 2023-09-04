<template>
    <div class="story-add-container">
      <h3 class="title">Add Story</h3>
      <div class="form-group">
        <label>Upload Photo</label>
        <input type="file" @input="changeHandler"  />
      </div>
      <p>or</p>
      <div class="form-group">
        <label>Take Photo</label>
        <input type="file" />
      </div>
    </div>
    <div class="preview-container">
      <div class="preview-item" v-for="file in files" :key="file">
        <img
          :src="file"
        />
        <div class="delete-btn" @click="deleteHandler(file)">
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/waste.png"
            alt="waste"
          />
        </div>
      </div>
    </div>
    <button class="btn">Add</button>
  </template>
  
  <script>
  export default{
    data(){
       return {
        files : [],
       }

    },
    methods:{
        changeHandler(event){
            console.log(event);
            let data = event.target.files;
            if(data.length>0){
                let images = [];
                for(let i=0;i<data.length ; i++){
                    images.push(URL.createObjectURL(data[i]))
                }
                console.log(images);
                this.files.push(images);
            }
            console.log(this.files);

        },
        deleteHandler(file){
            let index = this.files.findIndex((d)=> d == file);
            this.files.splice(index,1);

        }

    }
      
  }
  
  </script>
  
  <style scoped>
  .story-add-container {
    margin-top: 2rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .story-add-container .title {
    text-align: center;
    color: #fff;
    margin-bottom: 2rem;
  }
  .story-add-container .form-group {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }
  .story-add-container .form-group label {
    margin-bottom: 0.5rem;
  }
  .story-add-container .form-group input {
    width: 90%;
  }
  .preview-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .preview-item {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-bottom: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .preview-item img,
  .delete-btn img {
    width: 100%;
    height: 90%;
    border-radius: 10px;
  }
  .delete-btn {
    width: 20px;
    height: 20px;
    margin-top: 0.5rem;
  }
  .btn{
    display: block;
    padding: 0.5rem 2rem;
    margin: 1rem auto;
    border-radius: 10px;
  }
  </style>
  