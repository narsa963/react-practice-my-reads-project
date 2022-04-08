import React, {Component} from "react";



class BooksList extends Component{

  
  render(){
      return(
        <div>
            <ol className= "books-grid">
           {this.props.books.map((book)=>(
            <li key={book.id}>
               <div>
                <img src={book.imageLinks.smallThumbnail} />
                <button className="book-shelf-change">
                    <select value={book.shelf} onChange={(e)=>this.props.updateBooks(e,book)}>
                        <option value='MoveTo'>moveto</option>
                        <option value='currentyReading'>currentyReading</option>
                        <option value='wantToRead'>wanttoRead</option>
                        <option value='read'>read</option>
                        <option value='None'>none</option>
                    </select>
                </button>
               </div> 
               <div className="list-book-content">
                   <p>{book.authors}</p>
                   <p className="book-title">{book.title}</p>
               </div>
               
            </li>
           ))}
           </ol>
        </div>
      )
  }
}
export default BooksList;