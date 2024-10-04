import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './allReceipe.css';
import axios from 'axios';
function ReceipeAll()
{   
    const[search,setSearch]=useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetchRecipes();
      
  }, []);


    const fetchRecipes = async () => {
      try {
          //const userId = localStorage.getItem('userId');
          const response = await axios.get('http://localhost:5000/ty');
          setRecipes(response.data.recipes);
      } catch (error) {
          console.error('Error fetching recipes:', error);
      }
  };
    return(
        <div>
            <div className="nav">
      <div className="navBar">
        <ol>
          <div className="navBar-left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe">Receipees</Link></li>
          <li><Link to="/userRecipe">Add Your's</Link></li>   
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          </div>
          <div className="navBar-right">
              
                <li id="search"  ></li>
                
                 {/*<li><a href="www.google.com">Sign in</a></li>*/}
                 <button className="button1"><Link to="/recipe">
                  TRY RECEIPE
                  </Link>
                 </button>
                 <button className="button2"><Link to="/signup">
                  GET STARTED
                  </Link>
                 </button>
                 
          </div>
        </ol>
      </div>
      </div>
      <div className='bottom'>
            <div className='search'>
                    <input type="text" placeholder='Search Receipe' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <button className='button1' style={{width:"10%"}}>Find</button>
            </div>
            <div className="cont8" style={{marginTop:"1px"}}>
                      <img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-06/23/15/campaign_images/webdr07/26-traditional-indian-foods-that-will-change-your-1-7312-1403550756-15_big.jpg?resize=1200:*" alt="imgg" style={{width:"200px" ,height:"150px"}}/>
                      <p>IndianStyle</p>
                      <h3>PooriMasal</h3>
                      <h4>Cook time : 30 minutes</h4>
                      <h4 >Ingredients : </h4><br></br><p>1.Water<p></p>2.Salt<p></p>3.Wheat Flour<p></p>4.Refined Oil</p> 
                      <h4>Procedure:</h4>
                      <p>1.Make dough</p>
                      <p>2.Heat Oil </p>
                      <p>3.Make poori balls</p>
                      <p>4.Frying</p>
                      <br></br>
                      <br></br>
                      <p style={{color:"blue" , fontSize:"20px"}} className="link1"></p>

                      
                 </div>
                 <div className="cont8" >
                 <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/5-samosas-canva-phppf0Q4I" alt="imgg" style={{width:"200px" ,height:"150px"}}/>
                      <p>IndianStyle</p>
                      <h3>Samosa</h3>
                      <h4>Cook time : 30 minutes</h4>
                      <h4>Ingredients : </h4><br></br><p> 1.Flour</p><p>2.Oil</p><p>3.GreenChilli</p><p>4.Potato</p><p>5.Coriander</p>
                      <h4>Procedure:</h4>
                      <p>1.The spiced potato filling;</p>
                      <p>2.The Samosa dough;</p>
                      <p>3.Making the Samosa parcels</p>
                      <p>4.Frying</p>
                      <br></br>
                      <br></br>
                      <p style={{color:"blue" , fontSize:"20px"}} className="link1"></p>

                 </div>
                 <div>
                {recipes.map(recipe => (
                    <div className="cont8" key={recipe.id}>
                        <img src={`http://localhost:5000/uploads/${recipe.dishImage}`} alt={recipe.dishName} style={{ width: "200px", height: "150px" }} />
                        <p>{recipe.dishStyle}</p>
                        <h3>{recipe.dishName}</h3>
                        <h4>Cook time: {recipe.dishTime}</h4>
                        <h4>Ingredients:</h4>
                        <p>{recipe.dishIngredients}</p>
                        <h4>Procedure:</h4>
                        <p>{recipe.dishProcedure}</p>
                        <p style={{ color: "blue", fontSize: "20px" }} className="link1"></p>
                    </div>
                ))}
                </div>


      </div>
        </div>
    );
}
export default ReceipeAll;
