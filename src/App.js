import React, { Component } from "react";
import './index';
import Home from "./Home";
import * as BooksAPI from "./utils/BooksAPI";
import {Route ,Routes} from "react-router-dom"
import BooksList from "./BooksList";
import SearchPage from "./SearchPage";




class App extends Component{
  
  state={
    books:[]
  }
  
  componentDidMount(){
    BooksAPI.getAll().then(books =>{
      this.setState({books})
    })
  }

  updateBooks=(e,book)=>{
    let newBook1 =Object.assign({}, book);
    newBook1.shelf=e.target.value;
    BooksAPI.update(book,e.target.value).then(()=>{
        this.setState((state) =>(
            {books:state.books.filter((b)=>b.id!==book.id ).concat(newBook1)}
        ));
    });
}
  render(){
     return (
       <div>
         <Routes>
           <Route 
            exact path='/'
            element={<Home books={this.state.books} />}
            />
           <Route 
             path='/search'
             element={<SearchPage 
              updateBooks={this.updateBooks}
             />}
           />
         </Routes>
         
       </div>
      
    )
  }
}

export default App;
