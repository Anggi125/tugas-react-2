
import CardList from "./CardList";
import {MessageCircleHeart } from"lucide-react";
import { BadgeInfo } from "lucide-react";
import { MessageSquarePlus } from "lucide-react";


export default function Card(){

    
    const datas=[
        {id : 1 ,
        image: "/gusion.jpg", 
        age: 26, name: "Gusion" , 
        born:"Land Of Down" ,
        addres: "Desa Mage" ,
        hobby :"Mage"},
        
        {id : 2 ,
            image: "/hayabusa.jpg", 
            age: 36, 
            name: "Hayabusa" , 
            born:"Land Of Down" ,
            addres: "Desa ninja" ,
            hobby :"Clone"},
        
        
        {id : 3 
            ,image: "/lancelot.jpg"
            , age: 29, name: "Lancelot" 
            , born:"Land Of Down" 
            ,addres: "Kerajaan Alabasra" 
            ,hobby :"Sword"}
    ]
    const showGreat=(player)=>{
        alert("selamat datang : "+player.name);

    }


    const showInfo=(player)=>{
        alert("nama :"+player.name+"\nborn : "+player.born +"\nage :"+player.age +"\naddres :" +player.addres +"\nHobby :"+player.hobby)
        
    }
    const showKomen =()=>{
        const userInput=window.prompt("Masukan Sesuatu :");
        if (userInput !== null) {
            alert(`Anda memasukkan: ${userInput}`);
          }
        else{
            alert("kolom komentar tidak di isi");
        }
    }
   

    return(
        <>

        <div className="box-besar"> 
          {
            datas.map((x)=>(
                <div className="bingkai">
                    <CardList key={x.id} userProps={x}/>
                   
                    <div className="buttonn">

                    <button onClick={()=>showGreat(x)}><MessageCircleHeart/></button>
                    <button onClick={()=>showInfo(x)}><BadgeInfo/></button>
                    <button onClick={()=>showKomen(x)}><MessageSquarePlus/></button>
                    </div>
                    </div>
                
                
            ))
          }
        </div>
        </>
    )
}