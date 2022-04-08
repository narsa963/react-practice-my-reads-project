import React, {Component} from "react";
import BooksList from "./BooksList";
import SearchPage from "./SearchPage";



class Home extends Component {
render(){
    const currentyReading = this.props.books.filter(book => book.shelf === 'currentlyReading');
    const wanttoRead = this.props.books.filter(book =>book.shelf === 'wantToRead')
    const read =this.props.books.filter(book =>book.shelf === 'read')

    return(
     <div>
         <h1 className="top-heading">MyReads</h1>
         <div className="book-shelf">
             <h1>currentlyReading</h1>
             <BooksList books={currentyReading} />

         </div>
         <div>
             <h1>Want to Read</h1>
             <BooksList books={wanttoRead} />
         </div>
         <div>
             <h1>Read</h1>
             <BooksList books={read} />
         </div>
         <button className="open-search">
             <a href="search">search</a>

         </button>
     </div>
     
    )
}
}
export default Home;