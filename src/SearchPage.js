import React, {Component} from "react";
import * as BooksAPI from "./utils/BooksAPI";
import {Link } from "react-router-dom";
import BoksList from "./BooksList";

class SearchPage extends Component{
    state={
        query:'',
        books:[]
    }
    updateQuery =(query) =>{
      
      this.setState({query: query.trim()})
      if(query === ''){
        this.setState({books:[]})
        return;
      }
      BooksAPI.search(query,10).then(books =>{
        if(books.length >0){
          this.setState({books})
        } else {
          this.setState({books:[]})
        }

      });
    }
    
    render(){
       
        return(
        <React.Fragment>
           <div className="search-books-bar"> 
           <Link className="close-search" to='/' ></Link>
             <input 
              type='text'
              placeholder="Search Book"
              value={this.state.query}
              onChange={(event)=> this.updateQuery(event.target.value)}

             />
            
           </div>
           {this.state.books && <BooksList  updateBooks={this.props.updateBooks} 
           books = {this.state.books} />}
        
           </React.Fragment>
        )
    }
    }
export default SearchPage;