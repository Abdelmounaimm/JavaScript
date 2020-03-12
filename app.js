function addFavoriteBook(bookname){
    var favoriteBooks = ['the wolf', 'the prince','death note'];
      var books = favoriteBooks.includes('Great');
      if(books != true){
  
        favoriteBooks.push('Great');
      }else{
          console.log('is already existe')
      }
      function printfavoritebooks(){
          var num = favoriteBooks.length;
          console.log('livres'+' '+'favoris:' + num )
          for(let element of favoriteBooks){
              console.log(element)
          }
      }printfavoritebooks()
      
}
addFavoriteBook()
