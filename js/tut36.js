console.log("This is tutorial 32-solution")



class library {
   constructor(bookList) {
       this.bookList = bookList;
       this.issuedBooks ={};
   }
   getBookList(){
    this.bookList.forEach(element => {
        console.log(element);
    });
   }

   issueBook(bookname,user){
      
       if (this.issuedBooks[bookname] == undefined){
        
       this.issuedBooks[bookname] = user;
       }
       else{
           console.log("this book is already issued");
       }
       

   }

   returnBook(bookname){
    delete this.issuedBooks[bookname];
   }
}