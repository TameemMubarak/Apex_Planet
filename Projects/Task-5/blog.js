// // const blogInput=document.getElementById('blogHead');
// // const blogContent=document.getElementById('blogContent');
// // const blogImage=document.getElementById('blogImage');
// // const blogList=document.getElementById('blogList');
// function loadTasks() {
//     const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
//     blogList.innerHTML ='';
//     blogs.forEach((blog, index) => {
//       const li = document.createElement('li');
//       li.innerHTML = `${blog} <button onclick="deleteTask(${index})">Delete</button>`;
//       blogList.appendChild(li);
//     });
//   }
  
// function addBlog(){
//     const blog=blogHead.value.trim();
//     if(!blog) return;
//     const blogs=JSON.parse(localStorage.getItem('blogs')) || [];
//     blogs.push(blog);
//     localStorage.setItem('blogs', JSON.stringify(blogs));
//     blogInput.value ='';
//     loadTasks();
// }

 //loadTasks();

 const blogForm = document.getElementById('blogData');
 const blogList = document.getElementById('blogList');
 const userData=JSON.parse(localStorage.getItem('userData'));
  
 function loadBlogs() {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  blogList.innerHTML = '';
  blogs.forEach(blog => {
    const div = document.createElement('div');
    div.className = 'blog-card';
    div.innerHTML = `
      <h4>${blog.blogTitle}</h4>
      <p>${blog.blogContent}</p>
      <h6>  -----${blog.blogAuthor}</h6>
      <div class="blog-preview">
        ${blog.blogImages.map(img => `<img src="${img}" class="img-fluid" width="200" />`).join('')}
      </div>
    `;
    blogList.appendChild(div);
  });
}
 
 blogForm.addEventListener('submit', function (e) {
   e.preventDefault();
 
   const blogHead = document.getElementById('title').value.trim();
   const blogContent = document.getElementById('content').value.trim();
   const images = document.getElementById('image').files;
   
 
   const imageArray = [];
   let imagesProcessed = 0;
 
   if (images.length !== null) {
     saveBlog(blogHead, blogContent, [],userData.userName);
     console.log(images.length);
   }
   else{
   for (let i = 0; i < images.length; i++) {
     const reader = new FileReader();
     reader.onload = function (event) {
       imageArray.push(event.target.result);
       imagesProcessed++;
       saveBlog(blogHead, blogContent, imageArray,userData.userName);
     };
     reader.readAsDataURL(images[i]);
   }
  }
 
   blogForm.reset();
 });
 
 function saveBlog(title, content, imageArray,author) {
   const blogDetail = {
     blogTitle: title,
     blogContent: content,
     blogImages: imageArray,
     blogAuthor:author
   };
 
   const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
   blogs.push(blogDetail);
   localStorage.setItem('blogs', JSON.stringify(blogs));
   loadBlogs();
 }

 loadBlogs();
 //window.addEventListener('DOMContentLoaded', loadBlogs);
 